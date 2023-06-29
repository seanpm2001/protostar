use std::any::Any;
use std::collections::hash_map::DefaultHasher;
use std::collections::HashMap;
use std::fs;
use std::hash::{Hash, Hasher};
use std::path::PathBuf;
use std::sync::Arc;

use anyhow::Result;
use blockifier::abi::abi_utils::selector_from_name;
use blockifier::block_context::BlockContext;
use blockifier::execution::contract_class::{
    ContractClass as BlockifierContractClass, ContractClassV1,
};
use blockifier::execution::entry_point::{CallEntryPoint, CallType};
use blockifier::execution::syscalls::CallContractRequest;
use blockifier::state::cached_state::CachedState;
use blockifier::state::state_api::StateReader;
use blockifier::test_utils::{invoke_tx, DictStateReader};
use blockifier::test_utils::{MAX_FEE, TEST_ACCOUNT_CONTRACT_ADDRESS};
use blockifier::transaction::account_transaction::AccountTransaction;
use blockifier::transaction::transaction_utils_for_protostar::declare_tx_default;
use blockifier::transaction::transactions::{DeclareTransaction, ExecutableTransaction};
use cairo_felt::Felt252;
use cairo_lang_casm::hints::ProtostarHint;
use cairo_lang_casm::hints::{Hint, StarknetHint};
use cairo_lang_casm::operand::ResOperand;
use cairo_lang_runner::short_string::as_cairo_short_string;
use cairo_lang_runner::{
    casm_run::{cell_ref_to_relocatable, extract_buffer, get_ptr, get_val},
    insert_value_to_cellref, CairoHintProcessor as OriginalCairoHintProcessor,
};
use cairo_lang_starknet::casm_contract_class::CasmContractClass;
use cairo_lang_starknet::contract_class::ContractClass;
use cairo_vm::hint_processor::hint_processor_definition::HintProcessor;
use cairo_vm::hint_processor::hint_processor_definition::HintReference;
use cairo_vm::serde::deserialize_program::ApTracking;
use cairo_vm::types::exec_scope::ExecutionScopes;
use cairo_vm::types::relocatable::Relocatable;
use cairo_vm::vm::errors::hint_errors::HintError;
use cairo_vm::vm::errors::vm_errors::VirtualMachineError;
use cairo_vm::vm::vm_core::VirtualMachine;
use num_traits::{Num, ToPrimitive};
use serde::Deserialize;
use starknet_api::core::{ClassHash, ContractAddress, EntryPointSelector, PatriciaKey};
use starknet_api::deprecated_contract_class::EntryPointType;
use starknet_api::hash::{StarkFelt, StarkHash};
use starknet_api::transaction::{
    Calldata, ContractAddressSalt, DeclareTransactionV0V1, Fee, InvokeTransaction,
    InvokeTransactionV1,
};
use starknet_api::{patricia_key, stark_felt};

pub struct CairoHintProcessor<'a> {
    pub original_cairo_hint_processor: OriginalCairoHintProcessor<'a>,
    pub blockifier_state: Option<CachedState<DictStateReader>>,
}

impl HintProcessor for CairoHintProcessor<'_> {
    fn execute_hint(
        &mut self,
        vm: &mut VirtualMachine,
        exec_scopes: &mut ExecutionScopes,
        hint_data: &Box<dyn Any>,
        constants: &HashMap<String, Felt252>,
    ) -> Result<(), HintError> {
        let maybe_extended_hint = hint_data.downcast_ref::<Hint>();
        let blockifier_state = self
            .blockifier_state
            .as_mut()
            .expect("blockifier state is needed for executing hints");
        if let Some(Hint::Protostar(hint)) = maybe_extended_hint {
            return execute_cheatcode_hint(vm, exec_scopes, hint, blockifier_state);
        }
        if let Some(Hint::Starknet(StarknetHint::SystemCall { system })) = maybe_extended_hint {
            return execute_syscall(system, vm, blockifier_state);
        }
        self.original_cairo_hint_processor
            .execute_hint(vm, exec_scopes, hint_data, constants)
    }

    /// Trait function to store hint in the hint processor by string.
    fn compile_hint(
        &self,
        hint_code: &str,
        _ap_tracking_data: &ApTracking,
        _reference_ids: &HashMap<String, usize>,
        _references: &HashMap<usize, HintReference>,
    ) -> Result<Box<dyn Any>, VirtualMachineError> {
        Ok(Box::new(
            self.original_cairo_hint_processor.string_to_hint[hint_code].clone(),
        ))
    }
}

#[allow(dead_code)]
#[derive(Deserialize)]
struct ScarbStarknetArtifacts {
    version: u32,
    contracts: Vec<ScarbStarknetContract>,
}

#[allow(dead_code)]
#[derive(Deserialize)]
struct ScarbStarknetContract {
    id: String,
    package_name: String,
    contract_name: String,
    artifacts: ScarbStarknetContractArtifact,
}

#[allow(dead_code)]
#[derive(Deserialize)]
struct ScarbStarknetContractArtifact {
    sierra: PathBuf,
    casm: Option<PathBuf>,
}

fn execute_syscall(
    system: &ResOperand,
    vm: &mut VirtualMachine,
    blockifier_state: &mut CachedState<DictStateReader>,
) -> Result<(), HintError> {
    let (cell, offset) = extract_buffer(system);
    let mut system_ptr = get_ptr(vm, cell, &offset)?;

    let selector = vm.get_integer(system_ptr).unwrap();
    // dbg!(&selector);
    let selector = selector.to_bytes_be();
    system_ptr += 1;

    let gas_counter = vm.get_integer(system_ptr).unwrap().to_usize().unwrap();
    system_ptr += 1;

    // Get
    // let x = vm.get_integer(system_ptr).unwrap().to_owned();
    let contract_address = vm.get_integer(system_ptr).unwrap().clone().into_owned();
    system_ptr += 1;

    let entry_point_selector = vm.get_integer(system_ptr).unwrap().into_owned();
    system_ptr += 1;

    let mut start = vm.get_relocatable(system_ptr).unwrap();
    system_ptr += 1;

    let end = vm.get_relocatable(system_ptr).unwrap();
    system_ptr += 1;

    let mut calldata = vec![];
    while start != end {
        let val = vm.get_integer(start).unwrap().into_owned();
        calldata.push(val);
        start.offset += 1;
    }

    // dbg!(&selector);
    // dbg!(&contract_address);
    // dbg!(&entry_point_selector);
    // dbg!(&calldata);

    let result = match std::str::from_utf8(&selector).unwrap() {
        "CallContract" => call_contract(
            &contract_address,
            &entry_point_selector,
            &calldata,
            blockifier_state,
        ),
        // TODO do not panic, return execution to base handler
        _ => panic!("Unknown selector for system call!"),
    }
    .expect("TODO: panic message");

    vm.insert_value(system_ptr, gas_counter).unwrap();
    system_ptr += 1;

    vm.insert_value(system_ptr, Felt252::from(0)).unwrap();
    system_ptr += 1;

    let mut ptr = vm.add_memory_segment();
    let start = ptr;

    for value in result {
        vm.insert_value(ptr, value).unwrap();
        ptr += 1;
    }

    let end = ptr;

    vm.insert_value(system_ptr, start).unwrap();
    system_ptr += 1;

    vm.insert_value(system_ptr, end).unwrap();
    system_ptr += 1;

    Ok(())
}

// This can mutate state, the name of the syscall is not very good
fn call_contract(
    contract_address: &Felt252,
    entry_point_selector: &Felt252,
    calldata: &[Felt252],
    blockifier_state: &mut CachedState<DictStateReader>,
) -> Result<Vec<Felt252>> {
    let request = CallContractRequest {
        contract_address: ContractAddress(
            PatriciaKey::try_from(StarkFelt::new(contract_address.to_be_bytes()).unwrap()).unwrap(),
        ),
        function_selector: EntryPointSelector(
            StarkHash::new(entry_point_selector.to_be_bytes()).unwrap(),
        ),
        calldata: Calldata(Arc::new(
            calldata
                .iter()
                .map(|data| StarkFelt::new(data.to_be_bytes()).unwrap())
                .collect(),
        )),
    };
    let account_address = ContractAddress(patricia_key!(TEST_ACCOUNT_CONTRACT_ADDRESS));
    let entry_point = CallEntryPoint {
        class_hash: None,
        code_address: Some(request.contract_address),
        entry_point_type: EntryPointType::External,
        entry_point_selector: request.function_selector,
        calldata: request.calldata,
        storage_address: request.contract_address,
        caller_address: account_address,
        call_type: CallType::Call,
    };
    let call_info = entry_point.execute_directly(blockifier_state).unwrap();

    let raw_return_data = &call_info.execution.retdata.0;
    assert!(!call_info.execution.failed,);

    let return_data = raw_return_data
        .iter()
        .map(|data| Ok(Felt252::from_bytes_be(data.bytes())))
        .collect();

    // dbg!(&return_data);
    return_data
}

#[allow(unused, clippy::too_many_lines)]
fn execute_cheatcode_hint(
    vm: &mut VirtualMachine,
    exec_scopes: &mut ExecutionScopes,
    hint: &ProtostarHint,
    blockifier_state: &mut CachedState<DictStateReader>,
) -> Result<(), HintError> {
    match hint {
        &ProtostarHint::StartRoll { .. } => todo!(),
        &ProtostarHint::StopRoll { .. } => todo!(),
        &ProtostarHint::StartWarp { .. } => todo!(),
        &ProtostarHint::StopWarp { .. } => todo!(),
        ProtostarHint::Declare {
            contract,
            result,
            err_code,
        } => {
            let contract_value = get_val(vm, contract)?;

            let contract_value_as_short_str = as_cairo_short_string(&contract_value)
                .expect("Converting contract name to short string failed");
            let current_dir = std::env::current_dir()
                .expect("Failed to get current directory")
                .join("target/dev");

            let mut paths = std::fs::read_dir(&current_dir)
                .expect("Failed to read ./target/dev, scarb build probably failed");

            let starknet_artifacts_entry = &paths
                .find_map(|path| match path {
                    Ok(path) => {
                        let name = path.file_name().into_string().ok()?;
                        name.contains("starknet_artifacts").then_some(path)
                    }
                    Err(_) => None,
                })
                .expect("Failed to find starknet_artifacts.json file");
            let starknet_artifacts = fs::read_to_string(starknet_artifacts_entry.path())
                .unwrap_or_else(|_| {
                    panic!(
                        "Failed to read {:?} contents",
                        starknet_artifacts_entry.file_name()
                    )
                });
            let starknet_artifacts: ScarbStarknetArtifacts =
                serde_json::from_str(starknet_artifacts.as_str()).unwrap_or_else(|_| {
                    panic!(
                        "Failed to parse {:?} contents",
                        starknet_artifacts_entry.file_name()
                    )
                });

            let sierra_path = starknet_artifacts.contracts.iter().find_map(|contract| {
                if contract.contract_name == contract_value_as_short_str {
                    return Some(contract.artifacts.sierra.clone());
                }
                None
            }).unwrap_or_else(|| panic!("Failed to find contract {contract_value_as_short_str} in starknet_artifacts.json"));
            let sierra_path = current_dir.join(sierra_path);

            let file = std::fs::File::open(&sierra_path)
                .unwrap_or_else(|_| panic!("Failed to open file at path = {:?}", &sierra_path));
            let sierra_contract_class: ContractClass = serde_json::from_reader(&file)
                .unwrap_or_else(|_| panic!("File to parse json from file = {file:?}"));

            let casm_contract_class =
                CasmContractClass::from_contract_class(sierra_contract_class, true)
                    .expect("sierra to casm failed");
            let casm_serialized = serde_json::to_string_pretty(&casm_contract_class)
                .expect("Failed to serialize contract to casm");

            let contract_class = ContractClassV1::try_from_json_string(&casm_serialized)
                .expect("Failed to read contract class from json");
            let contract_class = BlockifierContractClass::V1(contract_class);

            // TODO(#2134) replace this. Hash should be calculated by the blockifier in the correct manner. This is just a workaround.
            let mut hasher = DefaultHasher::new();
            casm_serialized.hash(&mut hasher);
            let class_hash = hasher.finish();
            let class_hash = ClassHash(stark_felt!(class_hash));

            let nonce = blockifier_state
                .get_nonce_at(ContractAddress(patricia_key!(
                    TEST_ACCOUNT_CONTRACT_ADDRESS
                )))
                .expect("Failed to get nonce");

            let declare_tx = DeclareTransactionV0V1 {
                nonce,
                class_hash,
                ..declare_tx_default()
            };
            let tx = DeclareTransaction {
                tx: starknet_api::transaction::DeclareTransaction::V1(declare_tx),
                contract_class,
            };
            let account_tx = AccountTransaction::Declare(tx);
            let block_context = &BlockContext::create_for_account_testing();

            let actual_execution_info = account_tx
                .execute(blockifier_state, block_context)
                .expect("Failed to execute declare transaction");

            insert_value_to_cellref!(
                vm,
                result,
                Felt252::from_str_radix(&class_hash.to_string().replace("0x", "")[..], 16).unwrap()
            )?;
            // TODO https://github.com/software-mansion/protostar/issues/2024
            // in case of errors above, consider not panicking, set an error and return it here
            // instead
            insert_value_to_cellref!(vm, err_code, Felt252::from(0))?;
            Ok(())
        }
        &ProtostarHint::DeclareCairo0 { .. } => todo!(),
        &ProtostarHint::StartPrank { .. } => todo!(),
        &ProtostarHint::StopPrank { .. } => todo!(),
        &ProtostarHint::Invoke { .. } => todo!(),
        &ProtostarHint::MockCall { .. } => todo!(),
        ProtostarHint::Deploy {
            prepared_contract_address,
            prepared_class_hash,
            prepared_constructor_calldata_start,
            prepared_constructor_calldata_end,
            deployed_contract_address,
            panic_data_start,
            panic_data_end,
        } => {
            let contract_address = get_val(vm, prepared_contract_address)?;
            // TODO deploy should fail if contract address provided doesn't match calculated
            //  or not accept this address as argument at all.
            let class_hash = get_val(vm, prepared_class_hash)?;
            let as_relocatable = |vm, value| {
                let (base, offset) = extract_buffer(value);
                get_ptr(vm, base, &offset)
            };
            let mut curr = as_relocatable(vm, prepared_constructor_calldata_start)?;
            let end = as_relocatable(vm, prepared_constructor_calldata_end)?;
            let calldata = read_data_from_range(vm, curr, end)?;

            // Deploy a contract using syscall deploy.
            let account_address = ContractAddress(patricia_key!(TEST_ACCOUNT_CONTRACT_ADDRESS));
            let block_context = &BlockContext::create_for_account_testing();
            let entry_point_selector = selector_from_name("deploy_contract");
            let salt = ContractAddressSalt::default();
            let class_hash = ClassHash(StarkFelt::new(class_hash.to_be_bytes()).unwrap());

            let execute_calldata = create_execute_calldata(
                &calldata,
                &class_hash,
                &account_address,
                &entry_point_selector,
                &salt,
            );

            let nonce = blockifier_state
                .get_nonce_at(account_address)
                .expect("Failed to get nonce");
            let tx = invoke_tx(execute_calldata, account_address, Fee(MAX_FEE), None);
            let account_tx =
                AccountTransaction::Invoke(InvokeTransaction::V1(InvokeTransactionV1 {
                    nonce,
                    ..tx
                }));
            let tx_result = account_tx.execute(blockifier_state, block_context).unwrap();
            let return_data = tx_result
                .execute_call_info
                .expect("Failed to get execution data from method")
                .execution
                .retdata;
            let contract_address = return_data
                .0
                .get(0)
                .expect("Failed to get contract_address from return_data");
            let contract_address = Felt252::from_bytes_be(contract_address.bytes());

            insert_value_to_cellref!(vm, deployed_contract_address, contract_address)?;
            // todo in case of error, consider filling the panic data instead of packing in rust
            insert_value_to_cellref!(vm, panic_data_start, Felt252::from(0))?;
            insert_value_to_cellref!(vm, panic_data_end, Felt252::from(0))?;

            Ok(())
        }
        &ProtostarHint::Prepare { .. } => todo!(),
        &ProtostarHint::Call { .. } => todo!(),
        ProtostarHint::Print { start, end } => {
            let as_relocatable = |vm, value| {
                let (base, offset) = extract_buffer(value);
                get_ptr(vm, base, &offset)
            };

            let mut curr = as_relocatable(vm, start)?;
            let end = as_relocatable(vm, end)?;

            while curr != end {
                let value = vm.get_integer(curr)?;
                if let Some(shortstring) = as_cairo_short_string(&value) {
                    println!("original value: [{value}], converted to a string: [{shortstring}]",);
                } else {
                    println!("original value: [{value}]");
                }
                curr += 1;
            }

            Ok(())
        }
    }
}

fn read_data_from_range(
    vm: &mut VirtualMachine,
    mut curr: Relocatable,
    end: Relocatable,
) -> Result<Vec<Felt252>, HintError> {
    let mut calldata: Vec<Felt252> = vec![];
    while curr != end {
        let value = vm.get_integer(curr)?;
        calldata.push(value.into_owned());
        curr.offset += 1;
    }
    Ok(calldata)
}

fn create_execute_calldata(
    calldata: &[Felt252],
    class_hash: &ClassHash,
    account_address: &ContractAddress,
    entry_point_selector: &EntryPointSelector,
    salt: &ContractAddressSalt,
) -> Calldata {
    let calldata_len = u128::try_from(calldata.len()).unwrap();
    let mut execute_calldata = vec![
        *account_address.0.key(),      // Contract address.
        entry_point_selector.0,        // EP selector.
        stark_felt!(calldata_len + 3), // Calldata length.
        class_hash.0,                  // Calldata: class_hash.
        salt.0,                        // Contract_address_salt.
        stark_felt!(calldata_len),     // Constructor calldata length.
    ];
    let mut calldata: Vec<StarkFelt> = calldata
        .iter()
        .map(|data| StarkFelt::new(data.to_be_bytes()).unwrap())
        .collect();
    execute_calldata.append(&mut calldata);
    Calldata(execute_calldata.into())
}

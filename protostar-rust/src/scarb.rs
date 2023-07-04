use anyhow::{anyhow, Context, Result};
use camino::Utf8PathBuf;
use serde::Deserialize;
use std::collections::HashMap;
use std::fs;

#[allow(dead_code)]
#[derive(Deserialize, Debug, PartialEq, Clone)]
pub struct StarknetContract {
    id: String,
    package_name: String,
    contract_name: String,
    artifacts: StarknetContractArtifactPaths,
}

#[allow(dead_code)]
#[derive(Deserialize, Debug, PartialEq, Clone)]
pub struct StarknetContractArtifactPaths {
    sierra: Utf8PathBuf,
    casm: Option<Utf8PathBuf>,
}

#[derive(Deserialize, Debug, PartialEq, Clone)]
pub struct StarknetArtifacts {
    version: u32,
    contracts: Vec<StarknetContract>,
}

#[derive(Debug, PartialEq, Clone)]
pub struct StarknetContractArtifacts {
    pub sierra: String,
    pub casm: Option<String>,
}

/// Get deserialized contents of `starknet_artifacts.json` file generated by Scarb
///
/// # Arguments
///
/// * `path` - A path to `starknet_artifacts.json` file.
pub fn artifacts_for_package(path: &Utf8PathBuf) -> Result<StarknetArtifacts> {
    let starknet_artifacts = fs::read_to_string(path)
        .with_context(|| format!("Failed to read {:?} contents", path.file_name()))?;
    let starknet_artifacts: StarknetArtifacts =
        serde_json::from_str(starknet_artifacts.as_str())
            .with_context(|| format!("Failed to parse {:?} contents", path.file_name()))?;
    Ok(starknet_artifacts)
}

pub fn try_get_starknet_artifacts_path(path: &Utf8PathBuf) -> Result<Option<Utf8PathBuf>> {
    let path = path.join("target/dev");
    let mut paths = fs::read_dir(&path)
        .with_context(|| format!("Failed to read directory at path = {}", path))?;
    let starknet_artifacts = paths.find_map(|path| match path {
        Ok(path) => {
            let name = path.file_name().into_string().ok()?;
            name.contains("starknet_artifacts").then_some(path.path())
        }
        Err(_) => None,
    });
    let starknet_artifacts: Option<Result<Utf8PathBuf>> = starknet_artifacts.map(|artifacts| {
        Utf8PathBuf::try_from(artifacts.clone())
            .with_context(|| format!("Failed to convert path = {:?} to Utf8PathBuf", artifacts))
    });
    starknet_artifacts.transpose()
}

pub fn get_contracts_map(path: &Utf8PathBuf) -> Result<HashMap<String, StarknetContractArtifacts>> {
    let base_path = path
        .parent()
        .ok_or_else(|| anyhow!("Failed to get parent for path = {}", path))?;
    let artifacts = artifacts_for_package(path)?;
    let mut map = HashMap::new();
    for contract in artifacts.contracts {
        let name = contract.contract_name;
        let sierra_path = base_path.join(contract.artifacts.sierra);
        let casm_path = contract
            .artifacts
            .casm
            .map(|casm_path| base_path.join(casm_path));
        let sierra = fs::read_to_string(sierra_path)?;
        let casm: Option<String> = casm_path.map(fs::read_to_string).transpose()?;
        map.insert(name, StarknetContractArtifacts { sierra, casm });
    }
    Ok(map)
}

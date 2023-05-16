"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4922],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<c;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},812:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const c={},s="expect_events",o={unversionedId:"legacy/testing/cheatcodes/expect-events",id:"legacy/testing/cheatcodes/expect-events",title:"expect_events",description:"Compares expected events with events in the Starknet state. You can use this cheatcode to test whether a contract emits specified events. Protostar compares events after a test case is completed. Therefore, you can use this cheatcode in any place within a test case.",source:"@site/docs/legacy/07-testing/02-cheatcodes/expect-events.md",sourceDirName:"legacy/07-testing/02-cheatcodes",slug:"/legacy/testing/cheatcodes/expect-events",permalink:"/protostar/docs/legacy/testing/cheatcodes/expect-events",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/legacy/07-testing/02-cheatcodes/expect-events.md",tags:[],version:"current",frontMatter:{},sidebar:"legacy",previous:{title:"expect_call",permalink:"/protostar/docs/legacy/testing/cheatcodes/expect-call"},next:{title:"expect_revert",permalink:"/protostar/docs/legacy/testing/cheatcodes/expect-revert"}},i={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"expect_events"},(0,a.kt)("inlineCode",{parentName:"h1"},"expect_events")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class ExpectedEventData(TypedDict):\n    name: str\n    data: NotRequired[list[int] | dict[str, Any] | None]\n    from_address: NotRequired[int]\n\nExpectedEventName = str\n\nExpectedEvent = ExpectedEventData | ExpectedEventName\n\ndef expect_events(*expected_events: ExpectedEvent) -> None: ...\n")),(0,a.kt)("p",null,"Compares expected events with events in the Starknet state. You can use this cheatcode to test whether a contract emits specified events. Protostar compares events after a test case is completed. Therefore, you can use this cheatcode in any place within a test case."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Protostar also checks the order of emitted events."',title:'"Protostar',also:!0,checks:!0,the:!0,order:!0,of:!0,emitted:!0,'events."':!0},'%lang starknet\n\n@event\nfunc foobar(number: felt) {\n}\n\nfunc emit_foobar{syscall_ptr: felt*, range_check_ptr}(number: felt) {\n    foobar.emit(number);\n    return ();\n}\n\n@contract_interface\nnamespace BasicContract {\n    func increase_balance() {\n    }\n}\n\n// ----------------------------------------------\n\n@external\nfunc test_expect_events_are_in_declared_order{syscall_ptr: felt*, range_check_ptr}() {\n    %{ expect_events({"name": "foobar", "data": [21]}, {"name": "foobar", "data": [37]}) %}\n    emit_foobar(21);\n    emit_foobar(37);\n    return ();\n}\n\n@external\nfunc test_expect_event_by_contract_address{syscall_ptr: felt*, range_check_ptr}() {\n    alloc_locals;\n    local contract_address: felt;\n    %{\n        ids.contract_address = deploy_contract("./src/commands/test/examples/cheats/expect_events/basic_contract.cairo").contract_address\n        expect_events({"name": "balance_increased", "from_address": ids.contract_address})\n    %}\n    BasicContract.increase_balance(contract_address=contract_address);\n    return ();\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can provide ",(0,a.kt)("inlineCode",{parentName:"p"},'"data"')," as a dictionary to leverage ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/#data-transformer"},"data transformer")," - see example below")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Emitting a complex structured event, and expecting it in tests using data transformer"',title:'"Emitting',a:!0,complex:!0,structured:!0,"event,":!0,and:!0,expecting:!0,it:!0,in:!0,tests:!0,using:!0,data:!0,'transformer"':!0},'%lang starknet\n\nstruct InnerStruct {\n    b : felt,\n    c : felt,\n}\n\nstruct DeeplyNestedStruct {\n    inner : InnerStruct,\n    a : felt,\n}\n\n@event\nfunc structured_event(structure: DeeplyNestedStruct, side_arg: felt) {\n}\n\nfunc emit_structured_event{syscall_ptr: felt*, range_check_ptr}(number: felt) {\n    let inner_struct = InnerStruct(\n        b=number + 1,\n        c=number + 2,\n    );\n\n    let deeply_nested = DeeplyNestedStruct(\n        inner=inner_struct,\n        a=number,\n    );\n\n    structure_event.emit(deeply_nested);\n    return ();\n}\n\n// ----------------------------------------------\n\n@external\nfunc test_emitting_struct_with_data_transformer{syscall_ptr: felt*, range_check_ptr}() {\n    %{\n        expect_events({\n            "name": "structured_event",\n            "data": {\n                "structure": {\n                    "a": 21,\n                    "inner": {\n                        "b": 22,\n                        "c": 23,\n                    }\n                },\n                "side_arg": 37\n            }\n        })\n    %}\n    emit_structured_event(21, 37);\n    return ();\n}\n')))}u.isMDXComponent=!0}}]);
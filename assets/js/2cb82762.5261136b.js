"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7417],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||c;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6334:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return i}});var r=n(3117),a=(n(7294),n(3905));const c={},o="mock_call",l={unversionedId:"legacy/testing/cheatcodes/mock-call",id:"legacy/testing/cheatcodes/mock-call",title:"mock_call",description:"Mocks all calls to function with the name fnname of a contract with an address contractaddress, until the returned callable is called.",source:"@site/docs/legacy/07-testing/02-cheatcodes/mock-call.md",sourceDirName:"legacy/07-testing/02-cheatcodes",slug:"/legacy/testing/cheatcodes/mock-call",permalink:"/protostar/docs/legacy/testing/cheatcodes/mock-call",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/legacy/07-testing/02-cheatcodes/mock-call.md",tags:[],version:"current",frontMatter:{},sidebar:"legacy",previous:{title:"max_examples",permalink:"/protostar/docs/legacy/testing/cheatcodes/max-examples"},next:{title:"prepare",permalink:"/protostar/docs/legacy/testing/cheatcodes/prepare"}},s={},i=[{value:"Caveats",id:"caveats",level:2},{value:"Representing different data structures in <code>ret_data</code>",id:"representing-different-data-structures-in-ret_data",level:2},{value:"Felt",id:"felt",level:3},{value:"Array",id:"array",level:3},{value:"Struct",id:"struct",level:3}],u={toc:i};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mock_call"},(0,a.kt)("inlineCode",{parentName:"h1"},"mock_call")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def mock_call(contract_address: int, fn_name: str, ret_data: Union[List[int], Dict]) -> Callable: ...\n")),(0,a.kt)("p",null,"Mocks all calls to function with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"fn_name")," of a contract with an address ",(0,a.kt)("inlineCode",{parentName:"p"},"contract_address"),", until the returned callable is called. "),(0,a.kt)("p",null,"Mocked call returns data provided in ",(0,a.kt)("inlineCode",{parentName:"p"},"ret_data"),"."),(0,a.kt)("p",null,"Mock works globally, for all contracts, not only the testing contract."),(0,a.kt)("h2",{id:"caveats"},"Caveats"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mock call only works for functions that are in the contract ABI. It does not mock any internal function calls, even if the function name and parameter types match.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can provide constructor arguments as a dictionary to leverage ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/#data-transformer"},"data transformer"),".")),(0,a.kt)("h2",{id:"representing-different-data-structures-in-ret_data"},"Representing different data structures in ",(0,a.kt)("inlineCode",{parentName:"h2"},"ret_data")),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"mock_call")," effectively, you need to understand how Cairo data structures are represented under the hood. ",(0,a.kt)("inlineCode",{parentName:"p"},"Cairo-lang")," operates on a list of integers. The following examples demonstrate how each data structure is represented in Python code."),(0,a.kt)("h3",{id:"felt"},"Felt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="mocked_call returns a felt"',title:'"mocked_call',returns:!0,a:!0,'felt"':!0},'%lang starknet\n\n@contract_interface\nnamespace ITestContract {\n    func get_felt() -> (res: felt) {\n    }\n}\n\nconst EXTERNAL_CONTRACT_ADDRESS = 0x3fe90a1958bb8468fb1b62970747d8a00c435ef96cda708ae8de3d07f1bb56b;\n\n@external\nfunc test_mock_call_returning_felt{syscall_ptr: felt*, range_check_ptr}() {\n    tempvar external_contract_address = EXTERNAL_CONTRACT_ADDRESS;\n\n    %{ stop_mock = mock_call(ids.external_contract_address, "get_felt", [42]) %}\n    let (res) = ITestContract.get_felt(EXTERNAL_CONTRACT_ADDRESS);\n    %{ stop_mock() %}\n\n    assert res = 42;\n    return ();\n}\n')),(0,a.kt)("h3",{id:"array"},"Array"),(0,a.kt)("p",null,"To mock a function returning an array, provide data in the following format to ",(0,a.kt)("inlineCode",{parentName:"p"},"ret_data"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python representation of a Cairo array"',title:'"Python',representation:!0,of:!0,a:!0,Cairo:!0,'array"':!0},"[n, value_1, value_2, ..., value_n]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="mocked_call returns an array"',title:'"mocked_call',returns:!0,an:!0,'array"':!0},'%lang starknet\n\n@contract_interface\nnamespace ITestContract {\n    func get_array() -> (res_len: felt, res: felt*) {\n    }\n}\n\nconst EXTERNAL_CONTRACT_ADDRESS = 0x3fe90a1958bb8468fb1b62970747d8a00c435ef96cda708ae8de3d07f1bb56b;\n\n@external\nfunc test_mock_call_returning_array{syscall_ptr: felt*, range_check_ptr}() {\n    tempvar external_contract_address = EXTERNAL_CONTRACT_ADDRESS;\n\n    %{ stop_mock = mock_call(ids.external_contract_address, "get_array", [1, 42]) %}\n    let (res_len, res_arr) = ITestContract.get_array(EXTERNAL_CONTRACT_ADDRESS);\n    %{ stop_mock() %}\n\n    assert res_arr[0] = 42;\n    return ();\n}\n')),(0,a.kt)("h3",{id:"struct"},"Struct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="mocked_call returns a struct"',title:'"mocked_call',returns:!0,a:!0,'struct"':!0},'%lang starknet\n\nstruct Point {\n    x: felt,\n    y: felt,\n}\n\n@contract_interface\nnamespace ITestContract {\n    func get_struct() -> (res: Point) {\n    }\n}\n\nconst EXTERNAL_CONTRACT_ADDRESS = 0x3fe90a1958bb8468fb1b62970747d8a00c435ef96cda708ae8de3d07f1bb56b;\n\n@external\nfunc test_mock_call_returning_struct{syscall_ptr: felt*, range_check_ptr}() {\n    tempvar external_contract_address = EXTERNAL_CONTRACT_ADDRESS;\n\n    %{ stop_mock = mock_call(ids.external_contract_address, "get_struct", [21,37]) %}\n    let (res_struct) = ITestContract.get_struct(EXTERNAL_CONTRACT_ADDRESS);\n    %{ stop_mock() %}\n\n    assert res_struct.x = 21;\n    assert res_struct.y = 37;\n    return ();\n}\n')))}d.isMDXComponent=!0}}]);
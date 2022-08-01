"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[140],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7150:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c="expect_revert",l={unversionedId:"tutorials/testing/cheatcodes/expect-revert",id:"tutorials/testing/cheatcodes/expect-revert",title:"expect_revert",description:"If a code beneath expect_revert raises a specified exception, a test will pass. If not, a test will fail.",source:"@site/docs/tutorials/07-testing/02-cheatcodes/expect-revert.md",sourceDirName:"tutorials/07-testing/02-cheatcodes",slug:"/tutorials/testing/cheatcodes/expect-revert",permalink:"/protostar/docs/tutorials/testing/cheatcodes/expect-revert",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/07-testing/02-cheatcodes/expect-revert.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"expect_events",permalink:"/protostar/docs/tutorials/testing/cheatcodes/expect-events"},next:{title:"load",permalink:"/protostar/docs/tutorials/testing/cheatcodes/load"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"expect_revert"},(0,o.kt)("inlineCode",{parentName:"h1"},"expect_revert")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def expect_revert(error_type: Optional[str] = None, error_message: Optional[str] = None) -> None: ...\n")),(0,o.kt)("p",null,"If a code beneath ",(0,o.kt)("inlineCode",{parentName:"p"},"expect_revert")," raises a specified exception, a test will pass. If not, a test will fail."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Protostar displays an error type and a message when a test fails."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="This test passes despite calling an uninitialized contract."',title:'"This',test:!0,passes:!0,despite:!0,calling:!0,an:!0,uninitialized:!0,'contract."':!0},'%lang starknet\n\n@contract_interface\nnamespace BasicContract:\n    func increase_balance(amount : felt):\n    end\n\n    func get_balance() -> (res : felt):\n    end\nend\n\n@external\nfunc test_failing_to_call_external_contract{syscall_ptr : felt*, range_check_ptr}():\n    alloc_locals\n\n    %{ expect_revert("UNINITIALIZED_CONTRACT") %}\n    BasicContract.increase_balance(contract_address=21, amount=3)\n\n    return ()\nend\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo",metastring:"title=\"'except_revert' checks if the last error annotation contains 'error_message'.\"",title:"\"'except_revert'",checks:!0,if:!0,the:!0,last:!0,error:!0,annotation:!0,contains:!0,"'error_message'.\"":!0},'%lang starknet\n\nfunc inverse(x) -> (res):\n    with_attr error_message("x must not be zero. Got x={x}."):\n        return (res=1 / x)\n    end\nend\n\nfunc assert_not_equal(a, b):\n    let diff = a - b\n    with_attr error_message("a and b must be distinct."):\n        inverse(diff)\n    end\n    return ()\nend\n\n@external\nfunc test_error_message{syscall_ptr : felt*, range_check_ptr}():\n    %{ expect_revert(error_message="must be distinct") %}\n    assert_not_equal(0, 0)\n    return ()\nend\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use ",(0,o.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/how_cairo_works/scope_attributes.html?highlight=with_attr"},"scope attributes")," to annotate a code block with an informative error message."))))}m.isMDXComponent=!0}}]);
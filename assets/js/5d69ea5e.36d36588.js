"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8482],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2642:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905));const o={},s="max_examples",i={unversionedId:"legacy/testing/cheatcodes/max-examples",id:"legacy/testing/cheatcodes/max-examples",title:"max_examples",description:"Sets the maximum number of examples to explore by the fuzzer.",source:"@site/docs/legacy/07-testing/02-cheatcodes/max-examples.md",sourceDirName:"legacy/07-testing/02-cheatcodes",slug:"/legacy/testing/cheatcodes/max-examples",permalink:"/protostar/docs/legacy/testing/cheatcodes/max-examples",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/legacy/07-testing/02-cheatcodes/max-examples.md",tags:[],version:"current",frontMatter:{},sidebar:"legacy",previous:{title:"load",permalink:"/protostar/docs/legacy/testing/cheatcodes/load"},next:{title:"mock_call",permalink:"/protostar/docs/legacy/testing/cheatcodes/mock-call"}},l={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"max_examples"},(0,r.kt)("inlineCode",{parentName:"h1"},"max_examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def max_examples(max_examples: int):\n")),(0,r.kt)("p",null,"Sets the maximum number of examples to explore by the fuzzer.\nFuzzer tries at most this many input examples. If it does not find any failing, test will pass."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"max_examples")," does not limit the examples specified by ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/example"},(0,r.kt)("inlineCode",{parentName:"a"},"example"))," cheatcode.\nIt only affects the ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/given"},(0,r.kt)("inlineCode",{parentName:"a"},"given"))," cheatcode and any examples added with ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," will be applied additionally."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This cheatcode is only available in ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/#setup-hooks"},"setup hooks"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Example"',title:'"Example"'},"@external\nfunc setup_integers() {\n    %{ max_examples(20) %}\n    return ();\n}\n\n@external\nfunc test_integers{syscall_ptr: felt*, range_check_ptr}(a: felt, b: felt) {\n    %{\n        given(\n            a = strategy.integers(10, 20),\n            b = strategy.integers(30, 40),\n        )\n    %}\n    assert_le(a, b);\n    return ();\n}\n")),(0,r.kt)("p",null,"Protostar defaults to 100 examples.\nThis default value is chosen to suit a workflow where the test will be part of a suite that\nis regularly executed locally or on a CI server,\nbalancing total running time against the chance of missing a bug."),(0,r.kt)("p",null,"If you are just scratching tests for quick experimentation, not meant to be committed to source\nrepository, running tens of thousands of examples is quite reasonable as Protostar's fuzzer may miss\nuncommon bugs with default settings."),(0,r.kt)("p",null,"This cheatcode has no effects on standard test cases."))}m.isMDXComponent=!0}}]);
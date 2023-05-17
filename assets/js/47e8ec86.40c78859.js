"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9135],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8775:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var a=n(3117),r=(n(7294),n(3905));const o={},i="example",l={unversionedId:"legacy/testing/cheatcodes/example",id:"legacy/testing/cheatcodes/example",title:"example",description:"Parametrizes test with explicitly provided data.",source:"@site/docs/legacy/07-testing/02-cheatcodes/example.md",sourceDirName:"legacy/07-testing/02-cheatcodes",slug:"/legacy/testing/cheatcodes/example",permalink:"/protostar/docs/legacy/testing/cheatcodes/example",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/legacy/07-testing/02-cheatcodes/example.md",tags:[],version:"current",frontMatter:{},sidebar:"legacy",previous:{title:"deploy",permalink:"/protostar/docs/legacy/testing/cheatcodes/deploy"},next:{title:"expect_call",permalink:"/protostar/docs/legacy/testing/cheatcodes/expect-call"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"example"},(0,r.kt)("inlineCode",{parentName:"h1"},"example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def example(self, *args: Any, **kwargs: Any) -> None:\n")),(0,r.kt)("p",null,"Parametrizes test with explicitly provided data.\nYou can provide multiple examples for one test.\nIn such a case, they are run sequentially."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"example")," can be used next to the ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/given"},(0,r.kt)("inlineCode",{parentName:"a"},"given"))," cheatcode.\nIn such a case, first all the ",(0,r.kt)("inlineCode",{parentName:"p"},"example"),"s are run and only then the the data from ",(0,r.kt)("inlineCode",{parentName:"p"},"given")," is applied.\nOtherwise, only the data from ",(0,r.kt)("inlineCode",{parentName:"p"},"example"),"s is applied."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This cheatcode is only available in ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/#setup-case"},"setup cases"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"example")," is not limited by ",(0,r.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/max-examples"},(0,r.kt)("inlineCode",{parentName:"a"},"max_examples"))," and is not connected to it in any way.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Example"',title:'"Example"'},"@external\nfunc setup_less_equal_compare() {\n    %{\n        example(1, 2)\n        # it affects the fuzzing strategy applied after all of the examples\n        given(a = strategy.integers(15, 20), b = strategy.integers(10, 14))\n        example(b=6, a=5)\n    %}\n    return ();\n}\n\n@external\nfunc test_examples{syscall_ptr: felt*, range_check_ptr}(a: felt, b: felt) {\n    # Tested against:\n    # (1,2)\n    # (5,6)\n    # fuzzing: a = strategy.integers(15, 20), b = strategy.integers(10, 14)\n    assert_le(0, a);\n    assert_le(0, b);\n    assert_le(a, b);\n    return ();\n}\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1960:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s}});var n=r(3117),o=(r(7294),r(3905));const a={},c="declare",i={unversionedId:"tutorials/testing/cheatcodes/declare",id:"tutorials/testing/cheatcodes/declare",title:"declare",description:"Declares contract given a path relative to a Protostar project root.",source:"@site/docs/tutorials/07-testing/02-cheatcodes/declare.md",sourceDirName:"tutorials/07-testing/02-cheatcodes",slug:"/tutorials/testing/cheatcodes/declare",permalink:"/protostar/docs/tutorials/testing/cheatcodes/declare",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/07-testing/02-cheatcodes/declare.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"assume",permalink:"/protostar/docs/tutorials/testing/cheatcodes/assume"},next:{title:"deploy_contract",permalink:"/protostar/docs/tutorials/testing/cheatcodes/deploy-contract"}},l={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"declare"},(0,o.kt)("inlineCode",{parentName:"h1"},"declare")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def declare(\n    contract: str,\n    *,\n    config: Optional[CheatcodeNetworkConfig] = None\n) -> DeclaredContract:\n\nclass DeclaredContract:\n    class_hash: int\n")),(0,o.kt)("p",null,"Declares contract given a path relative to a Protostar project root."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract")," \u2014 A path to the contract's main ",(0,o.kt)("inlineCode",{parentName:"li"},".cairo")," source file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config")," \u2014 A keyword only argument kept for compatibility with the migration ",(0,o.kt)("a",{parentName:"li",href:"/protostar/docs/tutorials/deploying/migrations/declare"},"declare cheatcode"),". See related documentation for more information.")))}p.isMDXComponent=!0}}]);
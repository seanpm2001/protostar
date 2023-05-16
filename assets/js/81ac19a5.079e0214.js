"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7071],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),y=o,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2352:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=n(3117),o=(n(7294),n(3905));const a={},c="deploy_contract",i={unversionedId:"legacy/testing/cheatcodes/deploy-contract",id:"legacy/testing/cheatcodes/deploy-contract",title:"deploy_contract",description:"Deploys a contract given a path relative to a Protostar project root. The section Deploying contracts from tests demonstrates a usage of this cheatcode.",source:"@site/docs/legacy/07-testing/02-cheatcodes/deploy-contract.md",sourceDirName:"legacy/07-testing/02-cheatcodes",slug:"/legacy/testing/cheatcodes/deploy-contract",permalink:"/protostar/docs/legacy/testing/cheatcodes/deploy-contract",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/legacy/07-testing/02-cheatcodes/deploy-contract.md",tags:[],version:"current",frontMatter:{},sidebar:"legacy",previous:{title:"declare",permalink:"/protostar/docs/legacy/testing/cheatcodes/declare"},next:{title:"deploy",permalink:"/protostar/docs/legacy/testing/cheatcodes/deploy"}},s={},p=[],l={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy_contract"},(0,o.kt)("inlineCode",{parentName:"h1"},"deploy_contract")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def deploy_contract(\n    contract: str,\n    constructor_calldata: Optional[Union[List[int], Dict]] = None,\n) -> DeployedContact:\n\nclass DeployedContract:\n    contract_address: int\n")),(0,o.kt)("p",null,"Deploys a contract given a path relative to a Protostar project root. The section ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/deploying-contracts"},"Deploying contracts from tests")," demonstrates a usage of this cheatcode."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract")," \u2014 A path to the contract's main ",(0,o.kt)("inlineCode",{parentName:"li"},".cairo")," source file.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Deploying a contract is a slow operation. If it's possible try using this cheatcode in the ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/#setup-hooks"},(0,o.kt)("inlineCode",{parentName:"a"},"__setup__")," hook"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"deploy_contract")," is just a syntactic sugar over executing cheatcodes ",(0,o.kt)("inlineCode",{parentName:"p"},"declare")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"prepare")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," separately, and it's what it does under the hood.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can provide ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor_calldata")," as a dictionary to leverage ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/testing/cheatcodes/#data-transformer"},"data transformer"),".")))}d.isMDXComponent=!0}}]);
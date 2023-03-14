"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5665],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2224:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=r(3117),a=(r(7294),r(3905));const o={sidebar_label:"Introduction"},i="Introduction",s={unversionedId:"tutorials/introduction",id:"tutorials/introduction",title:"Introduction",description:"Protostar is a toolchain for developing StarkNet smart contracts that helps with tasks such as dependencies management, project compilation, and testing contracts.",source:"@site/docs/tutorials/01-introduction.md",sourceDirName:"tutorials",slug:"/tutorials/introduction",permalink:"/protostar/docs/tutorials/introduction",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction"},sidebar:"tutorials",next:{title:"Installation",permalink:"/protostar/docs/tutorials/installation"}},l={},c=[{value:"Target audience",id:"target-audience",level:2},{value:"Learning objectives",id:"learning-objectives",level:2},{value:"Reference",id:"reference",level:2}],p={toc:c};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Protostar is a toolchain for developing StarkNet smart contracts that helps with tasks such as ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/dependencies-management"},"dependencies management"),", ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/compiling"},"project compilation"),", and ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/"},"testing contracts"),".\nIt is inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/foundry-rs/foundry"},"Foundry"),"."),(0,a.kt)("h2",{id:"target-audience"},"Target audience"),(0,a.kt)("p",null,"These guides assume that you have basic knowledge of ",(0,a.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/"},"Cairo, StarkNet"),", and Git."),(0,a.kt)("h2",{id:"learning-objectives"},"Learning objectives"),(0,a.kt)("p",null,"After reading these guides, you will know how to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/protostar/docs/tutorials/installation"},"Install and upgrade Protostar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/protostar/docs/tutorials/project-initialization"},"Initialize a new Protostar project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/protostar/docs/tutorials/project-initialization#protostartoml"},"Configure ",(0,a.kt)("inlineCode",{parentName:"a"},"protostar.toml"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/protostar/docs/tutorials/project-initialization#adapting-an-existing-project-to-the-protostar-project"},"Adapt an existing StarkNet project to the Protostar project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/protostar/docs/tutorials/compiling"},"Compile project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/protostar/docs/tutorials/dependencies-management"},"Add, update, and remove dependencies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/protostar/docs/tutorials/testing/"},"Test contracts using cheatcodes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/protostar/docs/tutorials/interacting-with-starknet/"},"Interact with StarkNet (call, invoke, deploy contracts)"))),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,"Protostar is designed to be easily discoverable from the terminal.\nTo view information about available commands and flags, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"protostar --help\n")),(0,a.kt)("p",null,"For detailed information about a specific command and its flags, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"protostar COMMAND --help\n")),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"protostar test --help"),"."))}u.isMDXComponent=!0}}]);
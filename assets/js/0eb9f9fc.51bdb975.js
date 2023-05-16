"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:e},p),{},{components:n})):r.createElement(d,i({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:function(t,e,n){n.d(e,{Z:function(){return k}});var r=n(7294),o=n(6010),a=n(2802),i=n(9960),c=n(3919),l=n(5999),s="cardContainer_fWXF",p="cardTitle_rnsV",u="cardDescription_PWke";function m(t){let{href:e,children:n}=t;return r.createElement(i.Z,{href:e,className:(0,o.Z)("card padding--lg",s)},n)}function f(t){let{href:e,icon:n,title:a,description:i}=t;return r.createElement(m,{href:e},r.createElement("h2",{className:(0,o.Z)("text--truncate",p),title:a},n," ",a),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",u),title:i},i))}function d(t){let{item:e}=t;const n=(0,a.Wl)(e);return n?r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function g(t){let{item:e}=t;const n=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(e.docId??void 0);return r.createElement(f,{href:e.href,icon:n,title:e.label,description:null==o?void 0:o.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return r.createElement(g,{item:e});case"category":return r.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function y(t){let{className:e}=t;const n=(0,a.jA)();return r.createElement(k,{items:n.items,className:e})}function k(t){const{items:e,className:n}=t;if(!e)return r.createElement(y,t);const i=(0,a.MN)(e);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map(((t,e)=>r.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:t})))))}},9177:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905)),a=n(2991),i=n(2802);const c={},l=void 0,s={unversionedId:"cairo-1/interacting-with-starknet/README",id:"cairo-1/interacting-with-starknet/README",title:"README",description:"Interacting with Starknet",source:"@site/docs/cairo-1/06-interacting-with-starknet/README.md",sourceDirName:"cairo-1/06-interacting-with-starknet",slug:"/cairo-1/interacting-with-starknet/",permalink:"/protostar/docs/cairo-1/interacting-with-starknet/",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/cairo-1/06-interacting-with-starknet/README.md",tags:[],version:"current",frontMatter:{},sidebar:"cairo1",previous:{title:"stop_warp",permalink:"/protostar/docs/cairo-1/testing/cheatcodes-reference/stop_warp"},next:{title:"Invoking contracts",permalink:"/protostar/docs/cairo-1/interacting-with-starknet/invoke"}},p={},u=[{value:"Interacting with Starknet",id:"interacting-with-starknet",level:2},{value:"Using configuration profiles",id:"using-configuration-profiles",level:2}],m={toc:u};function f(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"interacting-with-starknet"},"Interacting with Starknet"),(0,o.kt)("p",null,"Protostar provides a couple of commands allowing users to interact with Starknet without the need to\ninstall ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/cairo-lang/"},(0,o.kt)("inlineCode",{parentName:"a"},"cairo-lang"))," Python package locally."),(0,o.kt)("p",null,"Protostar offers similar CLI to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.starknet.io/documentation/tools/CLI/commands/"},"Starknet's CLI"),".\nHowever, with Protostar you can move deployment configuration to ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/cairo-1/protostar-toml"},(0,o.kt)("inlineCode",{parentName:"a"},"protostar.toml"))," and display\nhelp for each command."),(0,o.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}),(0,o.kt)("h2",{id:"using-configuration-profiles"},"Using ",(0,o.kt)("a",{parentName:"h2",href:"/protostar/docs/cairo-1/protostar-toml#configuration-profiles"},"configuration profiles")),(0,o.kt)("p",null,"Configuration profiles allow you to easily reuse configuration for devnet, testnet, and mainnet networks. You can define\na network configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"protostar.toml")," as demonstrated in the snippet below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:"title=protostar.toml",title:"protostar.toml"},'# ...\n\n# https://github.com/0xSpaceShard/starknet-devnet\n["profile.devnet.protostar.deploy"]\ngateway-url = "http://127.0.0.1:5050/"\n\n["profile.testnet.protostar.deploy"]\nnetwork = "testnet"\n\n["profile.mainnet.protostar.deploy"]\nnetwork = "mainnet"\n')),(0,o.kt)("p",null,"Then, run ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--profile")," argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"protostar -p devnet deploy ./build/main.json\n")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9746],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6264:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const i={},o="Invoking contracts",c={unversionedId:"legacy/interacting-with-starknet/invoke",id:"legacy/interacting-with-starknet/invoke",title:"Invoking contracts",description:"Overview",source:"@site/docs/legacy/09-interacting-with-starknet/01-invoke.md",sourceDirName:"legacy/09-interacting-with-starknet",slug:"/legacy/interacting-with-starknet/invoke",permalink:"/protostar/docs/legacy/interacting-with-starknet/invoke",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/legacy/09-interacting-with-starknet/01-invoke.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"legacy",previous:{title:"README",permalink:"/protostar/docs/legacy/interacting-with-starknet/"},next:{title:"Calling contracts",permalink:"/protostar/docs/legacy/interacting-with-starknet/call"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Signing",id:"signing",level:2},{value:"Usage example",id:"usage-example",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"invoking-contracts"},"Invoking contracts"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This command allows you to send an invoke transaction with ",(0,a.kt)("inlineCode",{parentName:"p"},"@external")," function entrypoint."),(0,a.kt)("p",null,"The basic inputs that you need for the commands are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#signing"},"Signing credentials")),(0,a.kt)("li",{parentName:"ul"},"Contract address"),(0,a.kt)("li",{parentName:"ul"},"Function name"),(0,a.kt)("li",{parentName:"ul"},"Inputs to the function"),(0,a.kt)("li",{parentName:"ul"},"Fee specification (concrete amount, or auto-estimation)"),(0,a.kt)("li",{parentName:"ul"},"Network you want to target (i.e. its name or gateway URL)")),(0,a.kt)("p",null,"For detailed API description, see ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/cli-reference#invoke"},"invoke command reference"),"."),(0,a.kt)("h2",{id:"signing"},"Signing"),(0,a.kt)("p",null,"Credentials for paying the fee are needed, which are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Account address (which pays the fee) - in hex (prefixed with '0x') or decimal representation."),(0,a.kt)("li",{parentName:"ul"},"Private key for that account (from ArgentX, Braavos etc.) - in hex (prefixed with '0x') or decimal representation. This can be provided with ",(0,a.kt)("inlineCode",{parentName:"li"},"PROTOSTAR_ACCOUNT_PRIVATE_KEY")," env variable or with a file on local filesystem containing that key in plaintext, in which case you should use ",(0,a.kt)("inlineCode",{parentName:"li"},"--private-key-path"),".")),(0,a.kt)("p",null,"Custom signing logic is made possible by using custom signers - see details ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/interacting-with-starknet/signing"},"here"),"."),(0,a.kt)("h2",{id:"usage-example"},"Usage example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'protostar invoke --contract-address 0x4a739ab73aa3cac01f9da5d55f49fb67baee4919224454a2e3f85b16462a911 --function "setter_tester_success" --network testnet --account-address 0x0481Eed2e02b1ff19Fd32429801f28a59DEa630d81189E39c80F2F60139b381a --max-fee auto --inputs 3 --private-key-path ./.pkey\nInvoke transaction was sent.\nTransaction hash: 0x05d2362b9b5a5aba8a02a41d2f1fcbdc06cde89f90cf33c0ea4957846c86aeef\n')),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"max-fee")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," is discouraged, since it may incur extra unexpected costs.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you need to print machine-readable output in JSON format, you should use ",(0,a.kt)("inlineCode",{parentName:"p"},"--json")," flag."),(0,a.kt)("p",{parentName:"admonition"},"This may come in handy for writing scripts that include protostar commands."),(0,a.kt)("p",{parentName:"admonition"},"For more information, go to ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/interacting-with-starknet/scripting"},"this page"))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8538],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1837:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const l={},i="Multicall",o={unversionedId:"legacy/interacting-with-starknet/multicall",id:"legacy/interacting-with-starknet/multicall",title:"Multicall",description:"Overview",source:"@site/docs/legacy/09-interacting-with-starknet/07-multicall.md",sourceDirName:"legacy/09-interacting-with-starknet",slug:"/legacy/interacting-with-starknet/multicall",permalink:"/protostar/docs/legacy/interacting-with-starknet/multicall",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/legacy/09-interacting-with-starknet/07-multicall.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"legacy",previous:{title:"Signing",permalink:"/protostar/docs/legacy/interacting-with-starknet/signing"},next:{title:"Scripting",permalink:"/protostar/docs/legacy/interacting-with-starknet/scripting"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage example",id:"usage-example",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multicall"},"Multicall"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Multicall executes multiple calls as a single transaction. If one call fails, the entire operation is aborted. Use it to prevent leaving your system in an inconsistent state. "),(0,a.kt)("h2",{id:"usage-example"},"Usage example"),(0,a.kt)("p",null,"Before you run ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli-reference#multicall"},(0,a.kt)("inlineCode",{parentName:"a"},"protostar multicall")),", you need to ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/interacting-with-starknet/deploy-account"},"create an account")," in order to ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/interacting-with-starknet/signing"},"sign the transaction"),". If you want to deploy contract within a multicall, you need to ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/legacy/interacting-with-starknet/declare"},"declare")," it first."),(0,a.kt)("p",null,"Then, create a toml file containing calls defined as ",(0,a.kt)("a",{parentName:"p",href:"https://toml.io/en/v1.0.0#array-of-tables"},"array of tables"),".\nIn that file, you can use contract address of a contract to be deployed by using references (",(0,a.kt)("inlineCode",{parentName:"p"},"$DEPLOY_CALL_ID"),").\nReferences can be used in ",(0,a.kt)("inlineCode",{parentName:"p"},"contract-address")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"inputs")," attributes as demonstrated in the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="calls.toml"',title:'"calls.toml"'},'[[call]]\ntype = "deploy"\nclass-hash = 0xDEADBEEF\ninputs = []\nid = "my_contract"\n\n[[call]]\ntype = "invoke"\ncontract-address = "$my_contract"\nfunction = "increase_balance"\ninputs = [42]\n')),(0,a.kt)("p",null,"Protostar supports two types of calls \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"invoke"),", which take similar arguments to ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli-reference#deploy"},(0,a.kt)("inlineCode",{parentName:"a"},"deploy command"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli-reference#invoke"},(0,a.kt)("inlineCode",{parentName:"a"},"invoke command")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'[project]\nprotostar-version = "0.8.1"\n\n[multicall]\naccount-address = 0x...\ngateway-url = "http://127.0.0.1:5050"\nchain-id = 1536727068981429685321\nmax-fee = "auto"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Calling multicall"',title:'"Calling','multicall"':!0},"export PROTOSTAR_ACCOUNT_PRIVATE_KEY 0x...\nprotostar multicall calls.toml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Protostar shows transaction hash and addresses of deployed contracts"',title:'"Protostar',shows:!0,transaction:!0,hash:!0,and:!0,addresses:!0,of:!0,deployed:!0,'contracts"':!0},"Multicall has been sent.\ntransaction hash: 0x...\nmy_contract     : 0x...\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8521],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=i(r),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2336:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i}});var n=r(3117),a=(r(7294),r(3905));const o={},c="stop_prank",s={unversionedId:"cairo-1/testing/cheatcodes-reference/stop_prank",id:"cairo-1/testing/cheatcodes-reference/stop_prank",title:"stop_prank",description:"Stops a prank started by startprank.",source:"@site/docs/cairo-1/05-testing/cheatcodes-reference/stop_prank.md",sourceDirName:"cairo-1/05-testing/cheatcodes-reference",slug:"/cairo-1/testing/cheatcodes-reference/stop_prank",permalink:"/protostar/docs/cairo-1/testing/cheatcodes-reference/stop_prank",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/cairo-1/05-testing/cheatcodes-reference/stop_prank.md",tags:[],version:"current",frontMatter:{},sidebar:"cairo1",previous:{title:"start_warp",permalink:"/protostar/docs/cairo-1/testing/cheatcodes-reference/start_warp"},next:{title:"stop_roll",permalink:"/protostar/docs/cairo-1/testing/cheatcodes-reference/stop_roll"}},p={},i=[],l={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stop_prank"},(0,a.kt)("inlineCode",{parentName:"h1"},"stop_prank")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cairo"},"fn stop_prank(target_contract_address: felt252) -> Result::<(), felt252> nopanic;\n")),(0,a.kt)("p",null,"Stops a prank started by ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/cairo-1/testing/cheatcodes-reference/start_prank"},(0,a.kt)("inlineCode",{parentName:"a"},"start_prank")),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target_contract_address")," address that was previously pranked.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Example"',title:'"Example"'},"#[test]\nfn test_stop_prank() {\n    stop_prank(pranked_address).unwrap();\n    // Address is no longer pranked from here\n}\n")))}u.isMDXComponent=!0}}]);
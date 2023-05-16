"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3886],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},701:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_label:"Installation"},i="Installation",l={unversionedId:"cairo-1/installation",id:"cairo-1/installation",title:"Installation",description:"Protostar is easy to install on Linux and Mac systems. In this section, we will walk through the process of installing and upgrading Protostar.",source:"@site/docs/cairo-1/02-installation.md",sourceDirName:"cairo-1",slug:"/cairo-1/installation",permalink:"/protostar/docs/cairo-1/installation",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/cairo-1/02-installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Installation"},sidebar:"cairo1",previous:{title:"Introduction",permalink:"/protostar/docs/cairo-1/introduction"},next:{title:"Understanding Cairo packages",permalink:"/protostar/docs/cairo-1/understanding-cairo-packages"}},s={},c=[{value:"Linux and Mac",id:"linux-and-mac",level:3},{value:"Specifying version",id:"specifying-version",level:3},{value:"Windows Compatibility",id:"windows-compatibility",level:3},{value:"Upgrading Protostar",id:"upgrading-protostar",level:2},{value:"How to build Protostar from source code",id:"how-to-build-protostar-from-source-code",level:2}],u={toc:c};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Protostar is easy to install on Linux and Mac systems. In this section, we will walk through the process of installing and upgrading Protostar."),(0,o.kt)("h3",{id:"linux-and-mac"},"Linux and Mac"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open a terminal and run the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"curl -L https://raw.githubusercontent.com/software-mansion/protostar/master/install.sh | bash\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Close and reopen the terminal."),(0,o.kt)("li",{parentName:"ol"},"To check if the Protostar is installed correctly, run ",(0,o.kt)("inlineCode",{parentName:"li"},"protostar -v"),".")),(0,o.kt)("h3",{id:"specifying-version"},"Specifying version"),(0,o.kt)("p",null,"If you want to install a specific version of Protostar, run the following command with the desired version number:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"curl -L https://raw.githubusercontent.com/software-mansion/protostar/master/install.sh | bash -s -- -v 0.3.2\n")),(0,o.kt)("h3",{id:"windows-compatibility"},"Windows Compatibility"),(0,o.kt)("p",null,"Protostar is not currently supported on Windows."),(0,o.kt)("h2",{id:"upgrading-protostar"},"Upgrading Protostar"),(0,o.kt)("p",null,"To upgrade Protostar, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"protostar upgrade\n")),(0,o.kt)("p",null,"Protostar will inform you when a new version is available."),(0,o.kt)("h2",{id:"how-to-build-protostar-from-source-code"},"How to build Protostar from source code"),(0,o.kt)("p",null,"If you are unable to install Protostar using the instructions above, you can try building it from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/protostar"},"source code")," as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/protostar#setting-up-environment"},"Set up a development environment.")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"poe build"),". This will create a ",(0,o.kt)("inlineCode",{parentName:"li"},"dist")," directory."),(0,o.kt)("li",{parentName:"ol"},"Move the ",(0,o.kt)("inlineCode",{parentName:"li"},"dist")," directory to the desired location (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.protostar"),")."),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"DESIRED_LOCATION/dist/protostar")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"PATH"),".")))}p.isMDXComponent=!0}}]);
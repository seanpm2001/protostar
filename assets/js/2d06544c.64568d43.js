"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4811],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_label:"Installation"},i="Installation",l={unversionedId:"legacy/installation",id:"legacy/installation",title:"Installation",description:"Protostar is easy to install on Linux and Mac systems. In this section, we will walk through the process of installing and upgrading Protostar.",source:"@site/docs/legacy/02-installation.md",sourceDirName:"legacy",slug:"/legacy/installation",permalink:"/protostar/docs/legacy/installation",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/legacy/02-installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Installation"},sidebar:"legacy",previous:{title:"Introduction",permalink:"/protostar/docs/legacy/introduction"},next:{title:"Project initialization",permalink:"/protostar/docs/legacy/project-initialization"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Linux and Mac",id:"linux-and-mac",level:2},{value:"Specifying version",id:"specifying-version",level:3},{value:"Windows Compatibility",id:"windows-compatibility",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Protostar is easy to install on Linux and Mac systems. In this section, we will walk through the process of installing and upgrading Protostar."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To use Protostar's dependency management commands, you must have git installed and added to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH")," environment variable."),(0,o.kt)("h2",{id:"linux-and-mac"},"Linux and Mac"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open a terminal and run the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"curl -L https://raw.githubusercontent.com/software-mansion/protostar/master/install.sh | bash\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Close and reopen the terminal."),(0,o.kt)("li",{parentName:"ol"},"To check if the Protostar is installed correctly, run ",(0,o.kt)("inlineCode",{parentName:"li"},"protostar -v"),".")),(0,o.kt)("h3",{id:"specifying-version"},"Specifying version"),(0,o.kt)("p",null,"If you want to install a specific version of Protostar, run the following command with the desired version number:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"curl -L https://raw.githubusercontent.com/software-mansion/protostar/master/install.sh | bash -s -- -v 0.3.2\n")),(0,o.kt)("h2",{id:"windows-compatibility"},"Windows Compatibility"),(0,o.kt)("p",null,"Protostar is not currently supported on Windows."),(0,o.kt)("h1",{id:"upgrading-protostar"},"Upgrading Protostar"),(0,o.kt)("p",null,"To upgrade Protostar, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"protostar upgrade\n")),(0,o.kt)("h1",{id:"protostar-releases"},"Protostar releases"),(0,o.kt)("p",null,"Protostar follows a biweekly release schedule.\nEach release may include new features, enhancements, bug fixes, deprecations and breaking changes.\nFor detailed information about each release, consult the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/protostar/releases"},"release notes"),".\nProtostar will inform you when a new release is available."),(0,o.kt)("h1",{id:"how-to-build-protostar-from-source-code"},"How to build Protostar from source code"),(0,o.kt)("p",null,"If you are unable to install Protostar using the instructions above, you can try building it from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/protostar"},"source code")," as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/protostar#setting-up-environment"},"Set up a development environment.")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"poe build"),". This will create a ",(0,o.kt)("inlineCode",{parentName:"li"},"dist")," directory."),(0,o.kt)("li",{parentName:"ol"},"Move the ",(0,o.kt)("inlineCode",{parentName:"li"},"dist")," directory to the desired location (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.protostar"),")."),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"DESIRED_LOCATION/dist/protostar")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"PATH"),".")))}p.isMDXComponent=!0}}]);
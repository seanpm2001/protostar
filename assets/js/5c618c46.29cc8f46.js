"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5205],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7672:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var a=n(3117),r=(n(7294),n(3905));const o={sidebar_label:"Dependencies"},i="Dependencies",l={unversionedId:"tutorials/dependencies-management",id:"tutorials/dependencies-management",title:"Dependencies",description:"Protostar manages dependencies (packages) using git submodules (similarly to Foundry). This is the reason Protostar expects git to be installed. Keep this in mind, especially if your project uses git submodules.",source:"@site/docs/tutorials/05-dependencies-management.md",sourceDirName:"tutorials",slug:"/tutorials/dependencies-management",permalink:"/protostar/docs/tutorials/dependencies-management",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/05-dependencies-management.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Dependencies"},sidebar:"tutorials",previous:{title:"Compilation",permalink:"/protostar/docs/tutorials/compiling"},next:{title:"Deployment",permalink:"/protostar/docs/tutorials/deploying/"}},p={},s=[{value:"Adding a dependency",id:"adding-a-dependency",level:2},{value:"External dependency reference formats",id:"external-dependency-reference-formats",level:3},{value:"Aliases",id:"aliases",level:3},{value:"Installing dependencies after cloning a repository",id:"installing-dependencies-after-cloning-a-repository",level:2},{value:"Updating dependencies",id:"updating-dependencies",level:2},{value:"Removing dependencies",id:"removing-dependencies",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"Protostar manages dependencies (packages) using ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Tools-Submodules"},"git submodules")," (",(0,r.kt)("a",{parentName:"p",href:"https://onbjerg.github.io/foundry-book/projects/dependencies.html"},"similarly to Foundry"),"). This is the reason Protostar expects ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"git")," to be installed. Keep this in mind, especially if your project uses git submodules."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Using Git submodules as a foundation for package management is not an ideal approach. Therefore, ",(0,r.kt)("a",{parentName:"p",href:"https://starkware.co/"},"Starkware")," plans to create a proper package manager.")),(0,r.kt)("h2",{id:"adding-a-dependency"},"Adding a dependency"),(0,r.kt)("p",null,"To add a dependency, inside project directory, run ",(0,r.kt)("inlineCode",{parentName:"p"},"protostar install EXTERNAL_DEPENDENCY_REFERENCE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Installing a dependency from link to a repository."',title:'"Installing',a:!0,dependency:!0,from:!0,link:!0,to:!0,'repository."':!0},"$ protostar install OpenZeppelin/cairo-contracts@v0.4.0\n12:00:00 [INFO] Installing cairo_contracts (https://github.com/OpenZeppelin/cairo-contracts)\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"OpenZeppelin Contracts for Cairo strongly discourages installing directly from the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch. It is recommended to always include the tag in the ",(0,r.kt)("a",{parentName:"p",href:"#external-dependency-reference-formats"},"External dependency reference format"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:"title=\"'lib' category contains the installed dependency.\"",title:"\"'lib'",category:!0,contains:!0,the:!0,installed:!0,'dependency."':!0},"$ tree -L 2\n.\n\u251c\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 cairo_contracts\n\u251c\u2500\u2500 protostar.toml\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 main.cairo\n\u2514\u2500\u2500 tests\n    \u2514\u2500\u2500 test_main.cairo\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Protostar creates a git commit after installing a dependency.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you use a dependency that uses absolute imports, you have to specify a cairo-path to the project's root directory of that dependency. You can do it in the following way:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="./lib/cairo_contracts/src/openzeppelin/account/presets/Account.cairo"',title:'"./lib/cairo_contracts/src/openzeppelin/account/presets/Account.cairo"'},"// ...\n\nfrom openzeppelin.introspection.ERC165.library import ERC165\n\n// ...\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"protostar build --cairo-path ./lib/cairo_contracts/src\n"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can configure your ",(0,r.kt)("inlineCode",{parentName:"p"},"cairo-path")," in ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/project-initialization#protostartoml"},"the configuration file"),".")),(0,r.kt)("h3",{id:"external-dependency-reference-formats"},"External dependency reference formats"),(0,r.kt)("p",null,"Protostar supports the following ways of referencing external dependency:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GITHUB_ACCOUNT_NAME/REPO_NAME[@TAG]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OpenZeppelin/cairo-contracts@v0.4.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"URL_TO_THE_REPOSITORY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://github.com/OpenZeppelin/cairo-contracts"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SSH_URI")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"git@github.com:OpenZeppelin/cairo-contracts.git"))))),(0,r.kt)("h3",{id:"aliases"},"Aliases"),(0,r.kt)("p",null,"Protostar supports installing dependencies under a different name. This allows you to resolve a name conflict, in case of two GitHub users use the same name for their library. In order to install a package under a custom name, run ",(0,r.kt)("inlineCode",{parentName:"p"},"protostar install EXTERNAL_DEPENDENCY_REFERENCE --name CUSTOM_NAME"),". ",(0,r.kt)("a",{parentName:"p",href:"#updating-dependencies"},"Updating dependencies")," section explains how to refer to installed dependency."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Installing a dependency under different name."',title:'"Installing',a:!0,dependency:!0,under:!0,different:!0,'name."':!0},"$ protostar install https://github.com/OpenZeppelin/cairo-contracts --name open_zeppelin\n10:09:51 [INFO] Installing open_zeppelin (https://github.com/OpenZeppelin/cairo-contracts)\n")),(0,r.kt)("h2",{id:"installing-dependencies-after-cloning-a-repository"},"Installing dependencies after cloning a repository"),(0,r.kt)("p",null,"If you ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-clone"},"clone")," Protostar project using dependencies without ",(0,r.kt)("inlineCode",{parentName:"p"},"--recurse-submodules")," flag, you need to install dependencies using Protostar. Otherwise, your project won't compile and tests will fail. To do so, run ",(0,r.kt)("inlineCode",{parentName:"p"},"protostar install")," in the project directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Protostar will install all submodules from the dependencies directory."',title:'"Protostar',will:!0,install:!0,all:!0,submodules:!0,from:!0,the:!0,dependencies:!0,'directory."':!0},"$ protostar install\n09:37:42 [INFO] Installing cairo_contracts (https://github.com/OpenZeppelin/cairo-contracts)\n")),(0,r.kt)("h2",{id:"updating-dependencies"},"Updating dependencies"),(0,r.kt)("p",null,"To update:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a single dependency, run ",(0,r.kt)("inlineCode",{parentName:"li"},"protostar update LOCAL_DEPENDENCY_REFERENCE/EXTERNAL_DEPENDENCY_REFERENCE")),(0,r.kt)("li",{parentName:"ul"},"all dependencies, run ",(0,r.kt)("inlineCode",{parentName:"li"},"protostar update"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LOCAL_DEPENDENCY_REFERENCE")," is a directory name of a dependency, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Updating a previously installed dependency."',title:'"Updating',a:!0,previously:!0,installed:!0,'dependency."':!0},"$ protostar update cairo_contracts\n10:03:52 [INFO] Package already up to date.\n")),(0,r.kt)("p",null,"If the default branch of a dependency's repository uses ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Basics-Tagging"},"tags"),", Protostar will pull a commit marked with the newest tag. Otherwise, Protostar will pull a recent commit from the default branch."),(0,r.kt)("h2",{id:"removing-dependencies"},"Removing dependencies"),(0,r.kt)("p",null,"To remove a dependency, run ",(0,r.kt)("inlineCode",{parentName:"p"},"protostar remove LOCAL_DEPENDENCY_REFERENCE/EXTERNAL_DEPENDENCY_REFERENCE"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Removing a dependency."',title:'"Removing',a:!0,'dependency."':!0},"$ protostar remove cairo_contracts\n10:04:26 [INFO] Removing cairo_contracts\n")))}d.isMDXComponent=!0}}]);
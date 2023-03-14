"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3669],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3823:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(3117),i=(n(7294),n(3905));const o={sidebar_label:"Project initialization"},a="Project initialization",l={unversionedId:"tutorials/cairo-1-support/project-initialization",id:"tutorials/cairo-1-support/project-initialization",title:"Project initialization",description:"Creating a project",source:"@site/docs/tutorials/08-cairo-1-support/01-project-initialization.md",sourceDirName:"tutorials/08-cairo-1-support",slug:"/tutorials/cairo-1-support/project-initialization",permalink:"/protostar/docs/tutorials/cairo-1-support/project-initialization",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/08-cairo-1-support/01-project-initialization.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Project initialization"},sidebar:"tutorials",previous:{title:"End-to-end tests",permalink:"/protostar/docs/tutorials/testing/e2e"},next:{title:"Testing",permalink:"/protostar/docs/tutorials/cairo-1-support/testing"}},c={},p=[{value:"Creating a project",id:"creating-a-project",level:2},{value:"Cairo 1 modules",id:"cairo-1-modules",level:2},{value:"Project defaults",id:"project-defaults",level:3},{value:"1. <code>cairo_project.toml</code>",id:"1-cairo_projecttoml",level:4},{value:"2. <code>lib.cairo</code>",id:"2-libcairo",level:4},{value:"Creating and using a new module",id:"creating-and-using-a-new-module",level:3},{value:"The protostar.toml",id:"the-protostartoml",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"project-initialization"},"Project initialization"),(0,i.kt)("h2",{id:"creating-a-project"},"Creating a project"),(0,i.kt)("p",null,"To create a new Protostar project with cairo1 support, you will need to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"protostar init-cairo1")," command followed by the name of your project. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"protostar init-cairo1 my-project\n")),(0,i.kt)("p",null,"After running the command, the following structure will be generated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"my-project/\n\u251c\u2500\u2500 src/\n\u2502   \u2514\u2500\u2500 main.cairo\n\u2502   \u2514\u2500\u2500 lib.cairo\n\u2502   \u2514\u2500\u2500 cairo_project.toml\n\u251c\u2500\u2500 tests/\n\u2502   \u2514\u2500\u2500 test_main.cairo\n\u2514\u2500\u2500 protostar.toml\n")),(0,i.kt)("p",null,"This template contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src")," directory",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cairo_project.toml")," which is needed for compilation "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"main.cairo")," file with one function definition"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lib.cairo")," file which defines the module"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test")," directory",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Single test file with one test for function defined in ",(0,i.kt)("inlineCode",{parentName:"li"},"main.cairo")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"protostar.toml")," containing information about the project")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"This template will be changed in future versions, but the old one will still be usable with newer protostar versions")),(0,i.kt)("h2",{id:"cairo-1-modules"},"Cairo 1 modules"),(0,i.kt)("p",null,"In order to understand how to create Cairo 1.0 modules, we need to talk about the purpose of ",(0,i.kt)("inlineCode",{parentName:"p"},"cairo_project.toml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.cairo"),"."),(0,i.kt)("h3",{id:"project-defaults"},"Project defaults"),(0,i.kt)("h4",{id:"1-cairo_projecttoml"},"1. ",(0,i.kt)("inlineCode",{parentName:"h4"},"cairo_project.toml")),(0,i.kt)("p",null,"It is needed for the definition of crate roots, which are the places where ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.cairo")," files are located."),(0,i.kt)("p",null,"The default ",(0,i.kt)("inlineCode",{parentName:"p"},"cairo_project.toml")," file contains only the definition of the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," crate "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[crate_roots]\nsrc = "."\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," crate is then imported in our tests in the following manner:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"use src::main::fib;\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"If you edit crate name in ",(0,i.kt)("inlineCode",{parentName:"p"},"cairo_project.toml"),", make sure to reflect the changes in ",(0,i.kt)("inlineCode",{parentName:"p"},"linked-libraries")," entry in ",(0,i.kt)("inlineCode",{parentName:"p"},"protostar.toml")," as well")),(0,i.kt)("h4",{id:"2-libcairo"},"2. ",(0,i.kt)("inlineCode",{parentName:"h4"},"lib.cairo")),(0,i.kt)("p",null,"It is the root of the module tree of the package. Here you can define functions, declare used modules, etc."),(0,i.kt)("p",null,"The default one has only the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," module declaration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mod main;\n")),(0,i.kt)("h3",{id:"creating-and-using-a-new-module"},"Creating and using a new module"),(0,i.kt)("p",null,"Suppose we wanted to create a module called ",(0,i.kt)("inlineCode",{parentName:"p"},"mod1")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," crate and use it in tests."),(0,i.kt)("p",null,"Here are the steps we need to take:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"mod1")," directory in the ",(0,i.kt)("inlineCode",{parentName:"li"},"src")," crate"),(0,i.kt)("li",{parentName:"ol"},"Create ",(0,i.kt)("inlineCode",{parentName:"li"},"mod1.cairo")," alongside this directory. "),(0,i.kt)("li",{parentName:"ol"},"Create your source file inside of ",(0,i.kt)("inlineCode",{parentName:"li"},"mod1")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"functions.cairo")," or any suitable name). Define your code here."),(0,i.kt)("li",{parentName:"ol"},"Declare the source file/files in ",(0,i.kt)("inlineCode",{parentName:"li"},"mod1.cairo"),". The file contents should look like this (assuming you have ",(0,i.kt)("inlineCode",{parentName:"li"},"functions.cairo")," from the previous step):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mod functions;\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Declare the module in the root of the module tree - ",(0,i.kt)("inlineCode",{parentName:"li"},"lib.cairo"),". After adding, the file contents should look like this:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mod main;\nmod mod1;\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"You can import the symbols from ",(0,i.kt)("inlineCode",{parentName:"li"},"functions.cairo")," in tests. For example, in ",(0,i.kt)("inlineCode",{parentName:"li"},"test_main.cairo"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"use src::mod1::functions::three;\n\n#[test]\nfn test_numbers() {\n    assert(3 == three(), 'three() == 3');\n}\n")),(0,i.kt)("h2",{id:"the-protostartoml"},"The protostar.toml"),(0,i.kt)("p",null,"Apart from the usual things you can find in ",(0,i.kt)("inlineCode",{parentName:"p"},"protostar.toml"),", there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"linked-libarires")," entry which is used to find cairo 1 modules in tests and building.\nThis makes it possible for you to include other modules from your dependencies if they are correct cairo 1 modules (with their own module definition and ",(0,i.kt)("inlineCode",{parentName:"p"},"cairo_project.toml"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[project]\nprotostar-version = "0.9.2"\nlib-path = "lib"\nlinked-libraries = ["src"]\n\n[contracts]\n')),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"[contracts]")," section is not usable right now, since protostar can't build cairo 1 contracts yet ")))}u.isMDXComponent=!0}}]);
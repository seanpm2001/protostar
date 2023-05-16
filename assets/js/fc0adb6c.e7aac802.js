"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5001],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,i(i({ref:e},p),{},{components:n})):r.createElement(k,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6066:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_label:"Project initialization"},i="Project initialization",c={unversionedId:"cairo-1/project-initialization",id:"cairo-1/project-initialization",title:"Project initialization",description:"Creating a project",source:"@site/docs/cairo-1/03-project-initialization.md",sourceDirName:"cairo-1",slug:"/cairo-1/project-initialization",permalink:"/protostar/docs/cairo-1/project-initialization",draft:!1,editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/cairo-1/03-project-initialization.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Project initialization"},sidebar:"cairo1",previous:{title:"Understanding Cairo packages",permalink:"/protostar/docs/cairo-1/understanding-cairo-packages"},next:{title:"Understanding protostar.toml",permalink:"/protostar/docs/cairo-1/protostar-toml"}},l={},s=[{value:"Creating a project",id:"creating-a-project",level:2},{value:"<code>hello_starknet</code>",id:"hello_starknet",level:3},{value:"<code>cairo_project.toml</code> and <code>lib.cairo</code>",id:"cairo_projecttoml-and-libcairo",level:3},{value:"<code>contracts</code>",id:"contracts",level:3},{value:"<code>business_logic</code>",id:"business_logic",level:3},{value:"<code>contracts.cairo</code> and <code>business_logic.cairo</code>",id:"contractscairo-and-business_logiccairo",level:3},{value:"<code>tests</code>",id:"tests",level:3},{value:"<code>protostar.toml</code>",id:"protostartoml",level:3},{value:"Using multiple contracts in project",id:"using-multiple-contracts-in-project",level:2},{value:"Multi-contract project structure",id:"multi-contract-project-structure",level:3},{value:"Testing multi-contract projects",id:"testing-multi-contract-projects",level:3}],p={toc:s};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-initialization"},"Project initialization"),(0,o.kt)("h2",{id:"creating-a-project"},"Creating a project"),(0,o.kt)("p",null,"To create a new Protostar project with cairo 1 support, run "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"protostar init my-project\n")),(0,o.kt)("p",null,"After running the command, the following structure will be generated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my_project/\n\u251c\u2500\u2500 hello_starknet/\n\u2502   \u251c\u2500\u2500 src/\n\u2502   \u2502   \u251c\u2500\u2500 business_logic/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 utils.cairo\n\u2502   \u2502   \u251c\u2500\u2500 contracts/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 hello_starknet.cairo\n\u2502   \u2502   \u251c\u2500\u2500 business_logic.cairo\n\u2502   \u2502   \u251c\u2500\u2500 contracts.cairo\n\u2502   \u2502   \u2514\u2500\u2500 lib.cairo\n\u2502   \u2514\u2500\u2500 cairo_project.toml\n\u251c\u2500\u2500 tests/\n\u2502   \u251c\u2500\u2500 test_hello_starknet.cairo\n\u2502   \u2514\u2500\u2500 test_utils.cairo\n\u2514\u2500\u2500 protostar.toml\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This template will be changed in future versions, but the old one will still be usable with newer protostar versions")),(0,o.kt)("h3",{id:"hello_starknet"},(0,o.kt)("inlineCode",{parentName:"h3"},"hello_starknet")),(0,o.kt)("p",null,"This directory contains our only package in this project - ",(0,o.kt)("inlineCode",{parentName:"p"},"hello_starknet"),"."),(0,o.kt)("h3",{id:"cairo_projecttoml-and-libcairo"},(0,o.kt)("inlineCode",{parentName:"h3"},"cairo_project.toml")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"lib.cairo")),(0,o.kt)("p",null,"All Cairo1 packages must define these files."),(0,o.kt)("p",null,"You can learn about ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/cairo-1/understanding-cairo-packages"},"packages")," and how\nto ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/cairo-1/understanding-cairo-packages#adding-a-new-module"},"add new module to a package")," in\nfurther sections."),(0,o.kt)("h3",{id:"contracts"},(0,o.kt)("inlineCode",{parentName:"h3"},"contracts")),(0,o.kt)("p",null,"This directory contains the code of our contract - ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloStarknet"),". As a good practice, we recommend this directory\ncontains only the contract definition, business logic should be kept in other modules."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Currently protostar only supports having one contract per package. You cannot add more contracts to this directory. To\nuse multiple contracts in your project see ",(0,o.kt)("a",{parentName:"p",href:"#using-multiple-contracts-in-project"},"this section"),".")),(0,o.kt)("h3",{id:"business_logic"},(0,o.kt)("inlineCode",{parentName:"h3"},"business_logic")),(0,o.kt)("p",null,"This directory contains standalone cairo1 methods that can be imported and used in the contract definition. We recommend\nwriting business logic in this directory to simplify writing unit tests."),(0,o.kt)("h3",{id:"contractscairo-and-business_logiccairo"},(0,o.kt)("inlineCode",{parentName:"h3"},"contracts.cairo")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"business_logic.cairo")),(0,o.kt)("p",null,"These files are necessary so that they can be imported in the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib.cairo")," file."),(0,o.kt)("h3",{id:"tests"},(0,o.kt)("inlineCode",{parentName:"h3"},"tests")),(0,o.kt)("p",null,"All ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/cairo-1/testing/"},"tests")," should be defined in this directory."),(0,o.kt)("h3",{id:"protostartoml"},(0,o.kt)("inlineCode",{parentName:"h3"},"protostar.toml")),(0,o.kt)("p",null,"This file contains the ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/cairo-1/protostar-toml"},"configuration for the Protostar project"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Even though ",(0,o.kt)("inlineCode",{parentName:"p"},"hello_starknet.cairo")," file is defined in the nested directory, we use a package\ndirectory ",(0,o.kt)("inlineCode",{parentName:"p"},'"hello_starknet"')," as path to the contract. This is necessary for the imports from modules within package\ncontaining the contract (like ",(0,o.kt)("inlineCode",{parentName:"p"},"business_logic"),") to work.")),(0,o.kt)("h2",{id:"using-multiple-contracts-in-project"},"Using multiple contracts in project"),(0,o.kt)("p",null,"Due to limitations of the Cairo 1 compiler, having multiple contracts defined in the package will cause\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"protostar build")," command and other commands to fail."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"That is, having projects structured like this is not valid and will not work correctly.")),(0,o.kt)("h3",{id:"multi-contract-project-structure"},"Multi-contract project structure"),(0,o.kt)("p",null,"Each contract must be defined in the separate package: A different directory with separate ",(0,o.kt)("inlineCode",{parentName:"p"},"cairo_project.toml"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"lib.cairo")," files defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my_project/\n\u251c\u2500\u2500 package1/\n\u2502   \u251c\u2500\u2500 src/\n\u2502   \u2502   \u251c\u2500\u2500 contracts/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 hello_starknet.cairo\n\u2502   \u2502  ...\n\u2502   \u2502   \u251c\u2500\u2500 contracts.cairo\n\u2502   \u2502   \u2514\u2500\u2500 lib.cairo\n\u2502   \u2514\u2500\u2500 cairo_project.toml\n\u251c\u2500\u2500 package2/\n\u2502   \u251c\u2500\u2500 src/\n\u2502   \u2502   \u251c\u2500\u2500 contracts/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 other_contract.cairo\n\u2502   \u2502  ...\n\u2502   \u2502   \u251c\u2500\u2500 contracts.cairo\n\u2502   \u2502   \u2514\u2500\u2500 lib.cairo\n\u2502   \u2514\u2500\u2500 cairo_project.toml\n...\n\u2514\u2500\u2500 protostar.toml\n")),(0,o.kt)("p",null,"Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"[crate_roots]")," are correctly defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="package1/cairo_project.toml"',title:'"package1/cairo_project.toml"'},'[crate_roots]\npackage1 = "src"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="package2/cairo_project.toml"',title:'"package2/cairo_project.toml"'},'[crate_roots]\npackage2 = "src"\n')),(0,o.kt)("p",null,"Define each contract in the ",(0,o.kt)("inlineCode",{parentName:"p"},"[contracts]")," section of the protostar.toml and each package\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"linked-librares")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'# ...\nlinked-libraries = ["package1", "package2"]\n\n[contracts]\nhello_starknet = ["package1"]\nother_contract = ["package2"]\n')),(0,o.kt)("h3",{id:"testing-multi-contract-projects"},"Testing multi-contract projects"),(0,o.kt)("p",null,"For example, to test function ",(0,o.kt)("inlineCode",{parentName:"p"},"returns_two")," defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package1/business_logic/utils.cairo")," write"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Example test"',title:'"Example','test"':!0},"#[test]\nfn test_returns_two() {\n    assert(package1::business_logic::utils::returns_two() == 2, 'Should return 2');\n}\n")),(0,o.kt)("p",null,"Or using the ",(0,o.kt)("inlineCode",{parentName:"p"},"use path:to::mod")," syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Example test',title:'"Example',test:!0},"use package1::business_logic::utils::returns_two;\n\n#[test]\nfn test_returns_two() {\n    assert(returns_two() == 2, 'Should return 2');\n}\n")),(0,o.kt)("p",null,"Make sure that the path::to:the::module is correct for your package structure."),(0,o.kt)("p",null,"For more details on of how to test contracts, see ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/cairo-1/testing/"},"this page"),"."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[898],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="reflect",s={unversionedId:"tutorials/testing/cheatcodes/reflect",id:"tutorials/testing/cheatcodes/reflect",title:"reflect",description:"Loads specified Cairo object into Python type. It is an instance of the Reflector object that works simillarly to ids. To retrieve the value use get() method which can return:",source:"@site/docs/tutorials/07-testing/02-cheatcodes/reflect.md",sourceDirName:"tutorials/07-testing/02-cheatcodes",slug:"/tutorials/testing/cheatcodes/reflect",permalink:"/protostar/docs/tutorials/testing/cheatcodes/reflect",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/07-testing/02-cheatcodes/reflect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"prepare",permalink:"/protostar/docs/tutorials/testing/cheatcodes/prepare"},next:{title:"reject",permalink:"/protostar/docs/tutorials/testing/cheatcodes/reject"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reflect"},(0,o.kt)("inlineCode",{parentName:"h1"},"reflect")),(0,o.kt)("p",null,"Loads specified Cairo object into Python type. It is an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reflector")," object that works simillarly to ",(0,o.kt)("inlineCode",{parentName:"p"},"ids"),". To retrieve the value use ",(0,o.kt)("inlineCode",{parentName:"p"},"get()")," method which can return:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int")," (for felt)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RelocatableValue")," (for pointer)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CairoStruct")," (for more complex types)")),(0,o.kt)("p",null,"You can use it to print cairo data and compare complex structures."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo",metastring:"title=Printing",title:"Printing"},"%lang starknet\n\nstruct SimpleStruct:\n    member x: felt\nend\n\n@external\nfunc test_reflect_simple():\n    alloc_locals\n\n    local simple_struct: SimpleStruct = SimpleStruct(x=10)\n\n    %{\n        simple_struct = reflect.simple_struct.get()\n        print(simple_struct)\n        # output:\n        # CairoStruct(\n        #     x=10\n        # )\n\n        assert simple_struct.x == 10\n    %}\n\n    return()\nend\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo",metastring:"title=Pointers",title:"Pointers"},"%lang starknet\n\nfrom starkware.cairo.common.registers import get_fp_and_pc\n\n@external\nfunc test_pointers():\n    alloc_locals\n\n    let (__fp__, _) = get_fp_and_pc()\n\n    local pointee: felt = 13\n    local ptr1: felt* = &pointee\n    local ptr2: felt* = &pointee\n    \n    %{\n        ptr1 = reflect.ptr1.get()\n        ptr2 = reflect.ptr2.get()\n\n        print(ptr1) # output: 1:8\n        print(type(ptr1)) # output: RelocatableValue\n        assert ptr1 == ptr2  # Pointers are compared directly using their addresses\n    %}\n    return ()\nend\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo",metastring:"title=Nested comparisons",title:"Nested",comparisons:!0},"%lang starknet\n\nstruct InnerStruct:\n    member value: felt\nend\n\nstruct OuterStruct:\n    member inner_struct: InnerStruct\nend\n\n@external\nfunc test_nesting():\n    alloc_locals\n    local inner_struct: InnerStruct = InnerStruct(value=7)\n    local outer_struct: OuterStruct = OuterStruct(inner_struct=inner_struct)\n\n    %{\n        outer_struct = reflect.outer_struct.get()\n        OuterStruct = CairoStruct #\n        InnerStruct = CairoStruct # This way you can add aliases for readability\n\n        # You can compare nested structs\n        assert outer_struct == OuterStruct(\n            inner_struct=InnerStruct(\n                value=7\n            )\n        )\n    %}\n    return ()\nend\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo",metastring:"title=Wildcards",title:"Wildcards"},"%lang starknet\n\nstruct TwoFieldStruct:\n    member value1: felt\n    member value2: felt\nend\n\n@external\nfunc test_wildcards():\n    alloc_locals\n    local two_field_struct: TwoFieldStruct = TwoFieldStruct(value1=23, value2=17)\n    \n    %{\n        two_field_struct = reflect.two_field_struct.get()\n        assert two_field_struct == CairoStruct(\n            value1=23,\n            value2=two_field_struct.value2\n            # You can use struct members in comparison to make sure it evaluates to true\n        )\n    %}\n    return ()\nend\n")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"ids"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"reflect")," does not automatically dereference pointers. Currently you have to dereference them in Cairo."))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"reflect")," does not work for references created with ",(0,o.kt)("inlineCode",{parentName:"p"},"let"),"."))))}m.isMDXComponent=!0}}]);
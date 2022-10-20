/*! For license information please see 1be78505.e23d4f37.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,4972],{5516:function(e,t,n){n.r(t),n.d(t,{default:function(){return xe}});var a=n(7294),l=n(4334),r=n(833),o=n(5281),i=n(3320),c=n(2802),s=n(4477),d=n(1116),m=n(7767),u=n(5999),p=n(2466),b=n(5936);var h="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:o,cancelScroll:i}=(0,p.Ct)();return(0,p.RF)(((e,n)=>{let{scrollY:a}=e;const o=null==n?void 0:n.scrollY;o&&(r.current?r.current=!1:a>=o?(i(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,b.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var g=n(6550),v=n(7524),_=n(6668),k=n(1327),C=n(3117);function I(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var y="collapseSidebarButton_PEFL",S="collapseSidebarButtonIcon_kv0_";function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",y),onClick:t},a.createElement(I,{className:S}))}var Z=n(9689),x=n(902);const T=Symbol("EmptyContext"),w=a.createContext(T);function L(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(w.Provider,{value:r},t)}var M=n(6043),A=n(8596),B=n(9960),F=n(2389);function P(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function D(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:p,className:b,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),f=function(e){const t=(0,F.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),g=(0,c._F)(t,r),v=(0,A.Mg)(h,r),{collapsed:k,setCollapsed:I}=(0,M.u)({initialState:()=>!!p&&(!g&&t.collapsed)}),{expandedItem:y,setExpandedItem:S}=function(){const e=(0,a.useContext)(w);if(e===T)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=function(e){void 0===e&&(e=!k),S(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,x.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:g,collapsed:k,updateCollapsed:N}),(0,a.useEffect)((()=>{p&&null!=y&&y!==s&&E&&I(!0)}),[p,y,s,I,E]),a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},b)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(B.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!h&&p,"menu__link--active":g}),onClick:p?e=>{null==n||n(t),h?N(!1):(e.preventDefault(),N())}:()=>{null==n||n(t)},"aria-current":v?"page":void 0,"aria-expanded":p?!k:void 0,href:p?f??"#":f},d),u),h&&p&&a.createElement(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),N()}})),a.createElement(M.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(K,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:r,level:i+1})))}var H=n(3919),R=n(9471),O="menuExternalLink_NmtK";function W(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{href:m,label:u,className:p,autoAddBaseUrl:b}=t,h=(0,c._F)(t,r),E=(0,H.Z)(m);return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",p),key:u},a.createElement(B.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!E&&O,{"menu__link--active":h}),autoAddBaseUrl:b,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(R.Z,null)))}var U="menuHtmlItem_M9Kj";function z(e){let{item:t,level:n,index:r}=e;const{value:i,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[U,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:i}})}function j(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(D,(0,C.Z)({item:t},n));case"html":return a.createElement(z,(0,C.Z)({item:t},n));default:return a.createElement(W,(0,C.Z)({item:t},n))}}function G(e){let{items:t,...n}=e;return a.createElement(L,null,t.map(((e,t)=>a.createElement(j,(0,C.Z)({key:t,item:e,index:t},n)))))}var K=(0,a.memo)(G),V="menu_SIkG",Y="menuWithAnnouncementBar_GW3s";function q(e){let{path:t,sidebar:n,className:r}=e;const i=function(){const{isActive:e}=(0,Z.nT)(),[t,n]=(0,a.useState)(e);return(0,p.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",V,i&&Y,r)},a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:n,activePath:t,level:1})))}var $="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",X="sidebarHidden_VK0M",Q="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:n,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,_.L)();return a.createElement("div",{className:(0,l.Z)($,i&&J,o&&X)},i&&a.createElement(k.Z,{tabIndex:-1,className:Q}),a.createElement(q,{path:t,sidebar:n}),c&&a.createElement(N,{onClick:r}))}var te=a.memo(ee),ne=n(3102),ae=n(2961);const le=e=>{let{sidebar:t,path:n}=e;const r=(0,ae.e)();return a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function re(e){return a.createElement(ne.Zo,{component:le,props:e})}var oe=a.memo(re);function ie(e){const t=(0,v.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(te,e),l&&a.createElement(oe,e))}var ce="expandButton_m80_",se="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ce,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:se}))}var me="docSidebarContainer_b6E3",ue="docSidebarContainerHidden_b3ry";function pe(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:(null==n?void 0:n.name)??"noSidebar"},t)}function be(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:i}=(0,g.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),r((e=>!e))}),[r,c]);return a.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,me,n&&ue),onTransitionEnd:e=>{e.currentTarget.classList.contains(me)&&n&&s(!0)}},a.createElement(pe,null,a.createElement(ie,{sidebar:t,path:i,onCollapse:d,isHidden:c})),c&&a.createElement(de,{toggleSidebar:d}))}var he={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ee(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(he.docMainContainer,(t||!r)&&he.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,t&&he.docItemWrapperEnhanced)},n))}var fe=n(5893);function ge({id:e,host:t,repo:l,repoId:r,category:o,categoryId:i,mapping:c,term:s,strict:d,reactionsEnabled:m,emitMetadata:u,inputPosition:p,theme:b,lang:h,loading:E}){const[f,g]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{f||(n.e(2891).then(n.bind(n,2891)),g(!0))}),[]),f?(0,fe.jsx)("giscus-widget",{id:e,host:t,repo:l,repoid:r,category:o,categoryid:i,mapping:c,term:s,strict:d,reactionsenabled:m,emitmetadata:u,inputposition:p,theme:b,lang:h,loading:E}):null}var ve=n(2949),_e=n(2263);function ke(e){let{children:t,...n}=e;const{isDarkTheme:l}=(0,ve.I)(),{siteConfig:r}=(0,_e.Z)();return a.createElement(Ee,n,t,a.createElement("div",{className:"row margin-top--md"},a.createElement("div",{className:"col"},a.createElement(ge,{repo:"software-mansion/protostar",repoId:"R_kgDOGw_HxA",categoryId:"DIC_kwDOGw_HxM4CSDJD",category:"Documentation",mapping:"title",reactionsEnabled:"0",emitMetadata:"0",inputPosition:"top",theme:l?"dark":"light",lang:r.i18n.defaultLocale,loading:"lazy"})),a.createElement("div",{className:"col col--3"})))}var Ce="docPage__5DB",Ie="docsWrapper_BCFX";function ye(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:Ie},a.createElement(f,null),a.createElement("div",{className:Ce},n&&a.createElement(be,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(ke,{hiddenSidebarContainer:l},t)))}var Se=n(4972),Ne=n(197);function Ze(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(Ne.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function xe(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(Se.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(Ze,e),a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(ye,null,i)))))}},4972:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(7294),l=n(5999),r=n(833),o=n(7767);function i(){return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},5251:function(e,t,n){n(7418);var a=n(7294),l=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;l=r("react.element"),r("react.fragment")}var o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var a,r={},s=null,d=null;for(a in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:l,type:e,key:s,ref:d,props:r,_owner:o.current}}t.jsx=s},5893:function(e,t,n){e.exports=n(5251)}}]);
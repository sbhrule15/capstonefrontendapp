(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[118],{1247:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(221);function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l,c=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){o=!0,l=e},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw l}}}}},1405:function(e,t,a){"use strict";var r=a(1),n=a(121),l=a(4),c=a(0),o=(a(90),a(3),a(2)),i=a(7),s=a(178),u=a(17),m=a(49),f=Object(m.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),d=a(179);var p=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(l.a)(e,["classes"]);return c.createElement(d.a,Object(r.a)({component:"li",className:t.root,focusRipple:!0},a),c.createElement(f,{className:t.icon}))}));var b=c.forwardRef((function(e,t){var a=e.children,i=e.classes,u=e.className,m=e.component,f=void 0===m?"nav":m,d=e.expandText,b=void 0===d?"Show path":d,h=e.itemsAfterCollapse,v=void 0===h?1:h,x=e.itemsBeforeCollapse,y=void 0===x?1:x,g=e.maxItems,E=void 0===g?8:g,j=e.separator,N=void 0===j?"/":j,O=Object(l.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),w=c.useState(!1),S=w[0],C=w[1],k=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return c.createElement(s.a,Object(r.a)({ref:t,component:f,color:"textSecondary",className:Object(o.default)(i.root,u)},O),c.createElement("ol",{className:i.ol},function(e,t,a){return e.reduce((function(r,n,l){return l<e.length-1?r=r.concat(n,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(l),className:t},a)):r.push(n),r}),[])}(S||E&&k.length<=E?k:function(e){return y+v>=e.length?e:[].concat(Object(n.a)(e.slice(0,y)),[c.createElement(p,{"aria-label":b,key:"ellipsis",onClick:function(e){C(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(n.a)(e.slice(e.length-v,e.length)))}(k),i.separator,N)))}));t.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(b)},2625:function(e,t,a){"use strict";a.r(t);var r=a(1041),n=a(1029),l=a(518),c=a(2),o=a(0),i=a.n(o),s=a(366),u=a(368),m=a(141),f=a(95),d=a(23),p=a(517),b=a(1247),h=a(1405),v=a(178),x=a(39);var y=function(e){var t=e.className,a=Object(x.h)().pathname,r=function e(t,a){if(t.url===a)return[];if(t.children){var r,n=Object(b.a)(t.children);try{for(n.s();!(r=n.n()).done;){var l=r.value,c=e(l,a);if(Array.isArray(c))return c.unshift(l),c}}catch(o){n.e(o)}finally{n.f()}}return!1}(p.a,a)||[];return i.a.createElement("div",{className:Object(c.default)("",t)},i.a.createElement(h.a,{"aria-label":"breadcrumb"},i.a.createElement(d.a,{className:"font-bold hover:underline",color:"secondary",to:"/documentation",role:"button"},"Documentation"),r.map((function(e){return i.a.createElement(v.a,{key:e.id,className:"cursor-default"},e.title)}))))};t.default=function(e){e.content;var t=e.route,a=Object(o.useRef)(null);return i.a.createElement(u.a,{classes:{root:"h-full",contentWrapper:"p-16 md:p-24",content:"flex flex-col h-full",leftSidebar:"w-288 pt-8",header:"h-64 min-h-64",wrapper:"min-h-0"},header:i.a.createElement("div",{className:"flex items-center justify-center px-4 md:px-12 h-full w-full"},i.a.createElement(r.a,{lgUp:!0},i.a.createElement(l.a,{onClick:function(e){return a.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},i.a.createElement(n.a,null,"menu"))),i.a.createElement("div",{className:"flex flex-1 items-center sm:justify-center px-8 lg:px-12"},i.a.createElement(d.a,{color:"inherit",to:"/documentation",className:"text-16 md:text-18 font-500 flex items-center",role:"button"},i.a.createElement(n.a,{className:"mr-8"},"import_contacts")," ",i.a.createElement("span",null,"Fuse React - Documentation")))),content:i.a.createElement("div",{className:"max-w-2xl min-h-full flex flex-auto flex-col"},i.a.createElement(y,null),i.a.createElement("div",{className:"flex flex-col flex-1 relative py-32"},i.a.createElement(m.a,null,Object(f.b)(t.routes)))),leftSidebarContent:i.a.createElement(s.a,{className:Object(c.default)("navigation"),navigation:p.a.children}),sidebarInner:!0,ref:a})}}}]);
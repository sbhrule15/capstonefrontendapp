(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[29],{1068:function(e,t,a){"use strict";var n=a(497);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=o.default.memo(o.default.forwardRef((function(t,a){return o.default.createElement(i.default,(0,r.default)({ref:a},t),e)})));0;return a.muiName=i.default.muiName,a};var r=n(a(131)),o=n(a(0)),i=n(a(997))},1069:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};var i=void 0,l=void 0;"undefined"!==typeof document&&(i=document),"undefined"!==typeof window&&(l=window);var c=t.FrameContext=o.default.createContext({document:i,window:l}),s=c.Provider,m=c.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=m},1070:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n=a(12),r=a(107),o=a(1051),i=a(1060),l=a(1029),c=a(1063),s=a(1064),m=a(0),u=a.n(m),d=a(11),f=a(9),p=a(66),g=a(67),v=a(117),h=a(116),b=a(982),y=a(495),E=a(1019),x=a(1050),j=a(7),O=a(339),N=a(340),C=a(1071),w=a.n(C),k=Object(b.a)({productionPrefix:"iframe-"}),A=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(O.a)(Object(f.a)(Object(f.a)({},Object(y.a)()),{},{plugins:[].concat(Object(d.a)(Object(y.a)().plugins),[Object(N.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),u.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.classes,n=e.theme;return u.a.createElement(w.a,{head:this.renderHead(),ref:this.handleRef,className:a.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?u.a.createElement(E.b,{jss:this.state.jss,generateClassName:k,sheetsManager:this.state.sheetsManager},u.a.createElement(x.a,{theme:n},u.a.cloneElement(t,{container:this.state.container}))):null)}}]),a}(u.a.Component),S=Object(j.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(A);function R(e){var t=Object(m.useState)(e.currentTabIndex),a=Object(n.a)(t,2),d=a[0],f=a[1],p=e.component,g=e.raw,v=e.iframe,h=e.className;return u.a.createElement(i.a,{className:h},u.a.createElement(o.a,{position:"static",color:"default",elevation:0},u.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:d,onChange:function(e,t){f(t)}},p&&u.a.createElement(c.a,{classes:{root:"min-w-64"},icon:u.a.createElement(l.a,null,"remove_red_eye")}),g&&u.a.createElement(c.a,{classes:{root:"min-w-64"},icon:u.a.createElement(l.a,null,"code")}))),u.a.createElement("div",{className:"flex justify-center max-w-full"},u.a.createElement("div",{className:0===d?"flex flex-1 max-w-full":"hidden"},p&&(v?u.a.createElement(S,null,u.a.createElement(p,null)):u.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},u.a.createElement(p,null)))),u.a.createElement("div",{className:1===d?"flex flex-1":"hidden"},g&&u.a.createElement("div",{className:"flex flex-1"},u.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},g.default)))))}R.defaultProps={currentTabIndex:0};var _=R},1071:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var n=a(1069);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return n.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return n.FrameContextConsumer}});var r,o=a(1072),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default},1072:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),i=u(o),l=u(a(15)),c=u(a(3)),s=a(1069),m=u(a(1073));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return n.handleLoad=function(){n.forceUpdate()},n._isMounted=!1,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,a=this.props.contentDidUpdate,n=e.defaultView||e.parentView,r=i.default.createElement(m.default,{contentDidMount:t,contentDidUpdate:a},i.default.createElement(s.FrameContextProvider,{value:{document:e,window:n}},i.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var o=this.getMountTarget();return[l.default.createPortal(this.props.head,this.getDoc().head),l.default.createPortal(r,o)]}},{key:"render",value:function(){var e=this,t=n({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,i.default.createElement("iframe",n({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(o.Component);d.propTypes={style:c.default.object,head:c.default.node,initialContent:c.default.string,mountTarget:c.default.string,contentDidMount:c.default.func,contentDidUpdate:c.default.func,children:c.default.oneOfType([c.default.element,c.default.arrayOf(c.default.element)])},d.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=d},1073:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=(i(r),i(a(3)));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);s.propTypes={children:o.default.element.isRequired,contentDidMount:o.default.func.isRequired,contentDidUpdate:o.default.func.isRequired},t.default=s},1219:function(e,t,a){"use strict";var n=a(497);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(1068)).default)(r.default.createElement("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder");t.default=o},1297:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),i=(a(3),a(2)),l=a(7),c=a(10),s=o.forwardRef((function(e,t){var a=e.anchorOrigin,l=void 0===a?{vertical:"top",horizontal:"right"}:a,s=e.badgeContent,m=e.children,u=e.classes,d=e.className,f=e.color,p=void 0===f?"default":f,g=e.component,v=void 0===g?"span":g,h=e.invisible,b=e.max,y=void 0===b?99:b,E=e.overlap,x=void 0===E?"rectangle":E,j=e.showZero,O=void 0!==j&&j,N=e.variant,C=void 0===N?"standard":N,w=Object(r.a)(e,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),k=h;null==h&&(0===s&&!O||null==s&&"dot"!==C)&&(k=!0);var A="";return"dot"!==C&&(A=s>y?"".concat(y,"+"):s),o.createElement(v,Object(n.a)({className:Object(i.default)(u.root,d),ref:t},w),m,o.createElement("span",{className:Object(i.default)(u.badge,u["".concat(l.horizontal).concat(Object(c.a)(l.vertical),"}")],u["anchorOrigin".concat(Object(c.a)(l.vertical)).concat(Object(c.a)(l.horizontal)).concat(Object(c.a)(x))],"default"!==p&&u["color".concat(Object(c.a)(p))],k&&u.invisible,"dot"===C&&u.dot)},A))}));t.a=Object(l.a)((function(e){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorError:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}}}),{name:"MuiBadge"})(s)},1379:function(e,t,a){"use strict";var n=a(497);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(1068)).default)(r.default.createElement("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment");t.default=o},1676:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var n=a(0),r=a.n(n),o=a(1028),i=a(1067),l=Object(o.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}}}}));function c(){var e=l();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),r.a.createElement(i.a,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),r.a.createElement(i.a,{alt:"Cindy Baker",src:"/material-ui-static/images/avatar/3.jpg"}))}},1677:function(e,t,a){"use strict";a.r(t),t.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Avatar from \'@material-ui/core/Avatar\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: \'flex\',\n    \'& > *\': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function ImageAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />\n      <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />\n    </div>\n  );\n}\n'},1678:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(0),r=a.n(n),o=a(1028),i=a(1067),l=a(399),c=a(397),s=Object(o.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(l.a[500]),backgroundColor:l.a[500]},purple:{color:e.palette.getContrastText(c.a[500]),backgroundColor:c.a[500]}}}));function m(){var e=s();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,null,"H"),r.a.createElement(i.a,{className:e.orange},"N"),r.a.createElement(i.a,{className:e.purple},"OP"))}},1679:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Avatar from '@material-ui/core/Avatar';\nimport { deepOrange, deepPurple } from '@material-ui/core/colors';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n  orange: {\n    color: theme.palette.getContrastText(deepOrange[500]),\n    backgroundColor: deepOrange[500],\n  },\n  purple: {\n    color: theme.palette.getContrastText(deepPurple[500]),\n    backgroundColor: deepPurple[500],\n  },\n}));\n\nexport default function LetterAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Avatar>H</Avatar>\n      <Avatar className={classes.orange}>N</Avatar>\n      <Avatar className={classes.purple}>OP</Avatar>\n    </div>\n  );\n}\n"},1680:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var n=a(0),r=a.n(n),o=a(1028),i=a(1067),l=Object(o.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}}}));function c(){var e=l();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg",className:e.small}),r.a.createElement(i.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),r.a.createElement(i.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg",className:e.large}))}},1681:function(e,t,a){"use strict";a.r(t),t.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Avatar from \'@material-ui/core/Avatar\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: \'flex\',\n    \'& > *\': {\n      margin: theme.spacing(1),\n    },\n  },\n  small: {\n    width: theme.spacing(3),\n    height: theme.spacing(3),\n  },\n  large: {\n    width: theme.spacing(7),\n    height: theme.spacing(7),\n  },\n}));\n\nexport default function ImageAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" className={classes.small} />\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" className={classes.large} />\n    </div>\n  );\n}\n'},1682:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(0),r=a.n(n),o=a(1028),i=a(166),l=a(164),c=a(1067),s=a(1219),m=a.n(s),u=a(1683),d=a.n(u),f=a(1379),p=a.n(f),g=Object(o.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},pink:{color:e.palette.getContrastText(i.a[500]),backgroundColor:i.a[500]},green:{color:"#fff",backgroundColor:l.a[500]}}}));function v(){var e=g();return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,null,r.a.createElement(m.a,null)),r.a.createElement(c.a,{className:e.pink},r.a.createElement(d.a,null)),r.a.createElement(c.a,{className:e.green},r.a.createElement(p.a,null)))}},1683:function(e,t,a){"use strict";var n=a(497);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(1068)).default)(r.default.createElement("path",{d:"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"}),"Pageview");t.default=o},1684:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport { green, pink } from '@material-ui/core/colors';\nimport Avatar from '@material-ui/core/Avatar';\nimport FolderIcon from '@material-ui/icons/Folder';\nimport PageviewIcon from '@material-ui/icons/Pageview';\nimport AssignmentIcon from '@material-ui/icons/Assignment';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n  pink: {\n    color: theme.palette.getContrastText(pink[500]),\n    backgroundColor: pink[500],\n  },\n  green: {\n    color: '#fff',\n    backgroundColor: green[500],\n  },\n}));\n\nexport default function IconAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Avatar>\n        <FolderIcon />\n      </Avatar>\n      <Avatar className={classes.pink}>\n        <PageviewIcon />\n      </Avatar>\n      <Avatar className={classes.green}>\n        <AssignmentIcon />\n      </Avatar>\n    </div>\n  );\n}\n"},1685:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(0),r=a.n(n),o=a(1028),i=a(1067),l=a(399),c=a(164),s=a(1379),m=a.n(s),u=Object(o.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},square:{color:e.palette.getContrastText(l.a[500]),backgroundColor:l.a[500]},rounded:{color:"#fff",backgroundColor:c.a[500]}}}));function d(){var e=u();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{variant:"square",className:e.square},"N"),r.a.createElement(i.a,{variant:"rounded",className:e.rounded},r.a.createElement(m.a,null)))}},1686:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Avatar from '@material-ui/core/Avatar';\nimport { deepOrange, green } from '@material-ui/core/colors';\nimport AssignmentIcon from '@material-ui/icons/Assignment';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n  square: {\n    color: theme.palette.getContrastText(deepOrange[500]),\n    backgroundColor: deepOrange[500],\n  },\n  rounded: {\n    color: '#fff',\n    backgroundColor: green[500],\n  },\n}));\n\nexport default function VariantAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Avatar variant=\"square\" className={classes.square}>\n        N\n      </Avatar>\n      <Avatar variant=\"rounded\" className={classes.rounded}>\n        <AssignmentIcon />\n      </Avatar>\n    </div>\n  );\n}\n"},1687:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(0),r=a.n(n),o=a(1028),i=a(1067),l=a(399),c=Object(o.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(l.a[500]),backgroundColor:l.a[500]}}}));function s(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{alt:"Remy Sharp",src:"/broken-image.jpg",className:e.orange},"B"),r.a.createElement(i.a,{alt:"Remy Sharp",src:"/broken-image.jpg",className:e.orange}),r.a.createElement(i.a,{src:"/broken-image.jpg"}))}},1688:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Avatar from '@material-ui/core/Avatar';\nimport { deepOrange } from '@material-ui/core/colors';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n  orange: {\n    color: theme.palette.getContrastText(deepOrange[500]),\n    backgroundColor: deepOrange[500],\n  },\n}));\n\nexport default function FallbackAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Avatar alt=\"Remy Sharp\" src=\"/broken-image.jpg\" className={classes.orange}>\n        B\n      </Avatar>\n      <Avatar alt=\"Remy Sharp\" src=\"/broken-image.jpg\" className={classes.orange} />\n      <Avatar src=\"/broken-image.jpg\" />\n    </div>\n  );\n}\n"},1689:function(e,t,a){"use strict";a.r(t),t.default='import React from \'react\';\nimport Avatar from \'@material-ui/core/Avatar\';\nimport AvatarGroup from \'@material-ui/lab/AvatarGroup\';\n\nexport default function GroupAvatars() {\n  return (\n    <AvatarGroup max={4}>\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />\n      <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />\n      <Avatar alt="Agnes Walker" src="/material-ui-static/images/avatar/4.jpg" />\n      <Avatar alt="Trevor Henderson" src="/material-ui-static/images/avatar/5.jpg" />\n    </AvatarGroup>\n  );\n}\n'},1690:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(0),r=a.n(n),o=a(1297),i=a(1067),l=a(7),c=a(1028),s=Object(l.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(o.a),m=Object(l.a)((function(e){return{root:{width:22,height:22,border:"2px solid ".concat(e.palette.background.paper)}}}))(i.a),u=Object(c.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}}}}));function d(){var e=u();return r.a.createElement("div",{className:e.root},r.a.createElement(s,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},r.a.createElement(i.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"})),r.a.createElement(o.a,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:r.a.createElement(m,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"})},r.a.createElement(i.a,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"})))}},1691:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport Badge from '@material-ui/core/Badge';\nimport Avatar from '@material-ui/core/Avatar';\nimport { makeStyles, withStyles } from '@material-ui/core/styles';\n\nconst StyledBadge = withStyles((theme) => ({\n  badge: {\n    backgroundColor: '#44b700',\n    color: '#44b700',\n    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,\n    '&::after': {\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      width: '100%',\n      height: '100%',\n      borderRadius: '50%',\n      animation: '$ripple 1.2s infinite ease-in-out',\n      border: '1px solid currentColor',\n      content: '\"\"',\n    },\n  },\n  '@keyframes ripple': {\n    '0%': {\n      transform: 'scale(.8)',\n      opacity: 1,\n    },\n    '100%': {\n      transform: 'scale(2.4)',\n      opacity: 0,\n    },\n  },\n}))(Badge);\n\nconst SmallAvatar = withStyles((theme) => ({\n  root: {\n    width: 22,\n    height: 22,\n    border: `2px solid ${theme.palette.background.paper}`,\n  },\n}))(Avatar);\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function BadgeAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <StyledBadge\n        overlap=\"circle\"\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'right',\n        }}\n        variant=\"dot\"\n      >\n        <Avatar alt=\"Remy Sharp\" src=\"/material-ui-static/images/avatar/1.jpg\" />\n      </StyledBadge>\n      <Badge\n        overlap=\"circle\"\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'right',\n        }}\n        badgeContent={<SmallAvatar alt=\"Remy Sharp\" src=\"/material-ui-static/images/avatar/1.jpg\" />}\n      >\n        <Avatar alt=\"Travis Howard\" src=\"/material-ui-static/images/avatar/2.jpg\" />\n      </Badge>\n    </div>\n  );\n}\n"},2437:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(0),r=a.n(n),o=a(1067),i=a(1),l=a(4),c=(a(3),a(90),a(2)),s=a(7),m={small:-16,medium:null},u=n.forwardRef((function(e,t){var a=e.children,r=e.classes,s=e.className,u=e.max,d=void 0===u?5:u,f=e.spacing,p=void 0===f?"medium":f,g=Object(l.a)(e,["children","classes","className","max","spacing"]),v=d<2?2:d,h=n.Children.toArray(a).filter((function(e){return n.isValidElement(e)})),b=h.length>v?h.length-v+1:0,y=p&&void 0!==m[p]?m[p]:-p;return n.createElement("div",Object(i.a)({className:Object(c.default)(r.root,s),ref:t},g),h.slice(0,h.length-b).map((function(e,t){return n.cloneElement(e,{className:Object(c.default)(e.props.className,r.avatar),style:Object(i.a)({zIndex:h.length-t,marginLeft:0===t?void 0:y},e.props.style)})})),b?n.createElement(o.a,{className:r.avatar,style:{zIndex:0,marginLeft:y}},"+",b):null)})),d=Object(s.a)((function(e){return{root:{display:"flex"},avatar:{border:"2px solid ".concat(e.palette.background.default),marginLeft:-8,"&:first-child":{marginLeft:0}}}}),{name:"MuiAvatarGroup"})(u);function f(){return r.a.createElement(d,{max:4},r.a.createElement(o.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),r.a.createElement(o.a,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),r.a.createElement(o.a,{alt:"Cindy Baker",src:"/material-ui-static/images/avatar/3.jpg"}),r.a.createElement(o.a,{alt:"Agnes Walker",src:"/material-ui-static/images/avatar/4.jpg"}),r.a.createElement(o.a,{alt:"Trevor Henderson",src:"/material-ui-static/images/avatar/5.jpg"}))}},2487:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1070),i=(a(107),a(1034)),l=a(1029),c=a(178),s=a(1028),m=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return m(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},r.a.createElement(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/avatars",target:"_blank",role:"button"},r.a.createElement(l.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),r.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Avatar"),r.a.createElement(c.a,{className:"description"},"Avatars are found throughout material design with uses in everything from tables to dialog menus."),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Image avatars"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"Image avatars can be created by passing standard ",r.a.createElement("code",null,"img")," props ",r.a.createElement("code",null,"src")," or ",r.a.createElement("code",null,"srcSet")," to the component."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:a(1676).default,raw:a(1677)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Letter avatars"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"Avatars containing simple characters can be created by passing a string as ",r.a.createElement("code",null,"children"),"."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:a(1678).default,raw:a(1679)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Sizes"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"You can change the size of the avatar with the ",r.a.createElement("code",null,"height")," and ",r.a.createElement("code",null,"width")," CSS properties."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:a(1680).default,raw:a(1681)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Icon avatars"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"Icon avatars are created by passing an icon as ",r.a.createElement("code",null,"children"),"."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:a(1682).default,raw:a(1684)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Variants"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"If you need square or rounded avatars, use the ",r.a.createElement("code",null,"variant")," prop."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:a(1685).default,raw:a(1686)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Fallbacks"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"If there is an error loading the avatar image, the component falls back to an alternative in the following order:"),r.a.createElement("ul",null,r.a.createElement("li",null,"the provided children"),r.a.createElement("li",null,"the first letter of the ",r.a.createElement("code",null,"alt")," text"),r.a.createElement("li",null,"a generic avatar icon")),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:a(1687).default,raw:a(1688)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Grouped"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement("code",null,"AvatarGroup")," renders its children as a stack."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:a(2437).default,raw:a(1689)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"With badge"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:a(1690).default,raw:a(1691)})))}},997:function(e,t,a){"use strict";a.r(t);var n=a(338);a.d(t,"default",(function(){return n.a}))}}]);
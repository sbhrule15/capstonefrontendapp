(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[90],{1069:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,l=n(0),r=(a=l)&&a.__esModule?a:{default:a};var o=void 0,i=void 0;"undefined"!==typeof document&&(o=document),"undefined"!==typeof window&&(i=window);var s=t.FrameContext=r.default.createContext({document:o,window:i}),m=s.Provider,u=s.Consumer;t.FrameContextProvider=m,t.FrameContextConsumer=u},1070:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var a=n(12),l=n(107),r=n(1051),o=n(1060),i=n(1029),s=n(1063),m=n(1064),u=n(0),c=n.n(u),d=n(11),f=n(9),p=n(66),v=n(67),h=n(117),b=n(116),y=n(982),E=n(495),g=n(1019),F=n(1050),x=n(7),M=n(339),N=n(340),O=n(1071),w=n.n(O),C=Object(y.a)({productionPrefix:"iframe-"}),j=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(M.a)(Object(f.a)(Object(f.a)({},Object(E.a)()),{},{plugins:[].concat(Object(d.a)(Object(E.a)().plugins),[Object(N.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),c.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return c.a.createElement(w.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?c.a.createElement(g.b,{jss:this.state.jss,generateClassName:C,sheetsManager:this.state.sheetsManager},c.a.createElement(F.a,{theme:a},c.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(c.a.Component),_=Object(x.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(j);function T(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(a.a)(t,2),d=n[0],f=n[1],p=e.component,v=e.raw,h=e.iframe,b=e.className;return c.a.createElement(o.a,{className:b},c.a.createElement(r.a,{position:"static",color:"default",elevation:0},c.a.createElement(m.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:d,onChange:function(e,t){f(t)}},p&&c.a.createElement(s.a,{classes:{root:"min-w-64"},icon:c.a.createElement(i.a,null,"remove_red_eye")}),v&&c.a.createElement(s.a,{classes:{root:"min-w-64"},icon:c.a.createElement(i.a,null,"code")}))),c.a.createElement("div",{className:"flex justify-center max-w-full"},c.a.createElement("div",{className:0===d?"flex flex-1 max-w-full":"hidden"},p&&(h?c.a.createElement(_,null,c.a.createElement(p,null)):c.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},c.a.createElement(p,null)))),c.a.createElement("div",{className:1===d?"flex flex-1":"hidden"},v&&c.a.createElement("div",{className:"flex flex-1"},c.a.createElement(l.a,{component:"pre",className:"language-javascript w-full"},v.default)))))}T.defaultProps={currentTabIndex:0};var D=T},1071:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1069);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var l,r=n(1072),o=(l=r)&&l.__esModule?l:{default:l};t.default=o.default},1072:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=c(r),i=c(n(15)),s=c(n(3)),m=n(1069),u=c(n(1073));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,l=o.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},o.default.createElement(m.FrameContextProvider,{value:{document:e,window:a}},o.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[i.default.createPortal(this.props.head,this.getDoc().head),i.default.createPortal(l,r)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,o.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);d.propTypes={style:s.default.object,head:s.default.node,initialContent:s.default.string,mountTarget:s.default.string,contentDidMount:s.default.func,contentDidUpdate:s.default.func,children:s.default.oneOfType([s.default.element,s.default.arrayOf(s.default.element)])},d.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=d},1073:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),r=(o(l),o(n(3)));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return l.Children.only(this.props.children)}}]),t}(l.Component);m.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=m},2394:function(e,t,n){"use strict";n.r(t);var a=n(12),l=n(65),r=n(1034),o=n(1033),i=n(1031),s=n(1065),m=n(178),u=n(57),c=n(0),d=n.n(c),f=["Sea","Sky","Forest","Aerial","Art"].map((function(e){return{value:e,label:e}}));t.default=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],p=t[1],v=Object(c.useRef)(null);return d.a.createElement("div",{className:"max-w-sm"},d.a.createElement(m.a,{className:"h2 mb-24"},"Example Formsy Form"),d.a.createElement(u.a,{onValidSubmit:function(e){console.info("submit",e)},onValid:function(){p(!0)},onInvalid:function(){p(!1)},ref:v,className:"flex flex-col justify-center"},d.a.createElement(l.e,{className:"mb-16",type:"text",name:"name",label:"Name",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0}),d.a.createElement(l.e,{className:"my-16",type:"text",name:"email",label:"Email",validations:{isEmail:!0},validationErrors:{isEmail:"This is not a valid email"},required:!0}),d.a.createElement(l.e,{className:"my-16",type:"text",name:"name-outlined",label:"Name (Outlined)",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,variant:"outlined"}),d.a.createElement(l.e,{className:"my-16",type:"text",name:"email-outlined",label:"Email (Outlined)",validations:{isEmail:!0},validationErrors:{isEmail:"This is not a valid email"},required:!0,variant:"outlined"}),d.a.createElement(l.e,{className:"my-16",type:"text",name:"name-filled",label:"Name (Filled)",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,variant:"filled"}),d.a.createElement(l.e,{className:"my-16",type:"text",name:"email-filled",label:"Email (Filled)",validations:{isEmail:!0},validationErrors:{isEmail:"This is not a valid email"},required:!0,variant:"filled"}),d.a.createElement(l.c,{className:"my-16",name:"gender",label:"Gender",validations:"equals:female",validationError:"Only ladies are accepted",required:!0},d.a.createElement(o.a,{value:"male",control:d.a.createElement(s.a,{color:"primary"}),label:"Male"}),d.a.createElement(o.a,{value:"female",control:d.a.createElement(s.a,{color:"primary"}),label:"Female"}),d.a.createElement(o.a,{value:"other",control:d.a.createElement(s.a,{color:"primary"}),label:"Other"}),d.a.createElement(o.a,{value:"disabled",disabled:!0,control:d.a.createElement(s.a,null),label:"(Disabled option)"})),d.a.createElement(l.d,{className:"my-16",name:"related",label:"Related with",value:"none",validations:"equals:none",validationError:"Must be None"},d.a.createElement(i.a,{value:"none"},d.a.createElement("em",null,"None")),d.a.createElement(i.a,{value:"hai"},"Hai"),d.a.createElement(i.a,{value:"olivier"},"Olivier"),d.a.createElement(i.a,{value:"kevin"},"Kevin")),d.a.createElement(l.d,{className:"my-16",name:"related-outlined",label:"Related with (Outlined)",value:"none",validations:"equals:none",validationError:"Must be None",variant:"outlined"},d.a.createElement(i.a,{value:"none"},d.a.createElement("em",null,"None")),d.a.createElement(i.a,{value:"hai"},"Hai"),d.a.createElement(i.a,{value:"olivier"},"Olivier"),d.a.createElement(i.a,{value:"kevin"},"Kevin")),d.a.createElement(l.d,{className:"my-16",name:"related-filled",label:"Related with (Filled)",value:"none",validations:"equals:none",validationError:"Must be None",variant:"filled"},d.a.createElement(i.a,{value:"none"},d.a.createElement("em",null,"None")),d.a.createElement(i.a,{value:"hai"},"Hai"),d.a.createElement(i.a,{value:"olivier"},"Olivier"),d.a.createElement(i.a,{value:"kevin"},"Kevin")),d.a.createElement(l.a,{className:"my-16",name:"accept",value:!1,label:"Accept",validations:{equals:!0},validationErrors:{equals:"You need to accept"}}),d.a.createElement(l.b,{className:"my-16",name:"tags",placeholder:"Select multiple tags",textFieldProps:{label:"Tags",InputLabelProps:{shrink:!0},variant:"standard"},options:f,isMulti:!0,validations:{minLength:2},validationErrors:{minLength:"You need to select at least two"},required:!0}),d.a.createElement(r.a,{type:"submit",variant:"contained",color:"primary",className:"mx-auto mt-32 mb-80","aria-label":"LOG IN",disabled:!n},"Can submit")))}},2395:function(e,t,n){"use strict";n.r(t),t.default='import {\n    CheckboxFormsy,\n    FuseChipSelectFormsy,\n    RadioGroupFormsy,\n    SelectFormsy,\n    TextFieldFormsy\n} from \'@fuse/core/formsy\';\nimport Button from \'@material-ui/core/Button\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport MenuItem from \'@material-ui/core/MenuItem\';\nimport Radio from \'@material-ui/core/Radio\';\nimport Typography from \'@material-ui/core/Typography\';\nimport Formsy from \'formsy-react\';\nimport React, {useRef, useState} from \'react\';\n\nconst suggestions = [\'Sea\', \'Sky\', \'Forest\', \'Aerial\', \'Art\'].map(item => ({\n    value: item,\n    label: item\n}));\n\nfunction SimpleFormExample()\n{\n    const [isFormValid, setIsFormValid] = useState(false);\n    const formRef = useRef(null);\n\n    function disableButton()\n    {\n        setIsFormValid(false);\n    }\n\n    function enableButton()\n    {\n        setIsFormValid(true);\n    }\n\n    function handleSubmit(model)\n    {\n        console.info(\'submit\', model);\n    }\n\n    return (\n        <div className="max-w-sm">\n            <Typography className="h2 mb-24">Example Formsy Form</Typography>\n            <Formsy\n                onValidSubmit={handleSubmit}\n                onValid={enableButton}\n                onInvalid={disableButton}\n                ref={formRef}\n                className="flex flex-col justify-center"\n            >\n                <TextFieldFormsy\n                    className="mb-16"\n                    type="text"\n                    name="name"\n                    label="Name"\n                    validations={{\n                        minLength: 4,\n                    }}\n                    validationErrors={{\n                        minLength: \'Min character length is 4\',\n                    }}\n                    required\n                />\n\n                <TextFieldFormsy\n                    className="my-16"\n                    type="text"\n                    name="email"\n                    label="Email"\n\t\t\t\t\tvalidations={{\n\t\t\t\t\t\tisEmail: true,\n\t\t\t\t\t}}\n\t\t\t\t\tvalidationErrors={{\n\t\t\t\t\t\tisEmail: "This is not a valid email"\n\t\t\t\t\t}}\n                    required\n                />\n\n                <TextFieldFormsy\n                    className="my-16"\n                    type="text"\n                    name="name-outlined"\n                    label="Name (Outlined)"\n                    validations={{\n                        minLength: 4\n                    }}\n                    validationErrors={{\n                        minLength: \'Min character length is 4\'\n                    }}\n                    required\n                    variant="outlined"\n                />\n\n                <TextFieldFormsy\n                    className="my-16"\n                    type="text"\n                    name="email-outlined"\n                    label="Email (Outlined)"\n\t\t\t\t\tvalidations={{\n\t\t\t\t\t\tisEmail: true,\n\t\t\t\t\t}}\n\t\t\t\t\tvalidationErrors={{\n\t\t\t\t\t\tisEmail: "This is not a valid email"\n\t\t\t\t\t}}\n                    required\n                    variant="outlined"\n                />\n\n                <TextFieldFormsy\n                    className="my-16"\n                    type="text"\n                    name="name-filled"\n                    label="Name (Filled)"\n                    validations={{\n                        minLength: 4\n                    }}\n                    validationErrors={{\n                        minLength: \'Min character length is 4\'\n                    }}\n                    required\n                    variant="filled"\n                />\n\n                <TextFieldFormsy\n                    className="my-16"\n                    type="text"\n                    name="email-filled"\n                    label="Email (Filled)"\n\t\t\t\t\tvalidations={{\n\t\t\t\t\t\tisEmail: true,\n\t\t\t\t\t}}\n\t\t\t\t\tvalidationErrors={{\n\t\t\t\t\t\tisEmail: "This is not a valid email"\n\t\t\t\t\t}}\n                    required\n                    variant="filled"\n                />\n\n                <RadioGroupFormsy\n                    className="my-16"\n                    name="gender"\n                    label="Gender"\n                    validations="equals:female"\n                    validationError="Only ladies are accepted"\n                    required\n                >\n                    <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male"/>\n                    <FormControlLabel value="female" control={<Radio color="primary"/>} label="Female"/>\n                    <FormControlLabel value="other" control={<Radio color="primary"/>} label="Other"/>\n                    <FormControlLabel value="disabled" disabled control={<Radio/>} label="(Disabled option)"/>\n                </RadioGroupFormsy>\n\n                <SelectFormsy\n                    className="my-16"\n                    name="related"\n                    label="Related with"\n                    value="none"\n                    validations="equals:none"\n                    validationError="Must be None"\n                >\n                    <MenuItem value="none">\n                        <em>None</em>\n                    </MenuItem>\n                    <MenuItem value="hai">Hai</MenuItem>\n                    <MenuItem value="olivier">Olivier</MenuItem>\n                    <MenuItem value="kevin">Kevin</MenuItem>\n                </SelectFormsy>\n\n                <SelectFormsy\n                    className="my-16"\n                    name="related-outlined"\n                    label="Related with (Outlined)"\n                    value="none"\n                    validations="equals:none"\n                    validationError="Must be None"\n                    variant="outlined"\n                >\n                    <MenuItem value="none">\n                        <em>None</em>\n                    </MenuItem>\n                    <MenuItem value="hai">Hai</MenuItem>\n                    <MenuItem value="olivier">Olivier</MenuItem>\n                    <MenuItem value="kevin">Kevin</MenuItem>\n                </SelectFormsy>\n\n                <SelectFormsy\n                    className="my-16"\n                    name="related-filled"\n                    label="Related with (Filled)"\n                    value="none"\n                    validations="equals:none"\n                    validationError="Must be None"\n                    variant="filled"\n                >\n                    <MenuItem value="none">\n                        <em>None</em>\n                    </MenuItem>\n                    <MenuItem value="hai">Hai</MenuItem>\n                    <MenuItem value="olivier">Olivier</MenuItem>\n                    <MenuItem value="kevin">Kevin</MenuItem>\n                </SelectFormsy>\n\n                <CheckboxFormsy\n                    className="my-16"\n                    name="accept"\n                    value={false}\n                    label="Accept"\n\t\t\t\t\tvalidations={{\n\t\t\t\t\t\tequals: true,\n\t\t\t\t\t}}\n\t\t\t\t\tvalidationErrors={{\n\t\t\t\t\t\tequals: "You need to accept"\n\t\t\t\t\t}}\n                />\n\n                <FuseChipSelectFormsy\n                    className="my-16"\n                    name="tags"\n                    placeholder="Select multiple tags"\n                    textFieldProps={{\n                        label          : \'Tags\',\n                        InputLabelProps: {\n                            shrink: true\n                        },\n                        variant        : \'standard\'\n                    }}\n                    options={suggestions}\n                    isMulti\n                    validations={{minLength: 2}}\n                    validationErrors={{\n                        minLength: \'You need to select at least two\'\n                    }}\n                    required\n                />\n\n                <Button\n                    type="submit"\n                    variant="contained"\n                    color="primary"\n                    className="mx-auto mt-32 mb-80"\n                    aria-label="LOG IN"\n                    disabled={!isFormValid}\n                >\n                    Can submit\n                </Button>\n            </Formsy>\n        </div>\n    );\n}\n\nexport default SimpleFormExample;\n'},2552:function(e,t,n){"use strict";n.r(t);var a=n(1070),l=n(1034),r=n(1029),o=n(178),i=n(0),s=n.n(i),m=n(23);t.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-1 items-center justify-between mb-24"},s.a.createElement(o.a,{variant:"h4",className:""},"Formsy"),s.a.createElement(l.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://github.com/formsy/formsy-react",target:"_blank",role:"button"},s.a.createElement(r.a,null,"link"),s.a.createElement("span",{className:"mx-4"},"Reference"))),s.a.createElement(o.a,{className:"mb-16",component:"p"},s.a.createElement("code",null,"formsy-react")," is a form input builder and validator for React."),s.a.createElement(o.a,{className:"mb-16",component:"p"},"HOCs are needed for formsy to work. We created for TextField, Select, RadioGroup, Checkbox under @fuse."),s.a.createElement("hr",null),s.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Example Usages"),s.a.createElement(a.a,{className:"mb-64",component:n(2394).default,raw:n(2395)}),s.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Demos"),s.a.createElement("ul",null,s.a.createElement("li",{className:"mb-8"},s.a.createElement(m.a,{to:"/login"},"Login page"))))}}}]);
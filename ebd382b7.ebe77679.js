(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(136)),b={id:"reactUseTs",title:"react\u4e2d\u4f7f\u7528ts"},c={unversionedId:"reactUseTs",id:"reactUseTs",isDocsHomePage:!1,title:"react\u4e2d\u4f7f\u7528ts",description:"\u6700\u8fd1\u5728\u7528ts\u5199\u9879\u76ee\uff0c\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898",source:"@site/docs/react_useTs.md",slug:"/reactUseTs",permalink:"/docs/reactUseTs",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/react_useTs.md",version:"current",sidebar:"someError",previous:{title:"Hook\u57fa\u672c\u4f7f\u7528",permalink:"/docs/reactHook"},next:{title:"react\u6e32\u67d3",permalink:"/docs/react_render"}},i=[{value:"1. \u679a\u4e3e\u7c7b\u578b\u7684\u4f7f\u7528\u95ee\u9898",id:"1-\u679a\u4e3e\u7c7b\u578b\u7684\u4f7f\u7528\u95ee\u9898",children:[]},{value:"2. \u52a8\u6001\u8c03\u7528\u548c\u8d4b\u503c\u7684\u95ee\u9898",id:"2-\u52a8\u6001\u8c03\u7528\u548c\u8d4b\u503c\u7684\u95ee\u9898",children:[]},{value:"3. \u5b9a\u4e49\u540e\u53f0\u63a5\u53e3\u7684\u95ee\u9898",id:"3-\u5b9a\u4e49\u540e\u53f0\u63a5\u53e3\u7684\u95ee\u9898",children:[]},{value:"4. react\u4e2d\u7684\u5185\u7f6e\u7c7b\u578b\u4f7f\u7528",id:"4-react\u4e2d\u7684\u5185\u7f6e\u7c7b\u578b\u4f7f\u7528",children:[]},{value:"5. \u5f15\u5165\u5305\u7684\u65f6\u5019\u62a5\u9519",id:"5-\u5f15\u5165\u5305\u7684\u65f6\u5019\u62a5\u9519",children:[]},{value:"6. ts\u4e2d\u5f15\u5165png, svg\u7b49\u6765\u6e90\u62a5\u9519",id:"6-ts\u4e2d\u5f15\u5165png-svg\u7b49\u6765\u6e90\u62a5\u9519",children:[]},{value:"7. ts\u4e2dextends \u548c js\u4e2d\u7684 extends",id:"7-ts\u4e2dextends-\u548c-js\u4e2d\u7684-extends",children:[]},{value:"\u4e0d\u5b9a\u65f6\u66f4\u65b0...",id:"\u4e0d\u5b9a\u65f6\u66f4\u65b0",children:[]}],u={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u6700\u8fd1\u5728\u7528ts\u5199\u9879\u76ee\uff0c\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898")),Object(l.b)("h3",{id:"1-\u679a\u4e3e\u7c7b\u578b\u7684\u4f7f\u7528\u95ee\u9898"},"1. \u679a\u4e3e\u7c7b\u578b\u7684\u4f7f\u7528\u95ee\u9898"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"// \u679a\u4e3e\u7c7b\u578b\nenum USER_ROLE {\n    USER, // \u9ed8\u8ba4\u4e0b\u6807\u4ece\u96f6\u5f00\u59cb\n    ADMIN,\n    MANAGER\n}\n// \u9ed8\u8ba4\u53ef\u4ee5\u6b63\u5411\u53d6\u51fa\uff0c\u4e5f\u53ef\u4ee5\u53cd\u4e3e\uff0c \u53ef\u4ee5\u901a\u8fc7\u6570\u5b57\u81ea\u52a8\u5411\u4e0b\u63a8\u65ad\nconsole.log(USER_ROLE[0])  // USER\nconsole.log(USER_ROLE.USER)  // 0\n\n// \u5e38\u91cf\u679a\u4e3e \u53ea\u662f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7c7b\u578b \uff0c\u524d\u9762\u52a0\u4e86\u4e00\u4e2aconst\uff0c\u4e0d\u5efa\u8bae\u7528\u679a\u4e3e\u7c7b\u578b\u8d4b\u503c\u5b57\u7b26\u4e32\uff0c\u8d4b\u503c\u540e\u5c31\u4e0d\u80fd\u9012\u589e\u4e86\nconst enum USER_ROLE1 {  // \u8bed\u4e49\u5316\n    USER,\n    ADMIN\n}\n// \u53d6\u503c\u7684\u65f6\u5019\u624d\u4f1a\u8f6c\u4e49,\u800c\u4e14\u4e0d\u53ef\u4ee5\u53cd\u7740\u53d6\nconsole.log(USER_ROLE1.USER)\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u679a\u4e3e\u7c7b\u578b\u7f16\u8bd1\u4e3ajs\u4ee3\u7801")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"enum Color {Red, Green, Blue}\nlet c: Color = Color.Green;  // 1\nlet colorName: string = Color[2];  // 'Blue'\n\nvar Color = {};\nColor[Color['Red'] = 0] = 'Red';\nColor[Color['Green'] = 1] = 'Green';\nColor[Color['Blue'] = 2] = 'Blue';\n")),Object(l.b)("h3",{id:"2-\u52a8\u6001\u8c03\u7528\u548c\u8d4b\u503c\u7684\u95ee\u9898"},"2. \u52a8\u6001\u8c03\u7528\u548c\u8d4b\u503c\u7684\u95ee\u9898"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u95ee\u9898:  \u524d\u7aef\u9700\u8981\u5904\u7406\u4e00\u4e9b\u903b\u8f91\uff0c\u52a8\u6001\u53d6\u503c,\u8fd9\u4e2a\u65f6\u5019\u53ea\u80fd\u8bbe\u7f6estate\u7684\u503c\u4e3a",Object(l.b)("inlineCode",{parentName:"p"},"[key:string]:any"),"\u4e0d\u7136\u5c31\u4f1a\u62a5\u9519\u3002")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5982\u679c\u786e\u5b9a\u8981\u53d6\u7684\u503c\u7684\u8bdd\u53ef\u4ee5\u5b9a\u4e49type\u6765\u4e13\u95e8\u653e\u5f53\u524d\u53ef\u80fd\u53d6\u5230\u7684\u5b57\u7b26\u4e32")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://www.tslang.cn/docs/handbook/advanced-types.html"},"ts\u6587\u6863"),"\u4e2d\u4e5f\u63cf\u8ff0\u4e86\u52a8\u6001\u53d6\u503c\u7684\u95ee\u9898"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"/* state\u9700\u8981\u8fd9\u6837\u5904\u7406 */\ninterface IState {\n    value1: string;\n    value2: string;\n    [key:string]: any;\n}\ntype valueType = 'value1' | 'value2';\n\nclass App extends Component<{},IState> {\n    constructor(props:{}) {\n        super(props);\n        this.state = {\n            value1: '',\n            value2: ''\n        }\n    }\n\n    /* \u540c\u65f6\u6539\u53d8\u4e24\u4e2ainput\u7684\u65b9\u6cd5 */\n    handleChange = (e:React.ChangeEvent<HTMLInputElement>, setValue:<K extends keyof IState>) => {\n        this.setState({\n            [setValue]: e.target.value;\n        })\n    }\n    render() {\n        return (\n            <>\n                <input type=\"text\" value={this.state.value1} onChange={(e) => this.handleChange(e, 'value1')} />\n                <input type=\"text\" value={this.state.value2} onChange={(e) => this.handleChange(e, 'value2')} />\n            </>\n        )\n    }\n}\n")),Object(l.b)("h3",{id:"3-\u5b9a\u4e49\u540e\u53f0\u63a5\u53e3\u7684\u95ee\u9898"},"3. \u5b9a\u4e49\u540e\u53f0\u63a5\u53e3\u7684\u95ee\u9898"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e00\u822c\u6765\u8bf4\u5904\u7406\u786e\u5b9a\u7684\u7c7b\u578b\u5efa\u8bae\u5199\u597d\u6bcf\u4e00\u4e2a\u503c\u7684\u7c7b\u578b\uff0c\u5982\u679c\u662f\u540e\u53f0\u63a5\u53e3\u7684\u8bdd\uff0c\u4e4b\u540e\u540e\u7aef\u53ef\u80fd\u4f1a\u65b0\u6dfb\u52a0\u65b0\u7684\u903b\u8f91\uff0c\u6240\u4ee5\u53ef\u4ee5\u5199\u7684\u7a0d\u5fae\u6d3b\u6cdb\u4e00\u4e9b\u3002"),Object(l.b)("li",{parentName:"ul"},"\u524d\u7aef\u7684\u7ec4\u4ef6\u7684\u8f93\u5165\u8f93\u51fa\u8fd9\u4e2a\u662f\u4e00\u5b9a\u8981\u5b9a\u4e49\u597d\u7684\u3002\u6211\u7684\u611f\u89c9\u5c31\u662fts\u5728\u524d\u7aef\u7684\u4f7f\u7528\u4e0a\uff0c\u52a0\u5927\u4e86\u524d\u7aef\u7684\u5de5\u4f5c\u91cf\uff0c\u5728\u9879\u76ee\u6392\u671f\u6ca1\u6709\u6539\u53d8\u7684\u60c5\u51b5\u4e0b\uff0c\u524d\u7aef\u7684\u5de5\u4f5c\u91cf\u611f\u89c9\u589e\u52a0\u4e86\u5f88\u591a\uff0c\u4e00\u4e9b\u903b\u8f91\u4fee\u6539\u540e\uff0c\u8fd8\u8981\u53bb\u6539type\uff0c\u5f88\u8017\u65f6\u3002\u5982\u679c\u8981\u516c\u53f8\u652f\u6301ts\u7684\u8bdd\uff0c\u611f\u89c9\u9879\u76ee\u6392\u671f\u662f\u4e00\u4e2a\u95ee\u9898\u3002")),Object(l.b)("h3",{id:"4-react\u4e2d\u7684\u5185\u7f6e\u7c7b\u578b\u4f7f\u7528"},"4. react\u4e2d\u7684\u5185\u7f6e\u7c7b\u578b\u4f7f\u7528"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7c7b\u7ec4\u4ef6\uff0c\u5b9a\u4e49state \u548c props")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component<IProps, IState> {\n    render() {\n        return (\n            <div></div>\n        )\n    }\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u51fd\u6570\u7ec4\u4ef6 \u5b9a\u4e49\u51fd\u6570\u4e3aFC\u4f20\u5165props\u7684\u6cdb\u578b")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"const App:React.FC<IProps> = () => {\n    return <div></div>\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"react\u4e8b\u4ef6")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u4e8b\u4ef6\u63cf\u8ff0"),Object(l.b)("th",{parentName:"tr",align:null},"\u4e8b\u4ef6\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u6cdb\u578b\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u4e3e\u4f8b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u5408\u6210\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"SyntheticEvent"),Object(l.b)("td",{parentName:"tr",align:null},"null"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Change\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"ChangeEvent"),Object(l.b)("td",{parentName:"tr",align:null},"<T = Element>"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"input:React.ChangeEvent<HTMLInputElement>"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u526a\u8d34\u677f\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"ClipboardEvent"),Object(l.b)("td",{parentName:"tr",align:null},"<T = Element>"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u62d6\u62fd\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"DragEvent"),Object(l.b)("td",{parentName:"tr",align:null},"<T = Element>"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u952e\u76d8\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"KeyboardEvent"),Object(l.b)("td",{parentName:"tr",align:null},"<T = Element>"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u9f20\u6807\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"MouseEvent"),Object(l.b)("td",{parentName:"tr",align:null},"<T = Element>"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u89e6\u6478\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"TouchEvent"),Object(l.b)("td",{parentName:"tr",align:null},"<T = Element>"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u6eda\u8f6e\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"WheelEvent"),Object(l.b)("td",{parentName:"tr",align:null},"<T = Element>"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u52a8\u753b\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"AnimationEvent"),Object(l.b)("td",{parentName:"tr",align:null},"<T = Element>"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u8fc7\u6e21\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"TransitionEvent"),Object(l.b)("td",{parentName:"tr",align:null},"<T = Element>"),Object(l.b)("td",{parentName:"tr",align:null},"-")))),Object(l.b)("h3",{id:"5-\u5f15\u5165\u5305\u7684\u65f6\u5019\u62a5\u9519"},"5. \u5f15\u5165\u5305\u7684\u65f6\u5019\u62a5\u9519"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e0d\u4e00\u5b9a\u662f\u56e0\u4e3a\u8def\u5f84\u9519\u8bef\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u5305\u91cc\u9762\u6ca1\u6709export\u5bfc\u51fa\uff0c\u6216\u8005\u6587\u4ef6\u4e2d\u6ca1\u6709\u4efb\u4f55\u5185\u5bb9\u3002ts\u8bc6\u522b\u4e0d\u5230\u5f53\u524d\u7684\u6587\u4ef6\uff0c\u8fdb\u884c\u62a5\u9519\uff0c\u6240\u4ee5\u5982\u679c\u771f\u7684\u786e\u5b9a\u8def\u5f84\u662f\u6ca1\u6709\u4efb\u4f55\u95ee\u9898\u7684\u8bdd\u3002\u53bb\u770b\u770btsconfig\u7684\u914d\u7f6e\uff0c\u6216\u8005\u770b\u770b\u81ea\u5df1\u6709\u6ca1\u6709export\u5f53\u524d\u7684\u6a21\u5757\u5427")),Object(l.b)("h3",{id:"6-ts\u4e2d\u5f15\u5165png-svg\u7b49\u6765\u6e90\u62a5\u9519"},"6. ts\u4e2d\u5f15\u5165png, svg\u7b49\u6765\u6e90\u62a5\u9519"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5728index.d.ts\u6587\u4ef6\u4e2d\u6dfb\u52a0",Object(l.b)("inlineCode",{parentName:"li"},"delcare"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"declare module '*.svg'{\n  const content: string;\n  export default content;\n}\n")),Object(l.b)("h3",{id:"7-ts\u4e2dextends-\u548c-js\u4e2d\u7684-extends"},"7. ts\u4e2dextends \u548c js\u4e2d\u7684 extends"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ts\u4e2d\u7684extends\u7ee7\u627finterface"),Object(l.b)("li",{parentName:"ul"},"ts\u4e2d\u7684\u7c7b\u6709\u4e00\u4e9b\u79c1\u6709\u516c\u6709\u53ea\u8bfb\u5c5e\u6027\u7684\u533a\u5206\uff0c\u5728\u7ee7\u627f\u4e2d\u53ef\u80fd\u4f1a\u6709\u4e0d\u4e00\u6837\u7684\u8868\u73b0"),Object(l.b)("li",{parentName:"ul"},"ts\u4e2d\u7684\u7ee7\u627f\u5728\u7c7b\u578b\u4e2d\u548ckeyof\u5173\u952e\u5b57\u4e00\u8d77\u4f7f\u7528\uff0c\u53ef\u4ee5\u52a8\u6001\u53d6\u7c7b\u4e2d\u7684\u7c7b\u578b\u503c\uff0c\u7528\u4e8e\u53d6\u52a8\u6001\u503c\u7684\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"js\u4e2d\u7684extends\u7ee7\u627fclass")),Object(l.b)("h3",{id:"\u4e0d\u5b9a\u65f6\u66f4\u65b0"},"\u4e0d\u5b9a\u65f6\u66f4\u65b0..."))}p.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),o=p(n),d=a,m=o["".concat(b,".").concat(d)]||o[d]||s[d]||l;return n?r.a.createElement(m,c(c({ref:t},u),{},{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var u=2;u<l;u++)b[u]=n[u];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
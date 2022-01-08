(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{149:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return m}));var r=t(3),a=t(7),i=(t(0),t(177)),c=["components"],l={id:"classType",title:"\u7c7b",slug:"/FE/typeScript/classType"},s={unversionedId:"FE/typeScript/tsBasics/classType",id:"FE/typeScript/tsBasics/classType",isDocsHomePage:!1,title:"\u7c7b",description:"\u7c7b\u7684\u5b9a\u4e49",source:"@site/docs/FE/typeScript/tsBasics/classType.md",slug:"/FE/typeScript/classType",permalink:"/docs/FE/typeScript/classType",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/FE/typeScript/tsBasics/classType.md",version:"current",sidebar:"typeScript",previous:{title:"\u51fd\u6570",permalink:"/docs/FE/typeScript/functionType"}},o=[{value:"\u7c7b\u7684\u5b9a\u4e49",id:"\u7c7b\u7684\u5b9a\u4e49",children:[]},{value:"\u7c7b\u7684\u5b58\u53d6\u5668",id:"\u7c7b\u7684\u5b58\u53d6\u5668",children:[]},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",children:[]},{value:"\u4fee\u9970\u7b26",id:"\u4fee\u9970\u7b26",children:[{value:"1. <code>public</code>",id:"1-public",children:[]},{value:"2. <code>protected</code>",id:"2-protected",children:[]},{value:"3. <code>private</code>",id:"3-private",children:[]},{value:"4. <code>readonly</code>",id:"4-readonly",children:[]},{value:"5. <code>static</code>",id:"5-static",children:[]}]},{value:"\u88c5\u9970\u5668",id:"\u88c5\u9970\u5668",children:[]}],u={toc:o};function m(e){var n=e.components,t=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u7c7b\u7684\u5b9a\u4e49"},"\u7c7b\u7684\u5b9a\u4e49"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"class Person {\n    name:string;\n    getName():void {\n        console.log(this.name);\n    }\n}\nlet p1 = new Person();\np1.name = 'zy'\np1.getName()\n")),Object(i.b)("h2",{id:"\u7c7b\u7684\u5b58\u53d6\u5668"},"\u7c7b\u7684\u5b58\u53d6\u5668"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get")," ",Object(i.b)("inlineCode",{parentName:"li"},"set")," \u5982\u4f55\u5728ts\u5b9a\u4e49\u4f7f\u7528")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"class User{\n    constructor(public myName:string) {}\n\n    get name() {\n        return this.myName;\n    }\n\n    set name(value) {\n        this.myName = value\n    }\n}\n\nlet user = new User('zy');\nuser.name = 'z';  // \u7ed9myName\u8d4b\u503c\nconsole.log(user.name);  // \u8f93\u51fa\u8d4b\u503c\u540e\u7684z\n")),Object(i.b)("h2",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"class Person {\n    name:string;\n    age:number;\n    constructor(name:string, age:number) {\n        this.name = name;\n        this.age = age;\n    }\n\n    getName():string {\n        return this.name;\n    }\n\n    setName(name:string):void {\n        this.name = name\n    }\n}\n\nclass Student extends Person {\n    order:number;\n    constructor(name:string, age:number, order:number) {\n        super(name, age);\n        this.order = order;\n    }\n\n    getOrder():number {\n        return this.order;\n    }\n}\nconst student = new Student('name', 1, 1)\n// \u7ee7\u627f\u7684\u5b50\u7c7b\u53ef\u4ee5\u4f7f\u7528\u7236\u7c7b\u7684\u65b9\u6cd5\uff0c\u83b7\u53d6\u5230\u7236\u7c7b\u7684\u5c5e\u6027\n")),Object(i.b)("h2",{id:"\u4fee\u9970\u7b26"},"\u4fee\u9970\u7b26"),Object(i.b)("h3",{id:"1-public"},"1. ",Object(i.b)("inlineCode",{parentName:"h3"},"public")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u516c\u5f00\u7684"),"\u81ea\u5df1\u7684\u5b50\u7c7b\u548c\u5176\u4ed6\u7c7b\u90fd\u53ef\u4ee5\u8bbf\u95ee")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"class Father {\n    // highlight-next-line\n    public name:string;  // \u81ea\u5df1\u7684\u81ea\u5df1\u5b50\u7c7b\u548c\u5176\u4ed6\u7c7b\u90fd\u53ef\u4ee5\u8bbf\u95ee\n    age:number;\n    constructor(name:string, age:number) {\n        this.name = name;\n        this.age = age\n    }\n\n    getName():string {\n        return this.name;\n    }\n}\n\nclass Child extends Father {\n    constructor(name:string, age:number) {\n        super(name, age);\n    }\n    desc() {\n        // highlight-next-line\n        console.log(this.name);  // \u5b50\u7c7b\u53ef\u4ee5\u8bbf\u95ee\n    }\n}\n\nlet child = new Child('zy', 26);\n// highlight-next-line\nconsole.log(child.name);  // \u5b9e\u4f8b\u4e5f\u53ef\u4ee5\u8bbf\u95ee\n")),Object(i.b)("h3",{id:"2-protected"},"2. ",Object(i.b)("inlineCode",{parentName:"h3"},"protected")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u53d7\u4fdd\u62a4\u7684"),"\u81ea\u5df1\u548c\u81ea\u5df1\u7684\u5b50\u7c7b\u53ef\u4ee5\u7684\u8bbf\u95ee\uff0c\u5176\u4ed6\u7c7b\u4e0d\u80fd\u8bbf\u95ee")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"class Father {\n    public name:string;\n    // highlight-next-line\n    protected age:number;  // \u81ea\u5df1\u548c\u81ea\u5df1\u7684\u5b50\u7c7b\u53ef\u4ee5\u7684\u8bbf\u95ee\uff0c\u5176\u4ed6\u7c7b\u4e0d\u80fd\u8bbf\u95ee\n    constructor(name:string, age:number) {\n        this.name = name;\n        this.age = age\n    }\n\n    getName():string {\n        return this.name;\n    }\n}\n\nclass Child extends Father {\n    constructor(name:string, age:number) {\n        super(name, age);\n    }\n    desc() {\n        // highlight-next-line\n        console.log(this.age);  // \u5b50\u7c7b\u53ef\u4ee5\u8bbf\u95ee\n    }\n}\n\nlet child = new Child('zy', 26);\n// highlight-next-line\n// console.log(child.age);  \u5916\u90e8\u8bbf\u95eeage\u62a5\u9519\uff0c\u56e0\u4e3a\u662f\u53d7\u4fdd\u62a4\u7684\u5c5e\u6027\n")),Object(i.b)("h3",{id:"3-private"},"3. ",Object(i.b)("inlineCode",{parentName:"h3"},"private")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u79c1\u6709\u7684"),"\u53ea\u6709\u81ea\u5df1\u5185\u90e8\u53ef\u4ee5\u8bbf\u95ee\uff0c\u5b50\u7c7b\u548c\u5916\u90e8\u90fd\u4e0d\u53ef\u4ee5\u8bbf\u95ee")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"class Father {\n    public name:string;  // \u81ea\u5df1\u7684\u81ea\u5df1\u5b50\u7c7b\u548c\u5176\u4ed6\u7c7b\u90fd\u53ef\u4ee5\u8bbf\u95ee\n    protected age:number;  // \u81ea\u5df1\u548c\u81ea\u5df1\u7684\u5b50\u7c7b\u53ef\u4ee5\u7684\u8bbf\u95ee\uff0c\u5176\u4ed6\u7c7b\u4e0d\u80fd\u8bbf\u95ee\n    // highlight-next-line\n    private money:number;   // \u53ea\u6709\u81ea\u5df1\u53ef\u4ee5\u8bbf\u95ee\n    constructor(name:string, age:number, money:number) {\n        this.name = name;\n        this.age = age;\n        this.money = money;\n    }\n\n    getName():string {\n        return this.name;\n    }\n}\n\nclass Child extends Father {\n    constructor(name:string, age:number, money:number) {\n        super(name, age, money);\n    }\n    desc() {\n        // highlight-next-line\n        // console.log(this.money);  // \u5b50\u7c7b\u4e0d\u53ef\u4ee5\u8bbf\u95ee\n    }\n}\n\nlet child = new Child('zy', 26, 1);\n// highlight-next-line\n// console.log(child.money);  // \u5916\u90e8\u4e5f\u4e0d\u53ef\u4ee5\u8bbf\u95ee\n")),Object(i.b)("h3",{id:"4-readonly"},"4. ",Object(i.b)("inlineCode",{parentName:"h3"},"readonly")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u53ea\u8bfb\u7684")," \u4e0d\u80fd\u7ed9\u8bbe\u7f6e\u4e86",Object(i.b)("inlineCode",{parentName:"li"},"readonly"),"\u7684\u503c\u8d4b\u503c")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"class Person {\n    readonly name:string; // \u53ea\u80fdget \u4e0d\u80fdset\n    constructor(name:string) {\n        this.name = name;\n    }\n\n    getName():string {\n        return this.name;\n    }\n    // highlight-start\n    setName(v):void {\n        // this.name = v; // \u62a5\u9519\u56e0\u4e3a \u90a3\u4e48\u8bbe\u7f6e\u4e86readonly,\u6240\u6709\u4e0d\u80fd\u8d4b\u503c\n    }\n    // highlight-end\n}\n")),Object(i.b)("h3",{id:"5-static"},"5. ",Object(i.b)("inlineCode",{parentName:"h3"},"static")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9759\u6001\u5c5e\u6027\uff0c\u76f4\u63a5\u8d4b\u503c\u7ed9\u7c7b\uff0c\u5b50\u7c7b\u540c\u6837\u53ef\u4ee5\u7ee7\u627f")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"class Person {\n    // highlight-next-line\n    static age:number = 12  // \u8bbe\u7f6e\u9759\u6001\u5c5e\u6027\n    name:string; // \u53ea\u80fdget \u4e0d\u80fdset\n    constructor(name:string) {\n        this.name = name;\n    }\n}\n// highlight-next-line\nconsole.log(Person.age);  // \u83b7\u53d6\u7c7b\u7684\u9759\u6001\u5c5e\u6027\n")),Object(i.b)("h2",{id:"\u88c5\u9970\u5668"},"\u88c5\u9970\u5668"))}m.isMDXComponent=!0},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),u=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,g=m["".concat(c,".").concat(p)]||m[p]||b[p]||i;return t?a.a.createElement(g,l(l({ref:n},o),{},{components:t})):a.a.createElement(g,l({ref:n},o))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<i;o++)c[o]=t[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);
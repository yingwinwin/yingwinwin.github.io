(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{136:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),l=t(7),c=(t(0),t(143)),o={id:"js_writeTopic",title:"javaScirpt\u624b\u5199\u9898"},a={unversionedId:"js_writeTopic",id:"js_writeTopic",isDocsHomePage:!1,title:"javaScirpt\u624b\u5199\u9898",description:"\u7c7b\u578b",source:"@site/docs/js_writeTopic.md",slug:"/js_writeTopic",permalink:"/docs/js_writeTopic",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/js_writeTopic.md",version:"current",sidebar:"someError",previous:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f\u57fa\u672c\u4f7f\u7528",permalink:"/docs/"},next:{title:"\u9ad8\u9636\u51fd\u6570",permalink:"/docs/highFc"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[{value:"\u7c7b\u578b\u5224\u65ad",id:"\u7c7b\u578b\u5224\u65ad",children:[]}]},{value:"\u5bf9\u8c61",id:"\u5bf9\u8c61",children:[{value:"new",id:"new",children:[]},{value:"Object.create",id:"objectcreate",children:[]},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",children:[]}]},{value:"\u51fd\u6570",id:"\u51fd\u6570",children:[{value:"call",id:"call",children:[]},{value:"apply",id:"apply",children:[]},{value:"bind",id:"bind",children:[]},{value:"\u67ef\u91cc\u5316",id:"\u67ef\u91cc\u5316",children:[]},{value:"compose",id:"compose",children:[]}]},{value:"\u6570\u7ec4\u65b9\u6cd5",id:"\u6570\u7ec4\u65b9\u6cd5",children:[{value:"map",id:"map",children:[]},{value:"filter",id:"filter",children:[]},{value:"forEach",id:"foreach",children:[]},{value:"flat",id:"flat",children:[]},{value:"some",id:"some",children:[]},{value:"every",id:"every",children:[]},{value:"reduce",id:"reduce",children:[]}]},{value:"\u7b97\u6cd5",id:"\u7b97\u6cd5",children:[{value:"\u6590\u6ce2\u90a3\u5951\u6570\u5217",id:"\u6590\u6ce2\u90a3\u5951\u6570\u5217",children:[]},{value:"\u6d17\u724c\u7b97\u6cd5",id:"\u6d17\u724c\u7b97\u6cd5",children:[]}]},{value:"\u8bbe\u8ba1\u6a21\u5f0f",id:"\u8bbe\u8ba1\u6a21\u5f0f",children:[{value:"\u5355\u4f8b\u6a21\u5f0f",id:"\u5355\u4f8b\u6a21\u5f0f",children:[]},{value:"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f",id:"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f",children:[]},{value:"\u5de5\u5382\u6a21\u5f0f",id:"\u5de5\u5382\u6a21\u5f0f",children:[]}]}],b={toc:i};function p(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("h3",{id:"\u7c7b\u578b\u5224\u65ad"},"\u7c7b\u578b\u5224\u65ad"),Object(c.b)("h2",{id:"\u5bf9\u8c61"},"\u5bf9\u8c61"),Object(c.b)("h3",{id:"new"},"new"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u83b7\u53d6\u4f20\u5165\u7684\u51fd\u6570"),Object(c.b)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u5b9e\u4f8b\u539f\u578b\u6307\u5411\uff0c\u4f20\u5165\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\uff0c\u8fd9\u6837\u5c31\u62ff\u5230\u4e86this \u548c prototype\u4e0a\u9762\u7684\u5c5e\u6027\u65b9\u6cd5"),Object(c.b)("li",{parentName:"ol"},"\u8c03\u7528\u5f53\u524d\u51fd\u6570\u83b7\u53d6\u8fd4\u56de\u503c\uff0c\u540c\u65f6\u4f20\u5165\u53c2\u6570"),Object(c.b)("li",{parentName:"ol"},"\u5982\u679c\u5f53\u524d\u8fd4\u56de\u503c\u4e0d\u662f\u5bf9\u8c61\uff0c\u8fd4\u56de\u90a3\u4e2a\u539f\u578b\u94fe\u6307\u5411\u51fd\u6570\u7684\u5bf9\u8c61\uff0c\u5426\u5219\u8fd4\u56de\u5b9e\u4f8b")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'  function isObject(obj) {\n    return (\n      (typeof obj === "object" || typeof obj === "function") &&\n      typeof obj !== null\n    );\n  }\n  function Mynew() {\n    let fn = [].shift.call(arguments);\n    // let instance = new Object();\n    // instance.__proto__ = fn.prototype // true\n    let instance = Object.create(fn.prototype);  // \u8fd9\u4e00\u6b65\u76f8\u5f53\u4e8e\u4e0a\u9762\u4e24\u6b65\n    let result = fn.call(instance, ...arguments);\n    return isObject(result) ? result : instance;  // \u8fd4\u56de\u5b9e\u4f8b\n  }\n  function Person(name) {\n    this.name = name;\n  }\n  let myp = Mynew(Person, "myp");\n  let p = new Person("p");\n  console.log(p.name); // p\n  console.log(myp.name); // myp\n')),Object(c.b)("h3",{id:"objectcreate"},"Object.create"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u51fd\u6570"),Object(c.b)("li",{parentName:"ul"},"\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\u8d4b\u503c\u4e3a\u4f20\u5165\u7684\u539f\u578b\u5bf9\u8c61"),Object(c.b)("li",{parentName:"ul"},"\u7136\u540e\u8fd4\u56de\u8fd9\u4e2a\u5b9e\u4f8b\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u7684\u539f\u578b\u5c31\u5df2\u7ecf\u6307\u5411\u4e86\u4f20\u5165\u7684\u539f\u578b\u4e0a"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u4f20\u5165null\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u7eaf\u51c0\u7684\u6ca1\u6709\u539f\u578b\u5bf9\u8c61\u7684\u5bf9\u8c61")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// MDN\u4e0a\u9762\u7684polyfill\nfunction myCreate(proto) {\n  function F() {};\n  F.prototype = proto;\n  return new F();\n}\n\nfunction Person(name) {\n  this.name = name\n}\nlet p = new Person;\nlet a = myCreate(Person.prototype);\nlet b = Object.create(Person.prototype)\nconsole.log(a);\nconsole.log(b);\n")),Object(c.b)("h3",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),Object(c.b)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),Object(c.b)("h3",{id:"call"},"call"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5148\u770b\u8c03\u7528\u7684\u662f\u4e0d\u662f\u51fd\u6570\uff0c\u4e0d\u662f\u51fd\u6570\u5c31\u76f4\u63a5\u8fd4\u56de"),Object(c.b)("li",{parentName:"ol"},"\u662f\u5426\u6709\u4f20\u5165\u4e0a\u4e0b\u6587\uff0c\u4f20\u5165\u4e0a\u4e0b\u6587\u5c31\u662f\u5f53\u524d\u4e0a\u4e0b\u6587\uff0c\u4e0d\u4f20\u5165\u5c31\u662f\u5168\u5c40window"),Object(c.b)("li",{parentName:"ol"},"\u5efa\u7acb\u4e00\u4e2asymbol\u505a\u552f\u4e00key\u7684\u5c5e\u6027\uff0c\u9632\u6b62\u8986\u76d6\u4e4b\u524d\u5bf9\u8c61\u4e2d\u7684key"),Object(c.b)("li",{parentName:"ol"},"\u7136\u540e\u5728\u5f53\u524d\u4f20\u5165\u7684\u4e0a\u4e0b\u6587\u7684symbol\u5c5e\u6027\uff0c\u5e2e\u4e0a\u5f53\u524d\u8c03\u7528\u7684\u51fd\u6570\uff0c\u4e5f\u5c31\u662fthis"),Object(c.b)("li",{parentName:"ol"},"\u7136\u540e\u901a\u8fc7context\u8c03\u7528\u65b9\u6cd5\uff0c\u4f20\u5165\u53c2\u6570\u3002\u62ff\u5230\u8fd4\u56de\u503c\uff08\u5173\u952e\u6b65\u9aa4\uff09",Object(c.b)("inlineCode",{parentName:"li"},"\u5c31\u662f\u56e0\u4e3a\u8fd9\u4e2a\u624d\u80fdthis\u6307\u5411\u6539\u53d8")),Object(c.b)("li",{parentName:"ol"},"\u6700\u540e\u5220\u9664\u591a\u4f59\u7b80\u5386\u7684fn\u5c5e\u6027\u3002\u8fd4\u56de\u8fd4\u56de\u503c")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"Function.prototype.myCall = function (context,...arg) {\n  if(typeof this !== 'function') return;\n  context = context || winodw;\n  let fn = Symbol();\n  context.fn = this;\n  let r = context.fn(...arg);\n  delete context.fn;\n  return r;\n}\n\nlet obj = {\n  name: 'zy',\n  getname: function (a, b) {\n    console.log(a, b);\n    return this.name;\n  }\n}\n\nlet obj2 = {\n  name: 'zy1'\n}\n\nconsole.log(obj.getname.myCall(obj2,1,2));  // zy1 ,1, 2\n")),Object(c.b)("h3",{id:"apply"},"apply"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4e0ecall\u5728\u4f20\u53c2\u4e0a\u4e0d\u540c\uff0c\u5176\u4ed6\u529f\u80fd\u4e00\u81f4")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-diff"},"-Function.prototype.myCall = function (context,...arg) {\n+Function.prototype.myApply = function (context,arg) {\n  if(typeof this !== 'function') return;\n  context = context || winodw;\n  let fn = Symbol();\n  context.fn = this;\n  let r = context.fn(...arg);\n  delete context.fn;\n  return r;\n}\n\nlet obj = {\n  name: 'zy',\n  getname: function (a, b) {\n    console.log(a, b);\n    return this.name;\n  }\n}\n\nlet obj2 = {\n  name: 'zy1'\n}\n\n+ console.log(obj.getname.myApply(obj2, [1, 2]));  // zy1, 1,2\n- console.log(obj.getname.myCall(obj2,1,2));  // zy1 1, 2\n")),Object(c.b)("h3",{id:"bind"},"bind"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"")),Object(c.b)("h3",{id:"\u67ef\u91cc\u5316"},"\u67ef\u91cc\u5316"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"a(1)(2)(3)")),Object(c.b)("h3",{id:"compose"},"compose"),Object(c.b)("h2",{id:"\u6570\u7ec4\u65b9\u6cd5"},"\u6570\u7ec4\u65b9\u6cd5"),Object(c.b)("h3",{id:"map"},"map"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f20\u5165\u51fd\u6570\uff0c\u5faa\u73af\u8c03\u7528\u4f20\u5165\u6570\u7ec4\u7684\u6bcf\u4e00\u9879"),Object(c.b)("li",{parentName:"ul"},"\u628a\u8fd4\u56de\u503cpush\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d\uff0c\u8fd4\u56de\u65b0\u7684\u6570\u7ec4 ")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"Array.prototype.myMap = function (fn) {\n  let mapArr = [];\n  for(let i = 0; i < this.length; i ++) {\n    mapArr.push(fn(this[i], i, this));\n  }\n  return mapArr;\n}\n\nlet arr = [1 ,2 ,3,4].myMap((item) => item * 2)\nconsole.log(arr);  // \xa0[2, 4, 6, 8]\n")),Object(c.b)("h3",{id:"filter"},"filter"),Object(c.b)("h3",{id:"foreach"},"forEach"),Object(c.b)("h3",{id:"flat"},"flat"),Object(c.b)("h3",{id:"some"},"some"),Object(c.b)("h3",{id:"every"},"every"),Object(c.b)("h3",{id:"reduce"},"reduce"),Object(c.b)("h2",{id:"\u7b97\u6cd5"},"\u7b97\u6cd5"),Object(c.b)("h3",{id:"\u6590\u6ce2\u90a3\u5951\u6570\u5217"},"\u6590\u6ce2\u90a3\u5951\u6570\u5217"),Object(c.b)("h3",{id:"\u6d17\u724c\u7b97\u6cd5"},"\u6d17\u724c\u7b97\u6cd5"),Object(c.b)("h2",{id:"\u8bbe\u8ba1\u6a21\u5f0f"},"\u8bbe\u8ba1\u6a21\u5f0f"),Object(c.b)("h3",{id:"\u5355\u4f8b\u6a21\u5f0f"},"\u5355\u4f8b\u6a21\u5f0f"),Object(c.b)("h3",{id:"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f"},"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f"),Object(c.b)("h3",{id:"\u5de5\u5382\u6a21\u5f0f"},"\u5de5\u5382\u6a21\u5f0f"))}p.isMDXComponent=!0},143:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),l=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var b=l.a.createContext({}),p=function(e){var n=l.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return l.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},s=l.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(t),s=r,m=u["".concat(o,".").concat(s)]||u[s]||d[s]||c;return t?l.a.createElement(m,a(a({ref:n},b),{},{components:t})):l.a.createElement(m,a({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=s;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var b=2;b<c;b++)o[b]=t[b];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);
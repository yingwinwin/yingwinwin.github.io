(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{123:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(t),m=r,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||a;return t?o.a.createElement(d,l(l({ref:n},s),{},{components:t})):o.a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(123)),c={id:"view",title:"\u9762\u8bd5\u9898"},l={unversionedId:"view",id:"view",isDocsHomePage:!1,title:"\u9762\u8bd5\u9898",description:"1. \u5757\u7ea7\u4f5c\u7528\u57df",source:"@site/docs/view.md",slug:"/view",permalink:"/docs/view",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/view.md",version:"current",sidebar:"someError",previous:{title:"react\u8def\u7531",permalink:"/docs/react_router"},next:{title:"\u62a5\u9519/\u95ee\u9898/\u8bb0\u5f55",permalink:"/docs/errors"}},i=[{value:"1. \u5757\u7ea7\u4f5c\u7528\u57df",id:"1-\u5757\u7ea7\u4f5c\u7528\u57df",children:[]},{value:"2. promise",id:"2-promise",children:[]},{value:"3. \u524d\u7aef\u7684\u901a\u8baf(\u5f85\u6574\u7406)",id:"3-\u524d\u7aef\u7684\u901a\u8baf\u5f85\u6574\u7406",children:[]},{value:"4. Symbol.hasInstance",id:"4-symbolhasinstance",children:[]},{value:"5. event loop",id:"5-event-loop",children:[]}],s={toc:i};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"1-\u5757\u7ea7\u4f5c\u7528\u57df"},"1. \u5757\u7ea7\u4f5c\u7528\u57df"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"js \u51fa\u73b0\u4e86\u5757\u7ea7\u4f5c\u7528\u57df\u4e4b\u540e\uff0c\u4f1a\u628a\u51fd\u6570\u4e4b\u540e\u7684\u5185\u5bb9\u90fd\u5f53\u505a\u4e00\u4e2a\u5757\u6765\u770b\u5f85\uff0c\u7528\u51fd\u6570\u9694\u5f00")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"{\n  a = 123;\n  function a() {}\n  a = 456;\n}\nconsole.log(a); // 123\n\n{\n  a = 123;\n  function a() {}\n  a = 456;\n  function a() {}\n}\nconsole.log(a); // 456\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e0a\u9762\u7684\u4ee3\u7801\u76f8\u5f53\u4e8e")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"{\n  a = 123;\n  function a() {}\n  {\n    a = 456;\n  }\n}\nconsole.log(a); // 123\n\n{\n  a = 123;\n  function a() {}\n  {\n    a = 456;\n  }\n  function a() {}\n}\nconsole.log(a); // 456\n")),Object(a.b)("h3",{id:"2-promise"},"2. promise"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u6398\u91d1\u63a8\u8350\u6587\u7ae0\u4e2d\u770b\u5230\u4e86\u8fd9\u4e2a\u9898\u4e5f\u4e0d\u592a\u61c2")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"Promise.resolve().then(() => {\n    console.log(0);\n    return Promise.resolve(4);\n}).then((res) => {\n    console.log(res)\n})\n\nPromise.resolve().then(() => {\n    console.log(1);\n}).then(() => {\n    console.log(2);\n}).then(() => {\n    console.log(3);\n}).then(() => {\n    console.log(5);\n}).then(() =>{\n    console.log(6);\n})\n\n// \u7b54\u6848\u662f 0\u30011\u30012\u30013\u30014\u30015\u30016\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8bc4\u8bba\u91cc\u9762\u7684\u5927\u4f6c\u8bf4\uff1aJs\u5f15\u64ce\u4e3a\u4e86\u8ba9microtask\u5c3d\u5feb\u7684\u8f93\u51fa\uff0c\u505a\u4e86\u4e00\u4e9b\u4f18\u5316\uff0c\u8fde\u7eed\u7684\u591a\u4e2athen(3\u4e2a)\u5982\u679c\u6ca1\u6709reject\u6216\u8005resolve\u4f1a\u4ea4\u66ff\u6267\u884cthen\u800c\u4e0d\u81f3\u4e8e\u8ba9\u4e00\u4e2a\u5835\u592a\u4e45\u5b8c\u6210\u7528\u6237\u65e0\u54cd\u5e94\uff0c\u4e0d\u5355\u5355v8\u8fd9\u6837\u5176\u4ed6\u5f15\u64ce\u4e5f\u662f\u8fd9\u6837\uff0c\u56e0\u4e3a\u5176\u5b9epromuse\u5185\u90e8\u72b6\u6001\u5df2\u7ecf\u7ed3\u675f\u4e86\u3002\u8fd9\u5757\u5728v8\u6e90\u7801\u91cc\u6709\u5b8c\u6574\u7684\u4f53\u73b0")),Object(a.b)("h3",{id:"3-\u524d\u7aef\u7684\u901a\u8baf\u5f85\u6574\u7406"},"3. \u524d\u7aef\u7684\u901a\u8baf(\u5f85\u6574\u7406)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"axios(\u4f18\u70b9)"),Object(a.b)("li",{parentName:"ul"},"ajax(\u624b\u5199)"),Object(a.b)("li",{parentName:"ul"},"fetch(\u540c\u6e90\uff0c.then\u53d6\u503c\u7684\u95ee\u9898)"),Object(a.b)("li",{parentName:"ul"},"websocket(\u5e94\u7528\u573a\u666f\u548c\u5e38\u7528api)")),Object(a.b)("h3",{id:"4-symbolhasinstance"},"4. Symbol.hasInstance"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Symbol.hasInstance"),"\u7528\u4e8e\u5224\u65ad\u67d0\u5bf9\u8c61\u662f\u5426\u4e3a\u67d0\u6784\u9020\u5668\u7684\u5b9e\u4f8b\u3002\u56e0\u6b64\u4f60\u53ef\u4ee5\u7528\u5b83\u81ea\u5b9a\u4e49 ",Object(a.b)("inlineCode",{parentName:"li"},"instanceof")," \u64cd\u4f5c\u7b26\u5728\u67d0\u4e2a\u7c7b\u4e0a\u7684\u884c\u4e3a\u3002")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"class Array1 {\n  static [Symbol.hasInstance](instance) {\n    return Array.isArray(instance);\n  }\n}\n\nconsole.log([] instanceof Array1);\n// expected output: true\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u628a",Object(a.b)("inlineCode",{parentName:"li"},"instanceof"),"\u6bd4\u8f83\u5b57\u7b26\u4e32\u7c7b\u578b")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"class String1 {\n  static [Symbol.hasInstance](str) {\n    return typeof str === 'string';\n  }\n}\n\nconsole.log('hello' instanceof String1);\n// expected output: true\n")),Object(a.b)("h3",{id:"5-event-loop"},"5. event loop"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// 7, 4, 5, 6 1, 2 ,3\na()\nsetTimeout(() => {\n    console.log(1);\n    new Promise((res, rej) => {\n        console.log(2);  // await\u5c31\u76f8\u5f53\u4e8e\u8fd9\u91cc\n        res()\n    }).then(() => {\n        console.log(3);\n    })\n}, 2000)\nsetTimeout(() => {\n    console.log(6);\n},1000)\nfunction b() {\n    console.log(7);\n}\nasync function a() {\n    await b();  // await \u5c31\u662f promise\u7684\u540c\u6b65 \u540e\u9762\u662f.then\u7684\u5185\u5bb9\n    console.log(5);\n}\nconsole.log(4);\n")))}u.isMDXComponent=!0}}]);
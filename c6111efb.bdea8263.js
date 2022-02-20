(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{158:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),c=(t(0),t(186)),o=["components"],i={id:"co",title:"co",slug:"/FE/javaSciprt/co"},l={unversionedId:"FE/javaSciprt/async/co",id:"FE/javaSciprt/async/co",isDocsHomePage:!1,title:"co",description:"\u4f7f\u7528",source:"@site/docs/FE/javaSciprt/async/co.md",slug:"/FE/javaSciprt/co",permalink:"/docs/FE/javaSciprt/co",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/FE/javaSciprt/async/co.md",version:"current",sidebar:"javaSciprt",previous:{title:"Generator",permalink:"/docs/FE/javaSciprt/generator"},next:{title:"async await",permalink:"/docs/FE/javaSciprt/asyncAwait"}},u=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]},{value:"\u6838\u5fc3\u539f\u7406",id:"\u6838\u5fc3\u539f\u7406",children:[]},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",children:[]}],p={toc:u};function s(e){var n=e.components,t=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(c.b)("p",null,"\u5b89\u88c5co\u5e93"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"npm i co\n")),Object(c.b)("p",null,"\u5728\u9879\u76ee\u4e2d\u4f7f\u7528"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs').promises;\nconst path = require('path');\nconst co = require('co')  // \u8c03\u7528\u7b2c\u4e09\u65b9\u5e93\nfunction* read() {  // \u5b9e\u73b0\u987a\u5e8f\u8c03\u7528\u53d6\u6587\u4ef6\n    const fileName = yield fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8')\n    const content = yield fs.readFile(path.resolve(__dirname, fileName), 'utf-8')\n    return content;\n}\n// highlight-next-line\nco(read()).then(res => console.log(res))  // 1\n")),Object(c.b)("h2",{id:"\u6838\u5fc3\u539f\u7406"},"\u6838\u5fc3\u539f\u7406"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs').promises;\nconst path = require('path');\nfunction* read() {\n    let filename = yield fs.readFile(path.resolve(__dirname, './1.txt'), 'utf-8');\n    let content = yield fs.readFile(path.resolve(__dirname, filename), 'utf-8');\n    return content;\n}\n\nfunction co(it) {\n    return new Promise((resolve, reject) => {  // co\u4f1a\u8fd4\u56de\u4e00\u4e2apromise\n        function next(v) {\n            let { value, done } = it.next(v);  // \u53d6\u51fa\u5f53\u524d\u7684value\u548cdone\n\n            if (!done) {\n                Promise.resolve(value).then(data => {  // \u4e0d\u7ba1\u662f\u4e0d\u662fpromise\uff0c\u90fd\u7ed9\u5b83\u53d8\u6210promise\uff0c\u65b9\u4fbf\u5904\u7406\n                    next(data)  // \u5f02\u6b65\u9012\u5f52\n                },reject)  // \u5982\u679c\u62a5\u9519\uff0c\u76f4\u63a5reject\n            } else {\n                resolve(value);  // \u5982\u679c\u8fed\u4ee3\u5b8c\u6210\u4e86\uff0c\u76f4\u63a5\u8fd4\u56de\u6700\u7ec8\u7ed3\u679c\n            }\n        }\n        next()  // \u521d\u59cb\u8c03\u7528\u9012\u5f52\n    })\n}\n\nco(read()).then(res => {\n    console.log(res)  // 1\n}).catch(err => err)\n")),Object(c.b)("p",null,"\u7531\u4e8e\u6bcf\u6b21\u4f7f\u7528co\u90fd\u9700\u8981\u5f15\u5165\u7b2c\u4e09\u65b9\u5e93\uff0c\u8fdb\u884c\u8c03\u7528\u3002\u6240\u4ee5\u540e\u9762\u51fa\u73b0\u4e86",Object(c.b)("inlineCode",{parentName:"p"},"aysnc await"),"\u7684\u8bed\u6cd5\u7cd6\u3002(",Object(c.b)("a",{parentName:"p",href:"/docs/FE/javaSciprt/asyncAwait"},"\u70b9\u51fb\u8df3\u8f6c\u8be5\u7ae0\u8282"),")"),Object(c.b)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"co\u6e90\u7801\u5730\u5740\uff1a",Object(c.b)("a",{parentName:"li",href:"https://github.com/tj/co/blob/HEAD/index.js"},"https://github.com/tj/co/blob/HEAD/index.js")),Object(c.b)("li",{parentName:"ul"},"\u82e5\u5ddd\u6e90\u7801\u5171\u8bfbco\u5e93\uff1a",Object(c.b)("a",{parentName:"li",href:"https://www.yuque.com/zhouying-8riwx/gwuk7c/bwtx2p"},"https://www.yuque.com/zhouying-8riwx/gwuk7c/bwtx2p"))))}s.isMDXComponent=!0},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,f=s["".concat(o,".").concat(d)]||s[d]||b[d]||c;return t?a.a.createElement(f,i(i({ref:n},u),{},{components:t})):a.a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
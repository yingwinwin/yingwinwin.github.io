(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{137:function(n,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return g}));var t=r(0),o=r.n(t);function c(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function u(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},c=Object.keys(n);for(t=0;t<c.length;t++)r=c[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(t=0;t<c.length;t++)r=c[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var l=o.a.createContext({}),s=function(n){var e=o.a.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},p=function(n){var e=s(n.components);return o.a.createElement(l.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(n,e){var r=n.components,t=n.mdxType,c=n.originalType,a=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),p=s(r),b=t,g=p["".concat(a,".").concat(b)]||p[b]||f[b]||c;return r?o.a.createElement(g,i(i({ref:e},l),{},{components:r})):o.a.createElement(g,i({ref:e},l))}));function g(n,e){var r=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=n,i.mdxType="string"==typeof n?n:t,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},95:function(n,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return a})),r.d(e,"metadata",(function(){return i})),r.d(e,"toc",(function(){return u})),r.d(e,"default",(function(){return s}));var t=r(3),o=r(7),c=(r(0),r(137)),a={id:"highFc",title:"\u9ad8\u9636\u51fd\u6570"},i={unversionedId:"highFc",id:"highFc",isDocsHomePage:!1,title:"\u9ad8\u9636\u51fd\u6570",description:"`js",source:"@site/docs/js_highFc.md",slug:"/highFc",permalink:"/docs/highFc",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/js_highFc.md",version:"current",sidebar:"someError",previous:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f\u57fa\u672c\u4f7f\u7528",permalink:"/docs/"},next:{title:"\u5de5\u5177\u51fd\u6570",permalink:"/docs/utilsFunction"}},u=[],l={toc:u};function s(n){var e=n.components,r=Object(o.a)(n,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'// \u9ad8\u9636\u51fd\u6570\n/* \n    1.\u4e00\u4e2a\u51fd\u6570\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u51fd\u6570\n    2.\u4e00\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4e5f\u662f\u4e00\u4e2a\u51fd\u6570\n*/\n\n/* \u7ed9\u4e1a\u52a1\u4ee3\u7801\u6269\u5c55\u65b0\u529f\u80fd */\n  function core(...args) {\n    console.log("core", ...args);\n  }\n\n  Function.prototype.before = function (cb) {\n    return (...args) => {\n      cb();\n      this(...args);\n    };\n  };\n\n  let newCore = core.before(() => {\n    console.log("before");\n  });\n  newCore(1, 2);\n')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'// \u591a\u4e2a\u5f02\u6b65\u8bf7\u6c42\uff0c\u540c\u65f6\u83b7\u53d6\u6700\u7ec8\u7ed3\u679c\nlet fs = require("fs");\nlet obj = {};\n\nconst after = (times, callback) => {\n  return function () {\n    if (--times == 0) {\n      callback(); // \u5f53\u8c03\u7528\u7684\u6b21\u6570\u52300\u7684\u65f6\u5019\uff0c\u5c31\u8f93\u51fa\u4f20\u5165\u7684callback\uff0c\u89e3\u51b3\u5f02\u6b65\u8f93\u51fa\u95ee\u9898\n    }\n  };\n};\nlet cb = after(2, () => {\n  console.log(obj);\n});\nfs.readFile("./1.txt", "utf8", (err, data) => {\n  obj.a = data;\n  cb();\n});\nfs.readFile("./2.txt", "utf8", (err, data) => {\n  obj.b = data;\n  cb();\n});\n')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'// \u51fd\u6570\u67ef\u91cc\u5316\uff1a\u8ba9\u51fd\u6570\u53d8\u5f97\u66f4\u5177\u4f53\u4e9b\uff0c\u5982\u679c\u4e24\u4e2a\u8bf7\u6c42\uff0c\u90fd\u56de\u6765\u4e4b\u540e\u624d\u8fdb\u884c\u6e32\u67d3\u3002\u53ef\u4ee5\u4f7f\u7528\u67ef\u91cc\u5316\uff0c\u7b49\u5f85\u4e24\u4e2a\u8bf7\u6c42\u56de\u6765\u5728\u8fdb\u884c\u6e32\u67d3\n// \u53cd\u67ef\u91cc\u5316\uff1a\u8ba9\u51fd\u6570\u53d8\u5f97\u8303\u56f4\u66f4\u5927\u4e00\u4e9b\n// \u4f20\u5165\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u56fa\u5b9a\n// \u5982\u679c\u51fd\u6570\u6ca1\u6709\u5230\u5f53\u524d\u51fd\u6570\u7684\u53c2\u6570\u4e2a\u6570\uff0c\u5c31\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\uff0c\u5426\u5219\u5c31\u76f4\u63a5\u8fd4\u56de\u7ed3\u679c\n  function curring(fn) {\n    const inner = (args = []) => { // \u7528args\u6765\u50a8\u5b58\u6bcf\u4e00\u6b21\u7684\u7ed3\u679c\n      return args.length >= fn.length\n        ? fn(...args)  // \u5982\u679c >=length\u4e86\uff0c\u5c31\u76f4\u63a5\u8fd4\u56de\u539f\u51fd\u6570\u628a\u53c2\u6570\u4f20\u8fc7\u53bb\n        : (...userArgs) => inner([...args, ...userArgs]);  // \u5982\u679c\u6ca1\u6709\u5c31\u628a\u4e24\u6b21\u7684\u53c2\u6570\u5b58\u8d77\u6765\uff0c\u7136\u540e\u8fd4\u56de\u4e00\u4e2a\u65b0\u51fd\u6570\n    };\n    return inner();\n  }\n\n  function sum(a, b, c, d) {\n    return a + b + c + d;\n  }\n\n  let sum1 = curring(sum);\n  let sum2 = sum1(1, 2);\n  let sum3 = sum2(3);\n  console.log(sum3(4)); // 10\n\n  /* \u7528currying\u51fd\u6570\u5305\u88c5\u7c7b\u578b\u5224\u65ad\u7684\u65b9\u6cd5 */\n  function isType(typing, val) {\n    return Object.prototype.toString.call(val) === `[object ${typing}]`;\n  }\n  let util = {};\n  ["String", "Number", "Null", "Undefined", "Array", "Object"].forEach(\n    (type) => {\n      util[`is${type}`] = curring(isType)(type);\n    }\n  );\n  console.log(util.isArray([])); // true\n')))}s.isMDXComponent=!0}}]);
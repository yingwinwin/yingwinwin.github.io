(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{130:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(137)),i={id:"onEmit",title:"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f"},c={unversionedId:"onEmit",id:"onEmit",isDocsHomePage:!1,title:"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f",description:"`js",source:"@site/docs/onEmit.md",slug:"/onEmit",permalink:"/docs/onEmit",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/onEmit.md",version:"current",sidebar:"someError",previous:{title:"\u5355\u4f8b\u6a21\u5f0f",permalink:"/docs/design_singe"},next:{title:"\u89c2\u5bdf\u8005\u6a21\u5f0f",permalink:"/docs/obverse"}},u=[],l={toc:u};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'/* \n    1.\u4e0e\u89c2\u5bdf\u8005\u6a21\u5f0f\u4e0d\u540c\uff0c\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u53d1\u5e03\u548c\u8ba2\u9605\u4e4b\u95f4\u6ca1\u6709\u660e\u663e\u7684\u5173\u8054\n    2.\u9700\u8981\u6709\u4e2d\u4ecb\u8005\uff0c\u5c31\u662f\u961f\u5217\u6570\u7ec4arr\n*/\n\nlet fs = require("fs");\n\nlet event = {\n  arr: [],\n  on: function (fn) {\n    this.arr.push(fn); // \u53d1\u5e03:\u5148\u628a\u5f53\u524d\u60f3\u8981\u5904\u7406\u7684\u5185\u5bb9\u653e\u5230\u961f\u5217\u4e2d\n  },\n  emit: function () {\n    this.arr.forEach((fn) => fn()); // \u5728\u8ba2\u9605\u7684\u65f6\u5019\u6267\u884c\n  },\n};\n\nevent.on(() => {\n  console.log(obj); // { a: \'1\', b: \'2\' }\n});\n\nlet obj = {};\nfs.readFile("./1.txt", "utf8", (err, data) => {\n  obj.a = data;\n});\nfs.readFile("./2.txt", "utf8", (err, data) => {\n  obj.b = data;\n  event.emit();\n});\n')))}p.isMDXComponent=!0},137:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return t?o.a.createElement(d,c(c({ref:n},l),{},{components:t})):o.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
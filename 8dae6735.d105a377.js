(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{133:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(186)),c=["components"],i={id:"asyncAwait",title:"async await",slug:"/FE/javaSciprt/asyncAwait"},s={unversionedId:"FE/javaSciprt/async/asyncAwait",id:"FE/javaSciprt/async/asyncAwait",isDocsHomePage:!1,title:"async await",description:"\u4f7f\u7528",source:"@site/docs/FE/javaSciprt/async/asyncAwait.md",slug:"/FE/javaSciprt/asyncAwait",permalink:"/docs/FE/javaSciprt/asyncAwait",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/FE/javaSciprt/async/asyncAwait.md",version:"current",sidebar:"javaSciprt",previous:{title:"co",permalink:"/docs/FE/javaSciprt/co"}},l=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]},{value:"\u539f\u7406",id:"\u539f\u7406",children:[]}],u={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(o.b)("p",null,"\u628a",Object(o.b)("inlineCode",{parentName:"p"},"co"),"\u7684\u8c03\u7528\u4fee\u6539\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"async await"),"\u7684\u8c03\u7528\u6a21\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},"const fs = require('fs').promises;\nconst path = require('path');\n- const co = require('co')  // \u8c03\u7528\u7b2c\u4e09\u65b9\u5e93\n\n\n- function* read() { \n+ async function read() {\n+   const fileName = await fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8')\n-   const fileName = yield fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8')\n+   const fileName = await fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8')\n-   const content = yield fs.readFile(path.resolve(__dirname, fileName), 'utf-8')\n    return content;\n}\n\n- co(read()).then(res => {\n+ read().then(res => {\n    console.log(res)\n}).catch(err => console.log(err))\n")),Object(o.b)("p",null,"\u51cf\u5c11\u4e86",Object(o.b)("inlineCode",{parentName:"p"},"co"),"\u5e93\u7684\u8c03\u7528\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u539f\u751f\u7684",Object(o.b)("inlineCode",{parentName:"p"},"async await"),"\u5173\u952e\u5b57\u6765\u5b9e\u73b0\u540c\u6837\u7684\u6548\u679c\u3002\u6240\u4ee5",Object(o.b)("inlineCode",{parentName:"p"},"async await"),"\u5c31\u662f",Object(o.b)("inlineCode",{parentName:"p"},"generator+co"),"\u7684\u8bed\u6cd5\u7cd6\u3002"),Object(o.b)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),Object(o.b)("p",null,"\u5c06\u4e0a\u9762\u7684\u4ee3\u7801\u901a\u8fc7",Object(o.b)("inlineCode",{parentName:"p"},"https://babeljs.io/"),"\u8fdb\u884c\u7f16\u8bd1\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'"use strict";\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);  // it.next(value);\n    var value = info.value;  // \u83b7\u53d6 value\n  } catch (error) {\n    reject(error);  // \u9519\u8bef\u5c31\u629b\u51fa\u9519\u8bef\n    return;\n  }\n  if (info.done) {  // \u5982\u679cdone \u662f true \u7ed3\u675f\u9012\u5f52\n    resolve(value);  // \u8fd4\u56de\u6210\u529f\u540e\u7684\u503c\n  } else {\n    Promise.resolve(value).then(_next, _throw);  // \u4e0d\u7ba1\u7528\u6237\u4f20\u5165\u7684\u662f\u4e0d\u662fpromise\uff0c\u90fd\u628a\u5b83\u53d8\u6210promise\uff0c\u7136\u540e\u8fdb\u884c\u4e0b\u4e00\u6b21\u9012\u5f52\uff0c\u9519\u8bef\u5c31\u629b\u51fa\u9519\u8bef\n  }\n}\n\nfunction _asyncToGenerator(fn) {  // co\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {  // co\u4f1a\u8fd4\u56de\u4e00\u4e2apromise\n      var gen = fn.apply(self, args);  // it\u51fd\u6570\n      function _next(value) {\n                        // it  resoleve, reject, \u9012\u5f52\u51fd\u6570\u672c\u8eab \u5904\u7406\u9519\u8bef next value\u5c31\u662f\u5916\u9762\u4f20\u5230next\u7684value\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);\n      }\n      _next(undefined); // \u521d\u59cb\u5316\u9012\u5f52\u8c03\u7528\n    });\n  };\n}\n\nfunction read() {\n  return _read.apply(this, arguments);\n}\n// \u8fd9\u6bb5\u4ee3\u7801\u548cgenerator\u7684\u4ee3\u7801\u903b\u8f91\u7c7b\u4f3c\uff0c\u540c\u6837\u662f\u901a\u8fc7\u6e38\u6807\u8fdb\u884c\u8fed\u4ee3\u3002\nfunction _read() {\n  _read = _asyncToGenerator(\n    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {\n      var fileName, content;\n      // \u719f\u6089\u7684wrap\u51fd\u6570   \n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch ((_context.prev = _context.next)) {\n            case 0:\n              _context.next = 2;\n              return fs.readFile(path.resolve(__dirname, "1.txt"), "utf-8");\n\n            case 2:\n              fileName = _context.sent;\n              _context.next = 5;\n              return fs.readFile(path.resolve(__dirname, fileName), "utf-8");\n\n            case 5:\n              content = _context.sent;\n              return _context.abrupt("return", content);\n\n            case 7:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })\n  );\n  return _read.apply(this, arguments);\n}\n\nread()\n  .then(function (res) {\n    console.log(res);\n  })\n  .catch(function (err) {\n    return console.log(err);\n  });\n')),Object(o.b)("p",null,"\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u66f4\u52a0\u53ef\u4ee5\u8bc1\u5b9e",Object(o.b)("inlineCode",{parentName:"p"},"async await"),"\u5c31\u662f",Object(o.b)("inlineCode",{parentName:"p"},"generator+co"),"\u7684\u8bed\u6cd5\u7cd6\u3002\u76ee\u524d\u5f02\u6b65\u8bed\u6cd5\u53d1\u5c55\u5c31\u5230\u6b64\u4e3a\u6b62\u4e86\u3002"))}p.isMDXComponent=!0},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return t?a.a.createElement(m,i(i({ref:n},l),{},{components:t})):a.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
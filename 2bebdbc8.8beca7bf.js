(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(191)),c=["components"],i={id:"react_other",title:"react\u4e2d\u7684\u5176\u4ed6\u6982\u5ff5"},u={unversionedId:"react_other",id:"react_other",isDocsHomePage:!1,title:"react\u4e2d\u7684\u5176\u4ed6\u6982\u5ff5",description:"react\u4e2d\u7684\u6d45\u6bd4\u8f83",source:"@site/docs/react_other.md",slug:"/react_other",permalink:"/docs/react_other",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/react_other.md",version:"current"},l=[{value:"react\u4e2d\u7684\u6d45\u6bd4\u8f83",id:"react\u4e2d\u7684\u6d45\u6bd4\u8f83",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"react\u4e2d\u7684\u6d45\u6bd4\u8f83"},"react\u4e2d\u7684\u6d45\u6bd4\u8f83"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"shallowEqual")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// Object.is \u7684 polyfile\nfunction is(x, y) {\n  //  +0 != -0 NaN == NAN\uff0c\u5bf9\u8c61\u4e3a\u540c\u4e00\u4e2a\u5f15\u7528\n  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;\n}\n\nvar objectIs = typeof Object.is === 'function' ? Object.is : is;\n\nvar hasOwnProperty$1 = Object.prototype.hasOwnProperty;\n\nfunction shallowEqual(objA, objB) {\n  // \u5982\u679c\u5bf9\u8c61\u662f\u540c\u4e00\u4e2a\u5f15\u7528\u5c31\u8fd4\u56detrue\n  if (objectIs(objA, objB)) {\n    return true;\n  }\n\n  // \u5982\u679c\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {\n    return false;\n  }\n\n  var keysA = Object.keys(objA);\n  var keysB = Object.keys(objB);\n  // \u5982\u679c\u662f\u5bf9\u8c61\uff0c\u4f46\u662f\u5bf9\u8c61\u7684keys\u957f\u5ea6\u4e0d\u4e00\u6837\uff0c\u4e5f\u76f4\u63a5\u8fd4\u56defalse\n  if (keysA.length !== keysB.length) {\n    return false;\n  }\n\n\n  for (var i = 0; i < keysA.length; i++) {\n    // \u5faa\u73af\u6bd4\u8f83\u5bf9\u8c61B\u6ca1\u6709\u5bf9\u8c61A\u4e2d\u7684\u5c5e\u6027 || \u5bf9\u8c61A \u548c \u5bf9\u8c61B \u7684\u6bcf\u4e00\u4e2a\u5c5e\u6027\u4e0d\u540c\n    if (!hasOwnProperty$1.call(objB, keysA[i]) || !objectIs(objA[keysA[i]], objB[keysA[i]])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n")))}p.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,y=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return n?o.a.createElement(y,i(i({ref:t},l),{},{components:n})):o.a.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),c=(n(0),n(179)),i=["components"],a={id:"remFit",title:"Rem\u5e03\u5c40\u81ea\u9002\u5e94"},u={unversionedId:"remFit",id:"remFit",isDocsHomePage:!1,title:"Rem\u5e03\u5c40\u81ea\u9002\u5e94",description:"`html",source:"@site/docs/css_remFit.md",slug:"/remFit",permalink:"/docs/remFit",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/css_remFit.md",version:"current"},l=[],p={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},'\x3c!-- rem\u81ea\u9002\u5e94\u5339\u914d --\x3e\n<script>\n    let docEle = document.documentElement; // \u83b7\u53d6\u6839\u5143\u7d20\n    function setRemUnit() {\n    /* \u8bbe\u7f6e\u6839\u5143\u7d20\u7684font-size\u4e3a 37.5px */\n    docEle.style.fontSize = docEle.clientWidth / 10 + "px";\n    }\n    setRemUnit(); // \u521d\u59cb\u5316\u8c03\u7528\n    window.addEventListener("resize", setRemUnit); // \u5c4f\u5e55\u5927\u5c0f\u6539\u53d8\u65f6\u8c03\u7528\n<\/script>\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4ee3\u66ff\u4e0a\u9762\u7684js\u64cd\u4f5c\u7684\u81ea\u9002\u5e94\u65b9\u5f0f")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-css"},"html {\n    font-size: calc(100vw / 7.5);\n}\n")))}s.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||c;return n?o.a.createElement(d,a(a({ref:t},l),{},{components:n})):o.a.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(138)),c={id:"remFit",title:"Rem\u5e03\u5c40\u81ea\u9002\u5e94"},a={unversionedId:"remFit",id:"remFit",isDocsHomePage:!1,title:"Rem\u5e03\u5c40\u81ea\u9002\u5e94",description:"`html",source:"@site/docs/css_remFit.md",slug:"/remFit",permalink:"/docs/remFit",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/css_remFit.md",version:"current",sidebar:"someError",previous:{title:"\u5de5\u5177\u51fd\u6570",permalink:"/docs/utilsFunction"},next:{title:"CSS\u5b9a\u4e49",permalink:"/docs/css_definition"}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'\x3c!-- rem\u81ea\u9002\u5e94\u5339\u914d --\x3e\n<script>\n    let docEle = document.documentElement; // \u83b7\u53d6\u6839\u5143\u7d20\n    function setRemUnit() {\n    /* \u8bbe\u7f6e\u6839\u5143\u7d20\u7684font-size\u4e3a 37.5px */\n    docEle.style.fontSize = docEle.clientWidth / 10 + "px";\n    }\n    setRemUnit(); // \u521d\u59cb\u5316\u8c03\u7528\n    window.addEventListener("resize", setRemUnit); // \u5c4f\u5e55\u5927\u5c0f\u6539\u53d8\u65f6\u8c03\u7528\n<\/script>\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4ee3\u66ff\u4e0a\u9762\u7684js\u64cd\u4f5c\u7684\u81ea\u9002\u5e94\u65b9\u5f0f")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-css"},"html {\n    font-size: calc(100vw / 7.5);\n}\n")))}s.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return n?o.a.createElement(d,a(a({ref:t},u),{},{components:n})):o.a.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
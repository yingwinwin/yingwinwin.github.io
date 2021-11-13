(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(149)),l={slug:"history API \u603b\u7ed3",title:"history API \u603b\u7ed3",author:"yingwinwin",author_title:"\u524d\u7aef\u5f00\u53d1",author_url:"https://github.com/yingwinwin",author_image_url:"https://avatars.githubusercontent.com/u/55273635?s=60&v=4",tags:["browser","histroy","html5"]},b={permalink:"/blog/history API \u603b\u7ed3",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/blob/master/blog/2021-04-24-historyAPI\u603b\u7ed3.md",source:"@site/blog/2021-04-24-historyAPI\u603b\u7ed3.md",description:"History API",date:"2021-04-24T00:00:00.000Z",tags:[{label:"browser",permalink:"/blog/tags/browser"},{label:"histroy",permalink:"/blog/tags/histroy"},{label:"html5",permalink:"/blog/tags/html-5"}],title:"history API \u603b\u7ed3",readingTime:1,truncated:!1,prevItem:{title:"react\u9879\u76ee\u642d\u5efa",permalink:"/blog/react\u9879\u76ee\u642d\u5efa"},nextItem:{title:"echarts\u6851\u57fa\u56fe\u7684\u4f7f\u7528\u548c\u603b\u7ed3",permalink:"/blog/echarts\u6851\u57fa\u56fe\u7684\u4f7f\u7528\u548c\u603b\u7ed3"}},o=[{value:"History API",id:"history-api",children:[]},{value:"<code>history stack</code>",id:"history-stack",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u5177\u4f53\u5e94\u7528",id:"\u5177\u4f53\u5e94\u7528",children:[{value:"1. \u6e05\u9664\u5f80\u8fd4\u7f13\u5b58",id:"1-\u6e05\u9664\u5f80\u8fd4\u7f13\u5b58",children:[]},{value:"2. window.performance.navigation.type \u5982\u679c\u6ca1\u6709<code>e.persisted</code>\u53ef\u4ee5\u901a\u8fc7\u8be5\u5c5e\u6027\u5224\u65ad",id:"2-windowperformancenavigationtype-\u5982\u679c\u6ca1\u6709epersisted\u53ef\u4ee5\u901a\u8fc7\u8be5\u5c5e\u6027\u5224\u65ad",children:[]},{value:"3. \u7981\u7528\u6d4f\u89c8\u5668\u540e\u9000\u6309\u94ae",id:"3-\u7981\u7528\u6d4f\u89c8\u5668\u540e\u9000\u6309\u94ae",children:[]}]},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",children:[]}],c={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"history-api"},"History API"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5177\u4f53\u53c2\u8003",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History"},"history MDN"),"\u5b98\u7f51\u7684\u6587\u6863 "),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"\u5c5e\u6027",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"History.length",Object(i.b)("inlineCode",{parentName:"li"},"\u53ea\u8bfb")),Object(i.b)("li",{parentName:"ul"},"History.scrollRestoration"),Object(i.b)("li",{parentName:"ul"},"History.state",Object(i.b)("inlineCode",{parentName:"li"},"\u53ea\u8bfb")))),Object(i.b)("li",{parentName:"ul"},"\u65b9\u6cd5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"History.go(",Object(i.b)("inlineCode",{parentName:"li"},"number"),")"),Object(i.b)("li",{parentName:"ul"},"History.back()"),Object(i.b)("li",{parentName:"ul"},"History.forward()"),Object(i.b)("li",{parentName:"ul"},"History.pushState(",Object(i.b)("inlineCode",{parentName:"li"},"state"),", ",Object(i.b)("inlineCode",{parentName:"li"},"title"),", ",Object(i.b)("inlineCode",{parentName:"li"},"url"),")"),Object(i.b)("li",{parentName:"ul"},"History.replaceState(",Object(i.b)("inlineCode",{parentName:"li"},"state"),", ",Object(i.b)("inlineCode",{parentName:"li"},"title"),", ",Object(i.b)("inlineCode",{parentName:"li"},"url"),")"))),Object(i.b)("li",{parentName:"ul"},"\u4e8b\u4ef6",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"onpopstate"))))),Object(i.b)("h2",{id:"history-stack"},Object(i.b)("inlineCode",{parentName:"h2"},"history stack")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u662f\u4e00\u4e2a\u6808\u7ed3\u6784\u7684\u5b58\u8d2e\u5668")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// \u5f53\u4f60\u4f9d\u6b21\u6d4f\u89c8a, b, c \u4e09\u4e2a\u7f51\u9875\u7684\u65f6\u5019\uff0c\u6d4f\u89c8\u5668\u7684\u64cd\u4f5c\u662f\nlet histroy1 = [];  // \u653e\u5f53\u524d\u6d4f\u89c8\u5668\u7684\u9875\u9762\nlet histroy2 = [];  // \u6682\u5b58\u7684\u9875\u9762\nhistory1.push(a);\nhistory1.push(b);\nhistory1.push(c);\n// \u6b64\u65f6\u6d4f\u89c8\u5668\u7684\u6570\u636e\u4e2d\u662f histroy1 = [a, b, c]  histroy2 = []\n// \u8fd9\u65f6\u4f60\u70b9\u51fb\u6d4f\u89c8\u5668\u7684\u540e\u9000\u6309\u94ae\nhistory1.pop(c)\nhistroy2.push(c)\n// \u73b0\u5728\u6d4f\u89c8\u5668\u4e2d\u7684\u6570\u636e\u662f histroy1 = [a, b]  histroy2 = [c]\n// \u73b0\u5728\u6d4f\u89c8\u5668\u7684b\u9875\u9762\uff0c\u5f53\u4f60\u4eceb\u9875\u9762\u8df3\u8f6c\u5230\u65b0\u7684d\u9875\u9762\u7684\u65f6\u5019\u3002\nhistory1.push(d);\nhistory2.pop(c);\n// \u73b0\u5728\u6d4f\u89c8\u5668\u4e2d\u7684\u6570\u636e\u662f histroy1 = [a, b, d]  histroy2 = []\n")),Object(i.b)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"go")," \u53c2\u6570\u4e3a\u6570\u5b57 ",Object(i.b)("inlineCode",{parentName:"li"},"history.go(1)")," \u76f8\u5f53\u4e8e ",Object(i.b)("inlineCode",{parentName:"li"},"history.forward()"),", ",Object(i.b)("inlineCode",{parentName:"li"},"history.go(-1)")," \u76f8\u5f53\u4e8e ",Object(i.b)("inlineCode",{parentName:"li"},"history.back()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"state"),"\u5c5e\u6027\u53ef\u4ee5\u5728\u9664\u4e86",Object(i.b)("inlineCode",{parentName:"li"},"popstate"),"\u4e8b\u4ef6\u4e2d\u62ff\u5230",Object(i.b)("inlineCode",{parentName:"li"},"state"),"\u7684\u503c\u5f97\u53e6\u4e00\u79cd\u65b9\u5f0f\uff0c\u6ce8\u610f\u5b83\u662f",Object(i.b)("strong",{parentName:"li"},"\u53ea\u8bfb"),"\u7684"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pushState")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"replaceState")," \u7684\u5173\u7cfb",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u76f8\u540c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e24\u8005\u7684\u4f7f\u7528\u65b9\u5f0f\u57fa\u672c\u4e00\u76f4\uff0c\u90fd\u662f\u5728",Object(i.b)("inlineCode",{parentName:"li"},"history.state"),"\u4e2d\u6dfb\u52a0\u5185\u5bb9"),Object(i.b)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f",Object(i.b)("inlineCode",{parentName:"li"},"state"),"\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f",Object(i.b)("inlineCode",{parentName:"li"},"title"),"\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570",Object(i.b)("inlineCode",{parentName:"li"},"url"),"\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6ca1\u6709\u6d4f\u89c8\u5668\u5b9e\u73b0\uff0c\u6240\u4ee5\u4e00\u822c\u5199null\u6216\u8005''\u5c31\u53ef\u4ee5\u3002"))),Object(i.b)("li",{parentName:"ul"},"\u533a\u522b",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pushState"),"\u4f1a\u5728\u6d4f\u89c8\u5668\u52a0\u5165\u4e00\u6761\u8bb0\u5f55\uff0c\u6539\u53d8",Object(i.b)("inlineCode",{parentName:"li"},"history.length"),"\u5c5e\u6027\u3002",Object(i.b)("inlineCode",{parentName:"li"},"replaceState"),"\u662f\u91cd\u5199\u6d4f\u89c8\u5668\u5f53\u524d\u7684\u8bb0\u5f55\uff0c\u4e0d\u4f1a\u589e\u52a0",Object(i.b)("inlineCode",{parentName:"li"},"history.length"),"\u7684\u957f\u5ea6"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"popState"),"\u4e8b\u4ef6\uff0c\u5728\u6d4f\u89c8\u5668\u8fd4\u56de\u548c\u524d\u8fdb\u65f6\u4f1a\u89e6\u53d1\uff0c\u4e5f\u5c31\u662f\u8bf4\u6808\u7ed3\u6784\u6709",Object(i.b)("inlineCode",{parentName:"li"},"pop"),"\u64cd\u4f5c\u7684\u65f6\u5019\u624d\u4f1a\u89e6\u53d1\u7684\u4e8b\u4ef6")),Object(i.b)("h2",{id:"\u5177\u4f53\u5e94\u7528"},"\u5177\u4f53\u5e94\u7528"),Object(i.b)("h3",{id:"1-\u6e05\u9664\u5f80\u8fd4\u7f13\u5b58"},"1. \u6e05\u9664\u5f80\u8fd4\u7f13\u5b58"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5f80\u8fd4\u7f13\u5b58\uff08",Object(i.b)("inlineCode",{parentName:"li"},"Back/Forward cache"),"\uff0c\u4e0b\u6587\u4e2d\u7b80\u79f0",Object(i.b)("inlineCode",{parentName:"li"},"bfcache"),"\uff09\u662f\u6d4f\u89c8\u5668\u4e3a\u4e86\u5728\u7528\u6237\u9875\u9762\u95f4\u6267\u884c\u524d\u8fdb\u540e\u9000\u64cd\u4f5c\u65f6\u62e5\u6709\u66f4\u52a0\u6d41\u7545\u4f53\u9a8c\u7684\u4e00\u79cd\u7b56\u7565\u3002\u8be5\u7b56\u7565\u5177\u4f53\u8868\u73b0\u4e3a\uff0c\u5f53\u7528\u6237\u524d\u5f80\u65b0\u9875\u9762\u65f6\uff0c\u5c06\u5f53\u524d\u9875\u9762\u7684\u6d4f\u89c8\u5668DOM\u72b6\u6001\u4fdd\u5b58\u5230",Object(i.b)("inlineCode",{parentName:"li"},"bfcache"),"\u4e2d\uff1b\u5f53\u7528\u6237\u70b9\u51fb\u540e\u9000\u6309\u94ae\u7684\u65f6\u5019\uff0c\u5c06\u9875\u9762\u76f4\u63a5\u4ece",Object(i.b)("inlineCode",{parentName:"li"},"bfcache"),"\u4e2d\u52a0\u8f7d\uff0c\u8282\u7701\u4e86\u7f51\u7edc\u8bf7\u6c42\u7684\u65f6\u95f4\u3002")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("pageshow", e => e.persisted && location.reload());\n// e.persisted \u662f\u5426\u4ece\u7f13\u5b58\u8bfb\u53d6\uff0c\u5982\u679ctrue \u662f\u4ece\u7f13\u5b58\u53d6\uff0c\u5982\u679cfalse\u76f8\u53cd\n')),Object(i.b)("h3",{id:"2-windowperformancenavigationtype-\u5982\u679c\u6ca1\u6709epersisted\u53ef\u4ee5\u901a\u8fc7\u8be5\u5c5e\u6027\u5224\u65ad"},"2. ",Object(i.b)("a",{parentName:"h3",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation/type"},"window.performance.navigation.type")," \u5982\u679c\u6ca1\u6709",Object(i.b)("inlineCode",{parentName:"h3"},"e.persisted"),"\u53ef\u4ee5\u901a\u8fc7\u8be5\u5c5e\u6027\u5224\u65ad"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"performance.navigation.type"),"\u8be5\u5c5e\u6027\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u503c\uff0c\u8868\u793a\u7f51\u9875\u7684\u52a0\u8f7d\u6765\u6e90\uff0c\u53ef\u80fd\u6709\u4ee5\u4e0b4\u79cd\u60c5\u51b5")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"value"),Object(i.b)("th",{parentName:"tr",align:null},"describe"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"0"),Object(i.b)("td",{parentName:"tr",align:null},"\u7f51\u9875\u901a\u8fc7\u70b9\u51fb\u94fe\u63a5\u3001\u5730\u5740\u680f\u8f93\u5165\u3001\u8868\u5355\u63d0\u4ea4\u3001\u811a\u672c\u64cd\u4f5c\u7b49\u65b9\u5f0f\u52a0\u8f7d\uff0c\u76f8\u5f53\u4e8e\u5e38\u6570performance.navigation.TYPE_NAVIGATE")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"1"),Object(i.b)("td",{parentName:"tr",align:null},"\u7f51\u9875\u901a\u8fc7\u201c\u91cd\u65b0\u52a0\u8f7d\u201d\u6309\u94ae\u6216\u8005location.reload()\u65b9\u6cd5\u52a0\u8f7d\uff0c\u76f8\u5f53\u4e8e\u5e38\u6570performance.navigation.TYPE_RELOAD\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"2"),Object(i.b)("td",{parentName:"tr",align:null},"\u7f51\u9875\u901a\u8fc7\u201c\u524d\u8fdb\u201d\u6216\u201c\u540e\u9000\u201d\u6309\u94ae\u52a0\u8f7d\uff0c\u76f8\u5f53\u4e8e\u5e38\u6570performance.navigation.TYPE_BACK_FORWARD\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"255"),Object(i.b)("td",{parentName:"tr",align:null},"\u4efb\u4f55\u5176\u4ed6\u6765\u6e90\u7684\u52a0\u8f7d\uff0c\u76f8\u5f53\u4e8e\u5e38\u6570performance.navigation.TYPE_RESERVED")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"performance.navigation.redirectCount"),"\u8868\u793a\u7f51\u9875\u7ecf\u8fc7\u91cd\u5b9a\u5411\u7684\u6b21\u6570\u3002")),Object(i.b)("h3",{id:"3-\u7981\u7528\u6d4f\u89c8\u5668\u540e\u9000\u6309\u94ae"},"3. \u7981\u7528\u6d4f\u89c8\u5668\u540e\u9000\u6309\u94ae"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"history.pushState(null, null, document.URL);\nwindow.addEventListener('popstate',  () => {\n  history.pushState(null, null, document.URL);\n});\n")),Object(i.b)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://juejin.cn/post/6921886428158754829#heading-36"},"\u4e2d\u9ad8\u7ea7\u524d\u7aef\u5fc5\u987b\u6ce8\u610f\u768440\u6761\u79fb\u52a8\u7aefH5\u5751\u4f4d\u6307\u5357")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History"},"History Web API \u53c2\u8003\u6587\u6863")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation/type"},"PerformanceNavigation.type"))))}p.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,d=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return n?r.a.createElement(d,b(b({ref:t},c),{},{components:n})):r.a.createElement(d,b({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);
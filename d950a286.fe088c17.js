(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),i=(r(0),r(179)),l=["components"],b={id:"react_vdom",title:"\u865a\u62dfdom \u548c diff"},c={unversionedId:"react_vdom",id:"react_vdom",isDocsHomePage:!1,title:"\u865a\u62dfdom \u548c diff",description:"\u865a\u62dfDOM",source:"@site/docs/react_vdom.md",slug:"/react_vdom",permalink:"/docs/react_vdom",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/react_vdom.md",version:"current"},o=[{value:"\u865a\u62dfDOM",id:"\u865a\u62dfdom",children:[{value:"1. \u4ec0\u4e48\u662f\u865a\u62dfDOM",id:"1-\u4ec0\u4e48\u662f\u865a\u62dfdom",children:[]},{value:"2. \u865a\u62dfDOM\u600e\u4e48\u4f7f\u7528",id:"2-\u865a\u62dfdom\u600e\u4e48\u4f7f\u7528",children:[]},{value:"3. \u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u865a\u62dfDOM",id:"3-\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u865a\u62dfdom",children:[]}]},{value:"dom-diff",id:"dom-diff",children:[{value:"\u8c03\u548c",id:"\u8c03\u548c",children:[]},{value:"diff",id:"diff",children:[]}]},{value:"this.setState",id:"thissetstate",children:[]}],u={toc:o};function d(e){var t=e.components,r=Object(a.a)(e,l);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u865a\u62dfdom"},"\u865a\u62dfDOM"),Object(i.b)("h3",{id:"1-\u4ec0\u4e48\u662f\u865a\u62dfdom"},"1. \u4ec0\u4e48\u662f\u865a\u62dfDOM"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u662fJs\u548cDOM\u4e4b\u95f4\u7684\u4e00\u4e2a\u6620\u5c04"),Object(i.b)("li",{parentName:"ul"},"\u662f\u4e00\u4e2aJs\u5bf9\u8c61"),Object(i.b)("li",{parentName:"ul"},"\u662f\u5bf9DOM\u7684\u771f\u5b9e\u63cf\u8ff0")),Object(i.b)("h3",{id:"2-\u865a\u62dfdom\u600e\u4e48\u4f7f\u7528"},"2. \u865a\u62dfDOM\u600e\u4e48\u4f7f\u7528"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7ReactDOM.render\u8fdb\u884c\u6302\u8f7d"),Object(i.b)("li",{parentName:"ul"},"\u9875\u9762\u53d8\u5316\u65f6\uff0c\u6839\u636e\u865a\u62dfDOM\u7684\u4fee\u6539\uff0c\u8fdb\u884cdiff\u64cd\u4f5c\uff0c\u5bf9\u6bd4\u66f4\u65b0\u771f\u5b9eDOM")),Object(i.b)("h3",{id:"3-\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u865a\u62dfdom"},"3. \u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u865a\u62dfDOM"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5386\u53f2\u539f\u56e0\uff0c\u66fe\u7ecf\u7684\u524d\u7aef\u662f\u624b\u64b8dom\uff0capi\u4f7f\u7528\u8d77\u6765\u975e\u5e38\u7e41\u7410\u590d\u6742\u3002\u865a\u62dfDOM\uff0c\u53ef\u4ee5\u8bf4\u89e3\u51b3\u5f00\u53d1\u8005\u7684\u5f00\u53d1\u4f53\u9a8c\u95ee\u9898\uff0c\u53ef\u4ee5\u4f7f\u7528\u7b80\u5355\u7684JSX\u8bed\u6cd5\u8fdb\u884c\u5f00\u53d1\uff0c\u4f7f\u5f00\u53d1\u8005\u4e0d\u7528\u518d\u53bb\u7ef4\u62a4\u771f\u5b9edom\uff0c\u53ea\u6539\u53d8\u6570\u636e\u5c31\u53ef\u4ee5\u4e86\u3002"),Object(i.b)("li",{parentName:"ul"},"\u65b9\u4fbf\u4ee3\u7801\u8de8\u5e73\u53f0\u4f7f\u7528\u3002\u5728\u6570\u636e\u548c\u771f\u5b9eDOM\u4e4b\u95f4\u5939\u4e86\u4e00\u5c42\u865a\u62dfDOM\uff0c\u53ef\u4ee5\u4f7f\u4ee3\u7801\u66f4\u5bb9\u6613\u8de8\u5e73\u53f0\u4f7f\u7528\u3002\u56e0\u4e3a\u865a\u62dfDOM\u5c31\u662f\u5bf9\u8c61\u3002"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u67d0\u79cd\u60c5\u51b5\u4e0b\u8282\u7ea6\u6027\u80fd\u3002\u4e00\u5b9a\u7a0b\u5e8f\u4e0a\u7f13\u89e3\u4e86\u6e32\u67d3dom\u7684\u64cd\u4f5c\u6027\u80fd\u74f6\u9888\uff0c\u5728\u5927\u91cf\u66f4\u6539DOM\u64cd\u4f5c\u7684\u65f6\u5019\u4f18\u4e8e\u6a21\u677f\u5f15\u64ce\u3002")),Object(i.b)("h2",{id:"dom-diff"},"dom-diff"),Object(i.b)("h3",{id:"\u8c03\u548c"},"\u8c03\u548c"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u8c03\u548c\u662f\u4f7f\u865a\u62dfDOM \u548c \u771f\u5b9eDOM \u53d8\u6210\u4e00\u81f4\u7684\u8fc7\u7a0b")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"react15 \u6808\u8c03\u548c"),Object(i.b)("li",{parentName:"ul"},"react16 fiber\u8c03\u548c")),Object(i.b)("h3",{id:"diff"},"diff"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"diff\u662f\u627e\u5230\u865a\u62dfDOM \u548c \u771f\u5b9eDOM \u4e0d\u540c\u7684\u5730\u65b9")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5728reconcile\u8fc7\u7a0b\u4e2d\uff0c\u5728\u66f4\u65b0\u4e2d\u4f1a\u51fa\u53d1diff\uff0c\u5224\u65ad\u5f53\u524d\u8282\u70b9\u662f\u5426\u53ef\u4ee5\u8fdb\u884c\u590d\u7528\u3002"),Object(i.b)("li",{parentName:"ul"},"react\u4e2d\u4f1a\u5efa\u7acb\u5728\u4ee5\u4e0b3\u6761\u7684\u57fa\u7840\u4e0a\u8fdb\u884cdiff",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"\u53ea\u4f1a\u8fdb\u884c\u540c\u4e00\u5c42\u8282\u70b9\u7684diff"),Object(i.b)("li",{parentName:"ol"},"\u4e0d\u540c\u7c7b\u578b\u7684\u8282\u70b9\uff0c\u76f4\u63a5\u8fdb\u884c\u5220\u9664\u91cd\u5efa"),Object(i.b)("li",{parentName:"ol"},"key\u53ef\u4ee5\u4fdd\u6301\u6e32\u67d3\u7684\u7a33\u5b9a\uff0c\u7531\u5f00\u53d1\u8005\u51b3\u5b9a\u662f\u5426\u8fdb\u884c\u5220\u9664\u91cd\u5efa\uff0c\u8fd8\u662f\u590d\u7528\u8282\u70b9")))),Object(i.b)("h4",{id:"\u5355\u8282\u70b9\u7684diff"},"\u5355\u8282\u70b9\u7684diff"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u67e5\u770b\u4e0a\u6b21\u66f4\u65b0\u65f6\u7684fiber\u8282\u70b9\u662f\u5426\u5b58\u5728"),Object(i.b)("li",{parentName:"ol"},"\u5982\u679c\u5b58\u5728\u8fdb\u884c\u5224\u65ad\u662f\u5426\u53ef\u4ee5\u590d\u7528",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5148\u5224\u65adkey\u662f\u5426\u4e00\u81f4\uff0c\u4e0d\u4e00\u81f4\u76f4\u63a5\u65b0\u5efa"),Object(i.b)("li",{parentName:"ul"},"key\u4e00\u81f4\u7684\u60c5\u51b5\u4e0b\u4fdd\u8bc1type\u4e00\u81f4\uff0c\u5c31\u53ef\u4ee5\u590d\u7528\uff0c\u5426\u5219\u5220\u9664\u91cd\u5efa"))),Object(i.b)("li",{parentName:"ol"},"\u4e0d\u5b58\u5728\u76f4\u63a5\u65b0\u5efa\u4e00\u4e2a\u65b0\u7684fiber\u8282\u70b9")),Object(i.b)("h4",{id:"\u591a\u8282\u70b9\u7684diff"},"\u591a\u8282\u70b9\u7684diff"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u540c\u4e00\u5c42\u7ea7\u6709\u591a\u4e2a\u8282\u70b9")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"diff\u4f1a\u8fdb\u884c\u4e24\u904d\u5faa\u73af\uff0c\u7b2c\u4e00\u904d\u627e\u51fa\u8fdb\u884c\u66f4\u65b0\uff0c\u7b2c\u4e8c\u904d\u8fdb\u884c\u589e\u5220\u548c\u79fb\u52a8\u64cd\u4f5c"),Object(i.b)("li",{parentName:"ol"},"\u7b2c\u4e00\u6b21\u904d\u5386",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"key\u4e0d\u540c\u76f4\u63a5\u505c\u6b62\u904d\u5386"),Object(i.b)("li",{parentName:"ul"},"type\u4e0d\u540c\u8fdb\u884c\u6253\u4e0a\u5220\u9664\u6807\u8bb0"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679cnewfiber \u548c oldfiber\u5148\u904d\u5386\u5b8c\u4e5f\u505c\u6b62\u5f53\u524d\u904d\u5386"))),Object(i.b)("li",{parentName:"ol"},"\u7b2c\u4e8c\u6b21\u904d\u5386",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7b2c\u4e00\u904d\u904d\u5386\u65f6\uff0c\u6240\u6709\u8282\u70b9\u90fd\u904d\u5386\u5b8c\u6210"),Object(i.b)("li",{parentName:"ul"},"newfiber\u6ca1\u6709\u904d\u5386\u5b8c\uff0coldfiber\u904d\u5386\u5b8c\uff0c\u8bf4\u660e\u6709\u65b0\u589e\uff0c\u6253\u4e0a\u65b0\u589e\u7684tag"),Object(i.b)("li",{parentName:"ul"},"newfiber\u904d\u5386\u5b8c oldfiber\u904d\u5386\u5b8c\uff0c\u8bf4\u660e\u6709\u5220\u9664\uff0c\u6253\u4e0a\u5220\u9664\u7684tag"),Object(i.b)("li",{parentName:"ul"},"newfiber \u548c oldfiber \u90fd\u6ca1\u6709\u904d\u5386\u5b8c\uff0c\u8bf4\u660e\u9700\u8981\u79fb\u52a8")))),Object(i.b)("p",null,"\u53c2\u8003",Object(i.b)("a",{parentName:"p",href:"https://react.iamkasong.com/diff/multi.html#%E6%A0%87%E8%AE%B0%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E7%A7%BB%E5%8A%A8"},"kasong-React\u6280\u672f\u63ed\u79d8")),Object(i.b)("h2",{id:"thissetstate"},"this.setState"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u9897\u65b0\u7684fiber\u6811\uff0c\u8fdb\u884cdiff\u64cd\u4f5c\uff0c\u6253\u4e0a\u6807\u8bb0"),Object(i.b)("li",{parentName:"ol"},"\u7136\u540e\u5c06\u6240\u6709\u7684setState\u63a8\u5165\u961f\u5217\u4e2d\uff0c\u5f53\u8fdb\u884c\u5230\u8be5\u66f4\u65b0\u7684\u751f\u547d\u5468\u671f\u65f6\u3002"),Object(i.b)("li",{parentName:"ol"},"\u8fdb\u884c\u6279\u91cf\u66f4\u65b0\u7684\u5904\u7406",Object(i.b)("inlineCode",{parentName:"li"},"batchedUpdates"),"\uff0c\u7136\u540e\u66ff\u6362\u6389\u4e4b\u524d\u7684fiber\u6811"),Object(i.b)("li",{parentName:"ol"},"\u5982\u679c\u5f53\u524d\u5df2\u7ecf\u5728\u5f02\u6b65\u64cd\u4f5c\u4e2d\uff0csetState\u6ca1\u6709\u88ab\u6253\u4e0a\u6279\u5904\u7406\u7684\u6807\u8bb0\uff0c\u5c31\u4f1a\u6267\u884c\u540c\u6b65\u66f4\u65b0\u3002")))}d.isMDXComponent=!0},179:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,f=d["".concat(l,".").concat(p)]||d[p]||O[p]||i;return r?a.a.createElement(f,b(b({ref:t},o),{},{components:r})):a.a.createElement(f,b({ref:t},o))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var o=2;o<i;o++)l[o]=r[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);
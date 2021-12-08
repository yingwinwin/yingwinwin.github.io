(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),c=(n(0),n(173)),o=["components"],l={slug:"/react",title:"react\u53d1\u5c55\u4ecb\u7ecd",author:"yingwinwin",author_title:"\u524d\u7aef\u5f00\u53d1",author_url:"https://github.com/yingwinwin",author_image_url:"https://avatars.githubusercontent.com/u/55273635?s=60&v=4",tags:["react","redux","react-router"]},i={permalink:"/blog/react",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/blob/master/blog/2021-12-07-react\u53ca\u5176\u751f\u6001\u53d1\u5c55\u4ecb\u7ecd.mdx",source:"@site/blog/2021-12-07-react\u53ca\u5176\u751f\u6001\u53d1\u5c55\u4ecb\u7ecd.mdx",description:"react18",date:"2021-12-07T00:00:00.000Z",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"redux",permalink:"/blog/tags/redux"},{label:"react-router",permalink:"/blog/tags/react-router"}],title:"react\u53d1\u5c55\u4ecb\u7ecd",readingTime:2.945,truncated:!1,nextItem:{title:"react\u9879\u76ee\u642d\u5efa",permalink:"/blog/react\u9879\u76ee\u642d\u5efa"}},b=[{value:"react18",id:"react18",children:[{value:"\u81ea\u52a8\u6279\u5904\u7406",id:"\u81ea\u52a8\u6279\u5904\u7406",children:[]}]},{value:"react-router v6",id:"react-router-v6",children:[]},{value:"redux-toolkit",id:"redux-toolkit",children:[]},{value:"ahooks",id:"ahooks",children:[]}],u={toc:b};function s(e){var t=e.components,n=Object(r.a)(e,o);return Object(c.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"react18"},"react18"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("ul",{parentName:"div",className:"contains-task-list"},Object(c.b)("li",{parentName:"ul",className:"task-list-item"},Object(c.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","react18 Alpha \u5df2\u7ecf\u5b8c\u6210"),Object(c.b)("li",{parentName:"ul",className:"task-list-item"},Object(c.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",Object(c.b)("strong",{parentName:"li"},"\u76ee\u524d react \u5904\u4e8ebeta\u7248\u672c")),Object(c.b)("li",{parentName:"ul",className:"task-list-item"},Object(c.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u8fdb\u5165\u5230RC\u7248\u672c\uff0c\u9700\u8981\u5927\u69821-2\u4e2a\u6708\uff0c\u5177\u4f53\u8fd8\u9700\u8981\u770b\u53cd\u9988\u3002"),Object(c.b)("li",{parentName:"ul",className:"task-list-item"},Object(c.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","RC\u7ed3\u675f\u4e4b\u540e\uff0c\u9700\u8981\u5927\u69822~4\u5468\u5c31\u4f1a\u53d1\u5e03react18\u4e86\u3002")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5\u65b9\u5f0f\nnpm install react@beta react-dom@beta\n")),Object(c.b)("h3",{id:"\u81ea\u52a8\u6279\u5904\u7406"},"\u81ea\u52a8\u6279\u5904\u7406"),Object(c.b)("p",null,"\u5982\u4f55\u7406\u89e3\u6279\u5904\u7406\u5462\uff1f\u4ece\u4e00\u9053\u8001\u751f\u5e38\u8c08\u7684\u9762\u8bd5\u9898\u8c08\u8d77\uff1a",Object(c.b)("inlineCode",{parentName:"p"},"setState\u4ec0\u4e48\u65f6\u5019\u662f\u540c\u6b65\u7684\uff0c\u4ec0\u4e48\u65f6\u5019\u662f\u5f02\u6b65\u7684\uff1f")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6765\u770b\u4e00\u4e0b\uff0c\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801 \uff08\u6253\u5f00\u63a7\u5236\u53f0\u70b9\u51fb\u6309\u94ae\u67e5\u770b\u6548\u679c\uff09")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},"() => {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    setCount((count) => count + 1)\n    setCount((count) => count + 1)\n  }\n  console.log(123)\n  return <><button onClick={handleClick}>\u70b9\u51fb</button></>\n}\n")),Object(c.b)("p",null,"\u719f\u6089react\u7684\u670b\u53cb\uff0c\u5e94\u8be5\u90fd\u77e5\u9053\uff0creact\u4f1a\u5408\u5e76\u5904\u7406\u5728\u4e8b\u4ef6\u51fd\u6570\u548c\u751f\u547d\u5468\u671f\u7684setState\u7684\u6e32\u67d3\uff0c\u6240\u4ee5\u4e0a\u9762\u5728console\u4e2d\u7684123\uff0c\u4f1a\u6253\u5370",Object(c.b)("inlineCode",{parentName:"p"},"1"),"\u6b21\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u518d\u6765\u770b\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\uff08\u6253\u5f00\u63a7\u5236\u53f0\u70b9\u51fb\u6309\u94ae\u67e5\u770b\u6548\u679c\uff09")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live=true",live:"true"},"() => {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    setTimeout(() => {\n      setCount((count) => count + 1)\n      setCount((count) => count + 1)\n    }, 0);\n  }\n  console.log(456)\n  return <><button onClick={handleClick}>\u70b9\u51fb</button></>\n}\n")),Object(c.b)("p",null,"\u7ed3\u679c\u53ef\u80fd\u5927\u5bb6\u4e5f\u90fd\u5df2\u7ecf\u77e5\u9053\u4e86\uff0cconsole\u91cc\u9762\u7684\u503c\u88ab\u6253\u5370\u4e86",Object(c.b)("inlineCode",{parentName:"p"},"2"),"\u6b21\uff0c\u4e5f\u5c31\u662f\u8bf4react\u7ec4\u4ef6\u6e32\u67d3\u4e862\u6b21\uff0c\u5728setTimeout\u4e2dsetState\u7684\u6279\u5904\u7406\u5931\u6548\u4e86\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u90a3\u9053\u6709\u540d\u7684\u9762\u8bd5\u9898\u7684\u7b54\u6848\u4e5f\u5c31\u51fa\u6765\u4e86\u3002"),Object(c.b)("ol",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ol"},"react\u5728\u4e8b\u4ef6\u5904\u7406\u548c\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u662f\u5f02\u6b65\u5904\u7406\u6e32\u67d3\uff08\u5408\u5e76\u6e32\u67d3\uff0c\u4e5f\u5c31\u662f\u6279\u5904\u7406\uff09"),Object(c.b)("li",{parentName:"ol"},"\u5728\u5f02\u6b65\u4efb\u52a1\u4e2d\uff0c\u5982\uff1apromise.then\uff0csetTimeout\u7b49\u5f02\u6b65\u4efb\u52a1\u4e2d\uff0c\u4f1a\u540c\u6b65\u8fdb\u884c\u6e32\u67d3\uff08\u4e0d\u8fdb\u884c\u6279\u5904\u7406\uff09")),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"\u8fd9\u6837\u770b\u5176\u5b9esetState\u572818\u7248\u672c\u4e4b\u524d\u53ea\u80fd\u7b97\u662f\u534a\u81ea\u52a8\u6279\u5904\u7406\u3002"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u6279\u5904\u7406\u7684\u6982\u5ff5\u8bf4\u5b8c\u4e86\u6211\u4eec\u6765\u770b\u4e00\u4e0breact18\u505a\u4e86\u4ec0\u4e48\uff1f")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"react18\u4e2d\u6539\u6389\u4e86\u8fd9\u4e2asetState\u5728\u5f02\u6b65\u4e2d\u5904\u7406\u7684\u95ee\u9898\uff0c\u771f\u6b63\u4e86\u5b9e\u73b0\u4e86\u81ea\u52a8\u6279\u5904\u7406\u3002\uff08\u72c2\u559c\uff0c\u4ee5\u540e\u518d\u4e5f\u4e0d\u7528\u88absetState\u7684\u9762\u8bd5\u9898\u652f\u914d\ud83d\ude0e\uff09")),Object(c.b)("p",null,"\u5982\u4f55\u4f7f\u7528react18\u7684\u81ea\u52a8\u6279\u5904\u7406\u5462\uff1f\u9700\u8981\u4f7f\u7528\u5230react\u63d0\u4f9b\u7684\u65b0\u7684root Api"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"react\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u7684root Api\uff0c",Object(c.b)("inlineCode",{parentName:"li"},"ReactDOM.createRoot"),"\u7528\u4e8e\u5e76\u53d1\u6e32\u67d3"),Object(c.b)("li",{parentName:"ul"},"\u4e4b\u524d\u6211\u4eec\u4f7f\u7528\u7684",Object(c.b)("inlineCode",{parentName:"li"},"ReactDOM.render()"),"\u88ab\u79f0\u4e3a",Object(c.b)("inlineCode",{parentName:"li"},"legacy\u6a21\u5f0f"))))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://react.docschina.org/blog/2021/06/08/the-plan-for-react-18.html"},"\u5b98\u65b9react18\u4ecb\u7ecd")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/reactwg/react-18/discussions/categories/announcement"},"react18\u5de5\u4f5c\u7ec4"))),Object(c.b)("h2",{id:"react-router-v6"},"react-router v6"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://reactrouter.com/"},"\u5b98\u65b9\u6587\u6863"))),Object(c.b)("h2",{id:"redux-toolkit"},"redux-toolkit"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/"},"\u5b98\u65b9\u6587\u6863"))),Object(c.b)("h2",{id:"ahooks"},"ahooks"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://ahooks.gitee.io/zh-CN/hooks/use-request/index"},"\u5b98\u65b9\u6587\u6863"))))}s.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||p[m]||c;return n?r.a.createElement(d,l(l({ref:t},b),{},{components:n})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
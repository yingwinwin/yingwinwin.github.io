(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),c=n(7),r=(n(0),n(175)),o=["components"],l={slug:"/react",title:"react\u53d1\u5c55\u4ecb\u7ecd",author:"yingwinwin",author_title:"\u524d\u7aef\u5f00\u53d1",author_url:"https://github.com/yingwinwin",author_image_url:"https://avatars.githubusercontent.com/u/55273635?s=60&v=4",tags:["react","redux","react-router"]},i={permalink:"/blog/react",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/blob/master/blog/2021-12-07-react\u53ca\u5176\u751f\u6001\u53d1\u5c55\u4ecb\u7ecd.mdx",source:"@site/blog/2021-12-07-react\u53ca\u5176\u751f\u6001\u53d1\u5c55\u4ecb\u7ecd.mdx",description:"react18",date:"2021-12-07T00:00:00.000Z",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"redux",permalink:"/blog/tags/redux"},{label:"react-router",permalink:"/blog/tags/react-router"}],title:"react\u53d1\u5c55\u4ecb\u7ecd",readingTime:5.555,truncated:!1,nextItem:{title:"react\u9879\u76ee\u642d\u5efa",permalink:"/blog/react\u9879\u76ee\u642d\u5efa"}},b=[{value:"react18",id:"react18",children:[{value:"\u81ea\u52a8\u6279\u5904\u7406",id:"\u81ea\u52a8\u6279\u5904\u7406",children:[]},{value:"Suspense",id:"suspense",children:[]},{value:"startTransition",id:"starttransition",children:[]}]}],s={toc:b};function u(e){var t=e.components,l=Object(c.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"react18"},"react18"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div",className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","react18 Alpha \u5df2\u7ecf\u5b8c\u6210"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",Object(r.b)("strong",{parentName:"li"},"\u76ee\u524d react \u5904\u4e8ebeta\u7248\u672c")),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u8fdb\u5165\u5230RC\u7248\u672c\uff0c\u9700\u8981\u5927\u69821-2\u4e2a\u6708\uff0c\u5177\u4f53\u8fd8\u9700\u8981\u770b\u53cd\u9988\u3002"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","RC\u7ed3\u675f\u4e4b\u540e\uff0c\u9700\u8981\u5927\u69822~4\u5468\u5c31\u4f1a\u53d1\u5e03react18\u4e86\u3002")))),Object(r.b)("h3",{id:"\u81ea\u52a8\u6279\u5904\u7406"},"\u81ea\u52a8\u6279\u5904\u7406"),Object(r.b)("p",null,"\u5982\u4f55\u7406\u89e3\u6279\u5904\u7406\u5462\uff1f\u4ece\u4e00\u9053\u8001\u751f\u5e38\u8c08\u7684\u9762\u8bd5\u9898\u8c08\u8d77\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"setState\u4ec0\u4e48\u65f6\u5019\u662f\u540c\u6b65\u7684\uff0c\u4ec0\u4e48\u65f6\u5019\u662f\u5f02\u6b65\u7684\uff1f")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6765\u770b\u4e00\u4e0b\uff0c\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801 \uff08\u6253\u5f00\u63a7\u5236\u53f0\u70b9\u51fb\u6309\u94ae\u67e5\u770b\u6548\u679c\uff09")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import React, {useState} from 'react';\nimport ReactDOM from 'react-dom';\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    setCount((count) => count + 1)\n    setCount((count) => count + 1)\n  }\n  console.log(111);\n\n  return <><button onClick={handleClick}>\u70b9\u51fb</button>{count}</>\n}\nReactDOM.render(<App/>, document.getElementById('root'))\n")),Object(r.b)("p",null,"\u6548\u679c\uff1a\n",Object(r.b)("img",{alt:"image",src:n(193).default}),"\n\u719f\u6089react\u7684\u670b\u53cb\uff0c\u5e94\u8be5\u90fd\u77e5\u9053\uff0creact\u4f1a\u5408\u5e76\u5904\u7406\u5728\u4e8b\u4ef6\u51fd\u6570\u548c\u751f\u547d\u5468\u671f\u7684setState\u7684\u6e32\u67d3\uff0c\u6240\u4ee5\u4e0a\u9762\u5728console\u4e2d\u7684123\uff0c\u4f1a\u6253\u5370",Object(r.b)("inlineCode",{parentName:"p"},"1"),"\u6b21\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u518d\u6765\u770b\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"{8,11}","{8,11}":!0},"import React, {useState} from 'react';\nimport ReactDOM from 'react-dom';\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    setTimeout(() => {\n      setCount((count) => count + 1)\n      setCount((count) => count + 1)\n    }, 0);\n  }\n  console.log(111);\n\n  return <><button onClick={handleClick}>\u70b9\u51fb</button>{count}</>\n}\nReactDOM.render(<App/>, document.getElementById('root'))\n")),Object(r.b)("p",null,"\u6548\u679c\uff1a\n",Object(r.b)("img",{alt:"image",src:n(194).default}),"\n\u7ed3\u679c\u53ef\u80fd\u5927\u5bb6\u4e5f\u90fd\u5df2\u7ecf\u77e5\u9053\u4e86\uff0cconsole\u91cc\u9762\u7684\u503c\u88ab\u6253\u5370\u4e86",Object(r.b)("inlineCode",{parentName:"p"},"2"),"\u6b21\uff0c\u4e5f\u5c31\u662f\u8bf4\u6bcf\u6b21\u70b9\u51fbreact\u7ec4\u4ef6\u6e32\u67d3\u4e862\u6b21\uff0c\u5728setTimeout\u4e2dsetState\u7684\u6279\u5904\u7406\u5931\u6548\u4e86\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u90a3\u9053\u6709\u540d\u7684\u9762\u8bd5\u9898\u7684\u7b54\u6848\u4e5f\u5c31\u51fa\u6765\u4e86\u3002"),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"react\u5728\u4e8b\u4ef6\u5904\u7406\u548c\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u662f\u5f02\u6b65\u5904\u7406\u6e32\u67d3\uff08\u5408\u5e76\u6e32\u67d3\uff0c\u4e5f\u5c31\u662f\u6279\u5904\u7406\uff09"),Object(r.b)("li",{parentName:"ol"},"\u5728\u5f02\u6b65\u4efb\u52a1\u4e2d\uff0c\u5982\uff1apromise.then\uff0csetTimeout\u7b49\u5f02\u6b65\u4efb\u52a1\u4e2d\uff0c\u4f1a\u540c\u6b65\u8fdb\u884c\u6e32\u67d3\uff08\u4e0d\u8fdb\u884c\u6279\u5904\u7406\uff09")),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"\u8fd9\u6837\u770b\u5176\u5b9esetState\u572818\u7248\u672c\u4e4b\u524d\u53ea\u80fd\u7b97\u662f\u534a\u81ea\u52a8\u6279\u5904\u7406\u3002"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u6279\u5904\u7406\u7684\u6982\u5ff5\u8bf4\u5b8c\u4e86\u6211\u4eec\u6765\u770b\u4e00\u4e0breact18\u505a\u4e86\u4ec0\u4e48\uff1f")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"react18\u4e2d\u6539\u6389\u4e86\u8fd9\u4e2asetState\u5728\u5f02\u6b65\u4e2d\u5904\u7406\u7684\u95ee\u9898\uff0c\u771f\u6b63\u4e86\u5b9e\u73b0\u4e86\u81ea\u52a8\u6279\u5904\u7406\u3002\uff08\u72c2\u559c\uff0c\u4ee5\u540e\u518d\u4e5f\u4e0d\u7528\u88absetState\u7684\u9762\u8bd5\u9898\u652f\u914d\ud83d\ude0e\uff09")),Object(r.b)("p",null,"\u5982\u4f55\u4f7f\u7528react18\u7684\u81ea\u52a8\u6279\u5904\u7406\u5462\uff1f\u9700\u8981\u4f7f\u7528\u5230react\u63d0\u4f9b\u7684\u65b0\u7684root Api"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"react\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u7684root Api\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"ReactDOM.createRoot"),"\u7528\u4e8e\u5e76\u53d1\u6e32\u67d3\uff0c\u53ef\u4ee5\u9009\u62e9\u4f18\u5148\u7ea7\u66f4\u9ad8\u7684\u4efb\u52a1\u8fdb\u884c\u6e32\u67d3\u3002"),Object(r.b)("li",{parentName:"ul"},"\u4e4b\u524d\u6211\u4eec\u4f7f\u7528\u7684",Object(r.b)("inlineCode",{parentName:"li"},"ReactDOM.render()"),"\u88ab\u79f0\u4e3a",Object(r.b)("inlineCode",{parentName:"li"},"legacy\u6a21\u5f0f"),"\uff0c\u7b49\u5f85\u6309\u7167\u987a\u5e8f\u6e32\u67d3\u3002")))),Object(r.b)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u4e0d\u53d8\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0b\uff0c\u5728react18\u4e2d\u7684\u8868\u73b0\u3002"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u5b89\u88c5\u5305\u66f4\u6539\u4e3areact18@beta\u7248\u672c\u3002")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5\u65b9\u5f0f\nnpm install react@beta react-dom@beta\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"\u9700\u8981\u4fee\u6539react\u7684\u6302\u8f7d\u6a21\u5f0f\u4e3acreateRoot Api\u5f62\u5f0f")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-diff",metastring:"jsx",jsx:!0},"- ReactDOM.render(<App/>, document.getElementById('root'))\n+ ReactDOM.createRoot(document.getElementById('root')).render(<App/>);\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"\u4ee3\u7801 ")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import React, {useState} from 'react';\nimport ReactDOM from 'react-dom';\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    setTimeout(() => {  // \u5f02\u6b65\n      setCount((count) => count + 1)\n      setCount((count) => count + 1)\n    }, 0);\n  }\n  console.log(111);\n\n  return <><button onClick={handleClick}>\u70b9\u51fb</button>{count}</>\n}\n\n// \u8fd9\u91cc\u6362\u6210\u6700\u65b0\u7684createRoot API\nReactDOM.createRoot(document.getElementById('root')).render(<App/>);\n")),Object(r.b)("p",null,"\u6548\u679c\uff1a\n",Object(r.b)("img",{alt:"image",src:n(193).default}),"\n\u53ef\u4ee5\u770b\u5230react18\u5373\u4fbf\u662f\u5728\u5f02\u6b65\u64cd\u4f5c\u4e2d\uff0c\u4e5f\u4e0d\u4f1a\u51fa\u73b0\u91cd\u65b0\u6e32\u67d3\u4e24\u6b21\u7684\u60c5\u51b5\u3002\u8fbe\u5230\u4e86\u771f\u6b63\u7684\u81ea\u52a8\u5316\u6279\u5904\u7406\u3002"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u90a3\u4e48\u95ee\u9898\u6765\u4e86\uff0c\u6211\u4eec\u5e76\u4e0d\u662f\u603b\u662f\u9700\u8981\u6279\u5904\u7406\u5440\uff0c\u90a3\u600e\u4e48\u5b9e\u73b0\u4e4b\u524d\u9700\u8981\u5f02\u6b65\u5904\u7406\u7684\u60c5\u51b5\u5462\uff1freact\u5b98\u65b9\u63d0\u4f9b\u4e86\u4e00\u4e2aapi\uff0c\u5e2e\u52a9\u6211\u4eec\u5904\u7406\u8fd9\u79cd\u4e0d\u9700\u8981\u6279\u5904\u7406\u7684\u60c5\u51b5\u3002")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ReactDOM.flushSync"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"{9-11}","{9-11}":!0},"import React, {useState} from 'react';\nimport ReactDOM from 'react-dom';\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    setTimeout(() => {\n      ReactDOM.flushSync(() => {\n        setCount((count) => count + 1)\n      })\n      setCount((count) => count + 1)\n    }, 0);\n  }\n  console.log(111);\n\n  return <><button onClick={handleClick}>\u70b9\u51fb</button>{count}</>\n}\nReactDOM.createRoot(document.getElementById('root')).render(<App/>);\n")),Object(r.b)("p",null,"\u6548\u679c\uff1a\n",Object(r.b)("img",{alt:"image",src:n(194).default}),"\n\u8fd9\u6837\u6548\u679c\u7684\u8868\u73b0\u548c\u4e4b\u524d\u653e\u5230",Object(r.b)("inlineCode",{parentName:"p"},"\u5f02\u6b65"),"\u7684\u8868\u73b0\u662f\u4e00\u81f4\u7684\u3002"),Object(r.b)("h3",{id:"suspense"},"Suspense"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"react\u572816.x\u7684\u65f6\u5019\u5c31\u5df2\u7ecf\u652f\u6301\u4e86\u8fd9\u4e2aapi\uff0c\u4f46\u662f\u5f53\u65f6\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u5f02\u6b65\u66f4\u65b0\u3002\u5728react18\u4e2d\uff0c\u5b8c\u6210\u4e86\u5bf9\u8fd9\u4e2aapi\u7684\u6539\u9020")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Legacy Suspense \u4e2d\uff0c\u540c\u7ea7\u5144\u5f1f\u7ec4\u4ef6\u4f1a\u7acb\u5373\u4ece DOM \u4e0a\u5378\u8f7d\uff08mounted\uff09\uff0c\u76f8\u5173\u7684 effects \u548c\u751f\u547d\u5468\u671f\u4f1a\u88ab\u89e6\u53d1\uff0c\u6700\u540e\u4f1a\u9690\u85cf\u8fd9\u4e2a\u7ec4\u4ef6\u3002\u5177\u4f53\u53ef\u4ee5\u67e5\u770b",Object(r.b)("a",{parentName:"li",href:"https://codesandbox.io/s/keen-banach-nzut8?file=/src/App.js"},"\u4ee3\u7801\u793a\u4f8b"),"\u3002"),Object(r.b)("li",{parentName:"ol"},"Concurrent Suspense \u4e2d\uff0c\u540c\u7ea7\u5144\u5f1f\u7ec4\u4ef6\u5e76\u4e0d\u4f1a\u4ece DOM \u4e0a\u5378\u8f7d\uff0c\u76f8\u5173\u7684 effects \u548c\u751f\u547d\u5468\u671f\u4f1a\u5728 ComponentThatSuspends \u5904\u7406\u5b8c\u6210\u65f6\u89e6\u53d1\u3002\u5177\u4f53\u53ef\u4ee5\u67e5\u770b",Object(r.b)("a",{parentName:"li",href:"https://codesandbox.io/s/romantic-architecture-ht3qi?file=/src/App.js"},"\u4ee3\u7801\u793a\u4f8b"),"\u3002")),Object(r.b)("h3",{id:"starttransition"},"startTransition"),Object(r.b)("h3",{id:""}))}u.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createContext({}),s=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?c.a.createElement(d,l(l({ref:t},b),{},{components:n})):c.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},193:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/20211212150110-c0d2fe993f78dea540bce3e75148f893.gif"},194:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/20211212150113-20ad552773900f0e6270f12531041d9b.gif"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{122:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return i}));var o=t(3),r=t(7),a=(t(0),t(127)),c={id:"reactHook",title:"Hook\u57fa\u672c\u4f7f\u7528"},s={unversionedId:"reactHook",id:"reactHook",isDocsHomePage:!1,title:"Hook\u57fa\u672c\u4f7f\u7528",description:"Hello World!",source:"@site/docs/reactHook.md",slug:"/reactHook",permalink:"/docs/reactHook",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/reactHook.md",version:"current",sidebar:"someError",previous:{title:"Rem\u5e03\u5c40\u81ea\u9002\u5e94",permalink:"/docs/remFit"},next:{title:"react\u4e2d\u4f7f\u7528ts",permalink:"/docs/reactUseTs"}},u=[{value:"Hello World!",id:"hello-world",children:[]},{value:"hooks",id:"hooks",children:[]},{value:"useState",id:"usestate",children:[]},{value:"useEffect(\u526f\u4f5c\u7528)",id:"useeffect\u526f\u4f5c\u7528",children:[]},{value:"hook\u7b80\u5355\u7684\u903b\u8f91\u590d\u7528",id:"hook\u7b80\u5355\u7684\u903b\u8f91\u590d\u7528",children:[]},{value:"hook\u7684\u590d\u7528(\u83b7\u53d6\u903b\u8f91)",id:"hook\u7684\u590d\u7528\u83b7\u53d6\u903b\u8f91",children:[]},{value:"useRef()",id:"useref",children:[]},{value:"useContext",id:"usecontext",children:[]},{value:"useMemo",id:"usememo",children:[]},{value:"useCallback",id:"usecallback",children:[]},{value:"useReducer",id:"usereducer",children:[]}],l={toc:u};function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"hello-world"},"Hello World!"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\n/* \u5b9a\u4e49\u4f20\u5165\u7684\u63a5\u53e3\u7c7b\u578b */\ninterface IHelloProps {\n    message?: string;\n}\n\n/* \u6cdb\u578b\u5b9a\u4e49 */\nconst Hello: React.FC<IHelloProps> = (props) =>  {\n    return <h2>{props.message}</h2>\n}\n\n/* \u8bbe\u7f6e\u4f20\u5165\u7684\u9ed8\u8ba4\u503c */\nHello.defaultProps = {\n    message: 'Hello World!'\n}\n\nexport default Hello;\n")),Object(a.b)("h3",{id:"hooks"},"hooks"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5f88\u96be\u590d\u7528\u72b6\u6001\u903b\u8f91\uff0c\u4e4b\u524d\u9700\u8981\u7528HOC \u548c render props"),Object(a.b)("li",{parentName:"ul"},"\u590d\u6742\u7ec4\u4ef6\u96be\u4ee5\u7406\u89e3\uff0c\u5c24\u5176\u662f\u751f\u547d\u5468\u671f\u51fd\u6570")),Object(a.b)("h3",{id:"usestate"},"useState"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"const = ","[ like, setlike ]"," = useState(0) \u8bbe\u7f6e\u521d\u59cb\u503c\uff0c\u662f\u6570\u5b57\u3002\u89e3\u6784\u6570\u7ec4\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u9ed8\u8ba4\u7684state\u503c\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6539\u53d8\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u65b9\u6cd5")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react'\n\nconst LikeButton: React.FC = () => {\n    const [ Like, setLike ]  = useState(0);\n    const [ on, setOn ] = useState(true);\n    return <>\n    <button onClick={() => {setOn(!on)}}>\n        {on ? 'ON' : 'OFF'}\n    </button>\n    <button onClick={() => {setLike(Like + 1)}}>\n        {Like}\n    </button>\n    </>\n}\n\nexport default LikeButton;\n")),Object(a.b)("h3",{id:"useeffect\u526f\u4f5c\u7528"},"useEffect(\u526f\u4f5c\u7528)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"useEffect\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e2a\u51fd\u6570\uff0c\u7b2c\u4e00\u4e2a\u662f\u4e2a\u6570\u7ec4\u3002\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u51fd\u6570\u3002",Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},"\u4e0d\u9700\u8981\u6e05\u9664\u526f\u4f5c\u7528")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useEffect } from 'react'\n\nconst LikeButton: React.FC = () => {\n    const [ Like, setLike ]  = useState(0);\n    const [ on, setOn ] = useState(true);\n    /* \u4e0d\u9700\u8981\u6e05\u9664\u526f\u4f5c\u7528\u65f6 */\n    useEffect(() => {\n        document.title = `\u70b9\u51fb\u4e86${Like}\u6b21`\n        /* \u53ea\u6709\u5728like\u6539\u53d8\u7684\u65f6\u5019\u624d\u89e6\u53d1\uff0c\u5426\u5219\u4e0d\u89e6\u53d1 */\n    }, [Like])\n    return <>\n    <button onClick={() => {setOn(!on)}}>\n        {on ? 'ON' : 'OFF'}\n    </button>\n    <button onClick={() => {setLike(Like + 1)}}>\n        {Like}\n    </button>\n    </>\n}\n\nexport default LikeButton;\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"return \u4e2d\u5199\u6e05\u9664\u526f\u4f5c\u7528\u7684\u903b\u8f91\uff0c\u5728useEffect\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e2d\u5f53\u8c01\u6539\u53d8\u7684\u65f6\u5019\u89e6\u53d1\u526f\u4f5c\u7528")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useEffect} from 'react';\n\nconst MouseTracker: React.FC = () => {\n    const [ positions, setPosition ] = useState({ x: 0, y: 0 })\n    useEffect(() => {\n        const changePosition = (e: MouseEvent) => {\n            setPosition({x : e.clientX, y: e.clientY})\n        }\n        /* \u6dfb\u52a0\u8fd9\u4e2a\u72b6\u6001 */\n        document.addEventListener('click', changePosition);\n        return () => {\n            /* \u5378\u8f7d\u67d0\u4e2a\u72b6\u6001\u7684\u65f6\u5019 */\n            console.log('remove', positions.x)\n            document.removeEventListener('click', changePosition)\n        }\n        /* []\u6240\u6709\u6539\u53d8\u7684\u65f6\u5019\u90fd\u89e6\u53d1 */\n    }, [])\n    console.log('render', positions.x)\n    return (\n        <p>{'X : ' + positions.x +', Y : ' + positions.y }</p>\n    )\n}\n\nexport default MouseTracker;\n")),Object(a.b)("h3",{id:"hook\u7b80\u5355\u7684\u903b\u8f91\u590d\u7528"},"hook\u7b80\u5355\u7684\u903b\u8f91\u590d\u7528"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u9700\u8981\u590d\u7528\u7684\u7ec4\u4ef6\uff08\u6ce8\u610f\u547d\u540d\u89c4\u8303\uff09")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { useState, useEffect} from 'react';\n\nconst useMoustTracker = () => {\n    const [position, setPosition] = useState({x: 0, y: 0});\n    useEffect(() => {\n        console.log('add', position.x)\n        const changeMouse = (e: MouseEvent) => {\n            setPosition({\n                x: e.clientX,\n                y: e.clientY\n            })\n        }\n        document.addEventListener('mousemove', changeMouse);\n        return () => {\n            console.log('remove', position.x)\n            document.removeEventListener('mousemove', changeMouse);\n        }\n    }, [])\n    // \u76f4\u63a5return \u5f53\u524d\u7684\u53d8\u5316\u503c\n    return position;\n}\n\nexport default useMoustTracker;\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u590d\u7528\u7ec4\u4ef6\u7684\u4f7f\u7528")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport useMouseTracker from './useMouseTracker';\n\nconst App: React.FC = () => {\n // \u8c03\u7528\u51fd\u6570\uff0c\u83b7\u53d6return\u51fa\u6765\u7684\u503c\n  const position = useMouseTracker();\n  return (\n    <p>{position.x}{position.y}</p>\n  );\n}\n\nexport default App;\n")),Object(a.b)("h3",{id:"hook\u7684\u590d\u7528\u83b7\u53d6\u903b\u8f91"},"hook\u7684\u590d\u7528(\u83b7\u53d6\u903b\u8f91)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u590d\u7528\u7684\u903b\u8f91")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { useState, useEffect} from 'react';\nimport axios from 'axios';\n\n/* deps\u7684\u9ed8\u8ba4\u503c\u662f\u4e00\u4e2a[] */\nconst useURLLoader = (url: string, deps: any[] = []) => {\n    const [data, setData] = useState<any>(null);\n    const [loading, setLoading] = useState(false);\n\n    useEffect(() => {\n        setLoading(true)\n        axios.get(url).then(reselt => {\n            setData(reselt.data);\n            setLoading(false)\n        })\n    }, deps)\n    // \u5bfc\u51fa\u83b7\u53d6\u7684\u6570\u636e\uff0c\u548c\u5f53\u524d\u7684loading\u7684\u53c2\u6570\n    return [data, loading]\n}\n\nexport default useURLLoader;\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport useURLLoader from './hook/useURLLoader'\n\ninterface IShowRuslt  {\n  message: string;\n  status: string;\n}\nconst App: React.FC = () => {\n  const [show, setShow] = useState(true)\n  /* \u4f20\u5165\u4e24\u4e2a\u53c2\u6570\uff0c\u4e00\u4e2aurl\uff0c\u83b7\u53d6\u6570\u636e\uff0c\u4e00\u4e2aeffect\u4ec0\u4e48\u65f6\u5019\u51fa\u53d1\u66f4\u65b0\u7684\u503c\uff0cshow\u6539\u53d8\u7684\u65f6\u5019\u66f4\u65b0\u503c */\n  const [data, loading] = useURLLoader('url', [show])\n  // \u628a data \u7684\u6570\u636e\u6a21\u5f0f\u6539\u6210 IShowRuslt\u7c7b\u578b\n  const dogResult = data as IShowRuslt;\n  \n  return (\n    <div className=\"App\">\n      {/* \u5982\u679c\u5728\u83b7\u53d6\u4e2d\uff0c\u5c31\u662f\u73b0\u5b9e\u52a0\u8f7d\u4e2d\uff0c\u5426\u5219\u5c31\u662f\u663e\u793a\u56fe\u7247 */}\n      {loading ? <p>\u52a0\u8f7d\u4e2d...</p> : <img src={dogResult && dogResult.message}/> }\n      <button onClick={()=> {setShow(!show)}}>show</button>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(a.b)("h3",{id:"useref"},"useRef()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5f53this\u7528\uff0c\u6539\u53d8\u4e0d\u4f1a\u91cd\u65b0\u4f7f\u7ec4\u4ef6\u6e32\u67d3"),Object(a.b)("li",{parentName:"ul"},"\u6a21\u62df\u751f\u547d\u5468\u671fdidmount"),Object(a.b)("li",{parentName:"ul"},"\u83b7\u53d6dom\u8282\u70b9")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useEffect, useRef } from 'react';\n\nconst LikeButton: React.FC = () => {\n    const [ Like, setLike ]  = useState(0);\n    /* \u76f8\u5f53\u4e8e\u7c7b\u7ec4\u4ef6\u7684this\uff0c\u4e0d\u4f1a\u5f15\u8d77\u51fd\u6570\u7684\u95ed\u5305\uff0c\u53ef\u4ee5\u83b7\u53d6\u5230\u6700\u65b0\u7684\u53d8\u66f4\u503c */\n    const likeRef = useRef(0);\n    useEffect(() => {\n        document.title = `\u70b9\u51fb\u4e86${Like}\u6b21`\n    }, [Like])\n    \n    /* \u6a21\u62dfdidMountUpdate! */\n    useEffect(() => {\n        if(didMountRef.current) {\n            console.log('this is update!');\n        } else {\n            didMountRef.current = true;\n        }\n    })\n    \n    useEffect(() => {\n        // \u83b7\u53d6dom\u8282\u70b9\n        if(domRef && domRef.current) {\n            domRef.current.focus();\n        }\n    })\n    \n    function handleAlertClick() {\n        setTimeout(() => {\n            alert('you clicked on' + likeRef.current)\n        }, 3000)\n    }\n\n    return <>\n        <input type=\"text\" ref={domRef} />\n        <button onClick={handleAlertClick}>\n            {'Alert!'}\n        </button>\n        <button onClick={() => {setLike(Like + 1); likeRef.current ++}}>\n            {Like}\n        </button>\n    </>\n}\n\nexport default LikeButton;\n")),Object(a.b)("h3",{id:"usecontext"},"useContext"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7236\u7ec4\u4ef6")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport LikeButton from './components/LikeButton';\n\ninterface IThemeProps {\n  [key: string]: {\n    color: string,\n    background: string\n  }\n}\n/* \u521b\u5efa\u4f20\u9012\u7684\u503c */\nconst themes:IThemeProps = {\n  'light': {\n    color: '#000',\n    background: '#eee'\n  },\n  'dark': {\n    color: '#fff',\n    background: '#222'\n  }\n}\n/* \u5bfc\u51fa\u7ec4\u4ef6 */\nexport const ThemeContext = React.createContext(themes.light);\nconst App: React.FC = () => {\n  return (\n    <div>\n      {/* \u7528provider\u5305\u88f9\u9700\u8981\u7528\u503c\u5f97\u7ec4\u4ef6 */}\n      <ThemeContext.Provider value={themes.dark}>\n        <LikeButton />\n      </ThemeContext.Provider>\n    </div>\n  );\n}\n\nexport default App;\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528\u7684\u5b50\u7ec4\u4ef6")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useContext } from 'react'\n/* \u5f15\u5165context\u7ec4\u4ef6 */\nimport { ThemeContext } from '../App'\n\nconst LikeButton: React.FC = () => {\n    const [ Like, setLike ]  = useState(0);\n    /* \u4f7f\u7528context\u7ec4\u4ef6 */\n    const theme = useContext(ThemeContext)\n    const style = {\n        color: theme.color,\n        background: theme.background\n    }\n    return <>\n        <button style={style}>\n            {Like}\n        </button>\n    </>\n}\nexport default LikeButton;\n")),Object(a.b)("h3",{id:"usememo"},"useMemo"),Object(a.b)("h3",{id:"usecallback"},"useCallback"),Object(a.b)("h3",{id:"usereducer"},"useReducer"))}i.isMDXComponent=!0},127:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),i=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=i(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=i(t),d=o,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return t?r.a.createElement(m,s(s({ref:n},l),{},{components:t})):r.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
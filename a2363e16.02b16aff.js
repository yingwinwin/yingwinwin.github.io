(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(125)),i={id:"react_router",title:"react\u8def\u7531"},s={unversionedId:"react_router",id:"react_router",isDocsHomePage:!1,title:"react\u8def\u7531",description:"\u4f7f\u7528",source:"@site/docs/react_router.md",slug:"/react_router",permalink:"/docs/react_router",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/react_router.md",version:"current",sidebar:"someError",previous:{title:"react Hook",permalink:"/docs/react_hooks"},next:{title:"\u9762\u8bd5\u9898",permalink:"/docs/view"}},c=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]},{value:"\u5b9e\u73b0\u65b9\u5f0f",id:"\u5b9e\u73b0\u65b9\u5f0f",children:[{value:"1. hash\u8def\u7531",id:"1-hash\u8def\u7531",children:[]},{value:"2. browser history",id:"2-browser-history",children:[]}]},{value:"react-router-dom",id:"react-router-dom",children:[{value:"1. BrowserRouter",id:"1-browserrouter",children:[]},{value:"2. HashRouter",id:"2-hashrouter",children:[]},{value:"3. Link",id:"3-link",children:[]},{value:"4. NavLink",id:"4-navlink",children:[]}]},{value:"react-router",id:"react-router",children:[{value:"1. context\u5bf9\u8c61",id:"1-context\u5bf9\u8c61",children:[]},{value:"2. Route",id:"2-route",children:[]},{value:"3. Router",id:"3-router",children:[]},{value:"4. Switch",id:"4-switch",children:[]},{value:"5. Redirect",id:"5-redirect",children:[]},{value:"6. withRouter",id:"6-withrouter",children:[]},{value:"7. hook",id:"7-hook",children:[]}]},{value:"history\u5bf9\u8c61",id:"history\u5bf9\u8c61",children:[{value:"1. createHashHistory",id:"1-createhashhistory",children:[]},{value:"2. createBrowserHistory",id:"2-createbrowserhistory",children:[]}]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528-1",children:[{value:"1. \u5d4c\u5957\u8def\u7531",id:"1-\u5d4c\u5957\u8def\u7531",children:[]},{value:"2. render\u65b9\u6cd5(\u53d7\u4fdd\u62a4\u8def\u7531)",id:"2-render\u65b9\u6cd5\u53d7\u4fdd\u62a4\u8def\u7531",children:[]},{value:"3. render children",id:"3-render-children",children:[]},{value:"4. hook\u4f7f\u7528",id:"4-hook\u4f7f\u7528",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import ReactDOM from \"react-dom\";\nimport { HashRouter, Route } from 'react-router-dom';\nimport Home from './components/Home'\nimport User from './components/User'\nimport Profile from './components/Profile'\n\nReactDOM.render(<HashRouter>\n  <Route exact={true} path='/' component={Home} />\n  <Route path='/user' component={User} />\n  <Route path='/profile' component={Profile} />\n</HashRouter>, document.getElementById(\"root\"));\n")),Object(a.b)("h2",{id:"\u5b9e\u73b0\u65b9\u5f0f"},"\u5b9e\u73b0\u65b9\u5f0f"),Object(a.b)("h3",{id:"1-hash\u8def\u7531"},"1. hash\u8def\u7531"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"hash\u8def\u7531\u5c31\u53ea\u6709hashchange\u8fd9\u4e00\u4e2a\u65b9\u6cd5")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<body>\n    <div id="root"></div>\n    <ul>\n        <li><a href="#/a">/a</a></li>\n        <li><a href="#/b">/b</a></li>\n    </ul>\n    <script>\n        //\u6bcf\u5f53hash\u503c\u53d1\u751f\u53d8\u5316\u7684\u8bdd\uff0c\u5c31\u4f1a\u6267\u884c\u56de\u8c03\u51fd\u6570\n        window.addEventListener(\'hashchange\',()=>{\n            console.log(window.location.hash);//#/a #/b\n            let pathname = window.location.hash.slice(1);\n            document.getElementById(\'root\').innerHTML = pathname;\n        });\n    <\/script>\n</body>\n')),Object(a.b)("h3",{id:"2-browser-history"},"2. browser history"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://yingwinwin.github.io/blog/history%20API%20%E6%80%BB%E7%BB%93"},"history API \u603b\u7ed3")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// \u5b9e\u73b0\u4e00\u4e2apushstate\u65b9\u6cd5\nvar globalHistory = window.history;\n(function (history) {\n    let oldPushState = history.pushState;\n    history.pushState = function (pathname, state) {\n        // \u5148\u6267\u884c\u6d4f\u89c8\u5668\u81ea\u5df1\u7684\n        let result = oldPushState.apply(history, arguments);\n        if (typeof window.onpushstate) {\n            // \u521b\u5efa\u4e00\u4e2a\u76d1\u542c\n            window.onpushstate(new CustomEvent('pushstate', { detail: { pathname, state } }));\n        }\n        return result;\n    }\n})(globalHistory);\n")),Object(a.b)("h2",{id:"react-router-dom"},"react-router-dom"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// index.js\n//\u628areact-router\u5bfc\u5165\u8fdb\u6765 \uff0c\u518d\u5168\u90e8\u5bfc\u51fa\n/* \n    export * from '../react-router';  \u8fd9\u4e00\u53e5\u662f\u4e0b\u9762\u4e24\u53e5\u7684\u8bed\u6cd5\u7cd6\n    export * from Router '../react-router';\n    export {\n        Router\n    }\n    export {default as HashRouter} from './HashRouter';  // \u8fd9\u4e00\u53e5\u662f\u4e0b\u9762\u4e24\u53e5\u7684\u8bed\u6cd5\u7cd6\n    export {HashRouter} from './HashRouter';\n    export {\n        HashRouter\n    }\n*/\nexport * from '../react-router';\nexport {default as HashRouter} from './HashRouter';\nexport {default as BrowserRouter} from './BrowserRouter';\nexport {default as Link} from './Link';\nexport {default as NavLink} from './NavLink';\n")),Object(a.b)("h3",{id:"1-browserrouter"},"1. BrowserRouter"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport {Router} from 'react-router';\nimport {createBrowserHistory} from 'history';\n\nclass BrowserRouter extends React.Component{\n    history = createBrowserHistory() // \u4ecehistory\u62ff\u5230\u65b9\u6cd5\u8fd4\u56de\u7684\u5bf9\u8c61\n    render(){\n        return (\n            <Router history={this.history}>\n                {this.props.children}\n            </Router>\n        )\n    }\n}\nexport default BrowserRouter;\n")),Object(a.b)("h3",{id:"2-hashrouter"},"2. HashRouter"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport {Router} from 'react-router';\nimport {createHashHistory} from 'history';\n\nclass HashRouter extends React.Component{\n    history = createHashHistory(); // \u4ecehistory\u62ff\u5230\u65b9\u6cd5\u8fd4\u56de\u7684\u5bf9\u8c61\n    render(){\n        return (\n            // \u628a\u5bf9\u8c61\u4f20\u5165\u7ed9\u5b69\u5b50\u4eec\uff0c\u5728react-router\u4e2d\u53d6\u51faRouter\n            <Router history={this.history}>\n                {this.props.children}\n            </Router>\n        )\n    }\n}\nexport default HashRouter;\n")),Object(a.b)("h3",{id:"3-link"},"3. Link"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a\u6807\u7b7e\uff0c\u7528\u4e8e\u9875\u9762\u8df3\u8f6c")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport {__RouterContext as RouterContext} from '../react-router';\nfunction Link(props){\n    return (\n        <RouterContext.Consumer>\n            {\n                ({history})=>(\n                    <a {...props} onClick={(event)=>{\n                        event.preventDefault();//\u963b\u6b62\u9ed8\u8ba4\u4e8b\u4ef6\n                        history.push(props.to);\n                    }}>{props.children}</a>\n                )\n            }\n        </RouterContext.Consumer>\n    )\n}\nexport default Link;\n")),Object(a.b)("h3",{id:"4-navlink"},"4. NavLink"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport {Link} from './';\nimport {__RouterContext as RouterContext,Route} from '../react-router';\nimport {matchPath} from '../react-router';\nfunction NavLink(props){\n    const {\n        to,//\u5339\u914d\u7684\u8def\u5f84\n        className:classNameProp='',//\u539f\u751f\u7c7b\u540d\n        style:styleProp={},//\u539f\u59cb\u7684\u884c\u5185\u6837\u5f0f\u5bf9\u8c61\n        activeClassName='',\n        activeStyle={},\n        children,\n        exact\n    } = props;\n    // \u7528 route \u7684 children \u5c5e\u6027 \u5b9e\u73b0\u5c5e\u6027\u83b7\u53d6\n   return (\n    <Route path={to} exact={exact} children={\n         (routeProps) =>{\n            let match = routeProps.match;\n            let className =match?joinClassnames(classNameProp,activeClassName):classNameProp;\n            let style = match?{...styleProp,...activeStyle}:styleProp;\n            let linkProps = {\n                className,\n                style,\n                to,\n                children\n            }\n            return <Link {...linkProps}/>;\n        }\n    }/>\n   )\n\n}\n//\u6e90\u7801\u5982\u4f55\u5b9e\u73b0\u7684  \u5e76\u6ca1\u6709\u7528\u5230children\nfunction NavLink2(props){\n    let context = React.useContext(RouterContext);\n    let {pathname}= context.location;\n    const {\n        to,//\u5339\u914d\u7684\u8def\u5f84\n        className:classNameProp='',//\u539f\u751f\u7c7b\u540d\n        style:styleProp={},//\u539f\u59cb\u7684\u884c\u5185\u6837\u5f0f\u5bf9\u8c61\n        activeClassName='',\n        activeStyle={},\n        children,\n        exact\n    } = props;\n    //\u5339\u914d\u5f53\u524d\u7684\u8def\u5f84\u548c\u81ea\u5df1to\u8def\u5f84 \u662f\u5426\u5339\u914d\n    let isActive = matchPath(pathname,{path:to,exact});\n    let className =isActive?joinClassnames(classNameProp,activeClassName):classNameProp;\n    let style = isActive?{...styleProp,...activeStyle}:styleProp;\n    let linkProps = {\n        className,\n        style,\n        to,\n        children\n    }\n    return <Link {...linkProps}/>;\n\n}\nfunction joinClassnames(...classNames){\n    //\u628a\u7a7a\u7684\u7c7b\u540d\u8fc7\u6ee4\u6389\n    return classNames.filter(c=>c).join(' ');\n}\nexport default NavLink;\n")),Object(a.b)("h2",{id:"react-router"},"react-router"),Object(a.b)("h3",{id:"1-context\u5bf9\u8c61"},"1. context\u5bf9\u8c61"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nconst RouterContext = React.createContext();;\nexport default RouterContext;\n")),Object(a.b)("h3",{id:"2-route"},"2. Route"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport RouterContext from './RouterContext';\nimport matchPath from './matchPath';\n/**\n * 1.\u83b7\u53d6\u5230context\u4e2d\u7684\u503c\n * 2.\u5339\u914d\u8def\u7531\u89c4\u5219 \u91cc\u7684path \u662f\u5426\u548c\u5f53\u524d\u5730\u5740\u4e2d\u7684url\u5730\u5740\u662f\u5426\u76f8\u7b49\n * \u5982\u679c\u76f8\u7b49\uff0c\u5c31\u6e32\u67d3component,\u5982\u679c\u4e0d\u76f8\u7b49\uff0c\u5c31\u4e0d\u6e32\u67d3\u4efb\u4f55\u4e1c\u897f\n */\nclass Route extends React.Component{\n    static contextType = RouterContext\n    render(){\n       const {history,location} = this.context;\n       const {component:RouteComponent,computedMatch,render,children} = this.props;\n       const match = computedMatch?computedMatch:matchPath(location.pathname,this.props);\n       let renderElement = null;\n       let routeProps = {history,location};\n       if(match){//\u5982\u679c\u8def\u5f84\u5339\u914d\u624d\u4f1a\u8fdb\u6765 \uff0c\u8bfb\u8fd9\u4e8c\u4e2a\u5c5e\u6027\n         //\u8def\u7531\u5c5e\u6027 \u5982\u679c\u4e00\u4e2a\u7ec4\u4ef6\u662fRoute\u6216\u8005\u8bf4\u8def\u7531\u7ec4\u4ef6\u6e32\u67d3\u7684\uff0c\u5b83\u4eecrouteProps={}\n         routeProps.match = match;\n         if(RouteComponent){\n          renderElement = <RouteComponent {...routeProps}/>;\n         }else if(render){\n          renderElement=render(routeProps);//\u8fd4\u56de\u4e00\u4e2aReact\u5143\u7d20,\u6216\u8005\u8bf4\u865a\u62dfDOM\uff0c render props\u505a\u5c5e\u6027\u4ee3\u7406\uff0c\u4f20\u7ed9\u4f7f\u7528render\u65b9\u6cd5\u7684\u513f\u5b50\n         }else if(children){\n          renderElement=children(routeProps);\n         }\n       }else{\n         if(children){\n          renderElement=children(routeProps);\n         }\n       }\n       return renderElement;\n    }\n}\nexport default Route;\n")),Object(a.b)("h3",{id:"3-router"},"3. Router"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport RouterContext from './RouterContext';\nclass Router extends React.Component{\n    // \u521d\u59cb\u503c\n    static computeRootMatch(pathname){\n        return {path:'/',url:'/',params:{},isExact:pathname == '/'};\n    }\n    constructor(props){\n        super(props);\n        // \u5728react-router-dom\u91cc\u9762\u7684router\u8c03\u7528\u65f6\u4f20\u5165\u7684history\u5bf9\u8c61\uff0c\u5728\u8fd9\u91cc\u53d6\u51fa\u4f7f\u7528\n        this.state = {\n            location:props.history.location\n        }\n        //\u76d1\u542c\u5386\u53f2\u5bf9\u8c61\u4e2d\u7684\u8def\u5f84\u53d8\u5316,\u5f53\u8def\u5f84\u53d1\u751f\u53d8\u5316\u540e\u6267\u884c\u56de\u8c03\u51fd\u6570,\u53c2\u6570\u5c31\u662f\u6700\u65b0\u7684\u8def\u5f84\u5bf9\u8c61\n        //\u8fd4\u56de\u4e00\u4e2a\u53d6\u6d88\u76d1\u542c\u7684\u51fd\u6570\uff0c\u8c03\u7528\u5b83\u53ef\u4ee5\u53d6\u6d88\u76d1\u542c\n        this.unlisten= props.history.listen(location=>{  // \u8c03\u7528history\u4e2d\u7684location\u65b9\u6cd5\n            this.setState({location});  // \u6bcf\u5f53\u76d1\u542c\u5230\u8def\u7531\u6539\u53d8\uff0c\u5c31\u91cd\u65b0\u8bbe\u7f6elocation\u7684\u503c\n        });\n    }\n    componentWillUnmount(){\n        this.unlisten();  // \u5728\u7ec4\u4ef6\u5378\u8f7d\u65f6\u53d6\u6d88\u76d1\u542c\n    }\n    render(){\n        let value ={\n            location:this.state.location, // \u7528\u6765\u4f20\u9012\u7ed9Route\u7528\u6765\u5224\u65ad\u8def\u7531\u662f\u5426\u5339\u914d\u7684\n            history:this.props.history, // \u7528\u6765\u8ba9\u7ec4\u4ef6\u6765\u8df3\u8f6c\u8def\u5f84\u7684\n            match:Router.computeRootMatch(this.state.location.pathname)  // \u505a\u4e86\u5339\u914d\u7684\u65b9\u6cd5\n        }\n        /* \u628a\u6574\u5408\u597d\u7684\u503c\uff0c\u4f20\u7ed9\u513f\u5b50\u4eec\uff0c\u5c31\u662f<Route/> \u91cc\u9762\u7684component */\n        return (\n            <RouterContext.Provider value={value}>\n                {this.props.children}\n            </RouterContext.Provider>\n        )\n    }\n}\nexport default Router;\n")),Object(a.b)("h3",{id:"4-switch"},"4. Switch"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u5339\u914d\u5230\u4e86\uff0c\u5c31\u4e0d\u4f1a\u5728\u5411\u4e0b\u5339\u914d\u4e86")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport RouterContext from './RouterContext';\nimport matchPath from './matchPath';\nclass Switch extends React.Component{\n    static contextType = RouterContext\n    render(){\n        const {location} = this.context;\n        let element,match;\n        //this.props.children\u53ef\u4ee5\u662fundefined\u53ef\u4ee5\u662f\u5bf9\u8c61\uff0c\u4e5f\u53ef\u80fd\u662f\u6570\u7ec4\uff0c\u4e5f\u53ef\u80fd\u662f\u5b57\u7b26\u4e32\u6216\u8005 \u6570\u5b57\uff0c\n        React.Children.forEach(this.props.children,child=>{\n            if(!match&&React.isValidElement(child)){//\u5982\u4f55\u8fd8\u6ca1\u6709\u4efb\u4f55\u4e00\u4e2a\u5143\u7d20\u5339\u914d\u4e0a\n                element=child;\n                match = matchPath(location.pathname,child.props);\n            }//\u5982\u679c\u4f46\u51e1\u4e00\u6709\u4e2a\u5339\u914d\u4e0a\u7684\uff0c\u540e\u9762\u90fd\u4e0d\u8d70\u90fd\u8df3\u8fc7\uff0c\u53ea\u8981\u5339\u914d\u4e0a\u7684\u7b2c1\u4e2a\u513f\u5b50\u5c31\u53ef\u4ee5\u4e86\n        });\n        // \u6dfb\u52a0\u4e00\u4e2a\u5c5e\u6027\u8fdb\u884c\u7f13\u5b58\n        return match?React.cloneElement(element,{computedMatch:match}):null;\n    }\n}\n\nexport default Switch;\n")),Object(a.b)("h3",{id:"5-redirect"},"5. Redirect"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u91cd\u5b9a\u5411\uff0c\u5982\u679c\u5199\u5728\u8def\u7531\u4e2d\uff0c\u5fc5\u987b\u548cSwitch\u642d\u914d\u4f7f\u7528\uff0c\u4e0d\u7136\u4f1a\u4e00\u76f4\u91cd\u5b9a\u5411\uff0c\u8fd8\u662f\u8981\u770b\u9700\u6c42")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nclass  LifeCycle extends React.Component{\n    componentDidMount(){\n        // \u76f4\u63a5\u8c03\u7528\n        this.props.onMount&&this.props.onMount(this);\n    }\n    componentWillUnmount(){\n        console.log('LifeCycle componentWillUnmount');\n        this.props.onUnmount&&this.props.onUnmount(this);\n    }\n    render(){\n        return null;\n    }\n}\nexport default LifeCycle;\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport LifeCycle from './Lifecycle';\nimport RouterContext from './RouterContext';\nfunction Redirect({to}){\n    return (\n        <RouterContext.Consumer>\n            {\n                value=>(\n                    <LifeCycle onMount={()=>value.history.push(to)}/>\n                )\n            }\n        </RouterContext.Consumer>\n    )\n}\nexport default Redirect;\n")),Object(a.b)("h3",{id:"6-withrouter"},"6. withRouter"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"hoc\uff0c\u7ec4\u4ef6\u5982\u679c\u9700\u8981\u4f7f\u7528history\u5c5e\u6027\uff0c\u9700\u8981\u7528withRouter\u5305\u88f9\uff0c\u505a\u5c5e\u6027\u4ee3\u7406")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport RouterContext from './RouterContext';\nfunction withRouter(OldComponent){\n  return props=>{\n      return (\n        <RouterContext.Consumer>\n          {\n              value=>{//{history,location,match}\n                  return <OldComponent {...props} {...value}/>\n              }\n          }\n        </RouterContext.Consumer>\n      )\n  }\n}\nexport default withRouter;\n")),Object(a.b)("h3",{id:"7-hook"},"7. hook"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import React, { useContext } from 'react';\nimport RouterContext from './RouterContext';\nimport matchPath from './matchPath';\n// \u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u83b7\u53d6history\u5bf9\u8c61\nexport function useHistory(){\n    return useContext(RouterContext).history;\n}\n// \u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u83b7\u53d6location\u5bf9\u8c61\nexport function useLocation(){\n    return useContext(RouterContext).location;\n}\n// \u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u83b7\u53d6\u53c2\u6570\nexport function useParams(){\n    let match = useContext(RouterContext).match;\n    return match?match.params:{};\n}\n// \u83b7\u53d6\u5339\u914d\u5230\u7684\u8def\u5f84\n// context value {history,location,match}\nexport function useRouteMatch(path){\n  let location = useLocation();//\u83b7\u53d6\u5f53\u524d\u7684\u8def\u5f84\u5bf9\u8c61 {pathname}\n  let match = useContext(RouterContext).match;//\u5f53\u524d\u7684match \u6765\u81ea\u4e8eProvider\n  return path?matchPath(location.pathname,path):match;\n}\n")),Object(a.b)("h2",{id:"history\u5bf9\u8c61"},"history\u5bf9\u8c61"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6709\u4e24\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff0c\u4e0a\u9762\u8bb2\u8fc7\u7684histroy \u548c hash")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"export {default as createBrowserHistory} from './createBrowserHistory';\nexport {default as createHashHistory} from './createHashHistory';\n")),Object(a.b)("h3",{id:"1-createhashhistory"},"1. createHashHistory"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"/**\n * 1.state\u7684\u5904\u7406 \u81ea\u5df1\u7ef4\u62a4state\n * 2.\u5386\u53f2\u6808\u7684\u7ef4\u62a4 \u81ea\u5df1\u7ef4\u62a4\u4e00\u4e2a\u6808\n */\nfunction createHashHistory(){\n    let action;\n    let listeners = [];\n    let historyStack = [];//\u5386\u53f2\u6808\n    let historyIndex = -1;//\u6808\u6307\u9488\n    let state;\n    /**\n     * \u4f20\u5165\u4e00\u4e2a\u51fd\u6570\uff0c\u7136\u540e\u628a\u51fd\u6570\u653e\u5230\u961f\u5217\u4e2d\uff0c\u8c03\u7528\u540e\u4ece\u961f\u5217\u4e2d\u5220\u9664\u3002\n     */\n    function listen(listener){\n        listeners.push(listener);\n        return ()=>{\n            //let idx = listeners.indexOf(listener);\n            //listeners.splice(idx,1);// \u4ece\u627e\u5230\u7684\u4f4d\u7f6e\u5220\u9664\u4e00\u4e2a\n            listeners=listeners.filter(item=>item!==listener);\n        }\n    }\n    //\u5982\u679c\u672c\u6765\u5c31\u662f/user\uff0c\u4fee\u6539\u4e3a/user\uff0chash\u6ca1\u6709\u53d8\uff0c\u6240\u4ee5\u4e5f\u4e0d\u4f1a\u89e6\u53d1hashChange\u4e8b\u4ef6\n    const hashChange = ()=>{\n        let pathname = window.location.hash.slice(1);//user\n        //\u628a\u65b0\u7684action\u548cpathname\u8d4b\u503c\u7ed9history.action history.location\n        Object.assign(history,{action,location:{pathname,state}});\n        if(!action ||action === 'PUSH'){\n            // page1 page2 page3 page4\n            historyStack[++historyIndex] = history.location;  // \u6bcf\u6b21\u6267\u884c\u7684\u4e4b\u540e\u5386\u53f2\u6808\u91cc\u9762\u5199\u5165\u4e00\u4e2a\u8bb0\u5f55\n        }else if(action === 'REPLACE'){\n            historyStack[historyIndex] = history.location;  // \u66ff\u6362\u8bb0\u5f55\n        }\n        listeners.forEach(listener=>listener(history.location));  // \u8c03\u7528\u5f53\u524d\u76d1\u542c\u6570\u7ec4\u91cc\u9762\u7684\u65b9\u6cd5\n    };\n    window.addEventListener('hashchange',hashChange);  // \u76d1\u542chashChange\u65b9\u6cd5\uff0c\u770b\u7528\u6237\u662f\u5426\u6539\u53d8\u5f53\u524dhash\n    function push(pathname,nextState){  // \u5b9e\u73b0push\u65b9\u6cd5\n        action='PUSH';\n        if(typeof pathname === 'object'){\n            state = pathname.state;\n            pathname = pathname.pathname;\n        }else{\n            state=nextState;\n        }\n        //\u7ed9hash\u8d4b\u503c\u7684\u662f\u4e0d\u9700\u8981\u52a0#\uff0c\u53d6\u7684\u662f\u5e26#\n        window.location.hash = pathname;  // push\u540e\u4fee\u6539hash\u7684\u503c\n    }\n    function replace(pathname,nextState){\n        action='REPLACE';\n        if(typeof pathname === 'object'){\n            state = pathname.state;\n            pathname = pathname.pathname;\n        }else{\n            state=nextState;\n        }\n        //\u7ed9hash\u8d4b\u503c\u7684\u662f\u4e0d\u9700\u8981\u52a0#\uff0c\u53d6\u7684\u662f\u5e26#\n        window.location.hash = pathname;  // replace\u548cpush\u5dee\u4e0d\u591a\uff0c\u5c31\u53ea\u662f\u5bf9\u5f53\u524d\u7684\u6808\u64cd\u4f5c\u4e0d\u592a\u4e00\u6837\n    }\n    function go(n){  // go\u65b9\u6cd5\n        action = 'POP';\n        historyIndex +=n;\n        let nextLocation = historyStack[historyIndex];\n        state = nextLocation.state;\n        window.location.hash = nextLocation.pathname;\n    }\n    function goBack(){\n        go(-1);\n    }\n    function goForward(){\n        go(1);\n    }\n    //\u5728\u8fd9\u91cc\u6211\u4eec\u8fd9\u4e2ahistory \u8ddfwindow.history\u6ca1\u6709\u5173\u7cfb\n    //window.history\u662f\u4e00\u4e2ahtml5 api.\u6709\u517c\u5bb9\u6027\u95ee\u9898\u3002\u4f46\u662fhash\u662f\u5168\u517c\u5bb9\u7684\n    const history = {\n       action:'POP',//\u5f53\u524d\u6700\u540e\u4e00\u4e2a\u52a8\u4f5c\u662f\u4ec0\u4e48\u52a8\u4f5c push PUSH  goBack POP\n       location:{pathname:'/',state:undefined},\n       go,\n       goBack,\n       goForward,\n       push,\n       replace,\n       listen,\n    }\n    action = 'PUSH';  // \u9ed8\u8ba4\u503c\n    if(window.location.hash){\n        hashChange();  // \u5982\u679c\u6d4f\u89c8\u5668\u6709\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u5c31\u8c03\u7528\n    }else{ // \u6ca1\u6709\u9ed8\u8ba4\u4e3a/,\u4e0d\u505a\u64cd\u4f5c\n        window.location.hash=\"/\";\n    }\n    return history;\n}\n\nexport default createHashHistory;\n")),Object(a.b)("h3",{id:"2-createbrowserhistory"},"2. createBrowserHistory"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u57fa\u7840html5 \u7684 history \u5b9e\u73b0")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function createBrowserHistory(){\n    const globalHistory = window.history;  // \u62ff\u5230\u5f53\u524d\u7684window.histroy\n    const listeners = [];\n    let action;\n    let state;\n    let message;\n    function go(n){\n        globalHistory.go(n);\n    }\n    function goBack(n){\n        go(-1)\n    }\n    function goForward(n){\n        go(1)\n    }\n    // \u540c\u6837\u8fdb\u884c\u76d1\u542c\n    function listen(listener){\n        listeners.push(listener);\n        return ()=>{\n            let idx = listeners.indexOf(listener);\n            listeners.splice(idx,1);\n        }\n    }\n    // \u8fd9\u91cc\u662f\u4e3a\u4e86\u66f4\u65b0\u5f53\u524d\u7684\u5730\u5740\uff0c\u5bf9\u5f53\u524d\u7684\u5730\u5740\u505a\u4e00\u4e2a\u66ff\u6362\uff0c\u4fdd\u8bc1\u9875\u9762\u5237\u65b0\n    function notify(newHistory){\n        Object.assign(history,newHistory);\n        listeners.forEach(listener=>listener(history.location));\n    }\n    function push(pathname,nextState){\n        action='PUSH';\n        if(typeof pathname === 'object'){\n            state = pathname.state;\n            pathname = pathname.pathname;\n        }else{\n            state=nextState;\n        }\n        // TODO: \u8fd8\u4e0d\u77e5\u9053\u4ec0\u4e48\u610f\u601d\n        if(message){\n            let showMessage = message({pathname});\n            let allow = window.confirm(showMessage);\n            if(!allow) return;\n        }\n        //\u8fd9\u662f\u539f\u751f\u7684history.pushState\n        globalHistory.pushState(state,null,pathname);\n        let location = {state,pathname};\n        notify({action,location});  // \u5728push\u7684\u65f6\u5019\u5237\u65b0location\n    }\n    //\u90a3onpopstate\u662f\u90a3\u4e2a\u60c5\u51b5\u4e0b\u6267\u884c\uff1f globalHistory.go goBack  \u70b9\u56de\u9000\u6309\u94ae\n    //\u5f53\u4f60\u56de\u9000\u6216\u524d\u8fdb\u7684\u65f6\u5019\u4f1a\u6267\u884c \u8fd9\u4e2a\u76d1\u542c\u662f\u6d4f\u89c8\u81ea\u5e26\u7684\uff0c\u9ed8\u8ba4\u652f\u6301\u7684\n    window.onpopstate = (event)=>{\n        //\u70b9\u56de\u9000\u6309\u94ae\u7684\u65f6\u5019\uff0c\u9000\u5230\u54ea\u662f\u5728globalHistory\u91cc\u7ef4\u62a4 \u7684\u3002\u53ea\u80fd\u53d6\u56de\u9000\u4e4b\u540e\u6700\u65b0\u7684\u8def\u5f84\u548c\u72b6\u6001\n        notify({action:'POP',location:{pathname:window.location.pathname,state:globalHistory.state}});\n    }\n    // TODO: \u5f85\u8865\u5145\n    function block(newMessage){\n       message =  newMessage;\n       return ()=>message=null;\n    }\n    const history = {\n       action:'POP',//\u5f53\u524d\u6700\u540e\u4e00\u4e2a\u52a8\u4f5c\u662f\u4ec0\u4e48\u52a8\u4f5c push PUSH  goBack POP\n       location:{pathname:window.location.pathname,state:globalHistory.state},\n       go,\n       goBack,\n       goForward,\n       push,\n       listen,\n       block\n    }\n    return history;\n}\n\nexport default createBrowserHistory;\n")),Object(a.b)("h2",{id:"\u4f7f\u7528-1"},"\u4f7f\u7528"),Object(a.b)("h3",{id:"1-\u5d4c\u5957\u8def\u7531"},"1. \u5d4c\u5957\u8def\u7531"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import UserAdd from './UserAdd';\nimport UserList from './UserList';\nimport UserDetail from './UserDetail';\nimport {Route,Link} from '../react-router-dom';\nconst User = (props)=>{\n    return (\n        <div>\n            <ul>\n                <li><Link to=\"/user/list\">\u7528\u6237\u5217\u8868</Link></li>\n                <li><Link to=\"/user/add\">\u6dfb\u52a0\u7528\u6237</Link></li>\n            </ul>\n            <Route  path={`/user/list`} component={UserList}/>\n            <Route  path=\"/user/add\" component={UserAdd}/>\n            <Route  path=\"/user/detail/:id\" component={UserDetail}/>\n        </div>\n    )\n}\nexport default User;\n")),Object(a.b)("h3",{id:"2-render\u65b9\u6cd5\u53d7\u4fdd\u62a4\u8def\u7531"},"2. render\u65b9\u6cd5(\u53d7\u4fdd\u62a4\u8def\u7531)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// \u5982\u679c\u7528\u6237\u8981\u8fdb\u5165\u5230\u4e2a\u4eba\u4e2d\u5fc3\u9875\u9762\uff0c\u9700\u8981\u5148\u767b\u5f55\uff0c\u6240\u4ee5\u8981\u5728\u4e2a\u4eba\u4e2d\u5fc3\u9875\u9762\u5224\u65ad\uff0c\u7528\u6237\u662f\u5426\u5df2\u7ecf\u767b\u5f55\uff0c\u5982\u679c\u6ca1\u6709\u767b\u5f55\uff0c\u8981\u8df3\u5230\u767b\u5f55\u9875\u9762\nReactDOM.render(\n  <BrowserRouter>\n    <Route path=\"/Login\" component={Login}/>\n    {/* \u53d7\u4fdd\u62a4\u7684\u8def\u7531profile\uff0c\u8981\u5728Protected\u4e2d\u4f7f\u7528render\u65b9\u6cd5\uff0c\u591a\u505a\u4e00\u5c42\u903b\u8f91 */}\n    <Protected path={'/profile'} component={Profile} />\n  </BrowserRouter>,document.getElementById('root')\n);\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"// \u7ec4\u4ef6\u5185\u90e8,\u5728\u8def\u7531\u4e2d\u5f53\u524d\u8fd9\u4e2a\u7ec4\u4ef6\uff0c\u4f20\u6765path \u548c \u8981\u6e32\u67d3\u7684\u7ec4\u4ef6\uff0c\u7136\u540e\u8fdb\u884c\u5904\u7406\n// \u901a\u8fc7renderporps\uff0c\u83b7\u53d6\u5c5e\u6027\uff0c\u7ed9\u5f53\u524d\u9700\u8981\u4f20\u5165\u7684\u7ec4\u4ef6\u8fdb\u884c\u5904\u7406\nimport {Route,Redirect} from '../react-router-dom';\nconst Protected = (props)=>{\n    //path\u662f\u8981\u5339\u914d\u7684\u8def\u5f84 RouteComponent \u672c\u6765\u8981\u6e32\u67d3\u7684\u7ec4\u4ef6\n    let {path,component:RouteComponent}= props;\n    return (\n        <Route path={path} render={\n            (routeProps)=>(//\u8def\u7531\u5c5e\u6027{history,location,match}\n                localStorage.getItem('login')?\n                <RouteComponent {...routeProps}/>:\n                <Redirect to={{pathname:'/login',state:{from:path}}}/>\n            )\n        }/>\n    )\n}\nexport default Protected;\n")),Object(a.b)("h3",{id:"3-render-children"},"3. render children"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u76f8\u540c\u70b9")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"children\u548crender\u90fd\u662f\u51fd\u6570"),Object(a.b)("li",{parentName:"ol"},"\u4ed6\u4eec\u90fd\u4f1a\u63a5\u6536\u8def\u7531\u5c5e\u6027\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2a\u865a\u62dfDOM\u8fdb\u884c\u6e32\u67d3"),Object(a.b)("li",{parentName:"ol"},"\u90fd\u53ef\u4ee5\u5199\u4e00\u4e9b\u903b\u8f91\u5224\u65ad")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e0d\u540c\u70b9")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"render\u662f\u5339\u914d\u624d\u6e32\u67d3\uff0c\u4e0d\u5339\u914d\u4e0d\u6e32\u67d3"),Object(a.b)("li",{parentName:"ol"},"children\u7ba1\u4f60\u5339\u914d\u4e0d\u5339\u914d\uff0c\u90fd\u4f1a\u6e32\u67d3\u8fd4\u56de\u503c\uff0c\u5982\u679c\u5339\u914d\u6709match\u5c5e\u6027\uff0c\u5982\u679c\u4e0d\u5339\u914d\u6ca1\u6709match\u5c5e\u6027")),Object(a.b)("h3",{id:"4-hook\u4f7f\u7528"},"4. hook\u4f7f\u7528"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport {BrowserRouter,Route,Link,\nuseParams,useLocation,useHistory,useRouteMatch} from './react-router-dom';\nconst Home = ()=><div>Home</div>;\nfunction UserDetail(){\n  let params = useParams();//{id:1}  \u83b7\u53d6 \u8def\u5f84\u53c2\u6570\n  console.log('params',params);\n  let location = useLocation();//{pathname,state} \u83b7\u53d6\u8def\u5f84\u5bf9\u8c61 \n  console.log('location',location);\n  let history = useHistory();//{pathname,state} \u83b7\u53d6\u5386\u53f2\u5bf9\u8c61\n  console.log('history',history);\n  return (\n    <div>id:{params.id} name:{location.state.name}</div>\n  )\n}\nfunction Post(props){\n  console.log(props);\n    // \u4f20\u53c2\u770b\u662f\u5426\u9700\u8981\u5339\u914d\n  let match = useRouteMatch({\n    path:'/post/:id',//\u5339\u914d\u7684\u8def\u5f84\n    strict:true,//\u662f\u5426\u4e25\u683c\u5339\u914d\n    sensitive:true//\u662f\u5426\u5339\u914d\u7684\u65f6\u5019\u5927\u5c0f\u5199\u654f\u611f\n  });\n   return match?<div>id:{match.params.id}</div>:<div>Not Found</div>\n}\nReactDOM.render(\n  <BrowserRouter>\n    <ul>\n      <li><Link to=\"/\">\u9996\u9875</Link></li>\n      <li><Link to={{pathname:`/user/detail/1`,state:{id:1,name:\"\u5f20\u4e09\"}}}>\u7528\u6237\u8be6\u60c5</Link></li>\n      <li><Link to=\"/post/1\">\u5e16\u5b50</Link></li>\n    </ul>\n    <Route path=\"/\" component={Home}/>\n    <Route path=\"/user/detail/:id\" component={UserDetail}/>\n    <Route path=\"/post/:id\" component={Post}/>\n  </BrowserRouter>,document.getElementById('root')\n);\n")))}u.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(i,".").concat(m)]||p[m]||h[m]||a;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
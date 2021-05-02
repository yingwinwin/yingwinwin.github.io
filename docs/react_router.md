---
id: react_router
title: react路由
---

## 使用
```jsx
import ReactDOM from "react-dom";
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'

ReactDOM.render(<HashRouter>
  <Route exact={true} path='/' component={Home} />
  <Route path='/user' component={User} />
  <Route path='/profile' component={Profile} />
</HashRouter>, document.getElementById("root"));
```

## 实现方式

### 1. hash路由
- hash路由就只有hashchange这一个方法
```html
<body>
    <div id="root"></div>
    <ul>
        <li><a href="#/a">/a</a></li>
        <li><a href="#/b">/b</a></li>
    </ul>
    <script>
        //每当hash值发生变化的话，就会执行回调函数
        window.addEventListener('hashchange',()=>{
            console.log(window.location.hash);//#/a #/b
            let pathname = window.location.hash.slice(1);
            document.getElementById('root').innerHTML = pathname;
        });
    </script>
</body>
```

### 2. browser history
[history API 总结](https://yingwinwin.github.io/blog/history%20API%20总结)
```js
// 实现一个pushstate方法
var globalHistory = window.history;
(function (history) {
    let oldPushState = history.pushState;
    history.pushState = function (pathname, state) {
        // 先执行浏览器自己的
        let result = oldPushState.apply(history, arguments);
        if (typeof window.onpushstate) {
            // 创建一个监听
            window.onpushstate(new CustomEvent('pushstate', { detail: { pathname, state } }));
        }
        return result;
    }
})(globalHistory);
```

## react-router-dom

```js
// index.js
//把react-router导入进来 ，再全部导出
/* 
    export * from '../react-router';  这一句是下面两句的语法糖
    export * from Router '../react-router';
    export {
        Router
    }
    export {default as HashRouter} from './HashRouter';  // 这一句是下面两句的语法糖
    export {HashRouter} from './HashRouter';
    export {
        HashRouter
    }
*/
export * from '../react-router';
export {default as HashRouter} from './HashRouter';
export {default as BrowserRouter} from './BrowserRouter';
export {default as Link} from './Link';
export {default as NavLink} from './NavLink';
```


### 1. BrowserRouter

```jsx
import React from 'react';
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';

class BrowserRouter extends React.Component{
    history = createBrowserHistory() // 从history拿到方法返回的对象
    render(){
        return (
            <Router history={this.history}>
                {this.props.children}
            </Router>
        )
    }
}
export default BrowserRouter;
```

### 2. HashRouter
```jsx
import React from 'react';
import {Router} from 'react-router';
import {createHashHistory} from 'history';

class HashRouter extends React.Component{
    history = createHashHistory(); // 从history拿到方法返回的对象
    render(){
        return (
            // 把对象传入给孩子们，在react-router中取出Router
            <Router history={this.history}>
                {this.props.children}
            </Router>
        )
    }
}
export default HashRouter;
```

### 3. Link
- a标签，用于页面跳转
```js
import React from 'react';
import {__RouterContext as RouterContext} from '../react-router';
function Link(props){
    return (
        <RouterContext.Consumer>
            {
                ({history})=>(
                    <a {...props} onClick={(event)=>{
                        event.preventDefault();//阻止默认事件
                        history.push(props.to);
                    }}>{props.children}</a>
                )
            }
        </RouterContext.Consumer>
    )
}
export default Link;
```

### 4. NavLink
```jsx
import React from 'react';
import {Link} from './';
import {__RouterContext as RouterContext,Route} from '../react-router';
import {matchPath} from '../react-router';
function NavLink(props){
    const {
        to,//匹配的路径
        className:classNameProp='',//原生类名
        style:styleProp={},//原始的行内样式对象
        activeClassName='',
        activeStyle={},
        children,
        exact
    } = props;
    // 用 route 的 children 属性 实现属性获取
   return (
    <Route path={to} exact={exact} children={
         (routeProps) =>{
            let match = routeProps.match;
            let className =match?joinClassnames(classNameProp,activeClassName):classNameProp;
            let style = match?{...styleProp,...activeStyle}:styleProp;
            let linkProps = {
                className,
                style,
                to,
                children
            }
            return <Link {...linkProps}/>;
        }
    }/>
   )

}
//源码如何实现的  并没有用到children
function NavLink2(props){
    let context = React.useContext(RouterContext);
    let {pathname}= context.location;
    const {
        to,//匹配的路径
        className:classNameProp='',//原生类名
        style:styleProp={},//原始的行内样式对象
        activeClassName='',
        activeStyle={},
        children,
        exact
    } = props;
    //匹配当前的路径和自己to路径 是否匹配
    let isActive = matchPath(pathname,{path:to,exact});
    let className =isActive?joinClassnames(classNameProp,activeClassName):classNameProp;
    let style = isActive?{...styleProp,...activeStyle}:styleProp;
    let linkProps = {
        className,
        style,
        to,
        children
    }
    return <Link {...linkProps}/>;

}
function joinClassnames(...classNames){
    //把空的类名过滤掉
    return classNames.filter(c=>c).join(' ');
}
export default NavLink;
```

## react-router

### 1. context对象
```jsx
import React from 'react';
const RouterContext = React.createContext();;
export default RouterContext;
```

### 2. Route
```jsx
import React from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';
/**
 * 1.获取到context中的值
 * 2.匹配路由规则 里的path 是否和当前地址中的url地址是否相等
 * 如果相等，就渲染component,如果不相等，就不渲染任何东西
 */
class Route extends React.Component{
    static contextType = RouterContext
    render(){
       const {history,location} = this.context;
       const {component:RouteComponent,computedMatch,render,children} = this.props;
       const match = computedMatch?computedMatch:matchPath(location.pathname,this.props);
       let renderElement = null;
       let routeProps = {history,location};
       if(match){//如果路径匹配才会进来 ，读这二个属性
         //路由属性 如果一个组件是Route或者说路由组件渲染的，它们routeProps={}
         routeProps.match = match;
         if(RouteComponent){
          renderElement = <RouteComponent {...routeProps}/>;
         }else if(render){
          renderElement=render(routeProps);//返回一个React元素,或者说虚拟DOM， render props做属性代理，传给使用render方法的儿子
         }else if(children){
          renderElement=children(routeProps);
         }
       }else{
         if(children){
          renderElement=children(routeProps);
         }
       }
       return renderElement;
    }
}
export default Route;
```

### 3. Router
```jsx
import React from 'react';
import RouterContext from './RouterContext';
class Router extends React.Component{
    // 初始值
    static computeRootMatch(pathname){
        return {path:'/',url:'/',params:{},isExact:pathname == '/'};
    }
    constructor(props){
        super(props);
        // 在react-router-dom里面的router调用时传入的history对象，在这里取出使用
        this.state = {
            location:props.history.location
        }
        //监听历史对象中的路径变化,当路径发生变化后执行回调函数,参数就是最新的路径对象
        //返回一个取消监听的函数，调用它可以取消监听
        this.unlisten= props.history.listen(location=>{  // 调用history中的location方法
            this.setState({location});  // 每当监听到路由改变，就重新设置location的值
        });
    }
    componentWillUnmount(){
        this.unlisten();  // 在组件卸载时取消监听
    }
    render(){
        let value ={
            location:this.state.location, // 用来传递给Route用来判断路由是否匹配的
            history:this.props.history, // 用来让组件来跳转路径的
            match:Router.computeRootMatch(this.state.location.pathname)  // 做了匹配的方法
        }
        /* 把整合好的值，传给儿子们，就是<Route/> 里面的component */
        return (
            <RouterContext.Provider value={value}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}
export default Router;
```

### 4. Switch
- 如果匹配到了，就不会在向下匹配了
```js
import React from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';
class Switch extends React.Component{
    static contextType = RouterContext
    render(){
        const {location} = this.context;
        let element,match;
        //this.props.children可以是undefined可以是对象，也可能是数组，也可能是字符串或者 数字，
        React.Children.forEach(this.props.children,child=>{
            if(!match&&React.isValidElement(child)){//如何还没有任何一个元素匹配上
                element=child;
                match = matchPath(location.pathname,child.props);
            }//如果但凡一有个匹配上的，后面都不走都跳过，只要匹配上的第1个儿子就可以了
        });
        // 添加一个属性进行缓存
        return match?React.cloneElement(element,{computedMatch:match}):null;
    }
}

export default Switch;
```

### 5. Redirect
- 重定向，如果写在路由中，必须和Switch搭配使用，不然会一直重定向，还是要看需求
```js
import React from 'react';
class  LifeCycle extends React.Component{
    componentDidMount(){
        // 直接调用
        this.props.onMount&&this.props.onMount(this);
    }
    componentWillUnmount(){
        console.log('LifeCycle componentWillUnmount');
        this.props.onUnmount&&this.props.onUnmount(this);
    }
    render(){
        return null;
    }
}
export default LifeCycle;
```

```js
import React from 'react';
import LifeCycle from './Lifecycle';
import RouterContext from './RouterContext';
function Redirect({to}){
    return (
        <RouterContext.Consumer>
            {
                value=>(
                    <LifeCycle onMount={()=>value.history.push(to)}/>
                )
            }
        </RouterContext.Consumer>
    )
}
export default Redirect;
```

### 6. withRouter
- hoc，组件如果需要使用history属性，需要用withRouter包裹，做属性代理
```jsx
import React from 'react';
import RouterContext from './RouterContext';
function withRouter(OldComponent){
  return props=>{
      return (
        <RouterContext.Consumer>
          {
              value=>{//{history,location,match}
                  return <OldComponent {...props} {...value}/>
              }
          }
        </RouterContext.Consumer>
      )
  }
}
export default withRouter;
```

### 7. hook
```js
import React, { useContext } from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';
// 在函数组件中获取history对象
export function useHistory(){
    return useContext(RouterContext).history;
}
// 在函数组件中获取location对象
export function useLocation(){
    return useContext(RouterContext).location;
}
// 在函数组件中获取参数
export function useParams(){
    let match = useContext(RouterContext).match;
    return match?match.params:{};
}
// 获取匹配到的路径
// context value {history,location,match}
export function useRouteMatch(path){
  let location = useLocation();//获取当前的路径对象 {pathname}
  let match = useContext(RouterContext).match;//当前的match 来自于Provider
  return path?matchPath(location.pathname,path):match;
}
```

## history对象
- 有两种实现方式，上面讲过的histroy 和 hash
```js
export {default as createBrowserHistory} from './createBrowserHistory';
export {default as createHashHistory} from './createHashHistory';
```
### 1. createHashHistory
```js
/**
 * 1.state的处理 自己维护state
 * 2.历史栈的维护 自己维护一个栈
 */
function createHashHistory(){
    let action;
    let listeners = [];
    let historyStack = [];//历史栈
    let historyIndex = -1;//栈指针
    let state;
    /**
     * 传入一个函数，然后把函数放到队列中，调用后从队列中删除。
     */
    function listen(listener){
        listeners.push(listener);
        return ()=>{
            //let idx = listeners.indexOf(listener);
            //listeners.splice(idx,1);// 从找到的位置删除一个
            listeners=listeners.filter(item=>item!==listener);
        }
    }
    //如果本来就是/user，修改为/user，hash没有变，所以也不会触发hashChange事件
    const hashChange = ()=>{
        let pathname = window.location.hash.slice(1);//user
        //把新的action和pathname赋值给history.action history.location
        Object.assign(history,{action,location:{pathname,state}});
        if(!action ||action === 'PUSH'){
            // page1 page2 page3 page4
            historyStack[++historyIndex] = history.location;  // 每次执行的之后历史栈里面写入一个记录
        }else if(action === 'REPLACE'){
            historyStack[historyIndex] = history.location;  // 替换记录
        }
        listeners.forEach(listener=>listener(history.location));  // 调用当前监听数组里面的方法
    };
    window.addEventListener('hashchange',hashChange);  // 监听hashChange方法，看用户是否改变当前hash
    function push(pathname,nextState){  // 实现push方法
        action='PUSH';
        if(typeof pathname === 'object'){
            state = pathname.state;
            pathname = pathname.pathname;
        }else{
            state=nextState;
        }
        //给hash赋值的是不需要加#，取的是带#
        window.location.hash = pathname;  // push后修改hash的值
    }
    function replace(pathname,nextState){
        action='REPLACE';
        if(typeof pathname === 'object'){
            state = pathname.state;
            pathname = pathname.pathname;
        }else{
            state=nextState;
        }
        //给hash赋值的是不需要加#，取的是带#
        window.location.hash = pathname;  // replace和push差不多，就只是对当前的栈操作不太一样
    }
    function go(n){  // go方法
        action = 'POP';
        historyIndex +=n;
        let nextLocation = historyStack[historyIndex];
        state = nextLocation.state;
        window.location.hash = nextLocation.pathname;
    }
    function goBack(){
        go(-1);
    }
    function goForward(){
        go(1);
    }
    //在这里我们这个history 跟window.history没有关系
    //window.history是一个html5 api.有兼容性问题。但是hash是全兼容的
    const history = {
       action:'POP',//当前最后一个动作是什么动作 push PUSH  goBack POP
       location:{pathname:'/',state:undefined},
       go,
       goBack,
       goForward,
       push,
       replace,
       listen,
    }
    action = 'PUSH';  // 默认值
    if(window.location.hash){
        hashChange();  // 如果浏览器有这个方法，就调用
    }else{ // 没有默认为/,不做操作
        window.location.hash="/";
    }
    return history;
}

export default createHashHistory;
```

### 2. createBrowserHistory
- 基础html5 的 history 实现
```js
function createBrowserHistory(){
    const globalHistory = window.history;  // 拿到当前的window.histroy
    const listeners = [];
    let action;
    let state;
    let message;
    function go(n){
        globalHistory.go(n);
    }
    function goBack(n){
        go(-1)
    }
    function goForward(n){
        go(1)
    }
    // 同样进行监听
    function listen(listener){
        listeners.push(listener);
        return ()=>{
            let idx = listeners.indexOf(listener);
            listeners.splice(idx,1);
        }
    }
    // 这里是为了更新当前的地址，对当前的地址做一个替换，保证页面刷新
    function notify(newHistory){
        Object.assign(history,newHistory);
        listeners.forEach(listener=>listener(history.location));
    }
    function push(pathname,nextState){
        action='PUSH';
        if(typeof pathname === 'object'){
            state = pathname.state;
            pathname = pathname.pathname;
        }else{
            state=nextState;
        }
        // TODO: 还不知道什么意思
        if(message){
            let showMessage = message({pathname});
            let allow = window.confirm(showMessage);
            if(!allow) return;
        }
        //这是原生的history.pushState
        globalHistory.pushState(state,null,pathname);
        let location = {state,pathname};
        notify({action,location});  // 在push的时候刷新location
    }
    //那onpopstate是那个情况下执行？ globalHistory.go goBack  点回退按钮
    //当你回退或前进的时候会执行 这个监听是浏览自带的，默认支持的
    window.onpopstate = (event)=>{
        //点回退按钮的时候，退到哪是在globalHistory里维护 的。只能取回退之后最新的路径和状态
        notify({action:'POP',location:{pathname:window.location.pathname,state:globalHistory.state}});
    }
    // TODO: 待补充
    function block(newMessage){
       message =  newMessage;
       return ()=>message=null;
    }
    const history = {
       action:'POP',//当前最后一个动作是什么动作 push PUSH  goBack POP
       location:{pathname:window.location.pathname,state:globalHistory.state},
       go,
       goBack,
       goForward,
       push,
       listen,
       block
    }
    return history;
}

export default createBrowserHistory;
```



## 使用
### 1. 嵌套路由

```js
import UserAdd from './UserAdd';
import UserList from './UserList';
import UserDetail from './UserDetail';
import {Route,Link} from '../react-router-dom';
const User = (props)=>{
    return (
        <div>
            <ul>
                <li><Link to="/user/list">用户列表</Link></li>
                <li><Link to="/user/add">添加用户</Link></li>
            </ul>
            <Route  path={`/user/list`} component={UserList}/>
            <Route  path="/user/add" component={UserAdd}/>
            <Route  path="/user/detail/:id" component={UserDetail}/>
        </div>
    )
}
export default User;
```
### 2. render方法(受保护路由)
```js
// 如果用户要进入到个人中心页面，需要先登录，所以要在个人中心页面判断，用户是否已经登录，如果没有登录，要跳到登录页面
ReactDOM.render(
  <BrowserRouter>
    <Route path="/Login" component={Login}/>
    {/* 受保护的路由profile，要在Protected中使用render方法，多做一层逻辑 */}
    <Protected path={'/profile'} component={Profile} />
  </BrowserRouter>,document.getElementById('root')
);
```

```jsx
// 组件内部,在路由中当前这个组件，传来path 和 要渲染的组件，然后进行处理
// 通过renderporps，获取属性，给当前需要传入的组件进行处理
import {Route,Redirect} from '../react-router-dom';
const Protected = (props)=>{
    //path是要匹配的路径 RouteComponent 本来要渲染的组件
    let {path,component:RouteComponent}= props;
    return (
        <Route path={path} render={
            (routeProps)=>(//路由属性{history,location,match}
                localStorage.getItem('login')?
                <RouteComponent {...routeProps}/>:
                <Redirect to={{pathname:'/login',state:{from:path}}}/>
            )
        }/>
    )
}
export default Protected;
```

### 3. render children
- 相同点
1. children和render都是函数
2. 他们都会接收路由属性对象，返回一个虚拟DOM进行渲染
3. 都可以写一些逻辑判断
- 不同点
1. render是匹配才渲染，不匹配不渲染
2. children管你匹配不匹配，都会渲染返回值，如果匹配有match属性，如果不匹配没有match属性

### 4. hook使用
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link,
useParams,useLocation,useHistory,useRouteMatch} from './react-router-dom';
const Home = ()=><div>Home</div>;
function UserDetail(){
  let params = useParams();//{id:1}  获取 路径参数
  console.log('params',params);
  let location = useLocation();//{pathname,state} 获取路径对象 
  console.log('location',location);
  let history = useHistory();//{pathname,state} 获取历史对象
  console.log('history',history);
  return (
    <div>id:{params.id} name:{location.state.name}</div>
  )
}
function Post(props){
  console.log(props);
    // 传参看是否需要匹配
  let match = useRouteMatch({
    path:'/post/:id',//匹配的路径
    strict:true,//是否严格匹配
    sensitive:true//是否匹配的时候大小写敏感
  });
   return match?<div>id:{match.params.id}</div>:<div>Not Found</div>
}
ReactDOM.render(
  <BrowserRouter>
    <ul>
      <li><Link to="/">首页</Link></li>
      <li><Link to={{pathname:`/user/detail/1`,state:{id:1,name:"张三"}}}>用户详情</Link></li>
      <li><Link to="/post/1">帖子</Link></li>
    </ul>
    <Route path="/" component={Home}/>
    <Route path="/user/detail/:id" component={UserDetail}/>
    <Route path="/post/:id" component={Post}/>
  </BrowserRouter>,document.getElementById('root')
);
```
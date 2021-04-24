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
[history API 总结](../blog/2021-04-24-historyAPI总结.md)
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

## react-router

### 1. context对象
```jsx
import React from 'react';
const RouterContext = React.createContext();;
export default RouterContext;
```

### 2. Router
```jsx
import React from 'react';
import RouterContext from './RouterContext';
class Router extends React.Component{
    // TODO: 暂时不知道是干嘛的
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
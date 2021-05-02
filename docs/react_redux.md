---
id: react_redux
title: redux
---

## redux介绍
- `store`仓库 (`rudecer`处理器 `state`状态)
- `dispatch`派发(`action`动作)
- `suscribe`订阅
![image](../static/img/redux.png)
- 通过动作，告诉仓库，仓库拿到当前的动作，传入到处理器中，然后处理器返回最新的状态，仓库拿到最新的状态，改变state，让组件重新渲染

## 使用
### index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import {Provider} from './react-redux';
import store from './store';
ReactDOM.render(
<Provider store={store}>
    <Counter1/>
    <Counter2/>
</Provider>,document.getElementById('root'));
```
### active-type.js
```js
//这二个动作是给Counter1用的
const ADD1 = 'ADD1';//加1
const MINUS1 = 'MINUS1';//减1

//这二个动作是给Counter2用的
const ADD2 = 'ADD2';//加1
const MINUS2 = 'MINUS2';//减1

const MINUS = 'MINUS';//减1

export {
    ADD1,
    MINUS1,
    ADD2,
    MINUS2,
    MINUS
}
```
### reduers/index.js
```js
import {combineReducers} from '../../redux';
import counter1 from './counter1';
import counter2 from './counter2';
let reducers = {
    counter1,
    counter2
}
//把一个对象变成了一个reducer
let rootReducer = combineReducers(reducers);
//let state = {c1:{number:5},c2:{number:10}};
export default rootReducer;
```
### reduers/counter1.js
```js 
import * as types from '../action-types';
/**
 * 这是Counter1组件的对应的分reducer
 * 它有自己独立的状态
 * 会由每个reducer自己维护自己的状态
 * @param {*} oldState 
 * @param {*} action 
 */
let initialState = {number:5}
const counter1 = (oldState=initialState, action) => {
    switch (action.type) {//判断动作的类型
      case types.ADD1://如果是ADD的话，返回一个新的状态
        return { number: oldState.number + 1 };
      case types.MINUS1:
      case types.MINUS:
        return { number: oldState.number - 1 };
      default:
        return oldState;
    }
}
export default counter1;
```
### actions/counter1.js
```js
import * as types from '../action-types';
const actions = {
    add1(){
        return {type:types.ADD1};
    },
    minus1(){
        return {type:types.MINUS1};
    },
    minus(){
        return {type:types.MINUS};
    }
}
export default actions;
```

### Conunter1.js
```js
import React from 'react';
import {useSelector,useDispatch} from '../react-redux';
function Counter1(){
    let dispatch = useDispatch();//store.dispatch
    const mapStateToProps = state=>({
        counter1:state.counter1,
        counter2:state.counter2,
        something:'something'
    });
    let state = useSelector(mapStateToProps);//获取状态
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={()=>dispatch({type:'ADD1'})}>add1</button>
            <button onClick={()=>dispatch({type:'MINUS1'})}>minus1</button>
            <button onClick={()=>dispatch({type:'MINUS'})}>minus</button>
        </div>
    ) 
}
export default Counter1;
```

## redux
- 发布订阅模式，进行订阅和派发动作
### 1. createStore
```js
/**
 * 
 * @param {*} reducer 处理器
 * @param {*} preloadedState 仓库的初始状态
 */
function createStore(reducer,preloadedState){
    //定义一个状态变量，并且赋上默认值
    let state=preloadedState;
    let listeners = [];
    function getState(){
        return state;
    }
    /**
     * 订阅方法会返回一个取消订阅的函数
     * @param {*} listener 
     */
    function subscribe(listener){
        listeners.push(listener);
        return ()=>{
            let index = listeners.indexOf(listener);//找到函数的索引
            listeners.splice(index,1);//从索引处删除此函数
        }
    }
    /**
     * 派发action
     * @param {*} action 动作
     */
    function dispatch(action){
        //接收reducer,计算新的state
        state=reducer(state,action);
        //挨个通知订阅的函数执行
        listeners.forEach(l=>l());
        //99%是没用的，只发现一个地方到了，react ssr的时候
        return action;
    }
    //在创仓库的时候，会先派发一次action,会reducer设置的默认值生效
    dispatch({type:'@@REDUX/INIT'});
    const store = {
        getState,
        subscribe,
        dispatch
    }
    return store;
}
export default createStore;
```

### 2. combineReducers
- 把多个reducer组合成一个，简化操作
```js
/**
 * 把一个reducers对象变成一个reducer函数
 * @param {*} reducers 
 * let reducers = {counter1,counter2}
 * let state = {counter1:{number:5},counter2:{number:10}}
 */
function combineReducers(reducers){
    //这个返回的函数就是我们最终的根reducer
    let rootReducer = (state={},action)=>{
        let nextState = {};//声明一个空对象，用来保存最终的状态
        let changed = false;
        for(let key in reducers){
            //key counter1 counter2
            const reducer = reducers[key];//分reducer
            const previousStateForKey = state[key];//老的分状态
            const nextStateForKey = reducer(previousStateForKey,action);//计算新的分状态
            if(previousStateForKey !== nextStateForKey){
                changed=true;
            }
            nextState[key]=nextStateForKey;
        }
        //最终的状态就是长的样子就跟reducers是一样的
        return changed?nextState:state;
    }
    return rootReducer;
}
export default combineReducers;
```

### 3. bindActionCreators
- 把 actions对象 变成 dispatch 方法
```js
/**
 * 
 * @param {*} actionCreator 老的 add方法
 * @param {*} dispatch store.dispatch
 */
function bindActionCreator(actionCreator,dispatch){
   let boundActionCreator =  function(...args){//args=[event]
       //谁调用这个boundActionCreator方法，this就指向谁
       let action = actionCreator.apply(this,args);
       dispatch(action);
   }
   return boundActionCreator;
}
/**
 * 绑定action创建者和store.dispatch方法
 * @param {*} actionCreators  const actions = {add,minus};
 * @param {*} dispatch 
 * boundActionCreators={add,minus}
 */
function bindActionCreators(actionCreators,dispatch){
    const boundActionCreators = {};
    for(const key in actionCreators)    {
        const actionCreator = actionCreators[key];//add或者minus函数
        boundActionCreators[key]=bindActionCreator(actionCreator,dispatch);
    }
    return boundActionCreators;
}
export default bindActionCreators;
```

## react-redux
### 1. ReactReduxContext
- context做全局数据流转
```js
import React from 'react';
const ReactReduxContext=React.createContext();
export default ReactReduxContext;
```
### 2. Provider
- 把store给到其他组件方法
```js
import React from 'react';
import ReactReduxContext from './ReactReduxContext';
function Provider(props){
    //let value = {store:props.store};
    let [stateValue,setStateValue] = React.useState({store:props.store});
    return (
        <ReactReduxContext.Provider value={stateValue}>
            {props.children}
        </ReactReduxContext.Provider>
    )
}
export default Provider;
```
### 3. connect
- 联系组件和redux的方法，里面会帮组件调用 订阅 和 取消订阅 是一个HOC组件
```js
import React,{useContext} from 'react';
import ReactReduxContext from './ReactReduxContext';
import {bindActionCreators} from '../redux';
/**
 * 把组件和仓库进行关联
 * 两条路或者说有两个方向
 * 1.输入 把仓库中中的状态输入或者 说传入组件，让组件可以显示  mapStateToProps
 * 2.输出 可以让组件里的操作改变仓库中状态 actions
 * 另外 为了让组件读取到最新的仓库中的状态。当仓库状态改变后，要通知组件刷新
 * @param {*} mapStateToProps 把仓库状态映射为属性
 * @param {*} mapDispatchToProps 把store.dispatch方法映射为属性
 */
function connect(mapStateToProps,mapDispatchToProps){
    return function(OldComponent){
        function NewComponent(props){
            const {store} = useContext(ReactReduxContext);
            const state = store.getState();//获取仓库中的总状态
            //let mapStateToProps = state=>state.counter1;
            const stateProps = React.useMemo(()=>{
                return  mapStateToProps(state);
            },[state]);
            //const dispatchProps = bindActionCreators(actions,store.dispatch);
            let dispatchProps = React.useMemo(()=>{
                let dispatchProps;
                if(typeof mapDispatchToProps === 'object'){
                    dispatchProps=bindActionCreators(mapDispatchToProps,store.dispatch);
                }else if(typeof mapDispatchToProps === 'function'){
                    dispatchProps=mapDispatchToProps(store.dispatch);
                }else{
                    dispatchProps={dispatch:store.dispatch}
                }
                return dispatchProps;
            },[store.dispatch]);
            //调用updateComponent的目的就是让状态改变，让组件更新
            //const [,updateComponent] = React.useReducer(()=>({}));
            const [,setState]= React.useState({});
            //里面可以编写一个订阅，订阅仓库中的状态变化 事件，仓库的状态发生变化后可以调用forceUpdate
            //从而让组件进行刷新，为了保证只需要订阅一次，所以可以写个依赖项store
            React.useEffect(()=>{
                let unsubscribe = store.subscribe(()=>setState({}));
                //这个函数的返回值 React会存起来，会在下次执行回调之前的执行
                return unsubscribe;
            },[store]);
            //把返回的对象当成了OldComponent组件的属性 stateProps={number:5}
            return <OldComponent {...props} {...stateProps} {...dispatchProps}/>
        }
        return NewComponent;
    }
}
export default connect;
```
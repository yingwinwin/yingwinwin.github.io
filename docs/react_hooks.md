---
id: react_hooks
title: react Hook
---

> 注意：所有hook都不可以在if,for中使用，确保hook的顺序调用
### 1. useState
- 让函数组件拥有状态，曾经的函数组件是不能保持状态的，因为函数每一次调用后都会销毁，useState相当于把值储存在一个数组中，在通过顺序，在通过顺序在当前的数组中取值;
- 如果异步又更改了state的值，state会被异步的渲染覆盖，所以需要传入函数，通过函数的参数拿到最新的state，重新计算。
- `useState()`初始值如果用函数的话，可以进行惰性初始化，也就是说在state中传入一个函数，当用到的时候在进行调用计算

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [number, setNumber] = useState(0);
  const add = () => {
    setTimeout(() => {
    // 这里如果是函数number拿到的就是最新的，如果是直接设置值，会从初始值0开始计数
      setNumber((number) => number + 1)
    }, 3000);
  }
  return <div>
    <p>{number}</p>
    <button onClick={() => setNumber(number + 1)}>+</button>
    <button onClick={add}>+</button>
  </div>
}

ReactDOM.render(<App/>,document.getElementById('root'));
```
- 实现
```js
let hookState = [];  // state的数组
let hookIndex = 0;  // 当前的hook
let scheduleUpdate;  // 重新更新渲染vdom的方法
function useState (initalState) {
    // 如果有初始值就设置初始值，初始值有可能是函数
    hookState[hookIndex] = hookState[hookIndex] || (typeof initialState ==='function'?initialState():initialState);
    let currentIndex = hookIndex;  // 通过这个值来保持当前的index值，当前闭包内的currentIndex，就不会变化了。
    // 设置state的方法
    function setState(newState) {
        // 如果传入的是一个函数，多用于解决异步，拿不到最新的值的问题
        if(typeof newState === 'function') {
            // 如果是函数，拿最新的state计算
            newState = newState(hookState[currentIndex])
        }
        hookState[currentIndex] = newState;
        scheduleUpdate() // 重新更新渲染
    }
    // 这里的index++，就是按顺序取出每一个值
    return [hookState[hookIndex++], setState]  // 返回一个数组
}
// 在容器重新挂载的时候，调用渲染
export function render(vdom,container){
    mount(vdom,container);
    scheduleUpdate && scheduleUpdate = ()=>{
        hookIndex=0;//在状态修改后调试更新的时候，索引重置为0
        //然后再进行虚拟DOM的比较更新 vdom=<App/>={type:App}
        compareTwoVdom(container,vdom,vdom);
    }
}
```
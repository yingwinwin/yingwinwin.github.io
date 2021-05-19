---
id: reactHook
title: Hook基本使用
---
# hook原理浅析
## 1. 介绍

> react-hooks
> 第一：解决函数组件状态不能保存的问题。
> 第二：解决类组件逻辑复用难的问题。

- 带着问题去进行学习。
1. 函数组件不像`class`组件中有实例挂载属性，那么`hook`中的状态是怎么储存的？
2. `react`官网中说，不能在`if`语句中声明`hook`的原因是什么？
3. `useEffect` 和 `useLayoutEffect` 的区别是什么？
4. `useCallback` 和 `useMemo` 的区别是什么？

- 预备知识：
1. 最好使用过hook
2. 有js基础，理解闭包和事件循环

## 2. hook原理

- **说在前面**：原理不是源码，原理只是用更好理解的方法，体现出源码的思维，跟源码还是有一定区别的。原理学习过后，也会对自己书写的一些代码更加理解。

### 2.1 useState
- 先写一个useState方法
```js
import React from "react";
import ReactDOM from "react-dom";
function hooks() {
    let lastState;  // 定义一个变量, 记录状态值
    function useState(initValue) {
        // 如果有上一个就用上一个没有就用初始值
        lastState = lastState || initValue;
        const setState = (newState) => {  // 定义一个方法
            lastState = newState;  // 把最新值赋值
            render()  // 渲染组件
        }
        /* 返回最新值和设置函数 */
        return [lastState, setState]
    }
    return {
       useState // 返回方法
    }
}
let { useState } = hooks();

const App = () => {
    const [number, setNumber] = useState(0)

    const handleClick = () => {
        setNumber(number + 1)
    }

    return <div>
        <p>{number}</p>
        <button onClick={handleClick}>+</button>
    </div>
}
render()

function render() {
    ReactDOM.render(<App />, document.getElementById("root"));
}
```

- 这里要说一下，`react`中`class`组件使用实例储存状态，那函数组件的状态是存在哪里的呢？答案是：函数组件对应的`fiber`中 有个`memoizedState`是一个链表结构，专门用来存贮`hook`的状态数据。这次我们只是讲原理，对源码不做过多讨论，有兴趣可以看卡颂大佬写的[React技术揭秘](https://react.iamkasong.com/)。

- 这样看`setState`是不是觉得很简单呢。现在又有一个问题产生了。如果我在代码中同时调用两个`useState`怎么办呢，这样不是都覆盖掉了。现在让我们来改造一下我们的`useState`方法。

```js
import React from "react";
import ReactDOM from "react-dom";
function hooks() {
  let hookStates = []; // 保存所有状态的数组
  let hookIndex = 0;  // 索引
  function useState(initValue) {
    // 把每一个状态存入当前的状态数组里面
    hookStates[hookIndex] = hookStates[hookIndex] || initValue;
    let currentIndex = hookIndex;  // 备份一些当前的索引值
    const setState = (newState) => {
      // 在闭包函数中使用，每次setState都是当前闭包环境下的值
      hookStates[currentIndex] = newState;
      render(); // 重新渲染组件
    }
    /* 返回方法数组，索引 + 1 */
    return [hookStates[hookIndex++], setState];
  }

  // 函数每次渲染之后，重新设置索引为1。
  function setHookIndex() {
    hookIndex = 0;
  }

  return {
    setHookIndex,
    useState, // 返回方法
  };
}
let { useState, setHookIndex } = hooks();

const App = () => {
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);

  return (
    <div>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}> + </button>
      <p>{number1}</p>
      <button onClick={() => setNumber1(number1 + 2)}> + </button>
    </div>
  );
};
render();

function render() {
  setHookIndex(); // 每次渲染重新设置索引为0
  ReactDOM.render(<App />, document.getElementById("root"));
}
```

- 这次的改造，去掉了之前存一个变量值的`lastState`，改为了`hookStates`数组 和 `hookIndex`两个值。一个用来记录当前的状态，一个用来记录当前的下标值。源码中的实现使用链表进行`next`指向下一个，但是基本原理就差不多。这就是为什么，不可以在`if`语句中使用`hook`函数。接下来让我们来看一下在`hook`中处理副作用的钩子函数`useEffect`

### 2.2 useEffect
- 这个函数主要是为了处理函数中有一些副作用，在`class`组件的时候，我们都是用生命周期做处理的，比如说发送请求更改`dom`之类的处理，函数组件中`react`给我们提供了`useEffect`这个函数。让我们来看看他的原理是什么吧！
```js
import React from "react";
import ReactDOM from "react-dom";
function hooks() {
  let hookStates = []; // 保存所有状态的数组
  let hookIndex = 0;  // 索引
  function useState(initValue) {
    // 把每一个状态存入当前的状态数组里面
    hookStates[hookIndex] = hookStates[hookIndex] || initValue;
    let currentIndex = hookIndex;  // 备份一些当前的索引值
    const setState = (newState) => {
      // 在闭包函数中使用，每次setState都是当前闭包环境下的值
      hookStates[currentIndex] = newState;
      render(); // 重新渲染组件
    }
    /* 返回方法数组，索引 + 1 */
    return [hookStates[hookIndex++], setState];
  }

  function useEffect(fn, deps) {
    /* 如果有上一次有存在useEffect，就从hookState里面取值 */
    if(hookStates[hookIndex]) {
      let [oldDestroy, lastDeps] = hookStates[hookIndex];
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if(same) {
        hookIndex ++;  // 如果相同，只加索引，不进行其他操作
      } else {
        /* 如果不同，现执行上一次的返回值 */
        oldDestroy();
        /* 开启一个宏任务 */
        setTimeout(()=>{
          let destroy = fn();  // 执行取返回值
          hookStates[hookIndex++] = [destroy, deps]; // 赋值
        });
      }
    } else {
      /* 开启一个宏任务 */
      setTimeout(()=>{
        let destroy = fn();  // 执行取返回值
        hookStates[hookIndex++] = [destroy, deps]; // 赋值
      });
    }
  }

  // 函数每次渲染之后，重新设置索引为1。
  function setHookIndex() {
    hookIndex = 0;
  }

  return {
    setHookIndex,
    useState, // 返回方法
    useEffect,
  };
}
let { useState, useEffect, setHookIndex } = hooks();

const App = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    document.title = number;
    return () => {
      console.log('销毁');
    }
  }, [number])

  return (
    <div>
      <p>number: {number}</p>
      <button onClick={() => setNumber(number + 1)}> + </button>
    </div>
  );
};
render();

function render() {
  setHookIndex(); // 渲染后重新设置索引为1
  ReactDOM.render(<App />, document.getElementById("root"));
}
```
- 上面的实现中我们可以看到useEffect的原理，他是开启了一个宏任务，那么就不得不提到跟这个函数很类似的一个函数`useLayoutEffect`。
  
### 2.3 useLayoutEffect
- 来看看下面这个例子。
```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";
function hooks() {
  let hookStates = []; // 保存所有状态的数组
  let hookIndex = 0; // 索引
  function useState(initValue) {
    // 把每一个状态存入当前的状态数组里面
    hookStates[hookIndex] = hookStates[hookIndex] || initValue;
    let currentIndex = hookIndex; // 备份一些当前的索引值
    const setState = (newState) => {
      // 在闭包函数中使用，每次setState都是当前闭包环境下的值
      hookStates[currentIndex] = newState;
      render(); // 重新渲染组件
    };
    /* 返回方法数组，索引 + 1 */
    return [hookStates[hookIndex++], setState];
  }

  function useEffect(fn, deps) {
    /* 如果有上一次有存在useEffect，就从hookState里面取值 */
    if (hookStates[hookIndex]) {
      let [oldDestroy, lastDeps] = hookStates[hookIndex];
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if (same) {
        hookIndex++; // 如果相同，只加索引，不进行其他操作
      } else {
        /* 如果不同，现执行上一次的返回值 */
        oldDestroy();
        /* 开启一个宏任务 */
        setTimeout(() => {
          let destroy = fn(); // 执行取返回值
          hookStates[hookIndex++] = [destroy, deps]; // 赋值
        });
      }
    } else {
      /* 开启一个宏任务 */
      setTimeout(() => {
        let destroy = fn(); // 执行取返回值
        hookStates[hookIndex++] = [destroy, deps]; // 赋值
      });
    }
  }
  function useLayoutEffect(fn, deps) {
    /* 如果有上一次有存在useEffect，就从hookState里面取值 */
    if (hookStates[hookIndex]) {
      let [oldDestroy, lastDeps] = hookStates[hookIndex];
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if (same) {
        hookIndex++; // 如果相同，只加索引，不进行其他操作
      } else {
        /* 如果不同，现执行上一次的返回值 */
        oldDestroy();
        /* 开启一个微任务 */
        queueMicrotask(() => {
          let destroy = fn(); // 执行取返回值
          hookStates[hookIndex++] = [destroy, deps]; // 赋值
        });
      }
    } else {
      /* 开启一个微任务 */
      queueMicrotask(() => {
        let destroy = fn(); // 执行取返回值
        hookStates[hookIndex++] = [destroy, deps]; // 赋值
      });
    }
  }

  // 函数每次渲染之后，重新设置索引为1。
  function setHookIndex() {
    hookIndex = 0;
  }

  return {
    setHookIndex,
    useState, // 返回方法
    useEffect,
    useLayoutEffect
  };
}
let { setHookIndex, useState, useEffect, useLayoutEffect } = hooks();

const App = () => {
  // useRef也是一个钩子，这个钩子是react在虚拟dom转换成真实dom的是挂载到react的ref属性上的对象
  let greenRef = useRef();  // {current: null}
  let redRef = useRef();

  useEffect(() => {
    greenRef.current.style.transform = 'translate(500px)'
    greenRef.current.style.transition = 'all 500ms'
  }, []);

  useLayoutEffect(() => {
    redRef.current.style.transform = 'translate(500px)'
    redRef.current.style.transition = 'all 500ms'
  }, [])

  function style(color) {
    return {
      width: "200px",
      height: "200px",
      backgroundColor: color,
    };
  }

  return (
    <div>
      <p ref={greenRef} style={style("green")}></p>
      <p ref={redRef} style={style("red")}></p>
    </div>
  );
};
render();

function render() {
  setHookIndex(); // 渲染后重新设置索引为1
  ReactDOM.render(<App />, document.getElementById("root"));
}
```
- 这两个钩子原理基本差不多，只不过在执行时机有些不一样。这样使用起来是不是更加得心应手了呢？其实react-hook，常用的也就state 和 effect，下面我们来看几个优化渲染的钩子函数。

### 2.4 useMemo 和 useCallback

```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";
function hooks() {
  let hookStates = []; // 保存所有状态的数组
  let hookIndex = 0; // 索引
  function useState(initValue) {
    // 把每一个状态存入当前的状态数组里面
    hookStates[hookIndex] = hookStates[hookIndex] || initValue;
    let currentIndex = hookIndex; // 备份一些当前的索引值
    const setState = (newState) => {
      // 在闭包函数中使用，每次setState都是当前闭包环境下的值
      hookStates[currentIndex] = newState;
      render(); // 重新渲染组件
    };
    /* 返回方法数组，索引 + 1 */
    return [hookStates[hookIndex++], setState];
  }

  function useEffect(fn, deps) {
    /* 如果有上一次有存在useEffect，就从hookState里面取值 */
    if (hookStates[hookIndex]) {
      let [oldDestroy, lastDeps] = hookStates[hookIndex];
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if (same) {
        hookIndex++; // 如果相同，只加索引，不进行其他操作
      } else {
        /* 如果不同，现执行上一次的返回值 */
        oldDestroy();
        /* 开启一个宏任务 */
        setTimeout(() => {
          let destroy = fn(); // 执行取返回值
          hookStates[hookIndex++] = [destroy, deps]; // 赋值
        });
      }
    } else {
      /* 开启一个宏任务 */
      setTimeout(() => {
        let destroy = fn(); // 执行取返回值
        hookStates[hookIndex++] = [destroy, deps]; // 赋值
      });
    }
  }
  function useLayoutEffect(fn, deps) {
    /* 如果有上一次有存在useEffect，就从hookState里面取值 */
    if (hookStates[hookIndex]) {
      let [oldDestroy, lastDeps] = hookStates[hookIndex];
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if (same) {
        hookIndex++; // 如果相同，只加索引，不进行其他操作
      } else {
        /* 如果不同，现执行上一次的返回值 */
        oldDestroy();
        /* 开启一个微任务 */
        queueMicrotask(() => {
          let destroy = fn(); // 执行取返回值
          hookStates[hookIndex++] = [destroy, deps]; // 赋值
        });
      }
    } else {
      /* 开启一个微任务 */
      queueMicrotask(() => {
        let destroy = fn(); // 执行取返回值
        hookStates[hookIndex++] = [destroy, deps]; // 赋值
      });
    }
  }

  function useMemo(fn, deps) {
    if (hookStates[hookIndex]) {
      let [oldMemo, lastDeps] = hookStates[hookIndex]
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if(same) {
        hookIndex ++;
        return oldMemo;  // 返回老的值
      } else { 
        let newMemo = fn()  // 计算新的值
        hookStates[hookIndex++] = [newMemo, deps];
        return newMemo;
      }
    } else {
      let newMemo = fn()
      hookStates[hookIndex++] = [newMemo, deps];
      return newMemo;
    }
  }
  function useCallback(fn, deps) {
    if (hookStates[hookIndex]) {
      let [oldfn, lastDeps] = hookStates[hookIndex]
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if(same) {
        hookIndex ++;
        return oldfn;  // 直接返回老的函数
      } else {
        hookStates[hookIndex++] = [fn, deps];
        return fn;
      }
    } else {
      hookStates[hookIndex++] = [fn, deps];
      return fn;
    }
  }

  function memo(OldFunctionComponent) {
    return class extends React.PureComponent{
      render() {
        return <OldFunctionComponent  {...this.props}/>
      }
    }
  }

  // 函数每次渲染之后，重新设置索引为1。
  function setHookIndex() {
    hookIndex = 0;
  }

  return {
    setHookIndex,
    useState, // 返回方法
    useEffect,
    useLayoutEffect,
    useMemo,
    useCallback,
    memo
  };
}
let { setHookIndex, useState, useEffect, useLayoutEffect, useMemo, useCallback, memo } = hooks();

let Child = ({data, addNumber}) => {
  console.log('child render');
  return <button onClick={addNumber}>{data.number}</button>
}

Child = memo(Child);

const App = () => {
  const [value, setValue] = useState('');
  const [number, setNumber] = useState(0);
  let data = useMemo(() => ({number}), [number])
  // let data = {number};
  let addNumber = useCallback(() => setNumber(number + 1), [number])
  // let addNumber = () => setNumber(number + 1)

  // let lastData = data;
  // console.log(data === lastData); // true

  return <div>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <Child data={data} addNumber={addNumber}/>
  </div>
};

render();

function render() {
  setHookIndex(); // 渲染后重新设置索引为1
  ReactDOM.render(<App />, document.getElementById("root"));
}
```
- 这两个函数配合memo方法用来减少react组件的渲染次数，memo只会比较数据的引用地址，useCallback 和 uesMemo 如果数据没有变，就返回当前的引用地址的数据，这样使用可以让子组件减少渲染。单独使用的话，可以部分优化。

### 2.5 useContext
```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";
function hooks() {
  let hookStates = []; // 保存所有状态的数组
  let hookIndex = 0; // 索引
  function useState(initValue) {
    // 把每一个状态存入当前的状态数组里面
    hookStates[hookIndex] = hookStates[hookIndex] || initValue;
    let currentIndex = hookIndex; // 备份一些当前的索引值
    const setState = (newState) => {
      // 在闭包函数中使用，每次setState都是当前闭包环境下的值
      hookStates[currentIndex] = newState;
      render(); // 重新渲染组件
    };
    /* 返回方法数组，索引 + 1 */
    return [hookStates[hookIndex++], setState];
  }

  function useEffect(fn, deps) {
    /* 如果有上一次有存在useEffect，就从hookState里面取值 */
    if (hookStates[hookIndex]) {
      let [oldDestroy, lastDeps] = hookStates[hookIndex];
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if (same) {
        hookIndex++; // 如果相同，只加索引，不进行其他操作
      } else {
        /* 如果不同，现执行上一次的返回值 */
        oldDestroy();
        /* 开启一个宏任务 */
        setTimeout(() => {
          let destroy = fn(); // 执行取返回值
          hookStates[hookIndex++] = [destroy, deps]; // 赋值
        });
      }
    } else {
      /* 开启一个宏任务 */
      setTimeout(() => {
        let destroy = fn(); // 执行取返回值
        hookStates[hookIndex++] = [destroy, deps]; // 赋值
      });
    }
  }
  function useLayoutEffect(fn, deps) {
    /* 如果有上一次有存在useEffect，就从hookState里面取值 */
    if (hookStates[hookIndex]) {
      let [oldDestroy, lastDeps] = hookStates[hookIndex];
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if (same) {
        hookIndex++; // 如果相同，只加索引，不进行其他操作
      } else {
        /* 如果不同，现执行上一次的返回值 */
        oldDestroy();
        /* 开启一个微任务 */
        queueMicrotask(() => {
          let destroy = fn(); // 执行取返回值
          hookStates[hookIndex++] = [destroy, deps]; // 赋值
        });
      }
    } else {
      /* 开启一个微任务 */
      queueMicrotask(() => {
        let destroy = fn(); // 执行取返回值
        hookStates[hookIndex++] = [destroy, deps]; // 赋值
      });
    }
  }

  function useMemo(fn, deps) {
    if (hookStates[hookIndex]) {
      let [oldMemo, lastDeps] = hookStates[hookIndex]
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if(same) {
        hookIndex ++;
        return oldMemo;  // 返回老的值
      } else { 
        let newMemo = fn()  // 计算新的值
        hookStates[hookIndex++] = [newMemo, deps];
        return newMemo;
      }
    } else {
      let newMemo = fn()
      hookStates[hookIndex++] = [newMemo, deps];
      return newMemo;
    }
  }
  function useCallback(fn, deps) {
    if (hookStates[hookIndex]) {
      let [oldfn, lastDeps] = hookStates[hookIndex]
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if(same) {
        hookIndex ++;
        return oldfn;  // 直接返回老的函数
      } else {
        hookStates[hookIndex++] = [fn, deps];
        return fn;
      }
    } else {
      hookStates[hookIndex++] = [fn, deps];
      return fn;
    }
  }

  function useContext(context) {
    return context._currentValue;  // 在组件渲染的时候已经存好了，然后useContext直接取出返回就可以了。
  }

  function memo(OldFunctionComponent) {
    return class extends React.PureComponent{
      render() {
        return <OldFunctionComponent  {...this.props}/>
      }
    }
  }

  // 函数每次渲染之后，重新设置索引为1。
  function setHookIndex() {
    hookIndex = 0;
  }

  return {
    setHookIndex,
    useState, // 返回方法
    useEffect,
    useLayoutEffect,
    useMemo,
    useCallback,
    useContext,
    memo
  };
}
let { setHookIndex, useState, useEffect, useLayoutEffect, useMemo, useCallback, memo, useContext } = hooks();


let AppContext = React.createContext();

const Child = () => {
  const {state, setState} = useContext(AppContext);
  return <div>
    <p>{state}</p>
    <button onClick={() => setState(state + 1)}>+</button>
  </div>
}

const App = () => {
  const [state, setState] = useState(0);
  return <AppContext.Provider value={{state, setState}}>
    <Child/>
  </AppContext.Provider>
};

render();

function render() {
  setHookIndex(); // 渲染后重新设置索引为1
  ReactDOM.render(<App />, document.getElementById("root"));
}
```

- 可以看到context的原理非常简单，仅仅是取出react处理过程中存好的属性，直接返回。还想了解的话可以看一下 createContext、Provider、Consumer，useContext只是取出值而已，不做过多说明。下面看下useReduer
  
### 2.6 useReducer
```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";
function hooks() {
  let hookStates = []; // 保存所有状态的数组
  let hookIndex = 0; // 索引
  /* 改造useState使用 useReducer 实现，useState就是useReducer的语法糖 */
  function useState(initValue) {
    return useReducer(null, initValue);
  }

  function useReducer(reducer, initValue) {
    hookStates[hookIndex] = hookStates[hookIndex] || initValue;
    let currentIndex = hookIndex;
    const dispatch = (action) => {
      // 用传入的reducer函数取出最新的值
      // 如果传入的是null，直接取出action的值即可
      hookStates[currentIndex] = reducer ? reducer(hookStates[currentIndex], action) : action;
      render();
    }
    return [hookStates[hookIndex++], dispatch];
  }

  function useEffect(fn, deps) {
    /* 如果有上一次有存在useEffect，就从hookState里面取值 */
    if (hookStates[hookIndex]) {
      let [oldDestroy, lastDeps] = hookStates[hookIndex];
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if (same) {
        hookIndex++; // 如果相同，只加索引，不进行其他操作
      } else {
        /* 如果不同，现执行上一次的返回值 */
        oldDestroy();
        /* 开启一个宏任务 */
        setTimeout(() => {
          let destroy = fn(); // 执行取返回值
          hookStates[hookIndex++] = [destroy, deps]; // 赋值
        });
      }
    } else {
      /* 开启一个宏任务 */
      setTimeout(() => {
        let destroy = fn(); // 执行取返回值
        hookStates[hookIndex++] = [destroy, deps]; // 赋值
      });
    }
  }
  function useLayoutEffect(fn, deps) {
    /* 如果有上一次有存在useEffect，就从hookState里面取值 */
    if (hookStates[hookIndex]) {
      let [oldDestroy, lastDeps] = hookStates[hookIndex];
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if (same) {
        hookIndex++; // 如果相同，只加索引，不进行其他操作
      } else {
        /* 如果不同，现执行上一次的返回值 */
        oldDestroy();
        /* 开启一个微任务 */
        queueMicrotask(() => {
          let destroy = fn(); // 执行取返回值
          hookStates[hookIndex++] = [destroy, deps]; // 赋值
        });
      }
    } else {
      /* 开启一个微任务 */
      queueMicrotask(() => {
        let destroy = fn(); // 执行取返回值
        hookStates[hookIndex++] = [destroy, deps]; // 赋值
      });
    }
  }

  function useMemo(fn, deps) {
    if (hookStates[hookIndex]) {
      let [oldMemo, lastDeps] = hookStates[hookIndex]
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if(same) {
        hookIndex ++;
        return oldMemo;  // 返回老的值
      } else { 
        let newMemo = fn()  // 计算新的值
        hookStates[hookIndex++] = [newMemo, deps];
        return newMemo;
      }
    } else {
      let newMemo = fn()
      hookStates[hookIndex++] = [newMemo, deps];
      return newMemo;
    }
  }
  function useCallback(fn, deps) {
    if (hookStates[hookIndex]) {
      let [oldfn, lastDeps] = hookStates[hookIndex]
      /* 判断依赖项是否相同 */
      let same = deps.every((item, index) => item === lastDeps[index]);
      if(same) {
        hookIndex ++;
        return oldfn;  // 直接返回老的函数
      } else {
        hookStates[hookIndex++] = [fn, deps];
        return fn;
      }
    } else {
      hookStates[hookIndex++] = [fn, deps];
      return fn;
    }
  }

  function useContext(context) {
    return context._currentValue
  }

  function memo(OldFunctionComponent) {
    return class extends React.PureComponent{
      render() {
        return <OldFunctionComponent  {...this.props}/>
      }
    }
  }

  // 函数每次渲染之后，重新设置索引为1。
  function setHookIndex() {
    hookIndex = 0;
  }

  return {
    setHookIndex,
    useState, // 返回方法
    useEffect,
    useLayoutEffect,
    useMemo,
    useCallback,
    useContext,
    useReducer,
    memo
  };
}
let { setHookIndex, useState, useEffect, useLayoutEffect, useMemo, useCallback, memo, useContext, useReducer } = hooks();

function appReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}

const App = () => {
  const [number, dispach] = useReducer(appReducer, 0)
  const [count, setCount] = useState(10)
  return <div>
    <p>{number}</p>
    <button onClick={() => dispach({type: 'ADD'})}> + </button>
    <button onClick={() => dispach({type: 'MINUS'})}> - </button>
    <button onClick={() => setCount(count + 1)}>{count}</button>
  </div>
};

render();

function render() {
  setHookIndex(); // 渲染后重新设置索引为1
  ReactDOM.render(<App />, document.getElementById("root"));
}
```
- 至此，基本上常用的hook原理都已经说过了，不知道大家有没有对之前写过的hook有更深刻的理解。
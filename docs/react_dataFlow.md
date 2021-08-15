---
id: react_dataFlow
title: react数据流
---

## Props
> react 是单向数据流（只能流向组件树中比自己层级更低的组件），在组件的通信上 需要基于 Props 进行数据通信

### 父传子
- 利用props向下传递数据
- props是只读属性，子组件并不能更改
```jsx
import React from "react";
import ReactDOM from "react-dom";

const Father = () => {
  return <Child text="来自父亲的数据"></Child>;
};

const Child = ({ text }) => {
  return <div>{text}</div>;
};

ReactDOM.render(<Father />, document.getElementById("root"));
```
### 子传父
- 此方法，只能在子组件中有触发条件的时候，才可以获得内容
- 通过函数传递参数，让父亲获得子组件中传出的数据
```jsx
import React from "react";
import ReactDOM from "react-dom";

const Father = () => {
  const queryChildText = (text) => {
    console.log(text); // 来自孩子的数据
  };

  return <Child queryChildText={queryChildText}/>;
};

const Child = ({ queryChildText }) => {
  // 点击按钮父亲会获得“传给父亲的数据”
  return <button onClick={() => queryChildText("传给父亲的数据")}>按钮</button>;
};

ReactDOM.render(<Father />, document.getElementById("root"));

```
### 兄弟
- 兄弟之间的参数传递，需要通过父组件进行周转
- 父组件把从兄弟1那里拿到的数据。通过props，传给兄弟2
- 相当于 子传父 + 父传子
- ![image](../static/resource/通信.png)
```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Borther2 = ({ text }) => {
  // 来自兄弟1的数据
  return <div>{text}</div>;
};

const Father = () => {
  const [text, setText] = useState("");
  const queryBorther1Text = (text) => {
    setText(text); // 来自兄弟1的数据
  };

  return (
    <>
      <Borther1 queryBorther1Text={queryBorther1Text}></Borther1>
      {/* 把从兄弟1那边拿到的数据，给到兄弟2 */}
      <Borther2 text={text}></Borther2>
    </>
  );
};

const Borther1 = ({ queryBorther1Text }) => {
  return (
    <button onClick={() => queryBorther1Text("传给Borther2的数据")}>
      按钮
    </button>
  );
};

ReactDOM.render(<Father />, document.getElementById("root"));
```
## 发布订阅

### 事件对象
```jsx
class Event {
  constructor() {
    this.eventMap = {};
  }

  on(type, handler) {
    if (!(handler instanceof Function)) {
      throw new Error("必须传入一个函数");
    }
    // 如果没有订阅过，新建一个队列
    if (!this.eventMap[type]) {
      this.eventMap[type] = [];
    }

    // 然后把当前的事件放进去
    this.eventMap[type].push(handler);
  }

  // 监听函数
  emit(type, ...params) {
    // 如果这个事件订阅过，把当前队列里面的函数，一个一个的取出来执行
    if (this.eventMap[type]) {
      this.eventMap[type].forEach((handler) => {
        handler(...params);
      });
    }
  }

  off(type, handler) {
    // 如果当前有这个函数，在队列里面找到，然后删除
    if (this.eventMap[type]) {
      // -1 >>> 0  是一个非常大的数，splice找不到，就不会删除
      this.eventMap[type].splice(this.eventMap[type].indexOf(handler) >>> 0, 1);
    }
  }
}

export const myEvent = new Event();
```

### 通过事件对象进行通信
- Pub Sub为兄弟关系
- Pub在初始化的时候订阅了setPub事件
- 在Sub想给Pub数据的时候，点击按钮，Pub就会拿到Sub发来的数据，通过event类做数据中转
- 在离开页面的时候要取消订阅
```jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { myEvent } from "./event.js"; // 通过事件对象做中转

const Pub = () => {
  const [pub, setPub] = useState("");
  useEffect(() => {
    const handler = (params) => {
      setPub(`A订阅函数拿到${params}的内容`);
    };
    myEvent.on("setPub", handler);
    return () => {
      myEvent.off("setPub", handler);
    };
  }, []);
  return <div>{pub}</div>;
};

const Sub = () => {
  const handleSub = () => {
    myEvent.emit("setPub", "来自B");
  };
  return <button onClick={handleSub}>点击B发送数据</button>;
};

const Father = () => {
  return (
    <div>
      <Pub />
      <Sub />
    </div>
  );
};

ReactDOM.render(<Father />, document.getElementById("root"));
```
## Context
- Context 是 react 中内置解决多层传参问题的API
- 新版 context 已经解决 shouldComponentUpdate 为 false 阻止的问题

```jsx
import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
/**
 * 通过creatContext创建一个context对象
 * 父亲组件
 *   - 通过Provider包裹子组件
 *   - 传入一个value对象，内部所有的组件都可以通过context拿到value里面的值
 * 儿子类组件：
 *   - 先通过静态方法static contextType = AppContext; 给this.context赋值
 *   - 类组件也可以通过Consumer的方式获取
 * 儿子函数组件
 *   - 通过Consumber的方式获取
 *   - 通过useContext函数获取
 */
let AppContext = createContext();
class App extends React.Component {
  render() {
    return (
      <AppContext.Provider
        value={{
          text: "父亲传给儿子们的数据"
        }}
      >
        <Child />
      </AppContext.Provider>
    );
  }
}

// 类组件
class Child extends React.Component {
  static contextType = AppContext; // 类组件中使用context
  render() {
    return (
      <div>
        Child --- {this.context.text}
        <Son />
      </div>
    );
  }
}
// 函数组件
const Son = () => {
  return (
    <AppContext.Consumer>
      {({ text }) => {
        return (
          <div>
            {`Son --- ${text}`}
            <Hook />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};
// hook
const Hook = () => {
  const { text } = useContext(AppContext);
  return <div> hook --- {text}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
```
- 输出
```shell
Child --- 父亲传给儿子们的数据
Son --- 父亲传给儿子们的数据
hook --- 父亲传给儿子们的数据
```

## Redux
> 1. redux 是严格的单向数据流
> 2. 三个概念， action -- 动作、 reducer -- 过滤器、 store--仓库 

### 概念
- `store` 单一数据流 只读。
- `Action` 派发动作，只有派发可以修改动作
- `Reducer` 过滤器，把最近的state给到view层

### 方法
- bindActionCreators(fn, store.dispatch) -- 减去手动dispatch的麻烦，封装dispatch方法
- combinReducers -- 多个reducer合并为一个，用于多个组件项目reduce单独管理，然后合并的情况
- **createStore(reducer, initState, applyMiddleware()) -- 核心方法** 用于创建store对象
- getState -- 获得最新的状态数据
- subscribe -- 进行动作的监听，返回值是取消监听函数
- **dispatch -- 动作派发**

### 使用
```js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const initState = { number: 0 };
// 定义动作
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return { number: state.number + 1 };
    case "MINUS":
      return { number: state.number - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);  // 创建仓库
class App extends Component {
    // 从仓库中获取状态
  state = { number: store.getState().number };
  componentDidMount() {
    //  监听状态
    this.unsubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().number });
    });
  }
  componentWillUnmount() {
    //   取消监听
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        {/* 派发动作 */}
        <button onClick={() => store.dispatch({ type: "ADD" })}> + </button>
        <button onClick={() => store.dispatch({ type: "MINUS" })}> - </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
```
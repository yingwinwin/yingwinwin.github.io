---
id: react_advance
title: react其他特性/工具方法
---

## Context
### 1. 组件中使用context
```jsx
import React, { createContext, Component } from "react";
import ReactDOM from "react-dom";

// context使用
let PersonContext = createContext();
class Person extends Component {
  state = {
    color: 'red'  
  }

  changeColor = (color) => this.setState({color})
  render() {
    return (
      <PersonContext.Provider value={{
        color: this.state.color,
        changeColor: this.changeColor
      }}>
        <div style={{border: `1px solid ${this.state.color}`, padding: '5px'}}>
          Person
          <Head/>
        </div>
      </PersonContext.Provider>
    );
  }
}
/* 函数组件中使用context */
function Head() {
  return (
    <PersonContext.Consumer>
      {(colorValue) => (
        <div
          style={{ border: `1px solid ${colorValue.color}`, padding: "5px" }}
        >
          head
          <Eye />
        </div>
      )}
    </PersonContext.Consumer>
  );
}
/* 类组件中使用context */
class Eye extends Component {
  static contextType = PersonContext
  changeColor = (color) => this.setState({color})
  render() {
    return (
        <div style={{border: `1px solid ${this.context.color}`, padding: '5px'}}>eye
        <button onClick={() => this.context.changeColor('green')}>绿色</button>
        <button onClick={() => this.context.changeColor('red')}>红色</button>
        </div>
    );
  }
}

ReactDOM.render(<Person />, document.getElementById("root"));
```
- 通过`context`修改颜色，统一改变父亲，孙子，儿子的颜色
![image](../static/resource/context.png)

### 2. context实现原理
```js
// react.js 添加创建context的方法
function createContext(initialValue={}){
  let context = {Provider,Consumer}; // 返回两个函数组件
  function Provider(props){
    // 如果有值就赋值，没有就赋初始值
     context._currentValue = context._currentValue||initialValue;
     /* 
        - 修改统一内存地址的context，所有组件都用同一个地址，这样修改就都修改了
        - 不可以用扩展运算符，用了内存地址就变了
     */
     Object.assign(context._currentValue,props.value); 
     return props.children; // 把组件的孩子返回
  }
  // 函数组件只能使用consumer，类组件可以使用this.context 也可以用consumer
  function Consumer(props){  
    // 把当前的context，传给children当props
    return props.children(context._currentValue);
  }
  return context;
}
```

```js
// react-dom.js 在类组件初次挂载的时候给this.context赋值
function mountClassComponent(vdom){
  if(type.contextType){
    // 把用户传入的static contextType = PersonContext静态属性取出来赋值给this.context
    classInstance.context = type.contextType.Provider._value;
  }
}
```

## 高阶组件

### 1. 属性代理（给组件添加新功能）

```jsx
import React, { Component } from "react";
import ReactDOM from "react-dom";

/* 
  属性代理
*/

// 一个函数，传入参数，返回一个函数，函数里面返回一个类组件
let withLoading = loadMessage => OldLoading => {
  /* 继承React的Compnent组件 */
  return class newHelloLoad extends Component {
    /* 复用逻辑 */
    show = () => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.id = 'loading';
      p.style.color='red';
      p.innerText= loadMessage
      div.appendChild(p)
      document.body.appendChild(div)
    }
    hide = () => {
      document.getElementById('loading').remove()
    }
    render(){
      let extraProps = {
        show: this.show,  // 提取出公共的方法
        hide: this.hide
      }
      /* 给老组件新增两个方法 */
      return <OldLoading {...this.props} {...extraProps} />
    }
  }
}

class SayHellow extends Component {
  render() {
    /* 通过props使用show和hide */
    return (
      <div>
        SayHellow
        <button onClick={this.props.show}>显示</button>
        <button onClick={this.props.hide}>隐藏</button>
      </div>
    )
  }
}
/* 添加装饰器属性 */
let Newhello = withLoading('加载中...')(SayHellow);
ReactDOM.render(<Newhello />, document.getElementById("root"));
```
![image](../static/resource/hocex.png)

### 2. 反向继承
- 让子组件继承父组件，这样可以使子组件的生命周期先执行，然后在执行父组件的生命周期

```jsx
/* 
  反向继承
*/
class Button extends Component {
  componentDidMount(){
    console.log('Button componentDidMount');
  }
  
  render(){
    console.log('button render');
    return(
      <button name="button" title="标题"></button>
    )
  }
}

let wrap = (Button) => {
  // 继承父组件
  return class wrapButton extends Button {
    state = {
      count: 0
    }
    componentDidMount(){
      console.log('wrapButton componentDidMount');
      super.componentDidMount()
    }
    // 给父组件的render上添加方法，用cloneElement
    add = () => {
      this.setState({
        count: this.state.count + 1
      })
    }

    render(){
      console.log('wrapButton render');
      /* 修改父组件的dom */
      let superRenderElement = React.cloneElement(super.render(), {
        onClick: this.add
      }, this.state.count)
      return superRenderElement
    }
  }
}

let Wrapbutton = wrap(Button)

ReactDOM.render(<Wrapbutton />, document.getElementById("root"));

// wrapButton render
// button render
// wrapButton componentDidMount
// Button componentDidMount
```

### 3. 复用逻辑传参（render Props）

- children

```jsx
class MouseTracker extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

ReactDOM.render(
  <MouseTracker>
    { // 获得chilren传过来的state
      (props) => {
      return (
        <>
          <h1>移动鼠标</h1>
          <p>
            x:{props.x},y:{props.y}
          </p>
        </>
      );
    }}
  </MouseTracker>,
  document.getElementById("root")
);
```
- render Porps

```jsx
class MouseTracker extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {/* render传入方法 */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

ReactDOM.render(
  /* 在父组件传入render方法，传参,这种形式也可以进行传参 */
  <MouseTracker render={(props) => {
    return (
      <>
        <h1>移动鼠标</h1>
        <p>
          x:{props.x},y:{props.y}
        </p>
      </>
    );
  }}/>,
  document.getElementById("root")
);
```
- 高阶组件hoc

```jsx
/* 高阶函数需要在包裹一层函数，renderProps 和 children不需要 */
let withMouseTracker = (OldCompnent) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        x: 0,
        y: 0,
      };
    }
  
    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };
    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
         <OldCompnent {...this.state}/>
        </div>
      );
    }
  }
}


class Show extends Component {
  render(){
    return <>
    <h1>移动鼠标</h1>
    <p>
      x:{this.props.x},y:{this.props.y}
    </p>
  </>
  }
}
const MouseTracker = withMouseTracker(Show)
ReactDOM.render(
  <MouseTracker />,
  document.getElementById("root")
);
```

## 工具方法
### 1. cloneElement
- 传入一个老的vdom，新的props，还有孩子，返回一个新的element
- 内部判断children的类型，进行不一样的处理，把新老属性合并，并返回一个新的。
```js
function cloneElement(oldElement,newProps,...newChildren) {
    let children = oldElement.props.children;
    //有可能是一个undefined,一个对象，是一个数组
    if(children){
        if(!Array.isArray(children)){//如果一个儿子，独生子 
            children=[children]
        }
    }else{
        children=[];
    }
    children.push(...newChildren);
    children=children.map(wrapToVdom);
    if(children.length===0){
        children=undefined;
    }else if(children.length===1){
        children=children[0];
    }
    newProps.children = children;
    let props ={...oldElement.props,...newProps};
    //oldElement type key ref props....
    return {...oldElement,props};
}
```

### 2. PureComponent
- 重写`shouldComponentUpdate`这个方法。如果props和state不相等，有变化才会重新渲染，否则不会渲染，提升性能。
- 这个方法只进行了浅比较
- immerable.js 会进行深比较
```jsx
export class PureComponent extends Component{
    //重写了此方法,只有状态或者 属性变化了才会进行更新，否则 不更新
    shouldComponentUpdate(nextProps,nextState){
        return !shallowEqual(this.props,nextProps)||!shallowEqual(this.state,nextState)
    }
}
/**
 * 用浅比较 obj1和obj2是否相等
 * 只要内存地址一样，就认为是相等的，不一样就不相等
 */
function shallowEqual(obj1,obj2){
    if(obj1 === obj2)//如果引用地址是一样的，就相等.不关心属性变没变
        return true;
   //任何一方不是对象或者 不是null也不相等  null null  NaN!==NaN
    if(typeof obj1 !== 'object' || obj1 ===null || typeof obj2 !== 'object' || obj2 ===null){
        return false;
    }    
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if(keys1.length !== keys2.length){
        return false;//属性的数量不一样，不相等
    }
    for(let key of keys1){
        if(!obj2.hasOwnProperty(key) || obj1[key]!== obj2[key]){
            return false;
        }
    }
    return true;
}
```

### 3. React.memo
- 用于函数组件减少渲染次数，做浅比较，属性变化就更新，否则就不更新
```js
// React.memo
function memo(FunctionComponent){
  return class extends PureComponent{
      render(){
          return FunctionComponent(this.props);
      }
  }
}
```

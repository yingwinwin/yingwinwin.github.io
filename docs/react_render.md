---
id: react_render
title: react渲染
---

## 一、JSX
### 1. JSX 和 虚拟DOM
- jsx 是 React.createElement() 方法的语法糖，jsx通过babel翻译为用React.createElement()调用
```jsx
let element1 = <h1 id = 'title'>hello</h1>;
let element2 = React.createElement('h1', {
  id: 'title'
}, 'hello')
```

- element1 和 element2 执行的时候, 是一个对象，也就是虚拟DOM, 都会被编译为element2的形式，在浏览器运行的时候调用React.createElement()调用执行。变成虚拟DOM
```jsx
// 如果只有一个孩子，可能是字符串或者对象
<h1 id = 'title'>hello</h1>
// 编译后
{
  "type": "h1",
  "key": null,
  "ref": null,
  "props": {
    "id": "title",
    "children": "hello"  // 是字符串
  },
  "_owner": null,
  "_store": {}
}
```
```jsx
<h1 id = 'title'>
    <div>world</div>
</h1>
// 编译后
{
  "type": "h1",
  "key": null,
  "ref": null,
  "props": {
    "id": "title",
    "children": {  // 只有一个孩子元素，是对象
      "type": "div",
      "key": null,
      "ref": null,
      "props": {
        "children": "world"
      },
      "_owner": null,
      "_store": {}
    }
  },
  "_owner": null,
  "_store": {}
}
```
```jsx
// 如果有两个孩子，children是一个数组，里面有可能是字符串或者对象
React.createElement('h1', {
  id: 'title'
}, 'hello', 'world')
// 编译后
{
  "type": "h1",
  "key": null,
  "ref": null,
  "props": {
    "id": "title",
    "children": [ // 数组里面是字符串
      "hello",
      "world"
    ]
  },
  "_owner": null,
  "_store": {}
}
```
```jsx
// 数组里面是对象
<h1 id = 'title'>
    <div>hello</div>
    <div>world</div>
</h1>
// 编译后
{
  "type": "h1",
  "key": null,
  "ref": null,
  "props": {
    "id": "title",
    "children": [  // 数组里面是对象
      {
        "type": "div",
        "key": null,
        "ref": null,
        "props": {
          "children": "world"
        },
        "_owner": null,
        "_store": {}
      },
      {
        "type": "div",
        "key": null,
        "ref": null,
        "props": {
          "children": "world"
        },
        "_owner": null,
        "_store": {}
      }
    ]
  },
  "_owner": null,
  "_store": {}
}
```
![image](../static/resource/jsx.png)

- 问题：为什么children有写是数组有些是字符串或者单独的对象。
- 答：因为react中处理一个单独对象的情况很多，还有函数的返回值都是一个元素，比如说render()函数中return的一个节点。而且如果只有一个儿子，且是文本节点，react里面也进行了优化

### 2. JSX属性和表达式
- JSX 属性中不可以只用关键字`class for`等，`class`需要转换为`className`，`for`需要转换为`htmlFor`，`style={{color: red}}`
- 表达式：{}, 如果想在JSX中加入js变量的话，可以用{}包起来


### 3. JSX是一个对象
- 可以在if 和 for 语句中使用
- 可以赋值给变量
- 可以当参数
- 可以当返回值

## 二、react中的更新
### 1. react 渲染中的key属性

- 用于react更新操作
- 如果用户传入key，react会根据key来进行DOM diff的对比，进行节点复用。
- 如果用户没有传入key，react会用位置进行一一对比，不一样就删除重建，没有复用的逻辑，消耗性能。

### 2. react更新元素的渲染
- react元素是不可变的，只是只读的。
- react的属性是不可变的，所以不可能把一个h1变成h2，每次元素变化都是删除重建
```js
// 虚拟dom中的type属性是不可修改的
let element1 = {
  "type": "h1",
  "key": null,
  "ref": null,
  "props": {
    "id": "title",
    "children": "hello"  // 是字符串
  },
  "_owner": null,
  "_store": {}
}
Object.freezz(element1)  // 对对象进行冻结，不可以添加和修改对象中的属性，不可写且不可添加
element1.type = 'div'; // 错误操作，react17后会报错，17之前只是建议不要修改，添加属性也不可以。
```
- react只会更新必要的部分，DOM diff


## 三、具体实现
- react17的变化
  + 不再使用React.createElement()方法进行虚拟dom的转换
  + 会自动引入jsx()进行虚拟dom的转换

### 1. React.createElement()处理虚拟dom
- bable会把jsx转换为createElement函数处理的样子，在通过调用这个函数，转换为虚拟dom
- createElement，传入参数当前节点的类型，节点的属性，儿子和儿子们
```js
function createElement(type, config, children) {
  let props = {...config};
  /* 如果传入的参数长度大于3，就把后面的参数截取为一个数组 */
  if (arguments.length > 3) {
    children = Array.prototype.slice.call(arguments, 2);
  }
  props.children = children;  // 如果没有直接把children放到props里面

  return {
    type,
    props
  }
}

const React = {
  createElement
}

export default React;
```
### 2. 实现对原生的节点进行渲染

1. 传入vdom，和挂载的root节点
2. 把vdom进行真实dom的渲染
3. 把虚拟dom的属性更新属性到真实dom的属性上
4. 把儿子们也都变成真实的DOM挂载到自己的dom结构上，通过递归，dom.appendchild
5. 然后把自己挂载到容器上

```js
/**
 * @description 用于react把虚拟dom渲染为真实节点到父节点上
 * @param {object} vdom 虚拟dom
 * @param {object} container 真实root节点
 */
function render(vdom, container) {
    /* 创建一个真实的dom元素 */
    const dom = creactDOM(vdom);
    /* 挂载到root节点上 */
    container.appendChild(dom)
};

/**
 * @description 根据不同情况创建真实的dom节点
 * @param {object} vdom 虚拟dom
 * @returns 真实的dom节点
 */
function creactDOM(vdom) {
    /* 如果是字符串或者数字，直接返回文本节点 */
    if(typeof vdom === 'string' || typeof vdom === 'number') {
        return document.createTextNode(vdom);
    }

    /* 否则就是虚拟dom，把当前type，创建成新的真实节点 */
    let { type, props } = vdom;
    let dom = document.createElement(type);
    /* 更新真实节点上面的属性 */
    updateProps(dom, props);
    /* 
        处理孩子
        1. 如果孩子是string，或者 number 就直接把值赋值给dom的文本节点
        2. 如果是单独的object，还要判断一下它是不是有type属性，如果有type属性就是vdom，否则可能就是用户随便传入的一个dom
        3. 如果children是一个数组，需要把数组里面的每一项拿出来挂载到父节点上面
        4. 兜底：剩下的都情况把他toString输出
    */
    if(typeof props.children === 'string' || typeof props.children === 'number') {
        dom.textContent = props.children;
    } else if (typeof props.children === 'object' && props.children.type) {
        render(props.children, dom)
    } else if (Array.isArray(props.children)) {
        reconclieChildren(props.children, dom);
    } else {
        document.textContent = props.children ? props.children.toString() : '';
    }
    return dom;
}

/**
 * @description 把真实dom挂载上属性值
 * @param {element} dom 真实dom
 * @param {object} newProps 属性
 */
function updateProps(dom, newProps) {
    for(let key in newProps) {
        if(key === 'children') continue; // 如果是children跳过，需要单独处理
        if(key === 'style') {  // 如果是style，因为传入的是一个对象，所以需要循环处理在dom上循环挂载每一个属性
            let styleObj = newProps.style;
            for(let attr in styleObj) {
                dom.style[attr] = styleObj[attr]
            }
        } else { // 否则就在dom上挂载其他属性，js中className编译后就是class了。
            dom[key] = newProps[key];
        }
    }
}

/**
 * 
 * @param {object} childrenVdom 儿子的数组对象
 * @param {element} parentDom 父亲的父节点
 */
function reconclieChildren(childrenVdom, parentDom) {
    for(let i = 0; i <childrenVdom.length; i ++) {
        let childVdom = childrenVdom[i];
        render(childVdom, parentDom)
    }
}

const ReactDOM = {
    render
}

export default ReactDOM;
```
### 3. 实现对自定义函数组件的渲染
- 自定义组件必须大写字母开头
- 组件必须先定义
- 组件需要返回并且只能返回一个根元素

```jsx
/**
 * @description 根据不同情况创建真实的dom节点
 * @param {object} vdom 虚拟dom
 * @returns 真实的dom节点
 */
function creactDOM(vdom) {
    /* 如果是字符串或者数字，直接返回文本节点 */
    if(typeof vdom === 'string' || typeof vdom === 'number') {
        return document.createTextNode(vdom);
    }

    /* 否则就是虚拟dom，把当前type，创建成新的真实节点 */
    let { type, props } = vdom;
+   let dom;
+   if(typeof type === 'function') {
+       /* 通过递归直接返回一个真实的dom节点 */
+       return mountFunctionComponent(vdom);
+   } else {
+       dom = document.createElement(type);
+   }
    /* 更新真实节点上面的属性 */
    updateProps(dom, props);
    /* 
        处理孩子
        1. 如果孩子是string，或者 number 就直接把值赋值给dom的文本节点
        2. 如果是单独的object，还要判断一下它是不是有type属性，如果有type属性就是vdom，否则可能就是用户随便传入的一个dom
        3. 如果children是一个数组，需要把数组里面的每一项拿出来挂载到父节点上面
        4. 兜底：剩下的都情况把他toString输出
    */
    if(typeof props.children === 'string' || typeof props.children === 'number') {
        dom.textContent = props.children;
    } else if (typeof props.children === 'object' && props.children.type) {
        render(props.children, dom)
    } else if (Array.isArray(props.children)) {
        reconclieChildren(props.children, dom);
    } else {
        document.textContent = props.children ? props.children.toString() : '';
    }
    return dom;
}

+/**
+* @description 递归调用函数组件返回一个真是的dom
+* @param {object} vdom 虚拟dom
+*/
+ function mountFunctionComponent(vdom) {
+   let { type, props } = vdom;
+   let renderVdeom = type(props);  // 调用函数传入props参数，返回一个vdom
+   return creactDOM(renderVdeom); // 把vdom渲染成真实的dom返回
+}
```
### 4. 渲染类组件
>  + 类能在构造函数里面给this.state赋值，其他地方使用this.setState()方法改变值。
>  + 可以用state定义状态对象
>  +  属性对象 父组件给的 不能改变，只能读

- 在reactDOM中添加渲染类组件的逻辑
- 创建一个component.js文件，这个就是需要继承的类组件
- 类组件的渲染流程：`虚拟dom是一个类 —通过new—> 获得一个实例 —通过调用类组件上的render方法—> 获得原生的虚拟dom节点 —creactDOM—> 递归获取真实dom`
- 会在类组件上挂载原生vdom 和 自己的实例，放在自己的属性上。在原生上vdom上挂载 真实dom，用于diff更新
```jsx
// ReactDOM
/**
 * @description 根据不同情况创建真实的dom节点
 * @param {object} vdom 虚拟dom
 * @returns 真实的dom节点
 */
function creactDOM(vdom) {
    /* 如果是字符串或者数字，直接返回文本节点 */
    if(typeof vdom === 'string' || typeof vdom === 'number') {
        return document.createTextNode(vdom);
    }

    /* 否则就是虚拟dom，把当前type，创建成新的真实节点 */
    let { type, props } = vdom;
    let dom;
    if(typeof type === 'function') {
+       /* 判断是否有是不是类组件这个属性，如果有这个属性就做类组件的处理，否则就是函数组件的处理 */
+       if(type.isReactComponent) { // 这个属性是写在类上面的静态属性，所以可以直接打点使用
+           return mountClassComponent(vdom);
+       } else {
+           return mountFunctionComponent(vdom);
+       }
    } else {
        dom = document.createElement(type);
    }
    /* 更新真实节点上面的属性 */
    updateProps(dom, props);
    /* 
        处理孩子
        1. 如果孩子是string，或者 number 就直接把值赋值给dom的文本节点
        2. 如果是单独的object，还要判断一下它是不是有type属性，如果有type属性就是vdom，否则可能就是用户随便传入的一个dom
        3. 如果children是一个数组，需要把数组里面的每一项拿出来挂载到父节点上面
        4. 兜底：剩下的都情况把他toString输出
    */
    if(typeof props.children === 'string' || typeof props.children === 'number') {
        dom.textContent = props.children;
    } else if (typeof props.children === 'object' && props.children.type) {
        render(props.children, dom)
    } else if (Array.isArray(props.children)) {
        reconclieChildren(props.children, dom);
    } else {
        document.textContent = props.children ? props.children.toString() : '';
    }
    return dom;
}

+/**
+ * @description 用于渲染class组件
+ * @param {object} vdom 虚拟dom
+ * @returns 真实的dom节点用于渲染
+ */
+function mountClassComponent(vdom) {
+    let { type, props} = vdom;  // 结构虚拟dom中的参数
+    let calssinstence = new type(props); // 实例化类组件
+    let renderdom = calssinstence.render();  // 调用里面的render方法，拿出当前的原生的虚拟节点
+    let dom = creactDOM(renderdom)  // 通过creactDom进行递归渲染
+    calssinstence.dom = dom  // 再把真实的dom节点挂载到实例上，用于更新
+    return dom;
+}
```


```jsx
// Component.js
export default class Component {
    /* 加一个静态属性在ReactDOM渲染时判断是否是类组件，进行对应的渲染 */
    static isReactComponent = true;
    constructor(props) {
        // 接受super(props),中的props继承属性
        this.props = props
    }
    render() {
        // 抽象方法，父类只需要定义，然后子类必须实现才可以
        throw new Error('抽象方法，需要子类实现')
    }
}
```

### 5. 类组件的更新（无diff）
- 给真实的dom绑定事件
- 通过setState方法，让组件更新
```jsx
// ReactDOM
/**
 * @description 把真实dom挂载上属性值
 * @param {element} dom 真实dom
 * @param {object} newProps 属性
 */
function updateProps(dom, newProps) {
    for(let key in newProps) {
        if(key === 'children') continue; // 如果是children跳过，需要单独处理
        if(key === 'style') {  // 如果是style，因为传入的是一个对象，所以需要循环处理在dom上循环挂载每一个属性
            let styleObj = newProps.style;
            for(let attr in styleObj) {
                dom.style[attr] = styleObj[attr]
            }
+       } else if (key.startsWith('on')) {
+         // 给真实的dom添加事件
+           dom[key.toLocaleLowerCase()] = newProps[key]
+       } else { // 否则就在dom上挂载其他属性，js中className编译后就是class了。
            dom[key] = newProps[key];
        }
    }
}
```

```jsx
// Component.js
import { creactDOM } from './react-dom'

export default class Component {
    /* 加一个静态属性在ReactDOM渲染时判断是否是类组件，进行对应的渲染 */
    static isReactComponent = true;
    constructor(props) {
        // 接受super(props),中的props继承属性
        this.props = props;
    }

+   setState(partialState) {
+       // 先存到一个新的位置
+       let state = this.state;
+       // 通过覆盖，设置最新的state
+       this.state = {...state, ...partialState};
+       let newVdom = this.render();  // 这个方法是儿子调用的，所以这里的this指向的是儿子，调用儿子的render方法，拿到最近的虚拟dom
+       updateClassComponent(this,newVdom);
+   }

    render() {
        // 抽象方法，父类只需要定义，然后子类必须实现才可以,js中没有明确的要求，ts中有可以使用的关键字
        throw new Error('抽象方法，需要子类实现')
    }
}

+/**
+ * @description 用来更新当前的界面
+ * @param {new} classInstance 当前调用setState 子组件的实例
+ * @param {object} newVdom 拿到的最新的虚拟dom
+ */
+function updateClassComponent(classInstance, newVdom) {
+    let oldDom = classInstance.dom;  // 取出之前在渲染时存入的老的dom节点
+    let newDom = creactDOM(newVdom);  // 通过从creactDOM创建真实的dom节点
+    oldDom.parentNode.replaceChild(newDom, oldDom);  // 然后通过olddom找到父亲节点直接替换
+    classInstance.dom = newDom;  // 再把最新的节点赋值给实例节点上
+}
```

### 6. 类组件的批量更新
- react中，事件更新是异步的，是批量的，在调用state之后状态并没有立刻更新，而是先缓存起来，等事件函数完成后，在进行批量更新，一次更新重新渲染。
- 如果非react控制，比如说setTimeout，queueMicrotask，Promise，等回调函数中，就不是批量更新了。只有react的合成事件（事件处理函数和生命周期）中才会进行批量更新。
```jsx
/* 这样在事件函数中写多个state，每一个state，也都会生效, 但是也是批量更新异步 */
this.setState((lastState) => ({number: lastState + 1}), () => {
  /* 在state的回调函数中，也是批量更新，他会等所有的state都更新完成之后再执行回调函数，回调函数也依旧是批量更新 */
  console.log(this.state.number) // 2
})  //1
console.log(this.state.number)  // 0
this.setState((lastState) => ({number: lastState + 1}), () => {
  console.log(this.state.number) // 2
})  //2
console.log(this.state.number)  // 0

/* 非react控制，属于异步操作，这样会使当前状态脱离react批量更新的控制，每次打印都会输出最新的值 */
Promise.resolve().then(() => {
  this.setState((lastState) => ({number: lastState + 1}))  //3
  console.log(this.state.number) // 3
})
```

> 处理批量更新

- 流程图
![image](../static/img/setState2.jpg)

- 一个`updater`类来处理状态的批量更新
- 用一个`updateQueue`队列来存储批量更新的内容和是否需要批量更新

```jsx
// Component.js(处理非批量更新，批量更新需要再添加合成事件逻辑)
import { creactDOM } from './react-dom'

/* 更新队列 */
+export let updateQueue = {
+    isBatchingUpdate: false,  // 判断是否需要批量更新，默认false不需要批量更新
+    updaters: new Set()  // 更新队列，放入当前需要批量更新的内容
+}
+
+/* 创建一个更新类 */
+class Updater {
+    constructor(classInstance) {
+        this.classInstance = classInstance; // 这个是当前的子类实例
+        this.pendingState = [];  // setState传入的第一个参数，可能是对象或者函数
+        this.callbacks = []  // setState传入的callback
+    }
+
+    /* 添加新的state */
+    addState(partialState, callback){
+        this.pendingState.push(partialState);  // 把state放到队列存起来
+        if(typeof callback === 'function'){
+            this.callbacks.push(callback);  // 把回调放到队列中
+        }
+        if(updateQueue.isBatchingUpdate) {  // 如果需要批量更新
+            updateQueue.updaters.add(this)  // 就把当前的state放到队列中
+        } else { 
+            /* 否则就直接更新当前的实例 */
+            this.updateClassComponent(this.classInstance);
+        }
+    }
+
+    updateClassComponent() {
+        let { classInstance, pendingState, callbacks } = this;
+        // 如果当前队列中有状态
+        if( pendingState.length > 0 ) {
+            classInstance.state = this.getState();  // 更新实例的state
+            classInstance.forceUpdate()  // 暴力更新组件
+            callbacks.forEach(cb => cb()); // 调用callback
+            callbacks.length = 0; // callback清空
+        }
+    }
+
+    /* 获得当前最新的状态值 */
+    getState () {
+        let { classInstance, pendingState } = this;
+        let { state } = classInstance; // 从实例里面取出旧的状态
+        pendingState.forEach(nextState => { // 在所有的state中，取出用户传入的最新的状态
+            /* 如果用户传入的最新的状态是函数的话 */
+            if(typeof nextState === 'function') {
+                /* 调用函数，取出当前的最新值 */
+                nextState = nextState(state)
+            }
+            /* 把之前的状态和最新的状态合并 */
+            state = {...state, ...nextState};
+        })
+        pendingState.length = 0;  // 批量更新后把存入状态的数组清空
+        return state;
+    }
+}

export default class Component {
    /* 加一个静态属性在ReactDOM渲染时判断是否是类组件，进行对应的渲染 */
    static isReactComponent = true;
    constructor(props) {
        // 接受super(props),中的props继承属性
        this.props = props;
        this.state = {};
+       this.updater = new Updater(this)
    }

+   setState(partialState, callback) {
+       // 更新调用update实例上的方法
+       this.updater.addState(partialState, callback);
+   }
+   /* 暴力更新 */
+   forceUpdate() {
+       let newVdom = this.render();  // 拿到最新的虚拟dom
+       updateClassComponent(this, newVdom); // 替换更新
+   }

    render() {
         // 抽象方法，父类只需要定义，然后子类必须实现才可以,js中没有明确的要求，ts中有可以使用的关键字
        throw new Error('抽象方法，需要子类实现')
    }
}

/**
 * @description 用来更新当前的界面
 * @param {new} classInstance 当前调用setState 子组件的实例
 * @param {object} newVdom 拿到的最新的虚拟dom
 */
function updateClassComponent(classInstance, newVdom) {
    let oldDom = classInstance.dom;  // 取出之前在渲染时存入的老的dom节点
    let newDom = creactDOM(newVdom);  // 通过从creactDOM创建真实的dom节点
    oldDom.parentNode.replaceChild(newDom, oldDom);  // 然后通过olddom找到父亲节点直接替换
    classInstance.dom = newDom;  // 再把最新的节点赋值给实例节点上
}
```

### 7. 合成事件处理

- 在react中会把原生的事件进行处理
- 为了统一做兼容性处理
- 为了添加一些其他功能，批量处理，事件冒泡， aop切片编程
```jsx
// react-dom.js
// 在渲染函数处理事件的位置，调用react处理过的函数
/**
 * @description 把真实dom挂载上属性值
 * @param {element} dom 真实dom
 * @param {object} newProps 属性
 */
function updateProps(dom, newProps) {
    for(let key in newProps) {
        if(key === 'children') continue; // 如果是children跳过，需要单独处理
        if(key === 'style') {  // 如果是style，因为传入的是一个对象，所以需要循环处理在dom上循环挂载每一个属性
            let styleObj = newProps.style;
            for(let attr in styleObj) {
                dom.style[attr] = styleObj[attr]
            }
        } else if (key.startsWith('on')) {
            // 给真实的dom添加事件
            // dom[key.toLocaleLowerCase()] = newProps[key]
+           addEvent(dom, key.toLocaleLowerCase(), newProps[key])
        } else { // 否则就在dom上挂载其他属性，js中className编译后就是class了。
            dom[key] = newProps[key];
        }
    }
}
```
- 是否开启批量更新
```jsx
// Compnent.js
// 添加批量更新的逻辑处理
/* 更新队列 */
export let updateQueue = {
    isBatchingUpdate: false,  // 判断是否需要批量更新，默认false不需要批量更新
    updaters: new Set(),  // 更新队列，放入当前需要批量更新的内容
+   batchUpdate(){ // 批量更新
+       // 拿出当前批量更新的每一项，进行统一更新
+       for(let updater of this.updaters) {
+           updater.updateClassComponent()
+       }
+       this.isBatchingUpdate = false; // 重置回非批量更新模式
+   }
}
```
- 处理事件

```jsx
// event.js
import { updateQueue } from './Component'

/**
 * @description 合成事件， 对原生事件进行包裹
 * 1. 处理兼容性，将event事件对象，对不同浏览器进行处理
 * 2. 可以在函数处理之前和之后做一些事情，可以统一管理事件，添加批量处理，事件冒泡aop切片编程等等
 * @param {element} dom 真实dom
 * @param {string} eventType 当前是什么事件onclick...
 * @param {function} listener 事件的回调函数
 */
export function addEvent(dom, eventType, listener) {
    /* 在真实的dom元素上添加store属性，如果有就不在重新添加了 */
    let store = dom.store || (dom.store = {});
    /* 让当前的事件名字和方法做一个关联 */
    store[eventType] = listener; // store.onClick = handleClick
    if(!document[eventType]) {
        /* 事件委托。如果在document上，有这个元素，不管是那个事件上绑定的，都代理到document上 */
        document[eventType] = dispatchEvent;
    }
}

/**
 * @description 通过document.onclick = function(e){} 这种方式拿到原生的event对象， 在这个函数中做对应处理
 * @param {object} event 原生的事件对象
 */
let syntheticEvent = { // 这个对象就是react合成事件的event
    stopping: false,
    stop() {  // 用户手动调用stop方法阻止冒泡
        this.stopping = true,
        console.log('阻止冒泡');
    }
};  // 合成事件是单例对象
function dispatchEvent(event) {
    /* target是原生dom，绑定在什么上面就是按个dom元素
       type是当前绑定的是那个时间方法的名字，例如：click
    */
    let { target, type } = event;
    let eventType = `on${type}`;

    updateQueue.isBatchingUpdate = true;  // 把队列设置为批量更新模式
    createSyntheticEvent(event);
    /* 处理事件冒泡 */
    console.dir(target);
    while(target) {
        let {store} = target;  // 把刚才存入真实dom的事件函数拿出来
        /* 如果dom上有存入这个sotre的话，而且store里面有当前存入的这个事件的话，就取出来给listener赋值 */
        let listener = store && store[eventType];
        /* 这是判断是否有这个函数，如果有就把用当前的这个事件做点击处理，把事件参数都传过去给当前的button的事件函数 */
        listener && listener.call(target, syntheticEvent);
        /* 如果用户手动调用了阻止冒泡的方法，直接停止循环向上查找 */
        if(syntheticEvent.stopping) {
            break; 
        }
        // 如果有target的话，让target等于自己的父亲，这样会一直递归向上找到document节点，这个时候他的父亲是null，跳出循环
        target = target.parentNode; 
    }
    for(let key in syntheticEvent) {
        /* 使用完成之后，在将当前的事件对象全部清除，复用当前这一个对象 */
        syntheticEvent[key] = null;
    }
    updateQueue.batchUpdate();
}

/**
 * @description 将原生的事件克隆一份到react自己的事件对象上
 * @param {object} nativeEvent 原生事件对象
 */
function createSyntheticEvent(nativeEvent) {
    for(let key in nativeEvent) {
        syntheticEvent[key] = nativeEvent[key]
    }
}
```
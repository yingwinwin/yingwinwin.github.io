---
id: react_lifecycle
title: react生命周期
---

## 16.3以前的生命周期
![image](../static/img/reactoldlifecycle.jpg)

### 1. 单组件更新
- 使用

```jsx
class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      number: 0
    }
    console.log('Counter  1. constructor  组件初始化', );
  }
  
  componentWillMount(){
    console.log('Counter  2.componentWillMount  组件将要挂载', );
  }

  componentDidMount(){
    console.log('Counter  4.componentDidMount  组件将要挂载完成', );
  }
  shouldComponentUpdate(nextProps,nextState) {
    console.log('Counter  5.shouldComponentUpdate  询问组件是否要更新');
    return nextState.number % 2 === 0
  }

  componentWillUpdate(){
    console.log('Counter  6.componentWillUpdate  组件将要更新', );
  }
  componentDidUpdate(){
    console.log('Counter  7. componentDidUpdate  组件更新完成', );
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render(){
    console.log('Counter  3.render  获取虚拟dom，更新虚拟dom', );
    return <div>
      <p>{this.state.number}</p>
      <button onClick={this.handleClick}> + </button>
    </div>
  }
}

/*  输出结果
-----挂载
Counter  1. constructor  组件初始化
Counter  2.componentWillMount  组件将要挂载
Counter  3.render  获取虚拟dom，更新虚拟dom
Counter  4.componentDidMount  组件将要挂载完成
------第一次点击button
Counter  5.shouldComponentUpdate  询问组件是否要更新
------第二次点击button
Counter  5.shouldComponentUpdate  询问组件是否要更新
Counter  6.componentWillUpdate  组件将要更新
Counter  3.render  获取虚拟dom，更新虚拟dom
Counter  7. componentDidUpdate  组件更新完成
*/
```
- 实现
- 组件只挂载一次，然后剩下都是更新阶段
```jsx
/**
 * @description 用于react把虚拟dom渲染为真实节点到父节点上
 * @param {object} vdom 虚拟dom
 * @param {object} container 真实root节点
 */
function render(vdom, container) {
    /* 创建一个真实的dom元素 */
    const dom = creactDOM(vdom);
    /* 挂载到root节点上 */
    container.appendChild(dom);
+   /* 把刚刚渲染之后缓存的didMont函数在挂载之后进行调用 */
+   dom.componentDidMount && dom.componentDidMount();
};

// react-dom.js
/**
 * @description 用于渲染class组件
 * @param {object} vdom 虚拟dom
 * @returns 真实的dom节点用于渲染
 */
function mountClassComponent(vdom) {
    let { type, props} = vdom;  // 结构虚拟dom中的参数
    let calssinstence = new type(props); // 实例化类组件
    /* 在组件获取虚拟dom挂载之前，调用willMount方法 */
+   if(calssinstence.componentWillMount) {
+       calssinstence.componentWillMount()
+   }
    let renderdom = calssinstence.render();  // 调用里面的render方法，拿出当前的原生的虚拟节点
    let dom = creactDOM(renderdom)  // 通过creactDom进行递归渲染
+   if(calssinstence.componentDidMount) {
+       /* 这里不可以直接调用didmount因为这个时候只是为了计算vdom还没有进行真实的挂载，所以先进行了缓存 */
+       dom.componentDidMount = calssinstence.componentDidMount.bind(calssinstence)
+   }
    calssinstence.dom = dom  // 再把真实的dom节点挂载到实例上，用于更新
    return dom;
}
```

```jsx
// Component.js
class Updater {
    constructor(classInstance) {
        this.classInstance = classInstance; // 这个是当前的子类实例
        this.pendingState = [];  // setState传入的第一个参数，可能是对象或者函数
        this.callbacks = []  // setState传入的callback
    }

    /* 添加新的state */
    addState(partialState, callback){
        this.pendingState.push(partialState);  // 把state放到队列存起来
        if(typeof callback === 'function'){
            this.callbacks.push(callback);  // 把回调放到队列中
        }
+       this.emitUpdate();
    }
+   emitUpdate() {
+       if(updateQueue.isBatchingUpdate) {  // 如果需要批量更新
+           updateQueue.updaters.add(this)  // 就把当前的state放到队列中
+       } else { 
+           /* 否则就直接更新当前的实例 */
+           this.updateClassComponent(this.classInstance);
+       }
+   }

    updateClassComponent() {
        let { classInstance, pendingState } = this;
        // 如果当前队列中有状态
        if( pendingState.length > 0 ) {
+           shouldUpdate(classInstance, this.getState())
        }
    }
}

+/**
+ * @description 判断组件是否更新
+ * @param {element} classInstance 当前的实例
+ * @param {object} nextState 计算好的最新的state值
+ * @returns 如果为false就直接停止函数，不在更新
+ */
+function shouldUpdate(classInstance, nextState) {
+    classInstance.state = nextState;  // 不管组件更不更新，状态都会进行改变
+    /* 如果用户调用了这个方法，且这个方法的返回值是false，那么这次就不更新了 */
+    if(classInstance.shouldComponentUpdate &&
+        !classInstance.shouldComponentUpdate(classInstance.props, classInstance.state)) {
+            return;
+    }
+    classInstance.forceUpdate()  // 暴力更新组件
+}

export default class Component {
    /* 暴力更新 */
    forceUpdate() {
        /* 更新前 */
+       if(this.componentWillUpdate) {
+           this.componentWillUpdate()
+       }
        let newVdom = this.render();  // 拿到最新的虚拟dom
        updateClassComponent(this, newVdom); // 替换更新
        /* 更新后 */
+       if(this.componentDidUpdate) {
+           this.componentDidUpdate()
+       }
    }
}
```

### 2. 父子组件更新
- 使用
- `setState`在哪里使用不会出现死循环：`didMount`, 事件处理函数, 推荐只在这两个地方写setState，其他都不要写，因为其他可能会反复调用，以前`willMount`中是可以使用`setState`的，后来`react`改成`fiber`后，会反复调用`willMount`，所以不推荐使用。也不推荐在`update`中使用，会反复调用，造成死循环
```jsx
/* 父组件 */
class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
    console.log('Counter  1. constructor  组件初始化', );
  }
  
  componentWillMount(){
    console.log('Counter  2.componentWillMount  组件将要挂载', );
  }

  componentDidMount(){
    console.log('Counter  4.componentDidMount  组件将要挂载完成', );
  }
  shouldComponentUpdate(nextProps,nextState) {
    console.log('Counter  5.shouldComponentUpdate  询问组件是否要更新');
    return nextState.number % 2 === 0
  }

  componentWillUpdate(){
    console.log('Counter  6.componentWillUpdate  组件将要更新', );
  }
  componentDidUpdate(){
    console.log('Counter  7. componentDidUpdate  组件更新完成', );
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render(){
    console.log('Counter  3.render  获取虚拟dom，更新虚拟dom', );
    return <div>
      <p>{this.state.number}</p>
      {this.state.number === 4 ? null : <ChildCounter count={this.state.number}/>}
      <button onClick={this.handleClick}> + </button>
    </div>
  }
}
/* 子组件 */
class ChildCounter extends React.Component {
  componentWillMount(){
    console.log('ChildCounter  1.componentWillMount  组件将要挂载', );
  }

  componentDidMount(){
    console.log('ChildCounter  3.componentDidMount  组件将要挂载完成', );
  }
  
  componentWillReceiveProps(newProps) {
    console.log('ChildCounter  4.componentWillReceiveProps  组件将要接受到新的属性', );
    console.log();
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.log('ChildCounter  5.shouldComponentUpdate  询问组件是否要更新');
    return nextProps.count % 3 === 0
  }

  componentWillUpdate(){
    console.log('ChildCounter  6.componentWillUpdate  组件将要更新', );
  }
  componentDidUpdate(){
    console.log('ChildCounter  7. componentDidUpdate  组件更新完成', );
  } 
  componentWillUnmount() {
    console.log('ChildCounter  8. componentDidUpdate  组件将要卸载', );

  }
  render(){
    console.log('ChildCounter  2. render  获取虚拟dom，更新虚拟dom', );
    return <div>{this.props.count}</div>
  }
}
/* 
--- 初始化
Counter  1. constructor  组件初始化
Counter  2.componentWillMount  组件将要挂载
Counter  3.render  获取虚拟dom，更新虚拟dom
ChildCounter  1.componentWillMount  组件将要挂载
ChildCounter  2. render  获取虚拟dom，更新虚拟dom
ChildCounter  3.componentDidMount  组件将要挂载完成
Counter  4.componentDidMount  组件将要挂载完成
--- 第一次点击按钮
Counter  5.shouldComponentUpdate  询问组件是否要更新
--- 第二次点击按钮
Counter  5.shouldComponentUpdate  询问组件是否要更新
Counter  6.componentWillUpdate  组件将要更新
Counter  3.render  获取虚拟dom，更新虚拟dom
ChildCounter  4.componentWillReceiveProps  组件将要接受到新的属性
ChildCounter  5.shouldComponentUpdate  询问组件是否要更新
Counter  7. componentDidUpdate  组件更新完成
--- 第三次点击按钮
Counter  5.shouldComponentUpdate  询问组件是否要更新
--- 第四次点击按钮 
Counter  5.shouldComponentUpdate  询问组件是否要更新
Counter  6.componentWillUpdate  组件将要更新
Counter  3.render  获取虚拟dom，更新虚拟dom
ChildCounter  8. componentDidUpdate  组件将要卸载
Counter  7. componentDidUpdate  组件更新完成
--- 第五次点击按钮
Counter  5.shouldComponentUpdate  询问组件是否要更新
--- 第六次点击按钮
Counter  5.shouldComponentUpdate  询问组件是否要更新
Counter  6.componentWillUpdate  组件将要更新
Counter  3.render  获取虚拟dom，更新虚拟dom
ChildCounter  1.componentWillMount  组件将要挂载
ChildCounter  2. render  获取虚拟dom，更新虚拟dom
ChildCounter  3.componentDidMount  组件将要挂载完成
Counter  7. componentDidUpdate  组件更新完成
--- 第七次点击按钮
Counter  5.shouldComponentUpdate  询问组件是否要更新
--- 第八次点击按钮
Counter  5.shouldComponentUpdate  询问组件是否要更新
Counter  6.componentWillUpdate  组件将要更新
Counter  3.render  获取虚拟dom，更新虚拟dom
ChildCounter  4.componentWillReceiveProps  组件将要接受到新的属性
ChildCounter  5.shouldComponentUpdate  询问组件是否要更新
Counter  7. componentDidUpdate  组件更新完成
--- 9 10 11 相当于 7 8 7
--- 第12次点击按钮
Counter  5.shouldComponentUpdate  询问组件是否要更新
Counter  6.componentWillUpdate  组件将要更新
Counter  3.render  获取虚拟dom，更新虚拟dom
ChildCounter  4.componentWillReceiveProps  组件将要接受到新的属性
ChildCounter  5.shouldComponentUpdate  询问组件是否要更新
ChildCounter  6.componentWillUpdate  组件将要更新
ChildCounter  2. render  获取虚拟dom，更新虚拟dom
ChildCounter  7. componentDidUpdate  组件更新完成
Counter  7. componentDidUpdate  组件更新完成
*/
```
- 实现
![image](../static/img/counterdomdiff.jpg)
```jsx
// Component.js
+ import { compareTwoVdom } from './react-dom'

export default class Component {
    /* 加一个静态属性在ReactDOM渲染时判断是否是类组件，进行对应的渲染 */
    static isReactComponent = true;
    constructor(props) {
        // 接受super(props),中的props继承属性
        this.props = props;
        this.state = {};
        this.updater = new Updater(this)
    }

    setState(partialState, callback) {
        // 更新调用update实例上的方法
        this.updater.addState(partialState, callback);
    }

    /* 暴力更新 */
    forceUpdate() {
        /* 更新前 */
        if(this.componentWillUpdate) {
            this.componentWillUpdate()
        }
        let newRenderVdom = this.render();  // 拿到最新的虚拟dom
+       let oldRenderVdom = this.oldRenderVdom;  // div#counter
+       let oldDom = oldRenderVdom.dom; // div#counter真实节点
+       let currentRenderVDOM = compareTwoVdom(oldDom.parentNode, oldRenderVdom, newRenderVdom)
+       this.oldRenderVdom = currentRenderVDOM;
        /* 更新后 */
        if(this.componentDidUpdate) {
            this.componentDidUpdate()
        }
    }
}
// 删除了直接替换父节点更新的组件的方法，进行diff对比
```

```jsx
// react-dom.js
/**
 * @description 根据不同情况创建真实的dom节点
 * @param {object} vdom 虚拟dom
 * @returns 真实的dom节点
 */
export function creactDOM(vdom) {
    /* 如果是字符串或者数字，直接返回文本节点 */
    if(typeof vdom === 'string' || typeof vdom === 'number') {
        return document.createTextNode(vdom);
    }

    /* 否则就是虚拟dom，把当前type，创建成新的真实节点 */
    let { type, props } = vdom;
    let dom;
    if(typeof type === 'function') {
        /* 判断是否有是不是类组件这个属性，如果有这个属性就做类组件的处理，否则就是函数组件的处理 */
        if(type.isReactComponent) { // 这个属性是写在类上面的静态属性，所以可以直接打点使用
            return mountClassComponent(vdom);
        } else {
            return mountFunctionComponent(vdom);
        }
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
+   /* 在vdom创建完真实dom之后，把真实dom挂载到虚拟dom的dom属性上 */
+   vdom.dom = dom;
    return dom;
}

/**
 * @description 用于渲染class组件
 * @param {object} vdom 虚拟dom
 * @returns 真实的dom节点用于渲染
 */
function mountClassComponent(vdom) {
    let { type, props} = vdom;  // 结构虚拟dom中的参数
    let calssinstence = new type(props); // 实例化类组件
+   // 把当前的虚拟dom上挂载实例属性，在diff的时候用
+   vdom.calssinstence = calssinstence;
    /* 在组件获取虚拟dom挂载之前，调用willMount方法 */
    if(calssinstence.componentWillMount) {
        calssinstence.componentWillMount()
    }
    let renderVdom = calssinstence.render();  // 调用里面的render方法，拿出当前的原生的虚拟节点
+   /* 把老的虚拟dom挂载到实例上在diff的时候需要用, 这个dom是刚挂载的时候的dom */
+   vdom.oldRenderVdom = renderVdom;
    let dom = creactDOM(renderVdom)  // 通过creactDom进行递归渲染
    if(calssinstence.componentDidMount) {
        /* 这里不可以直接调用didmount因为这个时候只是为了计算vdom还没有进行真实的挂载，所以先进行了缓存 */
        dom.componentDidMount = calssinstence.componentDidMount.bind(calssinstence)
    }
    calssinstence.dom = dom  // 再把真实的dom节点挂载到实例上，用于更新
    return dom;
}


+/**
+ * @description 比较虚拟dom
+ * @param {elemetn} parentDOM 当前组件挂载的真实dom节点
+ * @param {object} oldVdom 老的虚拟dom
+ * @param {object} newVdom 新的虚拟dom
+ * @param {object} nextDOM 下一个节点
+ */
+export function compareTwoVdom(parentDOM, oldVdom, newVdom, nextDOM) {
+    if(!oldVdom && !newVdom) { // 新老都没有
+        return null;
+    } else if(oldVdom && !newVdom) { // 老的节点有，新的没有
+        // 在父亲节点上删除老的节点
+        let currentDom = findDOM(oldVdom);  // 通过方法找到当前的真实dom节点
+        if(currentDom) { // 找到了就从父亲身上删除当前的dom节点
+            parentDOM.removeChild(currentDom);
+        }
+        /* 如果当前的虚拟dom上有实例挂载，说明是自定义组件，如果用户写了willUnmount方法，就调用一下 */
+        if(oldVdom.calssinstence && oldVdom.calssinstence.componentWillUnmount) {
+            oldVdom.calssinstence.componentWillUnmount()
+        }
+        return null;
+    } else if (!oldVdom && newVdom) { // 如果老的没有，新的有
+        let newDOM = creactDOM(newVdom);
+        /* 这里会操作真实的dom做对比，然后返回虚拟dom，用于新的渲染 */
+        /* 这个时候要看有没有传入下一个节点，如果传入了，说明在中间插入的，需要用insert */
+        if(nextDOM) {  // TODO: button
+            parentDOM.insertBefore(newDOM, nextDOM);
+        } else { // 否则就在最后面加新的节点
+            parentDOM.appendChild(newDOM); // 不能写死
+        }
+        return newVdom;
+    } else if (newVdom && oldVdom && (newVdom.type !== oldVdom.type)) { // 老的有新的也有但是类型不同
+        let oldDOM = findDOM(oldVdom); // 拿到老的dom节点
+        let newDOM = creactDOM(newVdom); // 拿到新的dom节点
+        parentDOM.replaceChild(newDOM, oldDOM);  // 替换
+        if(oldVdom.calssinstence && oldVdom.calssinstence.componentWillUnmount) {  // 如果老的是类组件，需要调用生命周期方法
+            oldVdom.calssinstence.componentWillUnmount()
+        }
+    } else { // 如果老的有新的也有且类型一样， 可以复用老的dom节点
+            // 要更新自己的属性，要深度比较儿子们
+        updateElement(oldVdom, newVdom);
+        return newVdom;
+    }
+}
+
+/**
+ * @description 深入递归比较新老有什么不一样
+ * @param {object} oldVdom 老的虚拟dom
+ * @param {object} newVdom 新的虚拟dom
+ */
+function updateElement(oldVdom, newVdom) {
+    //TODO:
+}
+
+/**
+ * @description 寻找到虚拟dom对应的真实dom
+ * @param {object} vdom 虚拟dom
+ */
+function findDOM(vdom) {
+    let {type} = vdom;
+    if(typeof type === 'function') {
+        /* 递归寻找真实的dom，在组件挂载的时候放在vdom的属性上 */
+        dom = findDOM(vdom.oldRenderVdom)
+    } else {
+        dom = vdom.dom
+    }
+    return dom;
+}
```
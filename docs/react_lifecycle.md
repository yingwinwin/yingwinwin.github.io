---
id: react_lifecycle
title: react生命周期
---

## 16.3以前的生命周期
![image](../static/img/reactoldlifecycle.jpg)

### 1. 单组件更新
- 使用
- 组件只挂载一次，然后剩下都是更新阶段

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
- `setState`在哪里使用不会出现死循环：`didMount`, 事件处理函数, 推荐只在这两个地方写setState，其他都不要写，因为其他可能会反复调用，以前`willMount`中是可以使用`setState`的，后来`react`改成`fiber`后，会反复调用`willMount`，所以不推荐使用。也不推荐在`update`中使用，会反复调用，造成死循环;
- 比较(`DOMdiff`)
    1. 如果老节点是null，新节点也是null  ->  不做处理，返回null;
    2. 如果老节点有，新节点没有 -> 要找到当前组件的真实dom的跟节点，操作dom删除老的, 返回null, 如果删除的是类组件需要调用卸载的生命周期函数;
    3. 如果老的节点没有，新的节点有 -> 通过新的vdom，创建新的节点，看下一个节点在哪里，插入到下一个节点的前面，如果没有传入下一个节点，就插入到最后。如果新的节点是类组件需要调用didmount方法
    4. 如果老的节点有，新的节点也有，但是类型不一样 -> 把老的节点删除（删除类组件需要调用unmount方法），然后创建新的节点，替换掉老的节点（如果新节点是类组件，需要调用didmount）
    5. 如果老的节点有，新的节点也有，类型一样 -> 复用老节点
         + 如果是文本内容替换的话，直接替换文本内容，然后修改props属性即可
         + 如果是原生dom的话，更新自己的属性，然后递归比较儿子们。
         + 如果是类组件或者函数组件的话。类组件要拿到新的vdom，然后拿到新的原生vdom节点，在和旧的vdom进行递归diff比较（类组件如果props有更新的话，需要调用willReceiveProps）。函数组件，也要先拿到自己的新的vdom，然后拿到自己根节点的vdom进行递归比较
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

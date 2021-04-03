---
id: reactTheory_JSX
title: JSX
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

### 1. React.createElement();
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

### 2. ReactDOM.render()
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
    if(typeof props.children === 'string' || props.children === 'number') {
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

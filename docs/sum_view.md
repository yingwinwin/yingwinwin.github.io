---
id: view
title: 面试题
---

### 1. 块级作用域

- js 出现了块级作用域之后，会把函数之后的内容都当做一个块来看待，用函数隔开

```js
{
  a = 123;
  function a() {}
  a = 456;
}
console.log(a); // 123

{
  a = 123;
  function a() {}
  a = 456;
  function a() {}
}
console.log(a); // 456
```

- 上面的代码相当于

```js
{
  a = 123;
  function a() {}
  {
    a = 456;
  }
}
console.log(a); // 123

{
  a = 123;
  function a() {}
  {
    a = 456;
  }
  function a() {}
}
console.log(a); // 456
```

### 2. promise

> 掘金推荐文章中看到了这个题也不太懂

```js
Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() =>{
    console.log(6);
})

// 答案是 0、1、2、3、4、5、6
```

- 评论里面的大佬说：Js引擎为了让microtask尽快的输出，做了一些优化，连续的多个then(3个)如果没有reject或者resolve会交替执行then而不至于让一个堵太久完成用户无响应，不单单v8这样其他引擎也是这样，因为其实promuse内部状态已经结束了。这块在v8源码里有完整的体现

### 3. 前端的通讯(待整理)
- axios(优点)
- ajax
- fetch(同源，.then取值的问题)
- websocket(应用场景和常用api)

### 4. Symbol.hasInstance
- `Symbol.hasInstance`用于判断某对象是否为某构造器的实例。因此你可以用它自定义 `instanceof` 操作符在某个类上的行为。
```js
class Array1 {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

console.log([] instanceof Array1);
// expected output: true
```
- 可用于把`instanceof`比较字符串类型
```js
class String1 {
  static [Symbol.hasInstance](str) {
    return typeof str === 'string';
  }
}

console.log('hello' instanceof String1);
// expected output: true
```
### 5. event loop
```js
// 7, 4, 5, 6 1, 2 ,3
a()
setTimeout(() => {
    console.log(1);
    new Promise((res, rej) => {
        console.log(2);  // await就相当于这里
        res()
    }).then(() => {
        console.log(3);
    })
}, 2000)
setTimeout(() => {
    console.log(6);
},1000)
function b() {
    console.log(7);
}
async function a() {
    await b();  // await 就是 promise的同步 后面是.then的内容
    console.log(5);
}
console.log(4);
```

### 6. promise
```js
new Promise (function (resolve, reject) {
    reject(resolve(1) || 0);
  }).then((x) => {
    return Promise.reject(x)
  }, (x) =>{
    return Promise.reject(x + 2)
  }).then((x) => {
    console.log(x);
  }, (x) =>{
    console.log(x + 4);
  })
  // 5 promise状态更改之后，不会再更改了。在内部resolve先执行，状态先改掉了
```

## 面试复盘
### 1. 阿里外包，菜鸟（电话一面）
1. vdom是什么？解决了什么问题？
2. 浏览器缓存？协商缓存？
3. react hook钩子 useMemo useCallback 划重点：前端性能优化（可以展开说其他用性能优化处理的函数和钩子）
4. 跨域 jsonP cors 代理跨域 nginx
5. hoc的使用场景：属性代理和反向继承
6. 1px问题，0.5px的实现
7. H5移动端适配问题
8. 关注的公众号，社区，有哪些？

- 总结：需要背诵专业名词，单词。[发音参考](https://github.com/shimohq/chinese-programmer-wrong-pronunciation)

### 2. 涂鸦智能（现场一面、二面）
1. react fiber -- 为什么取消will那些生命周期
2. 问了 http 和 webpack 都不会（现在会了）
3. input下载文件
4. 浏览器地址输入后都发生了什么
5. 浏览器缓存
6. hook的钩子 useCallback  useMemo
7. 函数组件怎么拿ref --- forwardRef
8. setState的执行
9. let const
10. Module框实现有几种方法
11. 微前端隔离用什么实现的？
12. react-router的实现
13. 跨域 -- iframe
14. ssr -- 不会
15. node -- 不会

### 3. 阿里直属外包（电话一面）
- 先夸一下面试官，准时而且高效，问问题也很有调理，人很好。
1. 自我介绍 -- 建议可以准备一下（突出自己的优势和特点）
2. 跨域
3. 浏览器缓存
4. es6里面挑两个特性讲一下（let const、promise）
5. promise.catch之后还可以在.then吗？
6. 数组有哪些方法？数组reduce的方法都有哪些参数？
7. 用自定义hook实现一个定时器
8. 如何实现一个左侧100px，右侧 4 ：1的自适应布局
9. css有哪些隐藏元素的方式

### 4. 阿里直属外包（电话二面）
- 同样是准时高效的面试官。
1. 在项目中进行组件封装除了picker还有什么组件。 --- 答：tab组件
2. 那么能说一下你是如何封装的tab组件吗？
3. 我给这个tab组件加几个功能，点击之后滚动记录当前的位置怎么做？
4. 在哪里记录状态呢 --- 说一下useEffect的依赖项
5. 怎么获取dom --- 如何使用 useRef  forwardRef
6. 在哪里进行改变dom呢---说useLayoutEffect 和 useEffect的区别
7. flex布局
8. 期望薪资

### 5. 2021年9月13日
1. css定位的几种方式
2. css居中的方式
3. css盒模型
4. 什么是BFC
5. js类型
6. js类型判断
7. 原型链
8. 用户输入url到页面渲染都发生了什么
9. 浏览器缓存

### 6. 2021年9月14日
1. this.setState后都发生了什么
2. react事件机制和原生事件机制有何不同，react团队对事件做了哪些处理
3. react的key做了什么，如果用数组的index做key会造成什么问题？
4. react高阶组件的使用？属性继承和更改，反向继承
5. 如何分辨react中类组件和函数组件？
6. 父组件如何使用子组件的方法？-ref
7. react的性能优化
8. usememo和usecallback的区别？看过源码吗？
9. 说一下闭包和柯里化？
10. 数据传输中为什么在didmount中，而不再willmount中？
11. 讲一下`prototype` 和 `__proto__`
12. 设计模式：了解过那些设计模式
13. 发布订阅讲一下，发布订阅数组删除的问题。
14. 安全问题：XSS攻击

### 7. 2021年9月15日
1. flex布局都有哪些api
2. css清除浮动
3. 移动端遇到的兼容问题都有哪些
4. react生命周期
5. webpack有哪些常用模块
6. loader 和 plugin 的区别
7. webpack有哪些做项目优化的方案
8. 浏览器缓存
9. 浏览器资源下载

### 8. 2021年9月19日
1. react hook中链表是怎么使用的？
2. 链表一般会用在什么情况下，它和数组的插入复杂度都是多少？为什么？
3. react fiber是如何工作的？
4. 类组件和函数组件有什么不同？
5. useEffect 和 useLayoutEffect有何不同？
6. 词法环境了解吗？
7. 函数声明为什么会有提升？
8. 虚拟dom怎么理解？
9. diff算法都做了什么？
10. 你觉得你哪里适合做前端呢？
11. 你在前端领域有没有特别深的了解过什么？
12. 微前端是如何做隔离的？
13. 前端的鉴权是如何进行的？cookie  setion token
14. web安全要如何避免？
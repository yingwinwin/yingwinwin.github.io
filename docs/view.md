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

## 2021年4月28日面试复盘
- 阿里外包，菜鸟（电话一面）

1. vdom是什么？解决了什么问题？
2. 浏览器缓存？协商缓存？
3. react hook钩子 useMemo useCallback 划重点：前端性能优化（可以展开说其他用性能优化处理的函数和钩子）
4. 跨域 jsonP cors 代理跨域 nginx
5. hoc的使用场景：属性代理和反向继承

- 总结：需要背诵专业名词，单词。
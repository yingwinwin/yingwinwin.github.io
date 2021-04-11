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
- ajax(手写)
- fetch(同源，.then取值的问题)
- websocket(应用场景和常用api)

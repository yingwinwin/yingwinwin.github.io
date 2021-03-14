---
id: promise
title: Promise
---

- https://promisesaplus.com/ Promises/A+规范

- **Promise 是一个类**

1. promise 有三个状态： 成功 resolve，失败 reject，等待 pending
2. 用户自己可以决定成功和失败的原因。
3. promise 默认执行器时立即执行
4. promise 的实例都拥有一个 then 方法，一个参数是成功的回调，一个参数是失败的回调
5. 如果执行函数时发生了异常也会执行失败逻辑
6. 如果 promise 一旦成功就不能失败了，反过来也是一样，也就是只有 pending 状态的时候，才可以改变状态

```js
// promise 的特点以及概念
// https://promisesaplus.com/  Promises/A+规范

// promise es6已经实现。ie不支持，需要polyfill

/* 
    promise的产生--->解决异步问题
    1. 多个异步请求并发（希望同步最终的结果） Promise.all
    2. 链式异步请求的问题，上一个人的输出是下一个人的输入，Promise链式调用
    3. 缺陷：还是基于回调
*/

// 实现一个简单的promise
/* 定义三种promise的状态 */
let RESOLVE = "RESOLVE";
let REJECT = "REJECT";
let PENDING = "PENDING";

class Promise {
  /* 接收一个执行器 */
  constructor(executor) {
    this.status = PENDING; // 默认状态为pending
    this.value = undefined; // 成功的信息
    this.reason = undefined; // 失败的信息
    this.onFulfilledCallback = []; // 成功回调的储存器
    this.onRejectedCallback = []; // 失败回调的储存器
    let resolve = (value) => {
      // 成功调用的方法
      if (this.status === PENDING) {
        // 如果是pending状态才需要改变状态
        this.status = RESOLVE;
        this.value = value;
        this.onFulfilledCallback.forEach((fn) => fn()); // 当调用成功resolve方法的时候，依次执行函数
      }
    };

    let reject = (reason) => {
      // 失败调用的方法
      if (this.status === PENDING) {
        this.status = REJECT;
        this.reason = reason;
        this.onRejectedCallback.forEach((fn) => fn()); // 当调用reject方法的时候，依次执行函数
      }
    };
    /* 这里用来捕获error错误 */
    try {
      executor(resolve, reject); // 会立即执行
    } catch (e) {
      reject(e);
    }
  }
  /* 每一个promise必须有一个then方法 */
  then(onFulfilled, onRejected) {
    /* 如果状态为成功，那就调用你成功的方法，传入成功的信息 */
    if (this.status === RESOLVE) {
      onFulfilled(this.value);
    }
    /* 如果状态为失败，就调用失败的方法，传入错误信息 */
    if (this.status === REJECT) {
      onRejected(this.reason);
    }
    /*  如果调用then的时候，status的状态是Pending状态说明，是异步调用，
        需要把调用的成功回调和失败回调存入队列中，当调用resolve的时候，再执行（发布订阅解决异步问题）
     */
    if (this.status === PENDING) {
      this.onFulfilledCallback.push(() => {
        // TODO:
        onFulfilled(this.value); // 切片，把函数切开，可以添加新的逻辑进去
      });
      this.onRejectedCallback.push(() => {
        // TODO:
        onRejected(this.reason);
      });
    }
  }
}
// 使用
let promise = new Promise((res, rej) => {
  //   throw new Error("报错");
  //   res("成功")
  setTimeout(() => {
    rej("失败");
  }, 2000);
});
promise.then(
  (data) => {
    console.log(data); // 成功
  },
  (err) => {
    console.log(err); // 失败
  }
);
```

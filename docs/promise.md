---
id: promise
title: Promise
---

## 1. 介绍
- https://promisesaplus.com/ Promises/A+规范

- **Promise 是一个类**

1. promise 有三个状态： 成功 resolve，失败 reject，等待 pending
2. 用户自己可以决定成功和失败的原因。
3. promise 默认执行器时立即执行
4. promise 的实例都拥有一个 then 方法，一个参数是成功的回调，一个参数是失败的回调
5. 如果执行函数时发生了异常也会执行失败逻辑
6. 如果 promise 一旦成功就不能失败了，反过来也是一样，也就是只有 pending 状态的时候，才可以改变状态

## 2. 简版promise
- 实现了基本的状态改变
- 实现了异步操作(用发布订阅模式 --- 解决同步并发问题)
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

## 3. 符合A+规范
- 链式调用
- 穿透调用
- 递归返回promise调用
- 已通过测试
```js
/**
 * @description 核心逻辑，用于处理返回值是promise还是一个普通值
 * @param {*} promise2 返回的promise
 * @param {*} x then的返回值
 * @param {*} resolve 新的promise的resolve函数
 * @param {*} reject 新的promise的reject函数
 * @returns undefined
 */
function resolvePromise(promise2, x, resolve, reject) {
  console.log(promise2, x, resolve, reject);
  // 如果 x 是当前的promise2，就直接抛出类型错误
  if (x === promise2) {
    // 直接抛出错误
    return reject(new TypeError("类型错误"));
  };
  // 如果是别人的promise可能成功后还会失败，为了确保状态只改变一次，所以要加一个锁，只能执行一次
  let called = false;
  // 如果是类promise，那么就执行返回结果
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    try {
      let then = x.then; // 只取一次then
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            // 递归，来处理如果promise里面又返回一个promise的情况
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        ); // 执行
      } else {
        // 可能是{ this: {}}
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    // 如果返回值是普通值，直接返回x就可以
    resolve(x);
  }
}

// promise
let PENDING = "PENDING";
let FULFILLED = "FULFILLED";
let REJECTED = "REJECTED";
class Promise {
  constructor(executor) {
    this.state = PENDING;
    this.result = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = (result) => {
      // 这里要用箭头函数，不然this，就不是当前的类了，会报错说拿不到state
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.result = result;
        this.onFulfilledCallbacks.forEach((fn) => fn());
      }
    };

    let reject = (reason) => {
      // 只有pending状态才可以转成其他状态
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    /* 处理穿透逻辑 */
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v;
    onRejected = typeof onRejected === 'function' ? onRejected : e=>{throw e};
    /* 
        链式调用：调用.then之后返回一个新的promise
        1. then里面是一个成功普通值，会直接返回为下一个promise的then的成功结果
        2. 如果当前then失败，那么会走下一次的then的失败
        3. 不管当前then是成功还是失败，只要返回的是普通值，都会走下一个
    */
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          // 为了拿到promise2，用setTimeout异步获取promise2
          try {
            let x = onFulfilled(this.result); // 处理普通值。返回之后。走下一个then的成功
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            // 如果异常就抛出
            reject(e);
          }
        }, 0);
      }

      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }

      if (this.state === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.result);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }
}

Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    })
    return dfd;
}

module.exports = Promise;
```

## 4. 其他方法

### 4.1 延迟对象
- 自己实现的promise支持，浏览器提供的promise并不支持
```js
Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    })
    return dfd;
}
```

```js
const fs = require('fs');
const Promise = require('./1.js');

// 利用延迟对象读取文件
function readFile(filePath, encoding) {
    let dfd = Promise.deferred();
    fs.readFile(filePath, encoding, (err, data) => {
        if(err) return dfd.reject(err);
        dfd.resolve(data);
    })
    return dfd.promise
}

readFile('a.txt', 'utf8').then(data => {
    console.log(data);
})
```

### 4.2 resolve
- 静态方法
```js
static resolve (data) {
  return new Promise((resolve) => {
    resolve(data)
  })
}
```

### 4.3 reject
```js
static reject (err) {
  return new Promise((resolve, reject) => {
    return reject(err);
  })
}
```

### 4.3 all
- 记录下标
```js
 static all (promises) {
    return new Promise((resolve, reject) => {
      let result = [];
      let time = 0;
      const processSucess = (index, data) => {
        result[index] = data; // 放到对应的下标中
        if(++time === result.length) {  // 当循环的次数和结果的数组长度一致就抛出结果
          resolve(result);
        }
      }
      /* 对数组进行循环 */
      for(let i = 0 ; i < promises.length; i++) {
        let p = promises[i];
        /* 判断是否是promise，如果是就取promise的结果 */
        if( p.then && typeof p.then === 'function') {
          p.then(data => {
            processSucess(i, data);
          }, reject)
        } else {
          // 如果不是直接抛出结果
          processSucess(i, p);
        }
      }
    })
  }
```
### 4.4 race
- 竞态
```js
static race (promises) {
  return new Promise((resolve, reject) => {
    for(let i = 0; i < promises.length; i++) {
      let p = promises[i];
      if( p && typeof p.then === 'function') {
        p.then(resolve, reject)  // 有一个成功就成功，状态成功就不会再改变了
      } else {
        resolve(p);
      }
    }
  })
}
```

- race应用--超时
```js
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功')
    }, 3000);
})
function wrap(p1) {
    let abort;
    let p = new Promise((resolve, reject) => {
        abort = reject
    })
    let p2 = Promise.race([p, p1]);
    p2.abort = abort;
    return p2;
}

let p2 = wrap(p1);

p2.then(data => {
    console.log(data);
}, (err) => {
    console.log(err);
})

setTimeout(() => {
    p2.abort('超过2秒')
}, 2000);
```
### 4.5 finally
```js


```
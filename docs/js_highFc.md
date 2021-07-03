---
id: highFc
title: 高阶函数
---

```js
// 高阶函数
/* 
    1.一个函数的参数是一个函数
    2.一个函数的返回值也是一个函数
*/

/* 给业务代码扩展新功能 */
  function core(...args) {
    console.log("core", ...args);
  }

  Function.prototype.before = function (cb) {
    return (...args) => {
      cb();
      this(...args);
    };
  };

  let newCore = core.before(() => {
    console.log("before");
  });
  newCore(1, 2);
```

```js
// 多个异步请求，同时获取最终结果
let fs = require("fs");
let obj = {};

const after = (times, callback) => {
  return function () {
    if (--times == 0) {
      callback(); // 当调用的次数到0的时候，就输出传入的callback，解决异步输出问题
    }
  };
};
let cb = after(2, () => {
  console.log(obj);
});
fs.readFile("./1.txt", "utf8", (err, data) => {
  obj.a = data;
  cb();
});
fs.readFile("./2.txt", "utf8", (err, data) => {
  obj.b = data;
  cb();
});
```


```js
// 函数柯里化：让函数变得更具体些，如果两个请求，都回来之后才进行渲染。可以使用柯里化，等待两个请求回来在进行渲染
// 反柯里化：让函数变得范围更大一些
// 传入一个函数，返回一个函数，函数参数固定
// 如果函数没有到当前函数的参数个数，就返回一个新的函数，否则就直接返回结果
  function curring(fn) {
    const inner = (args = []) => { // 用args来储存每一次的结果
      return args.length >= fn.length
        ? fn(...args)  // 如果 >=length了，就直接返回原函数把参数传过去
        : (...userArgs) => inner([...args, ...userArgs]);  // 如果没有就把两次的参数存起来，然后返回一个新函数
    };
    return inner();
  }

  function sum(a, b, c, d) {
    return a + b + c + d;
  }

  let sum1 = curring(sum);
  let sum2 = sum1(1, 2);
  let sum3 = sum2(3);
  console.log(sum3(4)); // 10

  /* 用currying函数包装类型判断的方法 */
  function isType(typing, val) {
    return Object.prototype.toString.call(val) === `[object ${typing}]`;
  }
  let util = {};
  ["String", "Number", "Null", "Undefined", "Array", "Object"].forEach(
    (type) => {
      util[`is${type}`] = curring(isType)(type);
    }
  );
  console.log(util.isArray([])); // true
```

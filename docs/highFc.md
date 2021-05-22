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
// 函数柯里化：让函数变得更具体些
// 反柯里化：让函数变得范围更大一些

```

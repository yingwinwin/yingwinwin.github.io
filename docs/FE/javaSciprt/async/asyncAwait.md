---
id: asyncAwait
title: async await
slug: /FE/javaSciprt/asyncAwait
---

## 使用
把`co`的调用修改为`async await`的调用模式
```diff
const fs = require('fs').promises;
const path = require('path');
- const co = require('co')  // 调用第三方库


- function* read() { 
+ async function read() {
+   const fileName = await fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8')
-   const fileName = yield fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8')
+   const fileName = await fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8')
-   const content = yield fs.readFile(path.resolve(__dirname, fileName), 'utf-8')
    return content;
}

- co(read()).then(res => {
+ read().then(res => {
    console.log(res)
}).catch(err => console.log(err))
```
减少了`co`库的调用，可以直接使用原生的`async await`关键字来实现同样的效果。所以`async await`就是`generator+co`的语法糖。

## 原理
将上面的代码通过`https://babeljs.io/`进行编译。

```js
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);  // it.next(value);
    var value = info.value;  // 获取 value
  } catch (error) {
    reject(error);  // 错误就抛出错误
    return;
  }
  if (info.done) {  // 如果done 是 true 结束递归
    resolve(value);  // 返回成功后的值
  } else {
    Promise.resolve(value).then(_next, _throw);  // 不管用户传入的是不是promise，都把它变成promise，然后进行下一次递归，错误就抛出错误
  }
}

function _asyncToGenerator(fn) {  // co
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {  // co会返回一个promise
      var gen = fn.apply(self, args);  // it函数
      function _next(value) {
                        // it  resoleve, reject, 递归函数本身 处理错误 next value就是外面传到next的value
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined); // 初始化递归调用
    });
  };
}

function read() {
  return _read.apply(this, arguments);
}
// 这段代码和generator的代码逻辑类似，同样是通过游标进行迭代。
function _read() {
  _read = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
      var fileName, content;
      // 熟悉的wrap函数   
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return fs.readFile(path.resolve(__dirname, "1.txt"), "utf-8");

            case 2:
              fileName = _context.sent;
              _context.next = 5;
              return fs.readFile(path.resolve(__dirname, fileName), "utf-8");

            case 5:
              content = _context.sent;
              return _context.abrupt("return", content);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _read.apply(this, arguments);
}

read()
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    return console.log(err);
  });
```
从上面的代码更加可以证实`async await`就是`generator+co`的语法糖。目前异步语法发展就到此为止了。下面要说一下，浏览器到底是为何要使用异步的方式，又是通过什么来处理异步的呢？[跳转至浏览器事件环](/)
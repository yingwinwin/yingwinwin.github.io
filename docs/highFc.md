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
function say(a, b) {
  console.log("[ say ] >", a, b);
}

Function.prototype.before = function beforeSay(cb) {
  return (...args) => {
    cb(); // console.log('before')
    this(...args);
  };
};
say.before(() => console.log("before"))(1, 2);
```

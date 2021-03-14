---
id: onEmit
title: 发布订阅模式
---

```js
/* 
    1.与观察者模式不同，发布订阅模式发布和订阅之间没有明显的关联
    2.需要有中介者，就是队列数组arr
*/

let fs = require("fs");

let event = {
  arr: [],
  on: function (fn) {
    this.arr.push(fn); // 发布:先把当前想要处理的内容放到队列中
  },
  emit: function () {
    this.arr.forEach((fn) => fn()); // 在订阅的时候执行
  },
};

event.on(() => {
  console.log(obj); // { a: '1', b: '2' }
});

let obj = {};
fs.readFile("./1.txt", "utf8", (err, data) => {
  obj.a = data;
});
fs.readFile("./2.txt", "utf8", (err, data) => {
  obj.b = data;
  event.emit();
});
```

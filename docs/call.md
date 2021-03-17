---
id: call
title: call
---


```js
/* 
    call的特点
    1. 可以改变我们当前函数的this指向，call的第一个参数，后面的参数会当做参数传到函数中
    2. 还会让当前call前面的这个函数执行
*/

function fn1(a, b) {
  console.log(this); // 会执行这里
  return a + b;
}

function fn2() {
  console.log(2); // 这里不会执行
}

Function.prototype.call = function (context) {
  /* 如果当前用户传了上下文参数，就用当前的上下文，但是如果用户传来的不是对象就要给他转成对象，否则就是window */
  context = context ? Object(context) : window;
  context.fn = this; // {}.fn = fn1; 给当前传入的上下文，添加一个fn函数，fn2.fn = fn1
  let args = [];
  /* 从参数开始循环所以是第一项 */
  for (let i = 1; i < arguments.length; i++) {
    /* 把当前类数组的每一项参数取出来放到args这个数组中,以字符串的形式 */
    args.push("arguments[" + i + "]");
  }
  /* 利用数组的toString特性 */
  let r = eval("context.fn(" + args + ")"); // ['arguments[1]', 'arguments[2]'],把参数调用传入fn1中
  delete context.fn; // 因为不能改变对象，所以要再删除掉这个属性
  return r; // 如果函数有返回值，是需要保留的，所以要把当前调用函数传参的返回值也返回出去
};

console.log(fn1.call(fn2, 1, 2)); // 打印fn1函数，this是fn2  3
```
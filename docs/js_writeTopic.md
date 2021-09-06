---
id: js_writeTopic
title: javaScirpt手写题
---

## 对象

### new
1. 获取传入的函数
2. 创建一个实例，实例原型指向，传入函数的原型对象，这样就拿到了this 和 prototype上面的属性方法
3. 调用当前函数获取返回值，同时传入参数
4. 如果当前返回值不是对象，返回那个原型链指向函数的对象，否则返回实例
```js
  function isObject(obj) {
    return (
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj !== null
    );
  }
  function Mynew() {
    let fn = [].shift.call(arguments);
    // let instance = new Object();
    // instance.__proto__ = fn.prototype // true
    let instance = Object.create(fn.prototype);  // 这一步相当于上面两步
    let result = fn.call(instance, ...arguments);
    return isObject(result) ? result : instance;  // 返回实例
  }
  function Person(name) {
    this.name = name;
  }
  let myp = Mynew(Person, "myp");
  let p = new Person("p");
  console.log(p.name); // p
  console.log(myp.name); // myp
```
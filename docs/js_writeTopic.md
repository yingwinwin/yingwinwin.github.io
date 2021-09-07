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

### Object.create
- 生成一个新的函数
- 函数的原型对象赋值为传入的原型对象
- 然后返回这个实例函数，这个函数的原型就已经指向了传入的原型上
- 如果传入null，会返回一个纯净的没有原型对象的对象
```js
function myCreate(proto) {
  function F() {};
  F.prototype = proto;
  return new F();
}

function Person(name) {
  this.name = name
}
let p = new Person;
let a = myCreate(Person.prototype);
let b = Object.create(Person.prototype)
console.log(a);
console.log(b);
```

### Class

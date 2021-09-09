---
id: js_writeTopic
title: javaScirpt手写题
---

## 类型

### 类型判断

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
// MDN上面的polyfill
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

### 继承

## 函数

### call
1. 先看调用的是不是函数，不是函数就直接返回
2. 是否有传入上下文，传入上下文就是当前上下文，不传入就是全局window
3. 建立一个symbol做唯一key的属性，防止覆盖之前对象中的key
4. 然后在当前传入的上下文的symbol属性，帮上当前调用的函数，也就是this
5. 然后通过context调用方法，传入参数。拿到返回值（关键步骤）`就是因为这个才能this指向改变`
6. 最后删除多余简历的fn属性。返回返回值
```js
Function.prototype.myCall = function (context,...arg) {
  if(typeof this !== 'function') return;
  context = context || winodw;
  let fn = Symbol();
  context.fn = this;
  let r = context.fn(...arg);
  delete context.fn;
  return r;
}

let obj = {
  name: 'zy',
  getname: function (a, b) {
    console.log(a, b);
    return this.name;
  }
}

let obj2 = {
  name: 'zy1'
}

console.log(obj.getname.myCall(obj2,1,2));  // zy1 ,1, 2
```
### apply
- 与call在传参上不同，其他功能一致
```diff
-Function.prototype.myCall = function (context,...arg) {
+Function.prototype.myApply = function (context,arg) {
  if(typeof this !== 'function') return;
  context = context || winodw;
  let fn = Symbol();
  context.fn = this;
  let r = context.fn(...arg);
  delete context.fn;
  return r;
}

let obj = {
  name: 'zy',
  getname: function (a, b) {
    console.log(a, b);
    return this.name;
  }
}

let obj2 = {
  name: 'zy1'
}

+ console.log(obj.getname.myApply(obj2, [1, 2]));  // zy1, 1,2
- console.log(obj.getname.myCall(obj2,1,2));  // zy1 1, 2
```

### bind
```js
```

### 柯里化
- a(1)(2)(3)

### compose

## 数组方法

### map
- 传入函数，循环调用传入数组的每一项
- 把返回值push到一个数组中，返回新的数组 
```js
Array.prototype.myMap = function (fn) {
  let mapArr = [];
  for(let i = 0; i < this.length; i ++) {
    mapArr.push(fn(this[i], i, this));
  }
  return mapArr;
}

let arr = [1 ,2 ,3,4].myMap((item) => item * 2)
console.log(arr);  //  [2, 4, 6, 8]
```
### filter

### forEach

### flat

### some

### every

### reduce

## 算法

### 斐波那契数列

### 洗牌算法


## 设计模式

### 单例模式

### 发布订阅模式

### 工厂模式


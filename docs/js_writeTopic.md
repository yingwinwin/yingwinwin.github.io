---
id: js_writeTopic
title: javaScirpt手写题
---

## 类型

### 类型判断
- 核心：把数据转为字符串
```js
let obj = {}
Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();  // object

// 通用函数
  let Type = {};
  let arr = ['Array', 'String', 'Number', 'Object'];
  for (let i = 0;  i < arr.length; i ++) {
    Type[`is${arr[i]}`] = function (params) {
      return Object.prototype.toString.call(params) === `[object ${arr[i]}]`
    }
  }
  console.log(Type.isString(''));  // true
```
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
- 寄生组合式继承，继承属性和原型方法
- [面试官问：JS的继承](https://juejin.cn/post/6844903780035592205)
```js
  function Person(name) {
    this.name = name;
  }

  Person.prototype.getName = function () {
    return this.name;
  }

  function Chilren(age, name) {
    // 继承属性
    Person.call(this, name);
    this.age = age;
  }
  // 继承方法（参考原型链图）
  Chilren.prototype = Object.create(Person.prototype);
  Chilren.prototype.constructor = Chilren;
  Chilren.__proto__ = Person;
  // 需要在继承之后再原型链上赋值
  Chilren.prototype.getAge = function () {
    return this.age;
  }
```

### 浅拷贝
- 对象指向堆中地址，所以有时需要做拷贝操作
```js
let obj = {
  a: '1',
  b: '2'
}
// 1. 这样会改变target对象如果用于拷贝一般用target放入一个{},返回拷贝后的对象
let newObj1 = Object.assign({}, obj)

// 2. {...} 扩展运算符
let newObj2 = {...obj}

// 3. slice
```

### 深拷贝
```js
// 1
  JSON.parse(JSON.stringify(obj))
/* 
  缺点：
  1. undefined 和 Symbol 的数据会被忽略
  2. 不能序列化
  3. 如果对象循环引用会报错
*/


// 2 
  let obj = {
    a: '1',
    b: [
      {a: '2'}
    ],
    c: undefined,
    d: {
      a: 'ddd'
    }
  }
  function deepClone(obj) {
    function isObject(o) {
      // 如果对象是函数或者对象，且不是null的话，返回true
      return (typeof o === 'function' || typeof o === 'object') && o !== null;
    }

    let newObj = Array.isArray(obj) ? [] : {}
    Reflect.ownKeys(obj).forEach(key => {
      newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
    })
    return newObj
  }
  let newobj = deepClone(obj);
  newobj.d.a = 'aaa'
  obj.b[0].a = '0'
  console.log(obj === newobj);
  console.log(obj, newobj);
```

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
```js
function add(...args) {
  let arr = args
  function fn(...newArgs) {
    arr = [...arr, ...newArgs]
    return fn;
  }
  fn.toString = fn.valueOf = function() {
    return arr.reduce((acc, cur) => acc + parseInt(cur))
  }
  return fn
}
```

### compose
```js

```
### 节流
- 举例：机场大巴，第一个人上来之后，开始计时，10分钟开一趟。
```js
  let box = document.getElementById('box');
  window.addEventListener('scroll', throttle(() => {
    console.log(111);  // 每隔一秒输出111
  }, 1000));

  function throttle(fn, time) {
    let last = 0;
    return (...args) => {
      let now = +new Date();
      // 如果当前的时间 - 一开始记录的时间，大于了传入的时间，就进行更新
      if (now - last >= time) {
        last = now;
        fn(...args);
      }
    }
  }
```
### 防抖
- 举例：机场大巴，最后一个人上车了开始计时10分钟，如果中间又来人了就重新计时，直到中间10分钟都没有人来，才开车。
```js
  let box = document.getElementById('box');
  window.addEventListener('scroll', debounce(() => {
    console.log(111);  // 停止滑动后，1秒后输出
  }, 1000));

  function debounce(fn, delay) {
    let timer = null;
    return (...arg) => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn(...arg)
      }, delay)
    }
  }
```
### 图片懒加载
- 核心：计算当前图片是否出现在视口范围内，如果出现了就加载
- [intersectionobserver](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)
```js
  const imgs = document.getElementsByTagName('img');
  // 获取可视区域的高度
  const viewHeight = document.documentElement.clientHeight
  let num = 0
  function lazyload() {
    for(let i = num; i < imgs.length; i ++) {
      let distance = viewHeight - imgs[i].getBoundingClientRect().top;
      console.log(distance);
      if (distance >= 0) {
        imgs[i].src = imgs[i].getAttribute('data-src');
        num = i + 1;
      }
    }
  }
  window.addEventListener('scroll', lazyload);
```
## 数组方法
### map
- 返回新数组
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
- 返回新数组
- 不是true，就跳过，如果是true就把当前结果放到数组中返回
```js
Array.prototype.myFilter =  function (fn) {
  let arr = []
   for(let i = 0; i < this.length; i ++) {
     if(!fn(this[i], i, this)) continue;
     arr.push(this[i])
   }

   return arr;
}
let a = [1,2,3].myFilter(item => item > 1);
console.log(a); // [2,3]
```
### forEach
- 无返回值
- 数组循环
```js
Array.prototype.myForEach =  function (fn) {
  let arr = []
   for(let i = 0; i < this.length; i ++) {
     fn(this[i], i, this)
   }
}

let a = [1,2,3].myForEach((item, i) =>{
  console.log(item, i);
});
```
### flat
- 返回新数组
- 不传参数时，默认“拉平”一层，可以传入一个整数，表示想要“拉平”的层数
- Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组
- 负数不做改变
- 空位会跳过
```js
// 1
[1,2,[3, [4], [5]]].toString().split(',').map(item => parseFloat(item));

// 2
var arr = [1,2,[3, [4], [5]]];
while (arr.some(item => Array.isArray(item))) {
  arr = [].concat(...arr);
}

// 3
Array.prototype.myFlat = function (detph = 1) {
  if(detph === 0) return this;
  return this.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return [...pre, ...cur.myFlat(detph - 1)]
    } else {
      return [...pre, cur];
    }
  }, [])
}

let a = [1,2,[3, [4], [5]]].myFlat(2);
console.log(a);  // [1, 2, 3, 4, 5]
```
### some
- 有一个为真就为真
- 如果传入空数组，就为false
```js
Array.prototype.mySome = function (fn) {
  if (this.length === 0) return false;
  for (let i = 0; i < this.length; i ++) {
    if (fn(this[i], i, this)) {
      return true;
    }
  }
  return false;
}

let a = [1,2,3].mySome(item => !item);
console.log(a); // false
```
### every
- 传入空数组为true
- 全部为true，才是true，有一个false就是假
```js
Array.prototype.myEvery = function (fn) {
  if (this.length === 0) return true;
  for (let i = 0; i < this.length; i ++) {
    if (!fn(this[i], i, this)) {
      return false;
    }
  }
  return true;
}

let a = [1,2,3].myEvery(item => item > 0);
console.log(a); // true
```
### reduce
- 如果没有传入初始值，初始值就是当前的第一项，然后下标+1
- 如果传入了初始值，那么直接返回就可以了
```js
Array.prototype.myReduce = function (fn, pre) {
   for (let i = 0; i < this.length; i ++) {
     if (pre === undefined) {
        // 如果初始值是undefined，那么就让第一项作为pre，第二项是当前值，然后坐标下移  
        pre = fn(this[i], this[i + 1], i, this);
        i++;
     } else {
        pre = fn(pre, this[i], i, this);
     }
   }

   return pre;
}

let a = [1,2,3].myReduce((pre, cur, i, arr) =>{
  return pre + cur
});
console.log(a); // 6
```
## 算法

### 斐波那契数列

### 洗牌算法

### 冒泡排序

### 快排

## 设计模式

### 单例模式

### 发布订阅模式

### 工厂模式


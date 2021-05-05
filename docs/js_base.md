---
id: js_base
title: Js基础
---
### 1. 值类型和引用类型的区别
- 值类型都是存贮在栈中，存的是值，值类型占用的空间较少
    + 值类型是没有函数调用的 undefined.toString()，会直接报错
    + 但是'1'.toString(),这个时候1，已经被强转成了对象类型
    + 0.1 + 0.2 !== 0.3
    + null 的 typeof 判断为object，因为null在js初始的时候是000000，js是以 前三位来判断是否是对象类型，null为全0，当时的性能优化，现在已经改了，但是这个bug就一直留下来了。
- 引用类型是堆存贮的，存的是内存地址，引用类型可能很大
- 值类型：string，number，boolean，symbol，undefined，null
- 引用类型：object（array，function，object）
```js
function test(person) {
  person.age = 26;  // 这是改的内存地址是p1的对象
  person = {  // 但是这里就已经创建了一个新的对象。
    name: "yyy",
    age: 30,
  };
  return person;
}
const p1 = {
  name: "zy",
  age: 25,
};

const p2 = test(p1);
console.log(p1); // {name: "zy", age: 26}
console.log(p2); // {name: "yyy", age: 30}
```

### 2. typeof能判断的类型
- typeof可以判断除了null的值类型
- 所以用instanceof判断是比较好的选择（instanceof内部机制是通过`原型链`来判断的）
- 用instancheof判断原始类型
- Object.prototype.toString.call()
```js
class String1 {
// 用Symbol.hasInstance来自定义当前的instanceof的行为
  static [Symbol.hasInstance](str) {
    return typeof str === 'string';
  }
}

console.log('hello' instanceof String1);
// 输出: true
```

### 3. 类型转换
|        原始值         | 转换目标 |             结果             |
| :-------------------: | :------: | :--------------------------: |
|        number         |  布尔值  |   除了0，-0，NaN，都为true   |
|        string         |  布尔值  |       除了‘’ 都是true        |
|    undefined、null    |  布尔值  |            false             |
|       引用类型        |  布尔值  |             true             |
|        number         |  字符串  |             ‘1’              |
| boolean、函数、Symbol |  字符串  |             true             |
|         数组          |  字符串  |         [1,2] => 1,2         |
|         对象          |  字符串  |      "[object Object]"       |
|        string         |   数字   |     ‘1’ => 1  'a' => NaN     |
|         数组          |   数字   | [] => 0, [1] => 1, 其他：NaN |
|         null          |   数字   |              0               |
|  除了数组的引用类型   |   数字   |             NaN              |
|        Symbol         |   数字   |             抛错             |

- 对象在转换的时候调用内部的[[ToPrimitive]]函数
1. 如果是原始类型不需要转换
2. 调用valueOf()，对象类型
3. 调用toString()，字符串类型
4. 都没有返回报错

### 4. 四则运算符
- `+` 如果接字符串会对字符串进行拼接
- 如果是数字会直接进行相加`'a' + + 'b'` 结果是`aNaN` 第二个b会被转为数字格式
- 除了`+`的其他运算符，其他类型都会被转为数字

### 5. 比较运算符
- 字符串通过unicode比较
- 对象通过toPrimitive转换后比较

### 6. 构造函数
1. 用new关键字调用的函数会创建一个新对象
2. 空对象被设置为函数的上下文**this**
3. 可以在对象通过**this**添加属性和方法
4. 不用写return，新构造的对象就是函数的返回值
   + 如果写了return，且返回值是一个对象类型的话，函数会丢弃上下文**this**的属性和方法，直接返回return的那个对象
   + 如果写了return，返回值非对象类型，构造函数会忽略该返回值，构造新的对象出来。

### 7. this
- 函数的调用方式有四种(对应四种this的取值)
1. 直接调用foo() —> window
2. 当做对象的方法调用obj.foo() -> 指向对象
3. 构造函数调用new foo()  ->  指向当前实例，就不会在改变了bind无效
4. call apply方法调用 -> this指向 call 和 apply 的第一个参数，连续调用只认第一个

### 8. 拷贝
- 浅拷贝
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
- 深拷贝
```js
JSON.parse(JSON.stringify(obj))
/* 
  缺点：
  1. undefined 和 Symbol 的数据会被忽略
  2. 不能序列化
  3. 如果对象循环引用会报错
*/
```
- [MessageChannel](https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel/MessageChannel)
```js
/* 
  优点：1. 不会忽略undefined 和 Symbol
       2. 序列化克隆的值
  缺点： 不能用户函数克隆会报错
*/
let obj = {
  a: '1',
  b: [
    {a: '2'}
  ],
  c: undefined
}
function deepClone(obj) {
  return new Promise((resolve) => {
    // js中的管道，从port1放入的值，可以从port2拿到，且是深拷贝过的
    port2.onmessage = e => resolve(e.data);  // onmessage是一个事件，等于一个函数
    port1.postMessage(obj)
  })
}
// 要注意这里是异步的
deepClone(obj).then((res) => {
  let clone = res;
  console.log(clone === obj);  // false
})
```
- 简易版深拷贝
```js
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
let deepClone = (obj) => {
  function isObject(o) {
    // 如果对象是函数或者对象，且不是null的话，返回true
    return (typeof o === 'function' || typeof o === 'object') && o !== null;
  }

  if(!isObject(obj)) {
    throw new Error('不是对象')
  }

  let isArray = Array.isArray(obj);  // 判断是否是数组
  let newObj = isArray ? [...obj] : {...obj};  // 如果是数组就先浅克隆一下数组，否则就浅克隆一下对象
  Reflect.ownKeys(newObj).forEach(key => {  // ownKeys 只会循环当前对象上面的属性，原型链上的不会管
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key] // 递归赋值给新对象
  })
  return newObj;
}

let newObj = deepClone(obj);
newObj.b[0].a = 'c';
console.log(newObj, obj);
```

### 9. 原型 和 继承
- 每一个对象身上都一个原型，原型上的`constructor`属性指向，当前的对象。
- 该原型对象创建出来的，实例对象的`constructor`属性同样指向该原型对象
- 一般不会改变`constructor`属性。instanceof 是通过原型链来判断是否是当前的引用。
```js
function Person() {
  this.name = 'zy'
}

let p = new Person();  // 实例对象
// Person.prototype.constructor 原型对象
console.log(Person.prototype.constructor === p.constructor);  // true
```
- 继承 ES5 （寄生组合继承）
```js
  function Person(name) {
    this.name = name;
  };
  Person.prototype.dance = function () {
    return this.name + '会跳舞'
  }
  function Chilren(name) {
    Person.call(this, name)  // 获得属性
  };

  // 孩子的原型指向父亲的实例，这个时候孩子的costructor会失去，通过原型链查找会找到父亲的
  Chilren.prototype = new Person();
  // 所以需要在这里通过defineProperty手动把孩子的原型链指向自己的原型对象。
  Object.defineProperty(Chilren.prototype, "constructor", {
    enumerable: false,  // 不可枚举
    value: Chilren,  // 设置值为chilren对象
    writable: true  // 可读
  })

  let child = new Chilren();
  child.name = 'zzz';
  console.log(child.dance());
  console.log(Chilren.prototype.constructor);  // 孩子的函数
  console.log(Person.prototype.constructor);  // 父亲的函数
  console.log(child.__proto__.constructor === child.constructor);  // true
```
- 继承ES6，class是语法糖，本质就是函数
```js
class Person{
    constructor(name) {
      this.name = name;
    }

    dance() {
      return this.name  + '会跳舞'
    }
  }

  class Chilren extends Person {
    constructor(age) {
      super();
      this.age = age
    }
  }

  let p = new Person('ZY');
  let c = new Chilren(20);
  console.log(c.__proto__.constructor === c.constructor);  // true
```

### 10. 闭包
- 当作用域消失之后，依旧可以使用变量，闭包使函数更高效，但是会消耗一定的内存成本
- 私有变量
```js
function Add() {
  let count = 0;
  // 函数在创建的时候，有一个作用域，可以获取当前作用域里面的变量
  // 在执行的时候使用
  this.getCount = function () {
    return count;
  }

  this.count = function () {
    return count ++;  // 可以是其他业务代码，更复杂的逻辑
  }
}
let add = new Add()
console.log(add.getCount());  // 0
console.log(add.count());  // 0
console.log(add.count()); // 1
```
- 回调函数
```js
function animateIt(elementId) {
  // elem tick timer都是内部变量
  // 定时器的回调函数中，每一次调用都可以拿到当前闭包中的内部变量
  // 当再次复用这个逻辑的时候，这三个变量就是另一个空间的了，达到了一个逻辑复用
  // 每一个函数和变量都是独立的
  let elem = document.getElementById(elementId);
  let tick = 0;
  let timer = setInterval(function () {
    if(tick < 100) {
      elem.style.left = elem.style.top = tick + 'px';
      tick ++;
    } else {
      clearInterval(timer);
    }
  }, 10)
}
animateIt('box')
```

### 11. 变量 和 变量提升
- 函数声明提升，箭头函数和变量命名的函数都不会有声明提升
- var变量存在变量提升，let 和 const没有，所以会出现暂时性死区
- const不能声明的变量不可以重新复制 let可以

### 12. 模块化
- IIFE
  1. 用闭包环境创建私有变量
  2. 如果包扩展了之后，导致几个闭包环境的，私有变量不能共享，就会有引入先后的问题
- AMD
  1. 主要提供给浏览器端使用，解决包模块的顺序调用
  2. 异步加载模块，避免阻塞
  3. 在同一个文件中可以定义多个模块
- UMD (可以同时支持AMD 和 commonJs)
- CommonJS
  1. 主要提供给Js宿主环境，node
  2. 直接引入文件，不用做异步处理，比较受服务端node的环境
  3. 语法module.exports 导出 require 导入，使用较为简单
- ES Module
1. CommonJS支持动态导入；ES Module不支持
2. CommonJS是同步导入，用于服务端；ES Module异步导入，用于浏览器，不会阻碍进程
3. CommonJS是值拷贝，要更新要重新导入；ES Module引用拷贝，同步更新值

### 13. getter setter Proxy
- 创建getter setter的方式 字面量，class，defineProperty
- 用处: 处理记录日志，数据验证，属性值变化检测
```js
// 通过字面量创建 getter  setter
let obj = {
  name: ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'],
  set fitstName(value) {
    this.name[0] = value;
  },
  get fitstName() {
    return this.name[0]
  }
}
obj.fitstName = 'yingwinwin' 
console.log(obj.name);  // ["yingwinwin", "Bob", "Tiff", "Bruce", "Alice"]


// 通过class类来创建 getter  setter
class Name {
  constructor(){
    this.name = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
  }

  get fitstName() {
    return this.name[0]
  }

  set fitstName(value) {
    this.name[0] = value;
  }
}

let names = new Name();
names.fitstName = 'yingwinwin'
console.log(names.name); // ["yingwinwin", "Bob", "Tiff", "Bruce", "Alice"]

// 使用Object.defineProperty()
function Add() {
  let _count = 0;  // 内部变量,外面只能获取count
  Object.defineProperty(this, 'count', {
    get: () => {
      return _count ++
    },
    set: (value) => {
      _count = value
    }
  })
}
let add = new Add()
console.log(add._count);  // undefined
console.log(add.count);  // 1
console.log(add.count);  // 2
console.log(add.count = 2);  // 2
```

- Proxy
```js
// 基本使用
const emperor = {name: 'yingwinwin'};
let proxy = new Proxy(emperor, {
  // 参数1是当前传入的对象，参数2是当前获取的key
  get: (target, key) => {
    return key in target ? target[key] : '不存在该属性';
  },
  // 参数1是当前传入的对象，参数2是当前获取的key，参数3是当前设置的值
  set: (target, key, value) => {
    target[key] = value
  }
});
emperor.name = 'zy'
console.log(proxy.name);  // zy
```
- 记录代理日志
```js
function makeLoggable(target) {
  return new Proxy(target, {
    get: (target, property) => {
      console.log('记录得到数值的日志');
      return target[property]
    },
    set: (target, property, value) => {
      console.log('记录设置数值的日志');
      target[property] = value;
    }
  })
}

let names = {name: 'yinwinwin'};
names = makeLoggable(names);
names.name  // 走get方法，输出：记录得到数值的日志
```
- 用Proxy包裹进行函数性能测试
```js
isPrime = new Proxy (isPrime, {
  // 当前传入的函数，this，和参数
  apply: (target, thisArg, args) => {
    console.time('isPrime');
    const result = target.apply(thisArg, args);
    console.timeEnd('isPrime');

    return result;
  }
})

console.log(isPrime(1299827));  // true isPrime: 5.341064453125 ms
```

- 使用代理属性自动填充
```js
function Folder() {
  return new Proxy({}, {
    get: (target, property) => {
      if(!(property in target)) {
        target[property] = new Folder();
      }

      return target[property]
    }
  })
}

const rootFolder = new Folder()

rootFolder.a.b.c = '123'

console.log(rootFolder.a.b.c);  //123
```

- 给数组添加负数取值
```js
function creatNegativeArrayProxy(array) {
  if(!Array.isArray(array)) {
    throw new TypeError('类型错误，非array')
  }

  return new Proxy(array, {
    get: (target, index) => {
      index = +index;
      return target[index < 0 ? target.length + index : index];
    },
    set: (target, index, val) => {
      index = +index;
      return target[index < 0 ? target.length + index : index] = val;
    }
  })
}
let arr = creatNegativeArrayProxy([1,2,3,4]);
console.log(arr[-1]);  // 4
```

### 14. filter, map, reduce
- filter
```js
Array.prototype.myFilter = function (fn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if(fn(this[i], i, this)) {
      arr.push(this[i]);
    }     
  }
  return arr;
}
let arr = [0, 1, 2, 3, undefined, null, false, ''].myFilter(item => item)  // [1,2,3] 过滤假值
```
- map
```js
Array.prototype.myMap = function (fn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i, this))
  }
  return arr;
}
let arr = [0, 1, 2, 3].myMap(item => item * 2)  // [0, 2, 4, 6]
```
- reduce
```js
Array.prototype.myRudece = function (fn, prev) {
  for (let i = 0; i < this.length; i++) {
    // 如果没有传入初始值的话，返回值就是数组的第一项
    if(prev === undefined) {
      prev = fn(this[i], this[i + 1], i + 1, this);
      ++i; // 让下标移动一项
    } else {
      // 第二次就有返回值了，正常返回
      prev = fn(prev, this[i], i, this);
    }
  }

  return prev;
}
let result = [1, 2, 3].myRudece((prev, next, index, ary) => {
  return prev + next;
},0)

console.log(result)
```

- 根据数组对象中某个key的分类 
```js
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce((prev, cur, index, ary) => {
    // 如果返回值里面没有当前的key，就创建数组，有就push
    if(!prev[cur[property]]) {
      prev[cur[property]] = [];
    }
    prev[cur[property]].push(cur)
    return prev
  }, {})
}groupBy(people, 'age')
/* 
{
  "20": [
    {
      "name": "Max",
      "age": 20
    },
    {
      "name": "Jane",
      "age": 20
    }
  ],
  "21": [
    {
      "name": "Alice",
      "age": 21
    }
  ]
} */
```

- 二维数组变成一维数组
```js
let arr = [[0, 1], [2, 3], [4, 5]]
let rusult = arr.reduce((prev, cur, index, ary) => {
  return [...prev, ...cur]
}, [])
console.log(rusult);  // [0, 1, 2, 3, 4, 5]
```

- 计算数组里面的每一项有多少个
```js
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let name = names.reduce((prev, cur) => {
  if(prev[cur]) {
    prev[cur] ++;
  } else {
    prev[cur] = 1;
  }
  return prev
}, {})

console.log(name);  // {Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
```

### 15. Event Loop
**事件循环的两个基本原则**
- 一次处理一个任务
- 一个任务开始后直到运行完成，不会被其他任务中断

**微任务和宏任务**
- 单次循环迭代中，最多处理一个宏任务（其余的在队列中等待）
- 微任务在一次循环内都会被处理掉
- 单次循环的微任务处理完成之后，会检查是否需要更新UI渲染。如果需要就更新。
- 此时第一次循环结束，开启第二次循环。

**注意**
- 两个任务队列是独立于事件循环的，事件的监听和添加任务是独立于事件循环的，保证了在循环过程中是可以添加时间到循环中的，不然在循环的时候用户如果触发了动作，就会被忽略，从而加不到队列当中。
- 在执行任务的时候，就不可能中断了
- 微任务在渲染前完成
- 浏览器每秒尝试渲染60次，所以一帧大概是16ms，如果是几百ms都是察觉不到的，但是如果任务的执行时间过长，浏览器可能会终止任务。

```js
// 使用宏任务来分割一个过于庞大的UI渲染
```

### 16. 事件委托
**事件冒泡**
- 点击的元素会从小到大，依次触发

**事件捕获**
- 点击的元素会从大到小，依次触发

**事件执行的过程**
- 如果设置了捕获会先捕获 -> 到达冒泡元素 -> 开始向上进行冒泡
- 浏览器的默认执行冒泡的
- 如果给body身上绑定了两个时间，同时冒泡和捕获，会按照注册顺序执行，而不是先捕获在冒泡
```html
<body>
  <div id="outer">
    <div id="inner"></div>
  </div>
</body>
<!-- 点击inner -->
<script>
  const innerElement = document.querySelector("#inner")
  const outerElement = document.querySelector("#outer")
  const bodyElement = document.querySelector("body")

  innerElement.addEventListener('click', function () {
    console.log('inner');
  })
  outerElement.addEventListener('click', function () {
    console.log('outer');
  }, true)  // 捕获
  innerElement.addEventListener('click', function () {
    console.log('body');
  })
  // outer inner  body
</script>
```
**事件委托**
- 点击子元素，冒泡到父元素。通过拿到子元素的事件对象，触发动作
- 当父元素作为事件处理器的注册元素的时候，这个时候this指向的是父元素。点击父亲中的一个子元素，这个时候父亲事件对象event.target，不是指向父元素的，也就是说和this并不是同一个对象，而是指向当前点击的子元素。就是这样完成了事件代理。
- 优点：节省内存


### 17. call,apply,bind
**call**
```js
/* 
    call的特点
    1. 可以改变我们当前函数的this指向，call的第一个参数，后面的参数会当做参数传到函数中
    2. 还会让当前call前面的这个函数执行
*/

// this 是fn2,执行还是fn1
function fn1(a, b) {
  console.log(this); // 会执行这里
  return a + b;
}

function fn2() {
  console.log(2); // 这里不会执行
}

Function.prototype.myCall = function (context) {
  if(typeof this !== 'function') {
    throw new Error('is not funciton');
  }
  context = context || window;
  context.fn = this;  // 考虑到对象的指向问题，所以要复制到一个空属性上一份
  let args = [...arguments].slice(1);  // 拿第一项的后面参数
  let result = context.fn(...args);  // 调用取返回值
  delete context.fn;  // 删掉无用的属性
  return result; // 返回返回值
};

console.log(fn1.myCall(fn2, 1, 2)); // 打印fn1函数，this是fn2  3
```

**apply**
```js
  // this 是fn2,执行还是fn1
function fn1(a, b) {
  console.log(this); // 会执行这里
  return a + b;
}

function fn2() {
  console.log(2); // 这里不会执行
}

Function.prototype.myApply = function (context) {
  if(typeof this !== 'function') {
    throw new Error('is not funciton');
  }
  context = context ||window;
  context.fn = this;  // 考虑到对象的指向问题，所以要复制到一个空属性上一份
  let result;
  if (arguments[1].length) {
    result = context.fn(...arguments[1]);  // 调用取返回值
  } else {
    result = context.fn();
  }
  delete context.fn;  // 删掉无用的属性
  return result; // 返回返回值
};

console.log(fn1.myApply(fn2, [1, 2])); // 打印fn1函数，this是fn2  3
```
**bind**
```js
Function.prototype.MyBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('is not a function');
  }
  let _this = this;
  let args = [...arguments].slice(1);
  return function fn() {
    // 如果是new的
    if(this instanceof fn) {  // 如果是 new 忽略传入的this
      return new _this(...args, ...arguments);
    }
    // 直接用apply，绑定，然后返回一个新的函数。
    return _this.apply(context, args.concat(...arguments))
  }
}
let moudle = {
  x: 1,
  getx: function () {
    return this.x
  }
}

let fn1 = moudle.getx;
console.log(fn1());  // undefined
let fn2 = fn1.MyBind(moudle);
console.log(fn2());  // 1
```

### 18. 跨域
> 浏览器协议、域名、端口有一个不同就是跨域，Ajax请求会失败，为了安全考虑
> CSRF攻击：利用用户的登录状态发起恶意请求

- JSONP
1. 利用`<script>`标签没有跨域限制的漏洞
2. 简单，兼容性好，但是只能用于get请求

- CORS
1. 需要浏览器和后端同时支持
2. 需要服务端设置请求头：Access-Control-Allow-Origin

- document.domain
1. 只能用于二级域名相同的情况下，比如a.test.com, b.test.com
2. 只需要给页面添加document.domain = test.com 表示二级域名都相同可以实现跨域。

- postMessage(待补充)
1. 用于获取嵌入页面的第三方页面数据

### 19. 储存
| 特性 | cookie | localStorage | sessionStorage | indexDB |
| :-: | - | - | - | - |
| 数据生命周期 | 一般由服务器生成，可以设置过期时间 | 除非被清理，否则一直存在 | 页面关闭就清理 | 除非被清理，否则一直存在 |
| 数据储存大小 | 4k | 5M | 5M | 无限 |
| 与服务端通信 | 每次都会携带在header中，对于请求性能有影响 | 不参与 | 不参与 | 不参与 |

- service Worker
1. 用来实现缓存功能
2. 使用时保证传输必须是HTTPS
3. 注册 -> 监听install事件 -> 判断缓存中是否存在，存在就取缓存中的，不存在就重新请求

### 20. 浏览器缓存机制
**存储位置**
- Service Worker
1. 可以自由控制缓存哪些文件，匹配缓存，读取缓存。
2. 如果没有命中请求回来，浏览器依旧显示Service Worker

- Memory Cache
1. 内存缓存，高效，但持续时间短
2. 页面关闭就会失效
3. 一般不会存贮大文件 和 频繁读取的文件

- Disk Cache
1. 硬盘缓存，读取速度慢一些，但是可以存储的空间大
2. 根据header请求头来判断那些资源需要缓存

**缓存策略**

- 强缓存
1. Expries
   + Http/1 根据绝对时间判断是否需要缓存
   + 受限于本地时间，本地时间修改会影响该缓存
2. Cache-control
   + Http/1.1 优先级高于Expries，根据相对时间来判断是否需要缓存
   + 可以设置多种指令`max-age=30`等

- 协商缓存
1. Last-Modified
   + 协商缓存成功返回304状态码
   + 表示当前的文件最新修改时间
   + If-Modified-Since，通过对比请求头的时间，来判断是否需要进行请求
   + 缺点：1. 时间过期文件没有修改依旧会请求 2. 以秒计时，如果当前文件更改在1秒内，服务器同样不会更新
2. Etag
   + 用算法计算当前文件是否有修改过，类似每一个文件有一个对应的id，修改过id会改变
   + 通过If-None-Match对比后端存入的值，看是否需要请求操作
   + 优先级高于Last-Modified

- 启发式缓存：如果没有设置缓存策略，浏览器会自己在响应头中用Date - Last-Modified值的10%作为缓存时间

- 往返缓存：浏览器为了在用户页面间执行前进后退操作时拥有更加流畅体验的一种策略。该策略具体表现为，当用户前往新页面时，将当前页面的浏览器DOM状态保存到`bfcache`中；当用户点击后退按钮的时候，将页面直接从`bfcache`中加载，节省了网络请求的时间。

### TODO
1. 性能优化
2. 安全
3. http
4. 设计模式
5. 数据结构与算法
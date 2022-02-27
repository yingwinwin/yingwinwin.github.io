---
id: callback
title: callback
slug: /FE/javaSciprt/callback
---


## 高阶函数
> 传入函数，或者返回函数，就是高阶函数

### 扩展函数
```js
function core(...arg) {
    console.log('core', ...arg);
}
core.before = function (fn) {
    // 在外面包了一层函数。用于拓展
    return (...arg) => {
        fn();
        this(...arg)
    }
}
let before = core.before(() => {
    console.log('before')
})
before('1')  // before, core, 1, 
```

### 柯里化
把函数的作用范围变小
```js
function sum(a, b, c, d, e, f, g) {
  return a + b + c + d + e + f + g;
}

function currying(fn) {
    const len = fn.length;  // 当前传入的柯里化函数的参数长度
    const persetArgs = Array.from(arguments).slice(1);  // 预设的参数长度
    return (...args) => {  // 当前传入的参数
        const allArgs = [...persetArgs, ...args];  // 放到一起
        if (allArgs.length >= len) { // 如果长度大于或者等于当前长度，直接调用返回结果
            return fn(...allArgs);
        } else {
            return currying(fn, ...allArgs)  // 否则递归，返回一个新函数
        }
    }
}

let numSum = currying(sum, 1, 2);
console.log(numSum(3,4)(5)(6)(7))  // 28
```

### 反柯里化
把函数的作用范围变大
```js
/*
    将Object.prototype.toString.call() 改为 toString() 调用
*/
function uncurrying(fn) {
    return function (...args) {
        // 调用函数原型上面的call方法
        return (Function.prototype.call).call(fn, ...args)
    }
}
let toString = uncurrying(Object.prototype.toString);
console.log(toString(1)) // [object Number]
```

## 回调函数

### 同步回调函数
在当前函数执行的过程中，并不会产生异步的逻辑，而且可以保证当前传入的回调函数，会在函数执行之中执行。
```js
function callback() {
    console.log('cb')
}
function sync(cb) {
    console.log(1)
    cb();
    console.log(2)
}
sync(callback)
/*
1
cb
2
*/
```
### 异步回调函数
当前的回调函数会在，当前函数执行之后再执行
```js
function callback() {
    console.log('cb')
}
function sync(cb) {
    console.log(1)
    setTimeout(cb, 1000);
    console.log(2)
}
sync(callback)
/*
1
2
cb
*/
```

## 并发
### after函数
如何拿到两个异步的结果
```js
const fs = require("fs");
const path = require("path");

function after(nums, cb) {
    let obj = {}  // 闭包变量
    return (key, value) => {
        obj[key] = value  // 存起来
        if(--nums === 0) {  // 到达次数后
            cb(obj)  // 返回最终结果
        }
    }
}

// 次数 和 最终获得结果的函数，返回一个函数，用来获取存放的值
const out = after(2, (data) => {
    console.log(data);
})

// 异步代码1
fs.readFile(path.resolve(__dirname, "./1.txt"), "utf-8", (err, data) => {
  if (!err) {
    out('1',data)  // 传值
  }
});
// 异步代码2
fs.readFile(path.resolve(__dirname, "./2.txt"), "utf-8", (err, data) => {
  if (!err) {
    out('2',data)  // 传值
  }
});
```

### 发布订阅
用发布订阅这种模式来模拟刚刚上面的情况
1. 处理异步并发
2. 复杂逻辑解耦
```js
const fs = require("fs");
const path = require("path");

let obj = {}
let event = {
    arr: [],
    on(fn) {
        this.arr.push(fn);
    },
    emit(key, value) {
        obj[key] = value;
        this.arr.forEach(fn => fn(obj));  // 订阅的时候，进行调用
    }
}

event.on((data) => {
    // 发布两次打印最终结果
    if (Object.keys(obj).length === 2) {
        console.log(data)
    }
})

fs.readFile(path.resolve(__dirname, "./1.txt"), "utf-8", (err, data) => {
  if (!err) {
    event.emit('1',data)  // 第一次发布
  }
});
fs.readFile(path.resolve(__dirname, "./2.txt"), "utf-8", (err, data) => {
  if (!err) {
    event.emit('2',data)  // 第二次发布
  }
});
```

// TODO: 完整版发布订阅模式  on emit off once listents

## 其他
> 与发布订阅不同的是，观察者是被动触发的。订阅是主动触发的。
> 这部分内容与异步无关，为了更好的区分 发布订阅 与 观察者模式

### 观察者模式

```js
class Boby{
    constructor(name){
        this.name = name;
        this.state = '宝宝开心';
        this.observer = [];
    }

    setState(newState) {
        this.state = newState;  // 观察者更改状态的时候调用函数。发布订阅是在订阅时候调用函数
        this.observer.forEach(o => o.update(this))
    }

    attach(o) {
        this.observer.push(o);  // 发布函数
    }
}

class Observer{
    constructor(name) {
        this.name = name;
    }

    update(body) {
        console.log(this.name, body.state)  // 观察者获得最新的信息
    }
}

const body = new Boby('宝宝');
const dad = new Observer('爸爸');
const mom = new Observer('妈妈');
body.attach(dad)
body.attach(mom)
body.setState('宝宝伤心')
/*
爸爸 宝宝伤心
妈妈 宝宝伤心
*/
```
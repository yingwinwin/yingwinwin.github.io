---
id: generator
title: Generator
slug: /FE/javaSciprt/generator
---


## 什么是生成器
`Generator`的基本语法可以看一下[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)的介绍

### 语法
```js
// 和普通函数不同的是，它多了一个*，还有一个关键字yield帮它控制流程
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

console.log(gen()) // Object [Generator] {}  返回一个迭代器对象
```
它的原型上有三个方法，其中`next()`最常用
```txt
Generator.prototype.next()  返回一个由 yield表达式生成的值。

Generator.prototype.return()  返回给定的值并结束生成器。

Generator.prototype.throw()   向生成器抛出一个错误。
```

### 使用
使用next方法
```js
function* gen() {
  yield 1;  // 遇到yield就会停止，每调用一次next，往下走一个yield
  yield 2;
  yield 3;
}

let it = gen()
console.log(it.next()) // { value: 1, done: false }
console.log(it.next()) // { value: 2, done: false }
console.log(it.next()) // { value: 3, done: false }
console.log(it.next()) // { value: undefined, done: true } 迭代到最后一个，done返回true
```
根据上面内容输出的内容，我们可以考虑一下生成器返回的迭代器，到底是个什么东西？
## 什么是迭代器
**迭代器** 是一个有next方法的对象
```js
{
    next(){
        return {
            value: '',
            done: ''
        }
    }
}
```
### 实现迭代器
尝试给对象实现一个迭代器
```js
let obj = {0: 1, 1: 2, 2: 3, length: 3, 
    [Symbol.iterator](){  // Symbol上的一些方法可以实现“元编程”, 改变js的原生方法
        let that = this;
        let index = 0
        return {  // 可以看到迭代器，就是返回了一个对象，上面有next方法
            next() {
                return {
                    value: that[index],
                    done: index++ === that.length  // done 为 true 会自动停止迭代
                }
            }
        }
    }
}
console.log([...obj])  // [1, 2, 3]
```
### 用生成器实现迭代器
可以看到迭代器，就是返回了一个对象，上面有next方法，当然上面的代码也可以用生成器实现，生成器会返回一个迭代器，下面代码与上面功能类似。
```js
let obj = {0: 1, 1: 2, 2: 3, length: 3, 
    [Symbol.iterator]: function* () {  // 这个生成器函数同样返回一个对象里面有next方法
        let index = 0;
        let len = this.length;
        while(index !== len) {
            yield this[index++]
        }
    }
}
console.log([...obj]) // [1, 2, 3]
```

## `yield`的返回值
```js
function * gen() {
    let a = yield 1;
    console.log(a);
    let b = yield 2;
    console.log(b);
    let c = yield 3;
    console.log(c);
}

let it = gen();
it.next()  // 只执行 yield 1 ;执行之后停止，等待下次调用next方法
it.next('a')  // 执行let a = yield 1; console.log(a);  yiled 2; 碰到了yield立刻停止执行
it.next('b')  // 执行let b = yield 2; console.log(b);  yiled 3; 碰到了yield立刻停止执行
it.next('c')  // 执行let c = yield 3; console.log(c); 
```
与直观上的感受不同，第一次`yield`的返回值不是`1`，而是`'a'`是第二次调用`next`时传入的参数，可以再看一下注释，理解一下。

### 为什么这样设计

首先创建两个txt文件，内容如下：
```txt title="1.txt"
number.txt
```

```txt title="number.txt"
1
```
然后在node中，依次读取他们，需要通过获取第一个文件的名字来获取第二个文件的内容
```js
const fs = require('fs').promises;
const path = require('path');

function* read() {  // 实现顺序调用取文件内容
    const fileName = yield fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8')
    const content = yield fs.readFile(path.resolve(__dirname, fileName), 'utf-8')
    return content;
}

let it = read();  // 当前生成器会返回一个迭代器

// 从迭代器中结构出：value done  
// 可以看到 value 就是第一个取文件的 promise 对象
let {value, done} = it.next();  

if (!done) { // 判断如果 done 不是false，就进行处理
    Promise.resolve(value).then(data => {
        console.log(data)  // number.txt
        // highlight-next-line
        let {value, done} = it.next(data)  // 继续调用迭代器，传入上次的文件名。(关键逻辑)
        if (!done) {  // 继续执行刚才的逻辑
            Promise.resolve(value).then(data => {
                console.log(data)  // 1
            })
        }
    })
}
```

可以看出，虽然这样实现了顺序调用，但是也实现了回调地狱，我们要如何使代码更优雅实用呢？
1. 可以看到当前是有部分代码有重复逻辑的，不难想到可以使用递归实现简化。
2. 老一辈的开发者也当然想到了，所以有一个著名的叫做`co`的库，就是为了简化当前的需求。
3. 跳转至[co](/docs/FE/javaSciprt/co)章节

## 生成器的原理
将下列代码通过`https://babeljs.io/`进行编译。
```js
function * gen() {
    let a = yield 1;
    console.log(a);
    let b = yield 2;
    console.log(b);
    let c = yield 3;
    console.log(c);
}
```
得到以下代码，可以看到通过`regeneratorRuntime`类上面的`wrap`方法调用当前传入的`gen`函数最终之实现了迭代的效果。那么这个`regeneratorRuntime`的`wrap`做了写什么呢？
```js

let regeneratorRuntime = {
  mark: () => {
    return gen();
  },
  wrap(genFn) {  // 核心函数
    let _context = {  // 上下文对象
      done: false,  // 用来判断已经迭代完成
      next: 0,      // 指针，负责指向下一个迭代的内容
      sent: null,   // next() 方法传入的参数
      stop: () => { // 标识迭代结束的方法
        _context.done = true;
      },
    };

    return {
      next(value) {
        _context.sent = value;  // 将next() 传入的参数存到上下文中，用于给下次的调用赋值
        let v = genFn(_context);  // 取得gen函数的返回值
        return {
          value: v,  // 将返回值赋值给value
          done: _context.done,  // done赋值给done
        };
      },
    };
  },
};


"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(gen);

function gen() {
  var a, b, c;
  return regeneratorRuntime.wrap(function gen$(_context) {
    while (1) {  // 开发者用while(true) 来表示一段代码可能会多次执行
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          a = _context.sent;  // 存入的上下文，在下次迭代时取出，赋值
          console.log(a);
          _context.next = 6;
          return 2;

        case 6:
          b = _context.sent;
          console.log(b);
          _context.next = 10;
          return 3;

        case 10:
          c = _context.sent;
          console.log(c);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}
```

## 总结
1. 了解了什么是生成器和迭代器
2. 使用生成器来进行异步请求
3. 生成器的原理
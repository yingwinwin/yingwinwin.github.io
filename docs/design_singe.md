---
id: design_singe
title: 单例模式
---
> 单例：只有一个实例并提供全局访问

### 通用的惰性单例
- 惰性：在使用的时候才创建对象
- 如果有这个对象就返回当前的对象，否则就等于某个对象，或新创建一个对象或实例。
```js
let obj;
if(!obj) {
    obj = xxx
}
return obj;
```

**getSingle函数**
- 如果有result这个值，就返回，没有就返回传入的函数。
- 利用了函数闭包和高阶函数的特性
```js
let getSingle = function(n) {
    let result;
    return function() {
        return result || (result = fn.apply(this, arguments))
    }
}
```
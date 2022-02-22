---
id: promise
title: Promise
slug: /FE/javaSciprt/promise
---

## 基本使用
1. Promise是一个类
2. 传入一个函数
3. 函数里面会有两个方法返回，resolve，reject。
4. 如果代码逻辑需要成功的时候调用成功方法
5. 如果代码逻辑需要失败的时候调用失败方法
6. 成功就会走then的第一个方法
7. 失败就会走then的第二个方法
```js
new Promise((resolve, reject) => { 
    resolve() 
    // or reject()
}).then(data => {
    console.log(data)
}, err => {
    console.log(err)
})
```

## promiseA+
> promiseA+规范文档: [https://promisesaplus.com/](https://promisesaplus.com/)
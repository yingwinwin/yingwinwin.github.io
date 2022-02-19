---
id: co
title: co
slug: /FE/javaSciprt/co
---

## 使用
安装co库
```shell
npm i co
```
在项目中使用
```js
const fs = require('fs').promises;
const path = require('path');
const co = require('co')  // 调用第三方库
function* read() {  // 实现顺序调用取文件
    const fileName = yield fs.readFile(path.resolve(__dirname, '1.txt'), 'utf-8')
    const content = yield fs.readFile(path.resolve(__dirname, fileName), 'utf-8')
    return content;
}
// highlight-next-line
co(read()).then(res => console.log(res))  // 1
```

## 核心原理
```js
const fs = require('fs').promises;
const path = require('path');
function* read() {
    let filename = yield fs.readFile(path.resolve(__dirname, './1.txt'), 'utf-8');
    let content = yield fs.readFile(path.resolve(__dirname, filename), 'utf-8');
    return content;
}

function co(it) {
    return new Promise((resolve, reject) => {  // co会返回一个promise
        function next(v) {
            let { value, done } = it.next(v);  // 取出当前的value和done

            if (!done) {
                Promise.resolve(value).then(data => {  // 不管是不是promise，都给它变成promise，方便处理
                    next(data)  // 异步递归
                },reject)  // 如果报错，直接reject
            } else {
                resolve(value);  // 如果迭代完成了，直接返回最终结果
            }
        }
        next()  // 初始调用递归
    })
}

co(read()).then(res => {
    console.log(res)  // 1
}).catch(err => err)
```
由于每次使用co都需要引入第三方库，进行调用。所以后面出现了`aysnc await`的语法糖。([点击跳转该章节](/docs/FE/javaSciprt/asyncAwait))

## 参考文档
- co源码地址：https://github.com/tj/co/blob/HEAD/index.js
- 若川源码共读co库：https://www.yuque.com/zhouying-8riwx/gwuk7c/bwtx2p
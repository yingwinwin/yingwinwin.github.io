---
id: errors
title: 报错
---

### 1. 把; 写成了,
- 把; 写成了,  js编译以为是变量，但是语句已经结束了。
```js
// 应为赋值或函数调用，但看到的却是表达式没有未使用的表达式
Expected an assignment or function call and instead saw an expression  no-unused-expressions
```
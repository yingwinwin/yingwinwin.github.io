---
id: block
title: 块级作用域
---

> 块级作用域

- js 出现了块级作用域之后，会把函数之后的内容都当做一个块来看待，用函数隔开

```js
{
  a = 123;
  function a() {}
  a = 456;
}
console.log(a); // 123

{
  a = 123;
  function a() {}
  a = 456;
  function a() {}
}
console.log(a); // 456
```

- 上面的代码相当于

```js
{
  a = 123;
  function a() {}
  {
    a = 456;
  }
}
console.log(a); // 123

{
  a = 123;
  function a() {}
  {
    a = 456;
  }
  function a() {}
}
console.log(a); // 456
```

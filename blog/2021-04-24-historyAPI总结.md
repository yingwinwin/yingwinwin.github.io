---
slug: history API 总结
title: history API 总结
author: yingwinwin
author_title: 前端开发
author_url: https://github.com/yingwinwin
author_image_url: https://avatars.githubusercontent.com/u/55273635?s=60&v=4
tags: [browser, histroy, html5]
---


## History API
> 具体参考[history MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/History)官网的文档 
- 属性
    + History.length`只读`
    + History.scrollRestoration
    + History.state`只读`
- 方法
    + History.go(`number`)
    + History.back()
    + History.forward()
    + History.pushState(`state`, `title`, `url`)
    + History.replaceState(`state`, `title`, `url`)
- 事件
    + onpopstate

## `history stack`
- 浏览器是一个栈结构的存贮器
```js
// 当你依次浏览a, b, c 三个网页的时候，浏览器的操作是
let histroy1 = [];  // 放当前浏览器的页面
let histroy2 = [];  // 暂存的页面
history1.push(a);
history1.push(b);
history1.push(c);
// 此时浏览器的数据中是 histroy1 = [a, b, c]  histroy2 = []
// 这时你点击浏览器的后退按钮
history1.pop(c)
histroy2.push(c)
// 现在浏览器中的数据是 histroy1 = [a, b]  histroy2 = [c]
// 现在浏览器的b页面，当你从b页面跳转到新的d页面的时候。
history1.push(d);
history2.pop(c);
// 现在浏览器中的数据是 histroy1 = [a, b, d]  histroy2 = []
```

## 注意事项
- `go` 参数为数字 `history.go(1)` 相当于 `history.forward()`, `history.go(-1)` 相当于 `history.back()`
- `state`属性可以在除了`popstate`事件中拿到`state`的值得另一种方式，注意它是**只读**的
- `pushState` 和 `replaceState` 的关系
    + 相同
        + 两者的使用方式基本一直，都是在`history.state`中添加内容
        + 第一个参数是`state`，第二个参数是`title`，第三个参数`url`，第二个参数没有浏览器实现，所以一般写null或者''就可以。
    + 区别
        + `pushState`会在浏览器加入一条记录，改变`history.length`属性。`replaceState`是重写浏览器当前的记录，不会增加`history.length`的长度
- `popState`事件，在浏览器返回和前进时会触发，也就是说栈结构有`pop`操作的时候才会触发的事件

## 具体应用
### 1. 清除往返缓存
- 往返缓存（`Back/Forward cache`，下文中简称`bfcache`）是浏览器为了在用户页面间执行前进后退操作时拥有更加流畅体验的一种策略。该策略具体表现为，当用户前往新页面时，将当前页面的浏览器DOM状态保存到`bfcache`中；当用户点击后退按钮的时候，将页面直接从`bfcache`中加载，节省了网络请求的时间。

```js
window.addEventListener("pageshow", e => e.persisted && location.reload());
// e.persisted 是否从缓存读取，如果true 是从缓存取，如果false相反
```

### 2. [window.performance.navigation.type](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation/type) 如果没有`e.persisted`可以通过该属性判断
- `performance.navigation.type`该属性返回一个整数值，表示网页的加载来源，可能有以下4种情况

value | describe 
-- | -- 
0  | 网页通过点击链接、地址栏输入、表单提交、脚本操作等方式加载，相当于常数performance.navigation.TYPE_NAVIGATE
1  |网页通过“重新加载”按钮或者location.reload()方法加载，相当于常数performance.navigation.TYPE_RELOAD。
2  | 网页通过“前进”或“后退”按钮加载，相当于常数performance.navigation.TYPE_BACK_FORWARD。
255  | 任何其他来源的加载，相当于常数performance.navigation.TYPE_RESERVED
-  `performance.navigation.redirectCount`表示网页经过重定向的次数。

### 3. 禁用浏览器后退按钮
```js
history.pushState(null, null, document.URL);
window.addEventListener('popstate',  () => {
  history.pushState(null, null, document.URL);
});
```

## 参考文档
- [中高级前端必须注意的40条移动端H5坑位指南](https://juejin.cn/post/6921886428158754829#heading-36)
- [History Web API 参考文档](https://developer.mozilla.org/zh-CN/docs/Web/API/History)
- [PerformanceNavigation.type](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation/type)
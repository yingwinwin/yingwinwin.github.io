---
id: errors
title: 报错/问题/记录
---

### 1. 把; 写成了,
- 把; 写成了,  js编译以为是变量，但是语句已经结束了。
```cmd
// 应为赋值或函数调用，但看到的却是表达式没有未使用的表达式
Expected an assignment or function call and instead saw an expression  no-unused-expressions
```

### 2. vscode鼠标左键多列选择
- 效果
![image](../static/resource/select.png)

- 解决(把这个模式勾选掉即可)
![image](../static/resource/vscodeconfig.png)

### 3. 过渡效果在定时器中才会生效
- 参考文章：[Javascript 高性能动画与页面渲染](https://www.infoq.cn/article/javascript-high-performance-animation-and-page-rendering/)
- 浏览器的执行阶段
    + 页面构建渲染：html代码解析之后构建dom对象css代码js代码执行
    + 事件执行：`addEventListener`，浏览器会一直监听事件队列中是否有事件需要执行
- 浏览器会一直循环上面的两个周期，这个时候我们在js代码中设置css代码，会重新触发页面的渲染，如果在js代码中添加了css类名的修改，浏览器会直接把css类名完全整合到下一次渲染中。这里如果你添加了过渡属性，渲染的时候css属性就已经是过渡之后的属性了，所以就不会再有过渡的效果。
- **异步**：添加异步操作，以前都是用`setTimeout`,现在推荐使用`requestAnimationFrame`也是异步操作，很多动画库都会用到，是浏览器渲染的一帧，所以应该也不会出现掉帧的问题。一般是16ms触发一次。
- 添加异步操作后，浏览器会在当前css类名加载完成之后，执行`setTimeout`中的函数，这时，同步设置的css属性已经生效了，再执行异步操作中的代码，就会有一个属性的转变了，就会出现过渡的效果了。
- 看了大佬的[视频](https://www.bilibili.com/video/BV1TA411T7ne)，通过`void div.offsetWidth`可以重新触发浏览器的渲染。（但是还是要具体问题具体问题）

### 4. 让div盒子达到失焦效果
- tabindex属性表示元素是否可以聚焦的一个属性，也可以用tab键来访问下一个。
    + 如果是-1的话，表示可以聚焦，但是不能在鼠标tab键的时候访问到
    + 如果是0的话，表示可以聚焦，而且可以通过tab键不断访问
    + 如果是其他数字的话，点击键盘tab键会按给到的顺序不断访问

- 注意：tabindex 的最大值不应超过 **32767**。如果没有指定，它的默认值为 0
```html
<!-- 在项目中，自己用div和ul li写的下拉框没有和select option 一样的失焦效果，找到了这种方式解决 -->
<div tabindex = -1></div>
```

### 5. input pattern属性
```js
// 内部添加正则校验
<input pattern="regexp">
```

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
- 浏览器时间环：微任务 -> 渲染 -> 宏任务，所以加了定时器之后在更改状态是已经在浏览器渲染过后了，然后在进行更新，就可以有一个变化

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

### 6. useState同时设置两个值，一个有值，一个为null
- 待解决

### 7. 一行div能展示多少就展示多少
- 业务需求，一开始看到这个需求的时候，脑子里想的都是用js解决，想先dom获取手机一行的长度，然后判断div长度，然后对比去看渲染多少个div。
- 但是后来突然幡然醒悟，需求既然是纯展示，那就用css的方法解决啊！为什么要用js，立刻改成了用flex解决。
```html
<div class="box">
    <span>标签标签标签</span>
    <span>标签标签标签</span>
    <span>标签标签标签</span>
    <span>标签标签标签</span>
    <span>标签标签标签</span>
</div>
```

```css
<style>
    .box {
        height: 24px;
        display: flex;
        /* 核心代码，让元素自动换行，然后把换行的元素直接hideen掉不展示 */
        flex-wrap: wrap;
        overflow: hidden;
    }
    .box > span {
        margin-right: 5px;
        border: 1px solid #000;
    }
</style>
```
![image](../static/resource/label.png)


### 8. sticky使用问题
```css
position: sticky;
```
- sticky使用时，因为缩放比例不是100%，导致浏览器中页面抖动，修改为100%就好了
- 如果出现空白。大佬说：translateZ(0px) 启动一下硬件加速（还不懂什么意思）
- 如果要获取offsetTop，js中fixed是获取不到高度的，但是sticky可以。

### 9. 滚动穿透
```css
overflow: hidden;
/* 或者 */
pointer-events none
```

### 10. react组件卸载后setState
- 报错：`Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.`
- 问题是因为请求的时候，没有任何loading状态，这个时候用户点击其他操作，在页面已经卸载的时候，请求才刚刚完成，就会造成，在页面卸载之后进行setState的操作。出现报错信息。
```js
let [state, setState] = useState()
useEffect(() => {
    /* 
        1.设置一个query变量
        2.如果这个时候页面卸载了，query变成false，就不会进行state的设置
        3.利用了闭包的原理，query的值不会丢
    */
    let query = true;
    new Promise().then(res => {
        if(query) setState(res);
    }).catch((err) => err);

    return () => {
        // 组件卸载时置为false
        query = false;
    }
}, [])
```

### 11. flex布局在中ios中出现子元素高度塌陷
- 解决：给子元素添加height

### 12. position:sticky; 父级高度给100vh后失效
- 解决：去掉父元素的height：100vh，没有固定的高度，这样元素的父盒子就会是整个元素的本身的高度，就不会出现失效的问题。
- 如果当前元素有其他元素需要定位可以都是用stictky。

### 13. 给html渲染目录
```js
// 获取所有的标题HTML
function getHDom() {
	const titles = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
	let arr = [];
	titles.forEach(title => {
		const type = title.nodeName.replace('H', '');
		arr.push({
			title: title.textContent,
			type,
			id: title.id,
		})
	});
	return arr;
}
```
- 用 padding * 目录层级
- 用a标签做锚点

### 14. 日期
[intl](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
[toLocaleDateString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
```js
// 输入当天的星期
new Intl.DateTimeFormat('zh-CN', {weekday: 'long'}).format(new Date);
new Date().toLocaleDateString("default", {year: "numeric", month: "2-digit", day: "2-digit"}) // "2021/08/21"
```

### 15. 2021年10月遇到的问题
1. 0.1 + 0.2 !== 0.3 的问题及其解决方案。[参考文档](https://blog.csdn.net/weixin_43720095/article/details/86108636)
2. `ref.scrollIntoView({ behavior: 'smooth', block: 'start' ,inline:center});` 这行代码中的`inline:center`, 如果元素定位会导致元素位置偏移。TODO: 可以考虑复现和总结
3. 在项目中多行文本溢出的css代码不生效，需要在`-webkit-box-orient: vertical;`上下写如下注释才会生效
```css
display: -webkit-box;
/* autoprefixer: off */
-webkit-box-orient: vertical;
/* autoprefixer: on */
-webkit-line-clamp: 2;
overflow: hidden;
```
4. box-shadow 解决 1px问题代码
```css
.box-shadow-1px {
  box-shadow: inset 0px -1px 1px -1px #c8c7cc;
}
```
5. 数组倒删的问题 TODO: 可以把最近刷题遇到的问题都整理总结一下
6. 手机号脱敏
```js
userPhone.replace(/(\d{3})\d*(\d{4})/g,'$1****$2')
```
7. 用css做悬浮球逻辑实现 TODO: 自己手写实现一下 [参考文档](https://juejin.cn/post/6844903841805107214)
8. 异或运算 XOR 教程 [文档](https://www.ruanyifeng.com/blog/2021/01/_xor.html)
9. 遇到了http的图片，无法在https的连接获取，`Referrer Policy: no-referrer`告知运维后运维说需要自己搭`oss`，加一层代理。TODO: 触及到了我的知识盲区
10. 瀑布流组件 的实现`Masonry` TODO: 具体逻辑需要了解，封装组件
11. `window.AMap` HTML5手机定位, 问题是，电脑定位的是时候取的字段和手机不一致。且电脑定位不准确。TODO: 具体使用实现模拟
12. 文本溢出省略的实现 [参考文档](https://juejin.cn/post/6844903944259371016)，用:check 伪元素选择器很巧妙的处理了check的动作。css真的很强。


### 2021 11月 - 2021 2月
- 前端验证身份证号码的真实性 https://juejin.cn/post/6993252081322688548
- 去除 ios 浏览器中的input默认样式(带了一个白框)
```css
-webkit-appearance: none;
```
- 平移和旋转一起使用
```css
transform: translate(-50%, -15px) rotate(45deg)
```
- 1px问题 https://juejin.cn/post/6844904066301050893
```css
/* 底边框 */
.b-border {
  position: relative;
}
.b-border:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
```
- css更换主题色 使用css变量（https://www.cnblogs.com/leiting/p/11203383.html）
- 段落左右两端对齐
```css
text-align: justify;
```
- postMessage进行数据通信 https://juejin.cn/post/6844903685164630030#heading-0

- nvm 提示找不到mac全局 变量问题 https://learnku.com/vuejs/t/51570
- iframe 跨域问题 https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options
- [React Error]: Target container is not a DOM element，dom还没有准备好，没有地方渲染react https://blog.csdn.net/cc7756789w/article/details/52083548
- location的方法  https://www.cnblogs.com/niaowo/p/3968060.html
- css隐藏元素的方法有哪些？
- 如何进行文件上传？
- h5 长按保存 https://juejin.cn/post/6844903861866463239  https://juejin.cn/post/6925325240398512141#heading-3
- css 曲线运动 https://www.cnblogs.com/xiaobaibubai/p/7060189.html
- 加盐加解密 CryptoJS 
```js
import CryptoJS from "crypto-js";
// 这两个都是后端提供的
const key = CryptoJS.enc.Utf8.parse("");  // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('');   // 十六位十六进制数作为密钥偏移量

// 解密
export function Decrypt(word) {
    const encrypted = CryptoJS.AES.decrypt(word, key, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    return CryptoJS.enc.Utf8.stringify(encrypted).toString()
}

export function Encrypt(word) {
    return CryptoJS.AES.encrypt(word, key, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString();
}
```

- gitignore 不生效
```js
git rm -r --cached .

git add .

git commit -m "修改信息"

git push -u origin master
```

- 管理后台的富文本编辑器 https://braft.margox.cn/
- 时间转换为时间戳，兼容手机
```js
/**
 * @description 将后端返回的日期格式转换为时间戳
 * @param {Date} time 2021-10-19 18:30:00
 * @returns 时间戳
 */
const formatTime = (time) => {
    return new Date(time.replace(/-/g, '/')).getTime()
}
```

- tab超过宽度左右滑动  flex-shrink
- 身份证号码生成器
- "node-sass": "^4.12.0",   要对应 node版本10
- react-slick  轮播
- https://excalidraw.com/ 好看的画图网站
- 开源授权 https://blog.csdn.net/weixin_39963287/article/details/110808189
- react文章
  - https://mp.weixin.qq.com/s/J2i7Lv6_KblfXVZfnzhtaA   
  - https://mp.weixin.qq.com/s/A1oV--p5NpiKjtdFv9ODBQ
- 3个数据滚动一次只滚动一条
```js
import styles from './index.less'
import React, { useState, useEffect, useRef } from 'react';


export default ({ children, ...setting }) => {
    const ref2 = useRef()
    const [count, setCount] = useState(0)
    const [size, setSize]= useState(0)
    const [iheight, setiHeight]= useState(setting?.liHeight || 0)
    const [styleObj, setStyleObj]= useState({
        transform:  'translateY(0px)',
        transition: '-webkit-transform 1000ms ease 0s'
    })

    useEffect(()=> {
       if ( children.length > 0) {
            setiHeight(ref2.current.children[0].offsetHeight)
            setSize(children.length)
       }
    },[children])

    useInterval(() => {
        if ( size > 0 && count >= size ) {
            setStyleObj({
                transform:  `translateY(0px)`,
            })
            setCount(0);
        } else {
            setCount(count + 1);
            setStyleObj({
                transition: '-webkit-transform 1000ms ease 0s',
                transform:  `translateY(-${ iheight  * (count + 1)}px)`,
            })
        }

    }, setting?.time || 2000 );

    return <div className={styles.rollCont} style={{ height: setting?.slidesToShow * iheight + 'px' }}>
        <div className={styles.rollScroll} style={styleObj} ref={ref2}> 
            { children }
            { children }
        </div>
    </div>
}


function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
```
- 定时器，从另一个页面回来后，会重新计时，导致内容有一个回去的感觉。
- 上传图片大小不能超过xxx像素
```js
		beforeUpload(file) {
            const fileName = file.name.split('.')
            const fileExt = fileName[fileName.length - 1]
            const isTypeOk = this._.indexOf(this.ext, fileExt) >= 0
            const isSizeOk = file.size / 1024 / 1024 < this.size
            const [ width, height] = this.imgsize
            let isSize = true
            if (width && height) {
                isSize = new Promise(function(resolve, reject) {
                    let _URL = window.URL || window.webkitURL         
                    let img = new Image()
                    img.onload = function() {
                        let valid = img.width == width && img.height == height
                        valid ? resolve() : reject()
                    }
                    img.src = _URL.createObjectURL(file)
                }).then(() => {
                    return true
                }, () => {
                    this.$message.error(`上传的图片大小应为 ${width} * ${height} 像素!`)
                    return Promise.reject()
                })
            }
            if (!isTypeOk) {
                this.$message.error('请上传图片类型文件！')
                return Promise.reject()
            }
            if (!isSizeOk) {
                this.$message.error(`上传图片大小不能超过 ${this.size}MB！`)
                return Promise.reject()
            }
            this.fileSize = file.size
            return isTypeOk && isSizeOk && isSize
        },
```
- 洗牌算法 https://github.com/bilibili-lab/Blog/blob/master/docs/algorithm/11.md
- 用antd-pro select参数 label 拼写错了，没有报错，但是select选择了不展示
- 这个库 可以把坐标转成 高德 coordtransform  转成高德的地址


### 2022年3月
- qrcode.react 前端生成二维码 http://zpao.github.io/qrcode.react/
- 前端截取执行帧 https://juejin.cn/post/7043433350630998052
- 二次回退问题
```js
在跳转的时候，做pushState把loading页压入栈中，但是不会进入到页面，等到点击返回的时候，进入页面直接关闭应用
```
- umi antd-mobile v5 不生效
```shell
# 先安装
npm i @umijs/plugin-antd-mobile
```
```js title=".umirc.ts"
export default defineConfig({
  antd: {
    mobile: false
  }
});
```
- 移动端的视频列表页不能同时放很多个视频。会卡死，加载出错。建议一个页面只放一个。
- 移动端回退 http://louiszhai.github.io/2017/02/24/back/
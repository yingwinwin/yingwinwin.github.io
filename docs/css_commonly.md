---
id: css_commonly
title: 常用css效果
---

### 1. 吸顶效果
```html
<div class="header"></div>
<nav>用于显示粘性定位的头</nav>
<div class="content"></div>
<footer>底部</footer>
```

```css
.header {
	width:100%;
	height:160px;
	background:#87CEEB;
}
/* 这个元素就是吸顶元素*/
nav {  
	width:100%;
	height:100px;
	position:sticky; /* 关键代码 */
	top:0px;
	background:#F98202;
}
.content {
	width:100%;
	background:blue;
	height:1000px;
}
footer {
	background:#87CEEB;
}
```

### 2. 锚点
[scrollIntoView](https://developer.mozilla.org/zh-CN/docs/web/api/element/scrollintoview)
```

```

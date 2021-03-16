---
id: remFit
title: Rem布局自适应
---

```html
<!-- rem自适应匹配 -->
<script>
    let docEle = document.documentElement; // 获取根元素
    function setRemUnit() {
    /* 设置根元素的font-size为 37.5px */
    docEle.style.fontSize = docEle.clientWidth / 10 + "px";
    }
    setRemUnit(); // 初始化调用
    window.addEventListener("resize", setRemUnit); // 屏幕大小改变时调用
</script>
```
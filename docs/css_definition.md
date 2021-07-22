---
id: css_definition
title: CSS定义
---

## CSS乱起八糟的关系
- `position: fixed` 和 `transform`： fixed会相对当前有`transform`的盒子定位，而不是`html`定位。
- `margin` 和 `border`： div在设置两个margin的时候会重叠，但是如果中间遇到了border，margin就会分开。
- `li`前面的小圆点 和 `display`： 如果设置`li`元素的display为除了list-item的其他属性，li前面的小圆点就会消失。
- `position:absolute` 和`display:inline`：所有定位元素会自动变为`block`.

## CSS堆叠上下文
### 堆叠上下文的顺序
- 负的z-index
1. background
2. border
3. 块级元素 div等
4. 浮动元素 float:right/left
5. 内联元素 文字
- z-index: 0/auto
- 大于0的z-index值

### 堆叠上下文的触发条件
> 参考mdn [堆叠上下文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)的所有触发条件

- 文档根元素（`<html>`）；
- position 值为 absolute（绝对定位）或  relative（相对定位）且 z-index 值不为 auto 的元素；
- position 值为 fixed（固定定位）或 sticky（粘滞定位）的元素（沾滞定位适配所有移动设备上的浏览器，但老的桌面浏览器不支持）；
- flex  容器的子元素，且 z-index 值不为 auto；
- grid  容器的子元素，且 z-index 值不为 auto；
- opacity 属性值小于 1 的元素；
- mix-blend-mode 属性值不为 normal 的元素；
- 以下任意属性值不为 none 的元素：
    - transform
    - filter
    - perspective
    - clip-path
    - mask / mask-image / mask-border
- isolation 属性值为 isolate 的元素；
- -webkit-overflow-scrolling 属性值为 touch 的元素；
- will-change 值设定了任一属性而该属性在 non-initial 值时会创建层叠上下文的元素；
- contain 属性值为 layout、paint 或包含它们其中之一的合成值（比如 contain: strict、contain: content）的元素。

## BFC 块格式化上下文

> - 包含的盒子，在BFC里面跟别人没关系，儿子怎么都不会从家里出去
> - 相邻的盒子，BFC不会与其他盒子产生关系
> - BFC 不是 清除浮动

1. 浮动，绝对定位元素，非快盒的快容器（如：inline-blocks, table-cells,table-captions），`overflow`不为`visible`的块盒，`display: flow-root`会让盒子变为BFC，这些属性为它们的内容建立一个新的块格式化上下文
2. 在一个块格式化上下文中，盒在竖直方向一个接一个地放置，从包含块的顶部开始。两个兄弟之间的竖直距离由margin属性决定。同一个块格式化上下文中的相邻块级盒之间的竖直margin会合并。
3. 一个BFC包括创建它的元素内部的所有内容，除了被包含于创建新的块级格式化上下文的后代元素内的元素。（爷爷管不了孙子，父亲负责管儿子）
4. 如果两个盒子都是BFC，兄弟之间是互不影响的。(float + div) 让一个float元素本会和div重合，如果div是BFC，div就会和float元素划清界限
```html
<div class="gege">gege</div>
<div class="didi">didi</div>
```
```css
.gege{
    width: 100px;
    min-height: 600px;
    border: 3px solid red;
    float: left;
    margin-right: 20px;
}
.didi {
    min-height: 600px;
    border: 5px solid green;
    /* overflow: auto; */
    display: flow-root;
}
```

## 清除浮动
```css
.clearfix::after{
    content: '';
    display: block;
    clear:both;
}
```

## flex布局
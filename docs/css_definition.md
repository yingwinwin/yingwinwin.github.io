---
id: css_definition
title: CSS定义
---

## CSS乱起八糟的关系
- `position: fixed` 和 `transform`： fixed会相对当前有`transform`的盒子定位，而不是`html`定位。
- `margin` 和 `border`： div在设置两个margin的时候会重叠，但是如果中间遇到了border，margin就会分开。
- `li`前面的小圆点 和 `display`： 如果设置`li`元素的display为除了list-item的其他属性，li前面的小圆点就会消失。
- `position:absolute` 和`display:inline`：所有定位元素会自动变为`block`.

## 文档流
> 块级元素从上到下，内联元素从左到右。就是文档流。

- 正常文档流的高度就是，所有内联盒子和块级元素盒子加在一起。

### 块级盒子的宽高
- 永远都不要给盒子高度，只有当需要全屏展示的时候 `height:100vh;`
- div不给宽高是宽高是零
- div的高度是由文档流中的内联元素和块级所有的高度决定的。
#### 1. 如果div中有文字
- `height = font-size + line-height`（文字的行高是由设计师在设计字体的时候确定的，不一样的字体行高不一样。）
- div中文字的空格`&nbsp;`
- 文字左右两端对齐`text-align-last: justify;`
- 元素之前有空格用`float: left`不用`display: inline-block`，或者可以用flex布局
- 很长的英文单词系统会识别为一个，导致不换行。使用`word-break: break-all`，使所有内容都换行
#### 1.1 文字省略溢出(常用套路)
- 单行溢出省略
```css
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

- 多行溢出省略
```css
dispaly: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient:vertical;
overflow:hidden;
```
#### 1.2 文字居中
- **垂直居中：**使用`line-height + padding-top + padding-bottom = height` 计算出来就可以，不要写死高
```css
/* 需求：高度40px的盒子中，文字垂直居中 */
line-height: 24px;
padding: 8px 0;
```
- **水平居中：** 使用`text-align: center;`
```css
text-align: center;
```
#### 2. 如果div中有div
- 父盒子的高是由`子盒子 + padding + border` 决定的。
- **margin的合并：**
    + margin在父盒子没有padding和border的时候是不属于父亲的高的。
    + 当父盒子有padding 或者 border的时候才会使margin生效。
    + 有内联元素在的时候，也不会margin合并
#### 2.1 div中的div居中
```css
dispaly: felx;
justify-content: center;
align-items: center;
```

```css
position: absolute;
left: 50%;
top: 50%;
transfrom: translate(-50%, -50%);
```

#### 2.2 实现一个一比一的div
```css
padding-top: 100%
```

### 内联盒子的宽高
- 内联盒子的高度是由`line-height`确定的
- 内联盒子的宽度是由`文字所占的宽度` + `padding` + `margin` 确定的
### 脱离文档流
- 脱离文档流就是：**当前文档流的高度不算这个盒子了**
- position：relative 是不脱离文档流的，也就是高度是算在文档流里面的
- 以下属性会导致当前盒子会脱离文档流
```css
position: absolute;
position: fixed;
float: left;
```

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
### 父属性
```css
flex-direction  方向
flex-wrap 换行
flex-flow 上面两个的简写
justify-content 主轴方向对齐方式
align-items 侧轴对齐方式
align-content 多行/列内容对齐方式(用的较少)
```

### 子属性
```css
flex-grow 增长比例（空间过多时）
flex-shrink 收缩比例 （空间不够时）
flex-basis 默认大小（一般不用）100px
flex 上面三个的缩写
order 顺序 （代替双飞翼）
align-self  自身对齐方式
```

## flex常用布局实现
### 移动端布局
- 上下固定，中间占满空白，自动滚动。
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .container {
            display: flex;
            flex-direction: column;
            height: 100vh;
        }

        .container > header {
            height:  40px;
        }

        .container > main {
            flex: 1;
            overflow: auto;
        }

        .container > footer {
            height: 40px;
        }
        .container > footer > ul {
            height: 100%;
            display: flex;
            border: 1px solid #000;
        }
        .container > footer > ul > li  {
            border: 1px solid #000;
            flex: 1;
        }
    </style>
  </head>
  <body>
    <div class="container">
      <header>header</header>
      <main>main</main>
      <footer>
          <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
          </ul>
      </footer>
    </div>
  </body>
</html>
```

### PC端布局
- 左右固定，中间自适应
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }

        body {
            display: flex;
            flex-direction: column;
        }
        header {
            height: 40px;
            border: 1px solid #000;
        }
        footer {
            height: 40px;
            background-color: #ccc;
        }

        .contant {
            display: flex;
            height: 480px;
            border: 10px solid #000;
        }
        .contant > aside {
            width: 120px;
        }

        .contant > nav {
            width: 100px;
        }
        .contant > main {
            flex: 1;
            background-color: red;
        }
    </style>
</head>
<body>
    <header></header>
    <div class="contant">
        <aside></aside>
        <main></main>
        <nav></nav>
    </div>
    <footer></footer>
</body>
</html>
```



## IFC

### 图片有缝隙
```css
vertical-align: middle;
```
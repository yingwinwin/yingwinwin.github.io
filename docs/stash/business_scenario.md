---
id: business_scenario
title: 业务实现
---

## 虚拟列表

### 定高
- [demo代码](https://codesandbox.io/s/vlist-fixedheight-10d06)
![image](../static/resource/虚拟列表.png)
1. 传入3个属性
   - 从后端获取的数据 -- list
   - 每一条数据的高度 -- rowHeight
   - 偏移量 （用于滚动的时候不白屏）  -- offset
2. 初始化属性 
   - 初始下标值 0  -- startIndex
   - scrollTop 0  -- scrollTop
   - 用`ref`拿当前视口的高度。 -- screenHeight
3. 计算3个属性
   - 当前元素的总高度`total` = 每一条数据的高度`rowHeight` * 从后端获取的数据的长度`list.length - 1`
   - 当前视口的能容纳的条目数量`limit` = 当前视口高度`screenHeight` / 每一条数据的高度`rowHeight`
   - 初始化时渲染数组的最大下标值endIndex = 初始下标值`startIndex` + 当前视口能容纳的数量`limit` + 偏移量`offset`
4. 一个方法 -- scroll
    - 通过`scrollTop` 去计算新的 **初始下标`startIndex` 和 结束下标`endIndex`** 在数组中截取，渲染最新的数据
    - 同时通过`slice`截取的数据，拿到在最大的数组的下标值，进行`top`值的渲染
### 不定高
1. 通过兄弟盒子的相对定位，撑起宽度
2. 当前盒子绝对定位为top:0，到兄弟盒子的最上部，也是父亲盒子的最上部，父亲盒子是100vh
3. 当前盒子通过transfrom: translateY(),进行滚动，但是视口位置，适中保持在当前视口
4. 通过计算开始坐标和结束坐标，来对数据进行截取。这样在滑动的时候计算这两个值，就保证视口一直有数据了
5. 不等高需要。在开始的时候给一个假的高，先撑起高度，然后在数据初始化后，进行重新计算，利用偏移量和循环计算出每一个元素的top 和 buttom  第一项需要特别计算。
6. 通过当前滚动的srcollTop进行 开始坐标的查找 -- 二分查找

- [demo代码](https://codesandbox.io/s/vlist-noheight-q6o5v?file=/src/App.js)
<!-- TODO 导图和md待整理 -->


## 文件上传


## 拖拽

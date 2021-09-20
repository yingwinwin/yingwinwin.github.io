---
id: react_vdom
title: 虚拟dom 和 diff
---

## 虚拟DOM

### 1. 什么是虚拟DOM
- 是Js和DOM之间的一个映射
- 是一个Js对象
- 是对DOM的真实描述
  
### 2. 虚拟DOM怎么使用
- 通过ReactDOM.render进行挂载
- 页面变化时，根据虚拟DOM的修改，进行diff操作，对比更新真实DOM

### 3. 为什么要使用虚拟DOM
- 历史原因，曾经的前端是手撸dom，api使用起来非常繁琐复杂。虚拟DOM，可以说解决开发者的开发体验问题，可以使用简单的JSX语法进行开发，使开发者不用再去维护真实dom，只改变数据就可以了。
- 方便代码跨平台使用。在数据和真实DOM之间夹了一层虚拟DOM，可以使代码更容易跨平台使用。因为虚拟DOM就是对象。
- 可以在某种情况下节约性能。一定程序上缓解了渲染dom的操作性能瓶颈，在大量更改DOM操作的时候优于模板引擎。

## dom-diff

### 调和
> 调和是使虚拟DOM 和 真实DOM 变成一致的过程


- react15 栈调和
- react16 fiber调和

### diff
> diff是找到虚拟DOM 和 真实DOM 不同的地方

- 在reconcile过程中，在更新中会出发diff，判断当前节点是否可以进行复用。
- react中会建立在以下3条的基础上进行diff
    1. 只会进行同一层节点的diff
    2. 不同类型的节点，直接进行删除重建
    3. key可以保持渲染的稳定，由开发者决定是否进行删除重建，还是复用节点
#### 单节点的diff
1. 查看上次更新时的fiber节点是否存在
2. 如果存在进行判断是否可以复用
   - 先判断key是否一致，不一致直接新建
   - key一致的情况下保证type一致，就可以复用，否则删除重建
3. 不存在直接新建一个新的fiber节点

#### 多节点的diff
- 同一层级有多个节点

1. diff会进行两遍循环，第一遍找出进行更新，第二遍进行增删和移动操作
2. 第一次遍历
   - key不同直接停止遍历
   - type不同进行打上删除标记
   - 如果newfiber 和 oldfiber先遍历完也停止当前遍历
3. 第二次遍历
   - 第一遍遍历时，所有节点都遍历完成
   - newfiber没有遍历完，oldfiber遍历完，说明有新增，打上新增的tag
   - newfiber遍历完 oldfiber遍历完，说明有删除，打上删除的tag
   - newfiber 和 oldfiber 都没有遍历完，说明需要移动

参考[kasong-React技术揭秘](https://react.iamkasong.com/diff/multi.html#%E6%A0%87%E8%AE%B0%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E7%A7%BB%E5%8A%A8)


## this.setState

1. 创建一颗新的fiber树，进行diff操作，打上标记
2. 然后将所有的setState推入队列中，当进行到该更新的生命周期时。
3. 进行批量更新的处理`batchedUpdates`，然后替换掉之前的fiber树
4. 如果当前已经在异步操作中，setState没有被打上批处理的标记，就会执行同步更新。
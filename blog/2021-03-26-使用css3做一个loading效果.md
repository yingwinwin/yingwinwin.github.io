---
slug: 使用css3做一个loading效果
title: css3打造loading效果
author: yingwinwin
author_title: 前端开发
author_url: https://github.com/yingwinwin
author_image_url: https://avatars.githubusercontent.com/u/55273635?s=60&v=4
tags: [css3, loading]
---

> 最近在写公司一个react + hook + typeScript的前端pc项目，组件都是自己一步一步搭起来的，记录一下。loading组件相对简单，下次把form组件，还有自己写的picker组件整理一下。逻辑不多，就直接粘贴代码了。

- 主要说一下对DOM节点的添加和移除，需要做一下判断，当前是否已经有组件存在了，如果当前用户已经调用了一个loading组件，那么就不可以在调用了。当用户添加移除loading的方法，重置当前的loading数量。
- 样式上，通过`transform`对li元素的3d角度和位移角度，来让li元素均匀的分部。

- 项目结构
```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less'

interface IProps {
    title?: string;  // 传入当前loading的文字，非必传
}
/* 渲染load的组件 */
const Load: React.FC<IProps> = ({
    title
}) => {
    /* 渲染li元素的数量 */
    const renderList = (num: number) => {
        let arr = [];
        while (num--) {
            arr.push(<li key={num} className={`load_item item${num + 1}`}></li>)
        }
        return arr;
    }


    return <div className="loading_mask">
        <ul className="loading_box">
            {renderList(6)}
        </ul>
        <span className="loading_title">{title}</span>
    </div>
}

Load.defaultProps = {
    title: '加载中...'
}

interface ILoad {
    loadDom: null | HTMLElement;     // 创建一个div容器
    count: number; // 判断当前有几个load
    containter: null | HTMLElement;  // 渲染当前reactdom的节点
    show: (title?: string) => void;  // 展示load的方法
    hide: () => void;  // 隐藏loading的方法
}

const Loading: ILoad = {
    loadDom: null,
    count: 0,
    containter: null,
    show: function (title) {
        this.count++;  // 记录当前的盒子数量
        if (this.loadDom) return;   // 只能出现一个
        this.loadDom = document.createElement('div')  // 创建一个div
        this.containter = document.body.appendChild(this.loadDom);  // 把div元素放到body上，然后把这个load 挂载到这个已经放到load的容器里面
        ReactDOM.render(<Load title={title} />, this.containter);
    },
    hide: function () {
        /* 调用方法后，把count减掉，然后如果count的数量小于等于0，说明loading已经没有了，就把当前的盒子移除掉，count也清零 */
        if (--this.count <= 0) {
            try {
                document.body.removeChild(this.containter as HTMLElement);
            } catch {
                //todo
            } finally {
                this.count = 0;
                this.loadDom = null;
            }
        }
    }
}

export default Loading;
```

- 样式文件
```less
.loop(@counter) when(@counter > 0) {
    &.item@{counter} {
        transform: rotateZ(60deg * @counter) translateY(20px);
    }
    .loop(@counter - 1)
}

*{
    list-style: none;
    padding: 0;
    margin: 0;
}
/* loading的遮罩层 */
.loading_mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(#000 0.5);
    width: 100%;
    height: 100%;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
    font-size: 14px;
    flex-direction: column;
    

    /* 当前的ul样式 */
    .loading_box {
        width: 80px;
        height: 80px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: load 2s linear infinite;

        /* 每个li的样式 */
        .load_item {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #ccc;
            .loop(6);  // 循环设置每一个里元素的位置
        }
    }
}

@keyframes load {
    form {
       transform: rotate(0deg); 
    } to {
        transform: rotate(360deg); 
    }
}
```

- 效果
![image](../static/resource/loading.png);
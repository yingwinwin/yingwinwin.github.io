---
id: sort
title: 排序
slug: /CS/leetcode/sort
---
## 简单排序
### 选择排序
找到最小的值，把它放到第一个位置
```js
function selectSort(arr) {
    if (!arr.length || arr.length < 2) return arr;
  
    for(let i = 0; i < arr.length; i ++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j ++) {
            min = arr[min] > arr[j] ? j : min
        }

      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
}
let arr = [1,3,324,12,3123,4,23,123]
selectSort(arr)
console.log(arr)
```

### 冒泡排序
一个一个比较，谁大谁往后去。直到比较到最后一个。再从第一个从新开始比较
```js
// 比较是 0 - n-1 开始所以第一层循环是 0 - n-1
// 在里面的循环是 0 1 换  1 2 换  2 3 换
function bubbleSort(arr) {
    if (!arr.length || arr.length < 2) return arr;
    // 数组的最后一项到第一项
    for (let end = arr.length - 1; end >= 0; end --) {
        // 定义第二项 和 第一项交换 -> 一直交换到end，因为每一次外层循环会--，
        for(let second = 1; second <= end; second ++) {
            if(arr[second - 1] > arr[second]) {
                [arr[second - 1], arr[second]] = [arr[second], arr[second - 1]]
            }
        }
    }
}
let arr = [1,3,324,12,3123,4,23,123]
bubbleSort(arr)
console.log(arr)
```

### 插入排序
先排 0-0, 0-1 然后0-2 然后0-3 0-4 0-5，就像斗地主玩牌，我摸到一张牌以后往里面插入的时候，就是前面都排好了，然后比较，往里一插就可以了
```js
function insertSort(arr) {
    if (!arr.length || arr.length < 2) return arr;
    for(let i = 1; i < arr.length; i ++) {
        // 从i开始比较，不能越过数组的界限，和当前的前一项比较，然后一直往前走
        for(let num = i; num > 0 && arr[num - 1] > arr[num]; num --) {
            [arr[num], arr[num - 1]] = [arr[num - 1], arr[num]]
        }
    }
}
let arr = [1,3,324,12,3123,4,23,123]
insertSort(arr)
console.log(arr)
```
---
id: random
title: 对数器
slug: /CS/leetcode/random
---
## Math.random()

### 等概率

> 等概率返回一个`[0, 1)`左闭右开的随机数。包括0，不包括1。因为数字是有精读的。所以可以等概率

```js
let testTime = 10000000;

let count = 0;
for(let i =0; i < testTime; i ++) {
    if(Math.random() < 0.5) {
        count ++
    }
}

console.log(count / testTime)  // 会返回50%左右的概率
```

### 随机整数

`[0,7] => Math.floor(Math.random() * 8)`等概率返回 0 到 7 左闭右闭的树。

```js
let testTime = 10000000;

// new Array(8) => 下标是 0-7
let count = new Array(8).fill(0);
for(let i =0; i < testTime; i ++) {
    let ans = Math.floor(Math.random() * 8)
    count[ans]++
}
console.log(count) 
/*
[
  1252082, 1251118,
  1251173, 1247355,
  1249425, 1249897,
  1249016, 1249934
]
*/
```
- 获得公式：**`[0,x] = Math.floor(Math.random() * (x + 1))`**

### x平方概率
`Math.max(Math.random(),Math.random())` 取随机行为中的最大值返回，需要两个行为都是在范围内。
```js
let testTime = 10000000;

let count = 0;
for(let i =0; i < testTime; i ++) {
    
    if (Math.max(Math.random(),Math.random()) < 0.8) {
        count++;
    }
}
// 是 0.8 的平方概率
console.log(count / testTime);
console.log(Math.pow(0.8, 2))
```

## 随机函数

### 从 1~5 随机到 1~7
> 通过一个随机函数fn，获得1~7的等概率随机函数。
> 
> `const fn = () => Math.floor(Math.random() * 5) + 1`  当前函数返回1-5的等概率随机数

1. 通过`fn`函数获得一个`0，1发射器`
```js
// 当前函数，获得 0，1是50%
const fn1 = () => {
    let ans = 0;
    do{
       ans = fn();
    } while(ans === 3)

    return ans > 3 ? 0 : 1
}
```

2. 通过这个0，1发射器，再得到二进制的 0~7
```js
// 三位2进制数是 000 ~ 111 => 十进制为 0~7
const fn2 = () => {
    return (fn1() << 2) + (fn1() << 1) + fn1()
}
```

3. 等概率返回 0~6
```js
const fn3 = () => {
    let ans = 0;
    do{
       ans = fn2();
    } while(ans === 7)

    return ans
}
```

4. 等概率返回 1~7
```js
const fn4 = () => {
    return fn3() + 1
}
```

### 从 0,1 不等概率，获得 0,1 等概率

```js
// 0，1不等概率，但是固定概率
// 0 => p  1 => 1-p
const fn = () => {
    return Math.random() > 0.80 ? 0 : 1
}
```
- 根据上面的函数，获得 g 函数，返回等概率的0，1
```js
// 两次ans相同就重新while，直到两次不相同。
// 一次是0，一次是1的概率为 p*(1-p)
const g = () => {
    let ans = 0
    do {
        ans = fn5();
    } while (ans === fn5())
    return ans
}
```

## 对数器
> 用来验证当前算法写的是否正确的方法。核心思想：写一个复杂度高，但是简单的方法。优化算法的时候可以用对数器来进行算法调试。

- 验证一个排序算法是否正确
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

// 获得一个[0,maxlen-1]范围长度的数组，数组的值在[0,maxValue-1]上随机
const lenRandomValueRandom = (maxLen, maxValue) => {
    let len = Math.floor(Math.random() * maxLen)
    let ans = new Array(len)
    for(let i = 0; i < len; i ++) {
        ans[i] = Math.floor(Math.random() * maxValue);
    }

    return ans;
}

const copyArray = (arr) => {
    let arr2 = []
    for(let i = 0; i < arr.length; i ++) {
        arr2[i] = arr[i]
    }
    return arr2;
}

// 写一个逻辑简单的，来佐证之前写的函数是对的
const isSored = (arr) => {
    if (arr.length < 2) {
        return true;
    }
    let max = arr[0]
    for(let i = 0; i < arr.length; i ++) {
        if (max > arr[i]) {
            return false;
        }
        max = arr[i];
    }
    return true
}

const main = () => {
    const maxLen = 100;  // 随机长度
    const maxValue = 1000;  // 随机数组value
    const testTime = 10000;  // 随机数量
    for(let i = 0; i < testTime; i ++) {
        let arr1 = lenRandomValueRandom(maxLen, maxValue);
        let arr2 = copyArray(arr1);
        insertSort(arr1);  // 排序后
        if (!isSored(arr1)) {  // 另一个函数验证如果错误
            console.log('出错了')
            console.log(arr2)  // 可以利用 copy 数组进行 debug 排错
        }
    }
}

main()
```
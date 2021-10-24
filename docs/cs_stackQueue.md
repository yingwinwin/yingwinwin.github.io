---
id: cs_stackQueue
title: 栈、队列
---

## 有效括号
- [leetcode - 20](https://leetcode-cn.com/problems/valid-parentheses/)

### 哈希
- 时间复杂度 `O(n)` n为数组的长度
- 空间复杂度 `O(n)` 栈为n
```js
var isValid = function(s) {
    // 如果是单数直接就返回fasle；
    if (s.length % 2 === 1) {
        return false;
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);

    let str = [];
    // 循环字符串
    for(let ch of s) {
        // 如果map里面有 })]  
        if (pairs.has(ch)) {
            // 判断当前栈里面如果为空，就说明匹配不了，就直接返回false
            // 判断当前栈顶元素, 如果和map中存入的一致不一致就返回false
            if (!str.length || str[str.length - 1] !== pairs.get(ch)) return false;
            // 如果都没有就直接弹出栈顶元素
            str.pop(ch);
        } else {
            // 如果当前map中没有元素命中，就在栈中放入
            str.push(ch)
        }
    }

    return !str.length;  // 如果最后栈中为空返回false
};
```

<!-- ### 替换空格 -->
<!-- TODO -->
<!-- ```js
``` -->

## 最小栈
```js
var MinStack = function() {
    this.stk = [];
    // 这里写Infinity的原因是因为,Math.min比较的时候需要和数字进行比较，不然就会返回NaN
    this.minStk = [Infinity];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stk.push(val);
    this.minStk.push(Math.min(val, this.minStk[this.minStk.length - 1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stk.pop();
    this.minStk.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stk[this.stk.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStk[this.minStk.length - 1]
};
```
## 柱状图中最大的矩形

### 单调递增栈
- 时间复杂度 `O(n)` n为数组的长度
- 空间复杂度 `O(n)` 栈为n

```js
var largestRectangleArea = function(heights) {
    // 用stk中的 - 1 计算高度
    let stk = [-1], maxarea = 0;

    for (var i = 0; i < heights.length; i ++) {
        while(stk.length > 1 && heights[stk[stk.length - 1 ]] > heights[i]) {
            maxarea = Math.max(maxarea, heights[stk.pop()] * (i - stk[stk.length -1 ] - 1));
        }
        stk.push(i)
    }

    while(stk.length > 1) {
        maxarea = Math.max(maxarea, heights[stk.pop()] * (heights.length - stk[stk.length - 1] - 1))
    }
    return maxarea;
};
```
## 滑动窗口最大值
## 设计循环双端队列
## 接雨水

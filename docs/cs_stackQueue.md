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
- [leetcode - 155](https://leetcode-cn.com/problems/min-stack/)
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
- [leetcode - 239](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)
### 单调递增栈
- 时间复杂度 `O(n)` n为数组的长度
- 空间复杂度 `O(n)` 栈为n

```js
var largestRectangleArea = function(heights) {
    // 用stk中的 - 1 计算高度
    let stk = [-1], maxarea = 0;

    for (var i = 0; i < heights.length; i ++) {
        // 入栈元素 height[i] 小于当前元素进行处理，大于就入栈
        while(stk.length > 1 && heights[stk[stk.length - 1 ]] > heights[i]) {
            // 取出栈顶元素 也就是当前的高 * 当前的距离，算出最大宽度。
            // 和当前元素依次对比 比当前元素小就一直循环处理
            maxarea = Math.max(maxarea, heights[stk.pop()] * (i - stk[stk.length -1 ] - 1));
        }
        stk.push(i)
    }

    // 循环完了之后，栈中还有元素。要主要是 > 1 而不是数组长度
    while(stk.length > 1) {
        // 再接着计算最大值，这时候的 当前 i 就变成了数组的length，因为数组已经遍历完了
        maxarea = Math.max(maxarea, heights[stk.pop()] * (heights.length - stk[stk.length - 1] - 1))
    }
    return maxarea;
};
```
## 滑动窗口最大值
- [leetcode - 84](https://leetcode-cn.com/problems/sliding-window-maximum/)

### 双端队列
- 时间复杂度 `O(n)` n为数组的长度
- 空间复杂度 `O(n)` 队列长度固定不会超过k
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let q = [];  // 创建一个队列

    // 先循环第一个窗口，把最大值放到最前面，小的都pop掉。
    for (var i = 0; i < k; i ++) {
        // 比当前小的都pop掉
        while(q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }

        q.push(i);  // 放大的
    }

    let ans = [nums[q[0]]];  // 把第一个窗口的最大值放到结果里

    for (var i = k; i < nums.length; i ++) {
        // 和上面的步骤一样，找大的放队列最前面
        while(q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }

        q.push(i);

        // 这里是看是不是出去窗口了，如果队列最前面不在窗口中了，就把队列前面的shift掉
        while(q[0] <= i - k) {
            q.shift();
        }
        // 剩下的就是在窗口里，而且还是最大的了。
        ans.push(nums[q[0]]);
    }

    return ans; // 返回结果
};
```
<!-- ## 设计循环双端队列 -->
## 接雨水
- [leetcode - 42](https://leetcode-cn.com/problems/trapping-rain-water/)

### 单调递减栈
- 时间复杂度 `O(n)` n为数组的长度
- 空间复杂度 `O(n)` n为栈的长度
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stk = [], ans = 0, i = 0; 
    // 循环数组的长度
    while ( i < height.length) {
        // 单调栈，都是 for + while 有条件进行 出栈操作
        while (stk.length && height[i] > height[stk[stk.length - 1]]) {
            let top = stk.pop();  // 记录栈顶元素

            if (!stk.length) break;  // 如果没有元素就没有继续的意义了，直接停止循环

            // 计算距离 用当前的i - 栈顶下标 - 1
            let dis = i - stk[stk.length - 1] - 1;
            // 计算最小高 拿到当前元素和栈顶元素哪个更低，然后减掉 刚才记录的栈顶元素，求出能存雨水的高度
            let minheight = Math.min(height[i], height[stk[stk.length - 1]]) - height[top];
            // 不断的累加所有雨水
            ans += dis * minheight;
        }

        // 如果条件进不去就进行入栈操作， 存入下标
        stk.push(i++);
    }

    return ans;
};
```

### 双指针（对撞指针）
- 时间复杂度 `O(n)` n为数组的长度
- 空间复杂度 `O(1)` 不需要额外的空间
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1;
    let maxleft = 0, maxright = 0, ans = 0;

    // 对撞指针左右两边循环
    while(left < right) {
        // 如果左边小于右边，左边++，右边--
        if (height[left] <= height[right]) {
            // 比较那个边比较高，用高的那一边减去 当前的高，就是能存的水
            maxleft = Math.max(maxleft, height[left]);
            ans += maxleft - height[left++];
        } else {
            // 右边同理
            maxright = Math.max(maxright, height[right]);
            ans += maxright - height[right--];
        }
    }
    return ans;
};
```

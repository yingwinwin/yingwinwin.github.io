---
id: cs_algorithm
title: 算法题
---

### 1. 两数之和
- 方法一：
```js
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        };
        map.set(nums[i], i);
    }
};
``` 
- 方法二：
```js
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i ++) {
        for(let j = i + 1; j < nums.length; j ++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
```

### 2. 反转字符串中的单词 III
- 输入："Let's take LeetCode contest"
- 输出："s'teL ekat edoCteeL tsetnoc"

```js
var reverseWords = function(s) {
  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')
};
```
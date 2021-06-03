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

### 3. 计数二进制子串
- 输入: "00110011"
- 输出: 6

```js
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let match = (str) => {
        let j = str.match(/^(0+)|(1+)/)[0];  // 正则取反
        let o = (j[0]^1).toString().repeat(j.length);
        /* 这里如果用正则匹配会堆栈溢出 */
        if(str.startsWith(`${j}${o}`)) {
            return true;
        } else {
            return false;
        }
    }
    let count = 0;
    for (let i = 0 ; i < s.length - 1; i++) {
        let sub = match(s.slice(i));
        if (sub) {
            count ++;
        }
    }
    return count;
};
```

### 4. 电话号码字母组合
- 输入：digits = "23"
- 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits === '') {
        return []
    }
    //电话号码表
    let arr = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let num = digits.split('')  // 把字符串2，3变成数组[2, 3];
    let code = num.map(item => arr[item]);  // 得到2,3对应的电话号码字母的数组['abc', 'def'];
    if(code.length == 1) {
        return code[0].split('')
    }
    let comb = arr => {
        let tmp = [];
        
        for(let i = 0 ; i < arr[0].length; i ++) {
            for(let j = 0; j < arr[1].length; j ++ ) {
                tmp.push(arr[0][i] + arr[1][j]);
            }
        }
        arr.splice(0, 2, tmp); // 把数组的前两项变为一个数组
        if(arr.length > 1) {
            comb(arr);
        } else {
            return tmp;
        }
        return arr[0];
    }
    return comb(code);
};
```
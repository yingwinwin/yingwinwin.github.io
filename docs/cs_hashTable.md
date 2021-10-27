---
id: cs_hashTable
title: 哈希
---

## 有效的字母异位词
- [leetcode - 242](https://leetcode-cn.com/problems/valid-anagram/)

### 排序
- 是sort的时间空间复杂度
- 时间复杂度：O(nlogn)
- 空间复杂度：O(logn)
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 排序判断是否一致
    return s.length === t.length && [...s].sort().join('') === [...t].sort().join('')
};
```

### 哈希
- 时间复杂度：O(n)
- 空间复杂度：O(1) 为26固定长度
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 长度不一样直接返回false
    if(s.length !== t.length) return false;
    
    let table = new Array(26).fill(0);  // 创建一个26位都是0的数组，作为哈希表
    for (var i = 0; i <s.length; i ++) {
        // 在 哈希表中的 0 - 25的位置存入 1 
        table[s.codePointAt(i) - 'a'.codePointAt(0)] ++;
    }
    for (var i = 0; i < t.length; i ++) {
        // 如果t 中也有对应的值，就会变成0，如果t中有s中没有的值，就会变成 -1
        table[t.codePointAt(i) - 'a'.codePointAt(0)] --;
        
        // 如果没有就小于 0  为 - 1，也就是说两者不是异位词
        if(table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
            return false;
        }
    }

    return true
};
```

## 字母异位词分组
- [leetcode - 49](https://leetcode-cn.com/problems/group-anagrams/)

### 计数
- 时间复杂度：O(n)  
- 空间复杂度：O(n) 为26固定长度 + n

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    for(let str of strs) {
        let count = new Array(26).fill(0);
        for(let c of str) {
            count[c.codePointAt() - 'a'.codePointAt(0)] ++;
        }
        let c = count.toString();
        map.get(c) ? map.get(c).push(str) : map.set(c, [str]);
    }

    return Array.from(map.values())
};
```

### 排序
- 时间复杂度：O(nlogn);
- 空间复杂度：O(nk);
```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (let str of strs) {
        let key = [...str].sort().toString();
        let list = map.get(key) ? map.get(key) : [];
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values())
};
```

## 两数之和 哈希

## 三数之和 哈希
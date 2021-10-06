---
id: cs_algorithm
title: 算法
---

## 数组链表

### 移动零
- [leetcode](https://leetcode-cn.com/problems/move-zeroes/)
- 时间复杂度 `O(n)` n为数组的长度
- 空间复杂度 `O(1)` 只需要常量储存 `j = 0`
```js
  let arr = [0, 2, 3, 0, 1, 0];
  function moveZero(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[j] = arr[i];
        if (j < i) {
          arr[i] = 0;
        }
        j++;
      }
    }
  }
  moveZero(arr);
```

### 盛水最多的容器
- [leetcode](https://leetcode-cn.com/problems/container-with-most-water/)

#### 暴力解法
- 时间复杂度 O(n^2)
- 空间复杂度 O(1)
```js
  let arr = [1,8,6,2,5,4,8,3,7]
  var maxArea = function(height) {
    let max = 0;
    // 两层嵌套循环，求出i j所有的枚举可能性
    for(let i = 0; i < height.length - 1; i ++) {
      for(let j = i; j < height.length; j ++) {
        let area =  (j - i) * Math.min(height[i], height[j])
        max = Math.max(max, area)
      }
    }
    return max;
};
  console.log(maxArea(arr));
```

#### 双指针
- 时间复杂度 O(n)
- 空间复杂度 O(1)

```js
  let arr = [1,8,6,2,5,4,8,3,7]
  function maxArea(arr) {
    let max = 0, i = 0, j = arr.length - 1;
    while(i < j) {
      // 谁小谁动
      max =Math.max((j - i) * (arr[i] < arr[j] ? arr[i ++] : arr[j --]), max);
    }
    return max;
  }
  console.log(maxArea(arr));
```
### 爬楼梯
- [leetcode](https://leetcode-cn.com/problems/climbing-stairs/)
- 时间复杂度 O(n)
- 空间复杂度 O(1)
```js
function climbStairs(n) {
  if(n <= 2) return n;
  let f1 = 1, f2 = 2, f3 = 3;
  for (let i = 3; i <= n; i ++) {
    f3 = f2 + f1;
    f1 = f2;
    f2 = f3;
  }
  return f3;
}
console.log(climbStairs(10));
```
### 3数之和
- [leetcode](https://leetcode-cn.com/problems/3sum/)

#### 双指针
- 时间复杂度 O(n^2)
- 空间复杂度 O(N)
```js
var threeSum = function(nums) {
   let arr = [];
    let len = nums.length;
    if (len < 3) return arr;  // 如果传入数组的长度小于3，就不计算了
    nums.sort((a, b) => a - b);  // 先排序
    // 进行双指针循环
    for (let i = 0; i < len; i++) {
      if (nums[i] > 0) break; // 如果nums[i] 大于0，说明后面的数字都大于0，没有必要在进行循环了
      if (i > 0 && nums[i] === nums[i - 1]) continue;  // i > 0, 防止i-1 溢出的情况，这里是解决当nums[i]已经枚举过，去掉重复的情况
      let l = i + 1;  // i 左边的下标
      let r = len - 1;  // 右边的下标
      while (l < r) {  // 两个下标没有挨到一起
        let sum = nums[i] + nums[l] + nums[r];  // 计算三数之和
        if (sum === 0) {  // 如果三数之和等于0
          arr.push([nums[i], nums[l], nums[r]]); // 存入结果中
          while (nums[l] === nums[l + 1]) l++;   // 跳过相同的不计算
          while (nums[r] === nums[r + 1]) r--;   // 跳过相同的不计算
          l++;  // 跳到不相同的下标
          r--;  // 跳到不相同的下标
        } else if (sum < 0) { 
          l++; // 如果三数之和小于0，也就是说左边的数字太小了，因为已经排好序了，所以左边向右移一位
        } else if (sum > 0) { 
          r--; // 如果三数之和大于0，右边的数字太大了，右边向里面移一位
        };
      }
    }
    return arr;
};
```
### 反转链表
- [leetcode](https://leetcode-cn.com/problems/reverse-linked-list/)
#### 递推
- 时间复杂度 O(n)
- 空间复杂度 O(1)
```js
var reverseList = function(head) {
    let prev = null;
    while(head) {
      // head.next 需要先进行替换
      [head.next, prev, head] = [prev, head, head.next]
    }
    return prev;
};
```

#### 递归
- 时间复杂度 O(n)
- 空间复杂度 O(n)
```js
var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    let newHead = reverseList(head.next);  // 先把后面的反转回来，最后返回 1->2<-3<-4<-5
    head.next.next = head;  // 然后把 1->2<-3<-4<-5   head.next 是 2  2.next = 1  1<-2<-3<-4<-5
    head.next = null; // 1.next = null<-1<-2<-3<-4<-5
    return newHead;
};
```

### 两两交换链表中的节点
- [leetcode](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)
- 时间复杂度 O(n)
- 空间复杂度 O(1)
```js
var swapPairs = function(head) {
    let listnode = new ListNode(0); // 创建一个头部节点
    listnode.next = head;  // 头部节点指向当前链表的头部 temp -> 1 -> 2 -> 3
    let p = listnode;
    // 如果有两个以上的node，就继续循环
    while(p.next && p.next.next) {
        let n1 = p.next; // 第一个节点
        let n2 = p.next.next;  // 第二个节点 
        /* 开始进行反转 */
        p.next = n2;
        n1.next = n2.next; 
        n2.next = n1;
        p = n1 // 开始下一轮循环
    }
    return listnode.next; // 返回第一个节点
};
```
### 环形链表
- [leetcode](https://leetcode-cn.com/problems/linked-list-cycle/)
- 时间复杂度 O(n)
- 空间复杂度 O(1)

```js
var hasCycle = function(head) {
    // 如果head 为空，那就没有环，直接返回
    if (!head) {
        return false;
    }
    // 快慢指针
    let slow = head;
    let fast = head;
    // 判断是否有两步可以走，如果没有直接跳出，说明没有环了。
    while (fast.next && fast.next.next) {
        slow = slow.next;  // 慢指针走一步
        fast = fast.next.next;  // 快指针走两步

        if (slow === fast) {  // 当快指针追上慢指针的时候
            return true;  // 说明有环
        }    
    }
    return false;
};
```
### 环形链表2
- [leetcode](https://leetcode-cn.com/problems/linked-list-cycle-ii/)
- 时间复杂度 O(n)
- 空间复杂度 O(1)

```js
var detectCycle = function(head) {
    if (!head) return null;

    let slow = head;
    let fast = head;
    let isCycle = false;  // 用来记录是否有环

    // 与环形链表一致
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(fast == slow) {
            isCycle = true;// 找到环就停止循环
            break;
        }
    }
    // 如果停了循环，但是没有环直接返回null
    if(!isCycle) {
        return null;
    }
    fast = head;  // 如果有环。先把快指针指向头。
    // 然后两个指针都走1步，没碰到就一直走，直到碰到了跳出循环，然后返回当前快指针
    while(slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return fast;
};
```
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

#### 暴力解法（超时）
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

#### 动态规划
- 时间复杂度 O(n)
- 空间复杂度 O(1)
```js
function climbStairs(n) {
  if(n <= 2) return n;
  let f1 = 1, f2 = 2, f3 = 3;
  // 斐波那契数列 f(n) = f(n - 1) + f(n -2)
  // 前两个方法的和 就是下面一个方法的数量，所以把前两个值存起来
  for (let i = 3; i <= n; i ++) {
    f3 = f2 + f1;
    // 两个变量的指针向前移一位，进行下一轮计算
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
    nums.sort((a, b) => a - b);  // 先排序，从小到大
    // 进行双指针循环
    for (let i = 0; i < len; i++) {
      if (nums[i] > 0) break; // 如果nums[i] 大于0，说明后面的数字都大于0，没有必要在进行循环了
      // 过滤i重复的情况，如果i重复直接进行下一次循环。
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

<!-- TODO 哈希 -->

### 反转链表
- [leetcode](https://leetcode-cn.com/problems/reverse-linked-list/)
#### 递推
- 时间复杂度 O(n)
- 空间复杂度 O(1)
```js
var reverseList = function(head) {  
    let prev = null;
    let cur = head;

    while(cur) {
        // 先存下后面一个指针 
        let next = cur.next;
        cur.next = prev;  // 把当前指针，指向next的指针指向prev
        prev = cur; // 把prev向前移动
        cur = next; // cur 指针向前移动
    }
    return prev;
}
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
        p.next = n2;  // 让前一个node指向n2，使n1 n2 转完之后不会跟链表断开
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

### K个一组反转链表
- [leetcode](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)
- 时间复杂度：O(n)
- 空间复杂度：O(1)
```js
// 反转链表
const myReverse = (head, tail) => {
    // 下一组的头是这一组的尾 
    let prev = tail.next;
    let p = head;
    // 然后反转，到反转完成，头变成尾
    while (prev !== tail) {
        const nex = p.next;
        p.next = prev;
        prev = p;
        p = nex;
    }
    // 头尾交换
    return [tail, head];
}
var reverseKGroup = function(head, k) {
    const hair = new ListNode(0);  // 创建一个节点
    hair.next = head;  // 存头部节点
    let pre = hair;

    while (head) { 
        let tail = pre;
        // 查看剩余部分长度是否大于等于 k
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                return hair.next;
            }
        }
        const nex = tail.next;
        [head, tail] = myReverse(head, tail);
        // 把子链表重新接回原链表
        pre.next = head;
        tail.next = nex;
        pre = tail;
        head = tail.next;
    }
    return hair.next;
};
```

### 删除有序数组中的重复项
- [leetcode](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)
- 时间复杂度 O(n) 随着nums的长度n线性增长
- 空间复杂度 O(1) 只用到了j

```js
var removeDuplicates = function(nums) {
    if (!nums.length) return 0;
    let j = 0;
    for(let i = 0; i < nums.length; i ++) {
        while(nums[i] === nums[i + 1]) i++;
        nums[j] = nums[i];
        j++;
    }
    return j
};
```

### 旋转数组
- [leetcode](https://leetcode-cn.com/problems/rotate-array/submissions/)
- 时间复杂度 O(n)
- 空间复杂度 O(n)
```js
var rotate = function(nums, k) {
    let newNums = [];
    for(let i = 0; i < nums.length; i ++) {
        newNums[(i+k) % nums.length] = nums[i];
    }
    // nums = [...newNums];  // 这句不成立，因为修改了内存指向。堆中地址就变了
    for(let i = 0; i < nums.length; i ++) {
        // 这里的地址还是之前传入的那个
        nums[i] = newNums[i];
    }
};
```
- 时间复杂度 O(n)
- 空间复杂度 O(1)
```js
// 顺序交换
const reverse = (nums, start, end) => {
    while(start < end) {
        [nums[start++], nums[end--]] = [nums[end], nums[start]];
    }
}
var rotate = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1) // [7,6,5,4,3,2,1]
    reverse(nums, 0, k - 1); // [5,6,7,4,3,2,1]
    reverse(nums, k, nums.length - 1) // [5,6,7,1,2,3,4]
};
```

### 合并两个有序链表
- [leetcode21](https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/)
- 时间复杂度：O(n)
- 空间复杂度：O(1)
```js
var mergeTwoLists = function(l1, l2) {
    let headPrev = new ListNode(-1);
    let prev = headPrev;  // 保存头结点

    while(l1 && l2) {
        if(l1.val <= l2.val) {
            prev.next = l1;  // push
            l1 = l1.next; // ++
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;  // ++
    }
    prev.next = l1 === null ? l2 : l1;  // push
    return headPrev.next;
};
```

### 合并两个有序数组
- [leetcode88](https://leetcode-cn.com/problems/merge-sorted-array/)

#### 逆向双指针
- 时间复杂度：O(n)
- 空间复杂度：O(1)
```js
var merge = function(nums1, m, nums2, n) {
    // 三个下标
    let i = m - 1, j = n - 1, k = m + n - 1;
    let cur;  // 当前值
    while (j >= 0 || i >= 0) { // 当数组的两个指针两个都小于等于0 才会停止循环，也就是说nums1 中的元素 和nums2中的元素都取出了
        if (j < 0) {
          // 如果有一方的下标小于0，也就是说某一个数据里面已经没有值了，那么就直接把另一个数组里面的数取出
            cur = nums1[i --]
        } else if (i < 0) {
            cur = nums2[j --]
        } else if (nums1[i] < nums2[j]) {
          // 有一方有元素都会先走这里，也就是说会取出两个数组中的元素对比，取出大的放到 数组的最后面
            cur = nums2[ j --];
        } else {
            cur = nums1[i --];
        }
        nums1[k--] = cur;
    }
};
```
#### 直接用api排序
- 时间复杂度：O(nlogn)
- 空间复杂度：O(logn)
```js
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
};
```

### 两数之和
- [leetcode - 1](https://leetcode-cn.com/problems/two-sum/)
#### 穷举法（一定要会）
- 时间复杂度：O(n^2);
- 空间复杂度：O(1);
```js
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length - 1; i ++) {
      // 从i的第二项开始，到数组的最后一项，逐一遍历
        for(j = i + 1; j < nums.length; j ++) {
            if (nums[i] + nums[j] == target) {
               return [i, j] 
            }
        }
    }
};
```

<!-- TODO 哈希 -->

### 加一
- [leetcode - 66](https://leetcode-cn.com/problems/plus-one/)

#### BigInt
- 时间复杂度：O(n);
- 空间复杂度：O(1);
```js
var plusOne = function(digits) {
    let sum = BigInt(digits.join('')) + BigInt(1);
    return sum.toString().split('');
};
```

#### 倒循环
- 时间复杂度：O(n);
- 空间复杂度：O(1);

- 倒循环的时候`for(let i = digits.length; i > 0; i--)` 表现和 `for(i = len - 1 ; i >= 0; i --)` 不一致

```js
var plusOne = function(digits) {
    let len = digits.length, i;
    for(i = len - 1 ; i >= 0; i --) {
        if(digits[i]!==9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0
        }
    }
    return [1, ...digits]
}; 
```
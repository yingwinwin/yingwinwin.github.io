---
id: ds_list
title: 链表
---

```js
/* 
    1. 链表中的元素在内存中不用是连续的空间
    2. 链表的每一个元素储存元素本身的节点和指向下一个元素的引用

    和数组比较的时候的优点：
    1. 内存空间不用是连续的，一个指向一个
    2. 在创建的时候不用确定大小
    3. 在插入和删除的时候，时间复杂度O(1),效率高于数组
    和数组比较的时候的缺点:
    1. 链表访问任何一个位置的元素，都要从头开始访问（无法跳过）
    2. 无法通过下标直接访问
*/

function ListLink() {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    this.head = null;
    this.length = 0;
    
    ListLink.prototype.append = function (data) {
        let newNode = new Node(data);
        if(this.length === 0) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next
            }
            current.next = newNode;
        }
        this.length ++;
    }
    ListLink.prototype.toString = function () {
        let current = this.head;
        let listString = '';
        while(current) {
            listString += current.data + ' ';
            current = current.next
        }
        return listString;
    }
}

let list = new ListLink();
list.append('abc')
list.append('cba')
list.append('aaa')

console.log(list.toString());  // abc cba aaa
```
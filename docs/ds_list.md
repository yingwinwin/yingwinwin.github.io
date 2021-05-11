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
            // 找最后一个节点。然后让最后一个节点的next指向新节点
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
    ListLink.prototype.insert = function (positon, data) {
      if (positon < 0 || positon > this.length) return false;

      let newNode = new Node(data);

      // 如果是第一项
      if (positon === 0) {
        newNode.next = this.head; // 新节点指向第一个节点，this.head就是第一个节点
        this.head = newNode;  // 然后当插入之后，把指向新节点，也就是第一个节点
      } else {
        // 需要三个变量，循环用的index，当前节点，上一个节点
        let index = 0;
        let current = this.head;
        let previous = null;
        // 循环到当前的节点位置
        /* 
          1、用循环找到，然后把位置空出来
          2、再把新节点插入进去
        */
        while(index ++ < positon) {
          previous = current;  // 把当前节点存到上一个节点中
          current = current.next;  // 把当前节点的指向的下一个节点给到current，这个时候就中间空了个位置
        }
        previous.next = newNode;  // 让上一个节点的next = 新的节点
        newNode.next = current; // 当新节点的next = 当前节点；
      }
      this.length ++;
      return true;
    }

    ListLink.prototype.get = function (position) {
      if (position < 0 || position >= this.length) return null;
      let index = 0;
      let current = this.head;
      while(index++ < position) {
        current = current.next;
      }
      
      return current.data;
    }

    ListLink.prototype.indexOf = function (data){
      let current = this.head;
      let index = 0;

      while(current) {
        if(current.data === data) {
          return index
        }
        current = current.next;
        index++;
      }
      return -1;
    }

    ListLink.prototype.update = function (position, newdata) {
      if (position < 0 || position >= this.length) return false;
      let current = this.head;
      let index = 0;
      while(index++ < position) {
        current = current.next;
      }
      current.data = newdata;
      return true;
    }

    ListLink.prototype.removeAt = function (position) {
      if (position < 0 || position >= this.length) return null;
      let current = this.head;
      if(position === 0) {
        this.head = this.head.next
      } else {
        let index = 0;
        let previous = null;
        while(index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next; // 上一个节点指向当前节点的下一个节点
      }
      this.length -=1
      return current.data;
    }

    ListLink.prototype.remove = function (data) {
      return this.removeAt(this.indexOf(data))
    }

    ListLink.prototype.isEmpty = function () {
      return !this.length
    }
    ListLink.prototype.size = function () {
      return this.length
    }
}

let list = new ListLink();
console.log(list.isEmpty()); //不包含任何元素返回true
list.append('abc')
list.append('cba')
list.append('aaa')
list.insert(2, 'ccc')
list.update(3, 'bbb')
console.log(list.indexOf('ccc'));  // 2
console.log(list.get(2)); // ccc
console.log(list.removeAt(2));  // ccc
console.log(list.remove('cba'));  // cba
console.log(list.isEmpty());  // 包含元素返回true
console.log(list.size());  // 2
console.log(list.toString());  // abc bbb 
```
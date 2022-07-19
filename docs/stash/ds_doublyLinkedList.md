---
id: ds_doublyLinkedList
title: 双向链表
---
> 双向链表：当前节点可以指向上一个节点，也可以指向下一个节点。可以从头遍历到尾部，又可以从尾部遍历到头

> 缺点：
> 1. 相对单向链表复杂
> 2. 占用的更多的内存空间

```js
  // 单独的节点
  class DoublyNode {
    constructor(data){
      this.next = null;
      this.data = data;
      this.prev = null;
    }
  }

  class DoublyLinkList {
    constructor(){
      this.head = null;  // 指向第一个节点
      this.tail = null;  // 指向最后一个节点
      this.length = 0;
    }

    append(data) {
      let newNode = new DoublyNode(data);
      if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        // tail的指向是链表的最后一项
        this.tail.next = newNode;  // 新增节点的时候，要把tail的下一项先指向新节点
        newNode.prev = this.tail;  // 然后把新的节点的上一项指向最后一个节点
        this.tail = newNode;   // 把tail的指针指到新加入的node节点
      }
      this.length ++;  // 添加长度
    }

    insert(position, data) {
      if(position < 0 || position > this.length) return false;
      let newNode = new DoublyNode(data);

      if(position === 0) {
        if(!this.head) {
          this.append(data);
        } else {
          newNode.next = this.head;  // 新节点的下一项指向原来头部节点指向的节点
          this.head.prev = newNode; // 原来头部节点指向新的节点
          this.head = newNode; // 让当前的head节点指向新节点
        }
      } else if(position === this.length) {
        this.append(data);
      }else {
        let index = 0;
        let current = this.head;
        let previos = null;
        while(index ++ < position) {
          previos = current;  // 保持起来前一项
          current = current.next;  // 往后挪一项
        }
        newNode.prev = previos;
        newNode.next = current;
        current.prev = newNode;
        previos.next = newNode;
        this.length ++;
        return true;
      }
    }
    removeAt(position) {
      if(position < 0 || position > this.length - 1) return null;
      if (position === 0) {
        if(this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;  // head指向head的下一个节点
          this.head.prev = null;   // 然后上一个节点指向null;
        }
      } else if (position === this.length - 1) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        let index = 0;
        let current = this.head;
        let previos = null;
        while(index ++ < position) {
          previos = current;  // 保持起来前一项
          current = current.next;  // 往后挪一项
        }

        previos.next = current.next;
        current.next.prev = previos;
      }
      this.length --;
    }
  }


  let listLinked = new DoublyLinkList();
  listLinked.append('aaa')
  listLinked.append('bbb')
  listLinked.insert(1, 'ccc')
  listLinked.insert(3, 'ddd')
  listLinked.removeAt(3)
  console.log(listLinked);
```
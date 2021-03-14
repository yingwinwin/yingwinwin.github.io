---
id: obverse
title: 观察者模式
---

```js
class Subject {
  constructor(name) {
    this.state = "睡觉中...";
    this.name = name;
    this.observers = [];
  }

  attach(o) {
    this.observers.push(o); // 订阅时把实例放在队列中
  }

  setState(newState) {
    this.state = newState;
    this.observers.forEach((o) => o.update(this)); // 在更新状态时，调用实例中的更新方法，更新当前状态
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(baby) {
    console.log(this.name, baby.state);
  }
}

let baby = new Subject("baby");
let dad = new Observer("baba");
let mon = new Observer("mama");

baby.attach(dad); // 让爸爸订阅
baby.attach(mon); // 让妈妈订阅
baby.setState("想吃饭..."); // 当状态改变的时候，更新当前的订阅状态
```

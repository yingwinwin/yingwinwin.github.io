---
id: classType
title: 类
slug: /FE/typeScript/classType
---

### 类的定义
```ts
class Person {
    name:string;
    getName():void {
        console.log(this.name);
    }
}
let p1 = new Person();
p1.name = 'zy'
p1.getName()
```

### 类的存取器
- `get` `set` 如何在ts定义使用

```ts
class User{
    constructor(public myName:string) {}

    get name() {
        return this.myName;
    }

    set name(value) {
        this.myName = value
    }
}

let user = new User('zy');
user.name = 'z';  // 给myName赋值
console.log(user.name);  // 输出赋值后的z
```

### 修饰符
- readonly, public, private, protected
```ts
```

<!-- TODO -->
### 继承
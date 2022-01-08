---
id: classType
title: 类
slug: /FE/typeScript/classType
---

## 类的定义
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

## 类的存取器
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

## 继承
```ts
class Person {
    name:string;
    age:number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    getName():string {
        return this.name;
    }

    setName(name:string):void {
        this.name = name
    }
}

class Student extends Person {
    order:number;
    constructor(name:string, age:number, order:number) {
        super(name, age);
        this.order = order;
    }

    getOrder():number {
        return this.order;
    }
}
const student = new Student('name', 1, 1)
// 继承的子类可以使用父类的方法，获取到父类的属性
```

## 修饰符

### 1. `public` 
- **公开的**自己的子类和其他类都可以访问

```ts
class Father {
    // highlight-next-line
    public name:string;  // 自己的自己子类和其他类都可以访问
    age:number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age
    }

    getName():string {
        return this.name;
    }
}

class Child extends Father {
    constructor(name:string, age:number) {
        super(name, age);
    }
    desc() {
        // highlight-next-line
        console.log(this.name);  // 子类可以访问
    }
}

let child = new Child('zy', 26);
// highlight-next-line
console.log(child.name);  // 实例也可以访问
```

### 2. `protected` 
- **受保护的**自己和自己的子类可以的访问，其他类不能访问
```ts
class Father {
    public name:string;
    // highlight-next-line
    protected age:number;  // 自己和自己的子类可以的访问，其他类不能访问
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age
    }

    getName():string {
        return this.name;
    }
}

class Child extends Father {
    constructor(name:string, age:number) {
        super(name, age);
    }
    desc() {
        // highlight-next-line
        console.log(this.age);  // 子类可以访问
    }
}

let child = new Child('zy', 26);
// highlight-next-line
// console.log(child.age);  外部访问age报错，因为是受保护的属性
```

### 3. `private`
- **私有的**只有自己内部可以访问，子类和外部都不可以访问

```ts
class Father {
    public name:string;  // 自己的自己子类和其他类都可以访问
    protected age:number;  // 自己和自己的子类可以的访问，其他类不能访问
    // highlight-next-line
    private money:number;   // 只有自己可以访问
    constructor(name:string, age:number, money:number) {
        this.name = name;
        this.age = age;
        this.money = money;
    }

    getName():string {
        return this.name;
    }
}

class Child extends Father {
    constructor(name:string, age:number, money:number) {
        super(name, age, money);
    }
    desc() {
        // highlight-next-line
        // console.log(this.money);  // 子类不可以访问
    }
}

let child = new Child('zy', 26, 1);
// highlight-next-line
// console.log(child.money);  // 外部也不可以访问
```

### 4. `readonly`
- **只读的** 不能给设置了`readonly`的值赋值
```ts
class Person {
    readonly name:string; // 只能get 不能set
    constructor(name:string) {
        this.name = name;
    }

    getName():string {
        return this.name;
    }
    // highlight-start
    setName(v):void {
        // this.name = v; // 报错因为 那么设置了readonly,所有不能赋值
    }
    // highlight-end
}
```
### 5. `static`

- 静态属性，直接赋值给类，子类同样可以继承

```ts
class Person {
    // highlight-next-line
    static age:number = 12  // 设置静态属性
    name:string; // 只能get 不能set
    constructor(name:string) {
        this.name = name;
    }
}
// highlight-next-line
console.log(Person.age);  // 获取类的静态属性
```

<!-- TODO -->
## 装饰器

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

## 装饰器

### 装饰类
需要下面的配置，让`ts`来支持实验性的装饰器语法。
```json title="tsconfig.json"
{
    "experimentalDecorators": true, 
}
```

1. 添加属性，当前的装饰器，只能支持写死的属性。
```ts
function addName (constructor: Function) {
    constructor.prototype.name = 'zy'
}

@addName
class Person {
    name!:string;
    constructor(){}
}

let p:Person = new Person();
console.log(p.name);  // zy
```

2. 添加可以传参的属性
```ts
// 用一个外层函数来接受参数
function addName (name:string) {
    return function (constructor:Function) {
        constructor.prototype.name = name
    }
}
// highlight-next-line
@addName('zy')  // 动态传参
class Person {
    name!:string;
    constructor(){}
}

let p:Person = new Person();
console.log(p.name);  // zy
```

3. 装饰器函数不仅仅可以返回函数，也可以返回一个类，来替换之前的类，需要注意的是，**返回新的类中的属性，只能多不能少**
```ts
function replaceClass (constructor:Function) {
    return class {
        name!:string;
        // highlight-next-line
        age!:number;  // 属性只能多，但是不能少
        constructor(){
            this.name = 'zy';
            this.age = 26
        }
    }
}

@replaceClass
class Person {
    name!:string;
    constructor(){}
}

let p:Person = new Person();
console.log(p.name);
```
### 装饰属性

**实例属性** 装饰器参数为，当前的原型对象和属性的name
```ts
/**
 * @param target 当前类的原型对象 {}
 * @param key 属性的名字
 */
function toUpperCase(target:any, key:string) {
    let value = target[key];  // 从原型中取出之前的属性值
    /* 定义setter 和 getter方法 */
    const getter = () => value;
    const setter = (newVal:string) => value = newVal.toUpperCase();

    if(delete target[key]) {  // 如果成功删除掉了之前的属性就重新赋值
        Object.defineProperty(target, key, {
            set: setter,
            get: getter,
            enumerable: true,
            configurable: true
        })
    }
}

class Person {
    @toUpperCase  // 实例属性装饰器，把属性值变成大写
    name:string = 'zy';
    constructor(){}
}

let p:Person = new Person();
console.log(p.name);  // ZY
```

**静态属性** 装饰器参数为，当前类和属性的名字
```ts
/**
 * @param target 当前类
 * @param key 当前属性的名字
 */
function toAdd(target:any, key:string) {
    target[key] = target[key] + 1
}

class Person {
    @toAdd  // 使装饰的年龄 + 1
    static age:number = 26
    constructor(){}
}

console.log(Person.age);  // 27
```

### 装饰方法
1. 方法有三个参数，前两个和给属性一样，第三个是当前函数的描述属性，可以直接修改
2. 方法和属性一样，也分静态方法和实例方法。静态方法，第一个参数是当前类。实例方法，第一个参数是当前原型
```ts
/**
 * @param target 类的原型对象
 * @param key 当前函数的名字
 * @param descriptor 当前函数的描述符
 * {
  value: [Function: sum],
  writable: true,
  enumerable: false,
  configurable: true
}
 */
function toNumber(target:any, key: string, descriptor:PropertyDescriptor) {
    let oldMethod = descriptor.value;
    descriptor.value = function (...arg:any[]) {
        arg = arg.map(item => parseFloat(item));
        return oldMethod.apply(this,arg)
    }
}

class Person {
    @toNumber  // 把字符串参数转为数字相加
    sum(...arg:any[]){
        return arg.reduce((a,b) => a+b)
    }
}

let p:Person = new Person();
console.log(p.sum('1','2'));  // 3
```
### 装饰参数
```ts
/**
 * @param target 静态方法是当前的原型，如果实例方法就是当前类
 * @param methodName 方法名字
 * @param index 参数的下标
 */
 function addAge(target:any, methodName:string, index:number) {
     target.age = 26
}

class Person {
    age!:number
    toLogin(name:string, @addAge password:any) {  // 装饰方法的参数
        console.log(this.age);
    }
}

let p:Person = new Person();
p.toLogin('zy', 123)
```

### 装饰器的执行顺序
1. 类装饰器最后执行，如果类有两个装饰器，靠类近的先执行，远的后执行
2. 类装饰器里面，属性和方法，谁在上面谁先执行。
3. 类装饰器方法，方法参数装饰器 先于 方法装饰器执行。
4. 总结：`先上后下，先内后外`

## 抽象类
> 1. 抽象类不能被实例化
> 2. 抽象方法不在父类里面实现，必须在子类中实现


```ts
// 定义一个抽象类
abstract class Animal{
    name!: string;
    abstract speak():void  // 抽象方法，父类中不实现
}
// 子类实现
class Cat extends Animal{
    speak(): void {  // 必须要是想speak方法, 不然会报错
        console.log('喵喵喵');
    }
}
// 子类实现
class Dog extends Animal{
    speak(): void {
        console.log('汪汪汪');
    }
}
```
:::note
**词汇辨析：继承和多态**
- 继承：子类继承父类，可以获得父类的所有属性和方法。
- 多态：同一个方法，在不同的子类中也有不同的实现。

**词汇辨析：重写和重载**
- 重写：子类重写继承自父类的方法
- 重载：函数的重载，两个或两个以上的同名函数，参数不一样，需要给同名函数提供多函数定义。
:::

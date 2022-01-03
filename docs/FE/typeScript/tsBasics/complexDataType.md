---
id: complexDataType
title: 复杂数据类型
slug: /FE/typeScript/complexDataType
---

### 类型推导
- 如果一个值，不写类型，直接赋值，ts会帮你推导出相应的类型，就可以调用对应的类型方法。
```ts
let a;
a = 'name';
a = 20;
a = undefined;
```

### 包装类型
- ts会根据当前赋值的内容进行，类型装箱，然后调用当前类型的相应方法。
```ts
let b = 'string';
b.toLocaleLowerCase();
// let b = String('b') // 类型装箱，这样返回的还是一个基本类型
// let b = new String('b') // 报错，这样是对象类型
```

### 联合类型
- 用`|`来给变量定义多个类型
```ts
let c:string | number;
c!.toString();  // 没有赋值之前，c可以调用数组和字符串的共同方法。
c = 'name';  
c.toUpperCase(); // 赋值字符串之后，c可以调用字符串的方法。
c = 1;
c.toFixed()  // 赋值数字后，c可以调用所有数字的方法。
```

### 类型断言
- `as` 关键字，执行当前变量的类型
```ts
let d:string | number;
(d! as string) = 'name'  // 当前值为string
```

#### 双重断言
```ts
let d:string | number;  // 如果当前没有声明boolean，但是还想赋值boolean
(d! as any as boolean) = true
```

### 非空断言
- `!` 来标识当前值不为空值
```ts
let d:string | number;
(d! as string) = 'name'  // 告诉ts当前变量一定不是空值
```

### 字面量类型
- 用字面量来定义类型。
```ts
type Direction = "Up" | 'Down' | 'Left' | 'Right';

function move(direction:Direction) {
    
}
move('Up');  // 传入函数参数的只能是 Direction 定义的四个类型
```
:::info
和联合类型的区别: **字符串类型都是约束为固定的值，联合类型是约束类型**
:::

### 类型字面量
- 对象要和声明的类型一一对应。
```ts
type Person = {
    name: string;
    age: number;
}

let p:Person = {
    name: 'zy', 
    age: 26
}
```
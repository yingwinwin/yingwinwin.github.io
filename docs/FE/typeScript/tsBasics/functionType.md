---
id: functionType
title: 函数
slug: /FE/typeScript/functionType
---


### 函数声明
- 函数声明定义，需要给 **函数参数**，**函数返回值** 定义类型。

```ts
function hello(name:string):void {
    console.log(name);
}
hello('zy');  // 传入字符串类型
```

### 函数表达式
- 用`type`关键字定义一个函数类型，再把声明的`type`给当前函数定义

```ts
type GetName = (firstName: string, lastName:string)=>string; // 定义的类型
// 把类型给函数
let getName:GetName = function (firstName:string, lastName:string):string {
    return firstName + lastName;
}
getName('z','y')
```

### 可选参数
- `?:`后为可选参数，可以不进行传参，也可以传参

```ts
function print(name:string, age?:number):void {
    console.log(name,age);
}
print('zy');
```

### 默认参数
- 在参数后面写`=`，可以给参数一个默认值，与`es6`相同。

```ts
function ajax(url:string, method:string = "GET") {
    console.log(url, method);
}
ajax('/');
```

### 剩余参数
- 通过`...`可以获得所有传入的参数。（与`es6`相同）
```ts
function sum(...numbers:number[]) {
    console.log(numbers);  // [1,2,3]
}
console.log(sum(1,2,3));
```

### 函数重载
- 两个或两个以上的同名函数，参数不一样，需要给同名函数提供多函数定义。

```ts
function add(a:string, b:string):string;
function add(a:number, b:number):number;
function add(a,b) {
    return a + b;
}
add('a','b')
add(1,2);
```
**注意：函数实现要紧跟在声明之后，中间不可以用其他语句。**
```ts {3}
function add(a:string, b:string):string;
function add(a:number, b:number):number;
console.log(123)  // 错误，这样重载的定义将失去意义
function add(a,b) {
    return a + b;
}
add('a','b')
add(1,2);
```
---
id: basicDataType
title: 原始数据类型
slug: /FE/typeScript/basicDataType
---

### Js中有的数据类型

```ts
const first_name:string = 'zhou';  // 字符串
const age:number = 25;  // 数字
const isMan:boolean = false;  // 布尔
// 数组的两种表达方式
const arr1:number[] = [1, 2, 3];
const arr2:Array<number> = [1, 2, 3];
```


### `tuple`元组类型
- 元组类型**数量和类型是已知的数组**，数量和类型必须一一对应，不可改变
```ts
let tuple: [string, number] = ['zy', 25];
```

### `enum`枚举类型
- 普通枚举，可正取也可反取

```ts title="ts"
enum Gender{
    GIRL,
    BOY
}
console.log(Gender.BOY, Gender[1]);  //1 BOY
console.log(Gender.GIRL, Gender[0]);  //0 GIRL
```

```js title="js"
// 编译为js
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log(Gender.BOY, Gender[1]);
console.log(Gender.GIRL, Gender[0]);
```

- 常量枚举，通常为不可更改的数据
```ts title="ts"
const enum Colors{
    RED,
    YELLOW
}
const color = [Colors.RED, Colors.YELLOW]
```

```js title="js"
var color = [0 /* RED */, 1 /* YELLOW */];
```

### `any`任意类型
- 写了类型为`any`，`ts`中的行为与`js`行为一致，不进行任何类型检查
```ts
let root:any = document.getElementById('root');
// let root:(HTMLElement | null) = document.getElementById('root');
```

### `null` 和 `undefined`
- 是所有类型的子类型，也就是说设置其他类型，也可以设置这两个类型
```ts
let x:number;
x = 1;
// 以下这种行为是可以被允许的
x = undefined;
x = null;
```
- 如果下面这个配置为`true`，是不允许设置 `undefined` 和 `null` 为子类型的
```json title="tsconfig.json"
{
    "strictNullChecks": true, 
}
```
- 在严格模式下想使用 `undefined` 和 `null`的话可以这样写
```ts
let y: number | undefined | null;
y = 1;
y = undefined;
y = null;
```

### `never`类型
- 永远都不会触达的结果类型

1. `throw`报错，会中止代码执行
```ts
function error():never {
    throw new Error('报错了！')
    console.log('ok');  // 永远走不到
}
```

2. 死循环
```ts
function loop():never {
    while(true) {

    }
    console.log('ok'); // 永远走不到
}
```

3. 类型保护时，不能到达的类型
```ts
function fn(x:number | string) {
    if (typeof x === 'number') {

    } else if (typeof x === 'string') {

    } else {
        console.log(x); // 这里的x就是never
    }
}
```

### `void`类型
- 函数没有返回值的类型，在非严格模式下可以返回 `null` 和 `undefined`
```ts
function fn():void {
    
}
```
**和never的区别**
1. void可以返回null和undefined，never不可以返回任何值
2. 返回void的函数可以正常执行，返回never的函数，不能正常执行

### `symbol`类型
- 唯一不变的值
```json title="tsconfig.json"
{
    "target": "es2016", 
    "module": "commonjs",
}
```

```ts
let s1:symbol = Symbol('1');
let s2:symbol = Symbol('1');
console.log(s1 === s2); // 返回false
```

### `bigInt`类型
- 大数相加，js最大的值为 `2**53-1`
```js title="js"
const max = Number.MAX_SAFE_INTEGER // 2**53 - 1

console.log(max + 1 === max + 2); // true  超界无法判断，所以结果为true
```
- 修改配置项
```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "ESNext",   /* 是用 1n 语法，需要把target编译为 ESNext */
    "module": "commonjs",
    "strictNullChecks": true,    
    "lib": ["ESNext","DOM"] /* 使用BigInt语法需要添加lib数组进行编译 */
  }
}
```

```ts title="ts"
const max = Number.MAX_SAFE_INTEGER // 2**53 - 1

console.log(BigInt(max) + BigInt(1) === BigInt(max) + BigInt(2)); // false
// 与上面代码相同，1n表示形式不同，需要最高编译版本 ESNext
console.log(BigInt(max) + 1n === BigInt(max) + 2n); // false
const z:bigint = BigInt(max) + 1n
```
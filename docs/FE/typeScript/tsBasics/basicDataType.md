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
- 与js一致，不进行任何检查
```ts
let root:any = document.getElementById('root');
// let root:(HTMLElement | null) = document.getElementById('root');
```

### `null` 和 `undefined`
- 是所有类型的子类型，也就是说设置其他类型，也可以设置这两个类型

### `never`类型
- 永远都不会触达的结果类型

### `void`类型
- 函数没有返回值的类型
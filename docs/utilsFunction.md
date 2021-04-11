---
id: utilsFunction
title: 工具函数
---

## 时间
### 1. 计算距离时间差
```js
/**
 * @method getCompareTime
 * @description 例如：当前要比较的时间是3小时就传入getTime(3, 'hour')， 3天 就是 getTime(3, 'day')
 * @param num 要对比的时间数量
 * @param unit 要对比的时间单位
 * @param len 当前返回直接的长度 默认 yy-mm-dd hh-mm-ss，只要前10位就传10 就是年月日
 */
type IUnit = 'day' | 'hour';
export const getCompareTime = (num:number, unit:IUnit, len?:number) => {
  let time:number = 0;
  if (unit === 'hour') {
    time = 60 * 60 * num * 1000;
  } else if (unit === 'day') {
    time = num * 60 * 60 * 24 * 1000;
  }
  /* 设置时间为 当前的分钟 - 格林尼治时间和本地时间的时间差 = 本地时间的时间戳 */
  let date = new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset());
  let newDate = new Date(date - time).toJSON().slice(0, -5).replace(/T/g, ' ')
  if(len) {
    newDate = newDate.slice(0, len)
  }
  return newDate;
}
```

## 正则
### 给字符串添加正则转义
```js
/**
 * @description 如果字符串没有经过处理直接正则匹配会报错，所以需要转换
 * @param {string} string 当前传入的字符串
 * @returns 返回处理好的字符串
 */
function regExpase(string) {
  const reg = /[\\"'()[\]{}|*.?+$^]/g;
  let regSource = RegExp(reg.source);
  /* $&匹配到的每一项，前面加\ */
  return (string && regSource.test(string)) ? string.replace(reg, '\\$&') : (string || '');
}
```
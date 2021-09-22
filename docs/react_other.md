--- 
id: react_other
title: react中的其他概念
---

## react中的浅比较
- shallowEqual
```js
// Object.is 的 polyfile
function is(x, y) {
  //  +0 != -0 NaN == NAN，对象为同一个引用
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function shallowEqual(objA, objB) {
  // 如果对象是同一个引用就返回true
  if (objectIs(objA, objB)) {
    return true;
  }

  // 如果是基本数据类型，直接返回false
  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  // 如果是对象，但是对象的keys长度不一样，也直接返回false
  if (keysA.length !== keysB.length) {
    return false;
  }


  for (var i = 0; i < keysA.length; i++) {
    // 循环比较对象B没有对象A中的属性 || 对象A 和 对象B 的每一个属性不同
    if (!hasOwnProperty$1.call(objB, keysA[i]) || !objectIs(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
```
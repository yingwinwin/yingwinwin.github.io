---
id: promise
title: Promise
slug: /FE/javaSciprt/promise
---

## 基本使用
1. Promise是一个类
2. 传入一个函数
3. 函数里面会有两个方法返回，resolve，reject。
4. 如果代码逻辑需要成功的时候调用成功方法
5. 如果代码逻辑需要失败的时候调用失败方法
6. 成功就会走then的第一个方法
7. 失败就会走then的第二个方法
```js
new Promise((resolve, reject) => { 
    resolve() 
    // or reject()
}).then(data => {
    console.log(data)
}, err => {
    console.log(err)
})
```

## promiseA+
> promiseA+规范文档: [https://promisesaplus.com/](https://promisesaplus.com/)

### then同步调用
1. 第一版实现，三个状态在同步下的转换。
2. `then`可以接受到 成功 和 失败 状态下传入的值
3. 捕获执行器执行时的错误
```js
// promise 内部会维护三个状态
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
  constructor(executor) {
    this.state = PENDING;  // 初始状态为 pending
    this.value = undefined;  // resolve 的值
    this.reason = undefined;  // reject 的值

    const reslove = (value) => {
      if (this.state === PENDING) {  // 只有在pending的时候才会有状态的改变
        this.value = value
        this.state = FULFILLED
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.reason = reason
        this.state = REJECTED
      }
    }
    try {
      executor(reslove, reject);  // 将定义好的函数，传给用户
    } catch (error) {
      reject(error)  // 如果用户传入的函数，执行错误捕获之后返回给用户
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.state === REJECTED) {
      onRejected(this.reason)
    }
  }
}
```
**总结**
1. promise是一个类 `class Promise{}`
2. 要传入一个函数给promise，作为执行器。这个函数会在promise类的`constructor`里面执行，这就是为什么**promise的执行器会立刻调用，而不是异步方法**。
3. 传入的函数，在promise内部会返回两个函数`resolve`和`reject`用于给用户调用转换promise的状态
4. 判断如果是`pending`才会进行进行`state`的改变 和 `value`的赋值。**promise的状态只改变一次**
5. 最后在用户调用`then`函数的时候，会传入两个函数。**把then的第一个函数里面放入成功的值，第二个函数里面放失败的值**，然后在对应成功或失败的时候，返回给用户

```js title="test代码"
new Promise((resolve, reject) => {
  throw new Error('123')  // 
  // resolve(1)
  // reject(1)
}).then(res => console.log(res), err => console.log(err))
```

### then异步调用
先说一下上面版本有什么问题，是异步调用不会有任何输出，因为当前代码都是同步的，异步开始执行之前，代码已经执行完成（这部分是[事件循环](/docs/FE/browser/eventloop)的知识）,那么如何来处理异步输出呢？
```js
new Promise((resolve, reject) => {
  setTimeout(() => {  // 异步调用代码，不会有任何输出
    resolve(1)
  }, 0);
}).then(res => console.log(res), err => console.log(err))
```
使用发布订阅的方式，来贮存当前定时器之后的函数，然后then函数相当于emit，调用才会触发。
```js
// promise 内部会维护三个状态
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
  constructor(executor) {
    this.state = PENDING;  // 初始状态为 pending
    this.value = undefined;  // resolve 的值
    this.reason = undefined;  // reject 的值
    // highlight-next-line
    this.fulfilledCallback = [];  // 添加成功
    // highlight-next-line
    this.rejectCallback = [];     // 添加失败

    const reslove = (value) => {
      if (this.state === PENDING) {  // 只有在pending的时候才会有状态的改变
        this.value = value
        this.state = FULFILLED;
        // highlight-next-line
        this.fulfilledCallback.forEach(fn => fn())  // 在成功时候调用
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.reason = reason
        this.state = REJECTED;
        // highlight-next-line
        this.rejectCallback.forEach(fn => fn())   // 在失败的时候调用
      }
    }
    try {
      executor(reslove, reject);  // 将定义好的函数，传给用户
    } catch (error) {
      reject(error)  // 如果用户传入的函数，执行错误捕获之后返回给用户
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.state === REJECTED) {
      onRejected(this.reason)
    }

    // highlight-start
    // 在pending状态的时候，先把函数存起来。
    if (this.state === PENDING) {
      this.fulfilledCallback.push(() => {
        onFulfilled(this.value)
      })
      this.rejectCallback.push(() => {
        onRejected(this.reason)
      })
    }
    // highlight-end
  }
}
```
添加以上的发布订阅逻辑后，可以输出promise执行器在异步时候的代码了。

### 链式调用
下面是我们使用promise时常见的用法，那么promise是如何让当前代码可以一直链式调用的呢？
```js
let prmise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 0);
}).then(res => res, err => console.log(err))

prmise2.then(res => {
  console.log(res)
})
```
先做一下分析
1. promise的状态只能改变一次，也就是说当前再次`.then`的promise一定和上次不是一个。
2. `.then`的返回值，是一个promise，所以才能继续`.then`。
3. `reject`的返回值如果是普通值，下一个`.then`依旧是成功态
4. 这一版只考虑当前`then`的`return`是普通值的情况
```js
// promise 内部会维护三个状态
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
  constructor(executor) {
    this.state = PENDING;  // 初始状态为 pending
    this.value = undefined;  // resolve 的值
    this.reason = undefined;  // reject 的值
    this.fulfilledCallback = [];
    this.rejectCallback = [];

    const reslove = (value) => {
      if (this.state === PENDING) {  // 只有在pending的时候才会有状态的改变
        this.value = value
        this.state = FULFILLED;
        this.fulfilledCallback.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.reason = reason
        this.state = REJECTED;
        this.rejectCallback.forEach(fn => fn())
      }
    }
    try {
      executor(reslove, reject);  // 将定义好的函数，传给用户
    } catch (error) {
      reject(error)  // 如果用户传入的函数，执行错误捕获之后返回给用户
    }
  }

  then(onFulfilled, onRejected) {
    // highlight-start
    let promise2 = new Promise((resolve, reject) => {
        // 递归调用promise，在promise的执行器中，是同步执行的。
      if (this.state === FULFILLED) {
        try {
          let x = onFulfilled(this.value);
          resolve(x)  // 只要是普通值都会是成功态。不管是错误的返回值还是正确的返回值
        } catch (err) {
          reject(err)  // 只有then执行报错了，才会走reject，抛出错误
        }
      }
  
      if (this.state === REJECTED) {
        try {
          let x = onRejected(this.reason)
          resolve(x)
        } catch (err) {
          reject(err)
        }
      }
  
      if (this.state === PENDING) {
        this.fulfilledCallback.push(() => {
          try {
            let x = onFulfilled(this.value);
            resolve(x)
          } catch (err) {
            reject(err)
          }
        })
        this.rejectCallback.push(() => {
          try {
            let x = onRejected(this.reason)
            resolve(x)
          } catch (err) {
            reject(err)
          }
        })
      }
    })
    return promise2;  // 返回一个全新的promise
    // highlight-end
  }
}
```


### 处理then返回promise
上面的代码无法处理then，返回值是promise的情况。
```js
let prmise2 = new Promise((resolve, reject) => {
  resolve(1)
}).then(res => {
  // 如果当前then的返回是promise，应该按照promise当前的返回值来看是走then的第一个函数还是第二个函数
  return new Promise((resolve, reject) => {
    resolve(res)
  })
})

prmise2.then(res => {
  console.log(res)
})
```
1. 下面代码处理了，当前then如果是promise的情况
2. 对promise2的获取做了异步的处理，不然拿不到当前promise2的实例
```js
// promise 内部会维护三个状态
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

// highlight-start
// 通过这个函数来处理then的返回值是promise的情况
function pomiseResolve(x, promise2, resolve, reject) {
  if (promise2 === x) {  // 如果当前的返回值，是promise2直接抛错
    reject(reject(new TypeError('[TypeError: Chaining cycle detected for promise #<Promise>]')))
  }

  // x 需要是一个对象，或者函数
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    let called = false;  // 一个是否已经状态改变的标志
    try {
      let then = x.then;
      if (typeof then === 'function') {  // 判断then是不是一个函数
        // 用刚才的then缓存变量，不再进行x.then的重新取值
        then.call(x, y => {
          if (called) return  // 改变过不要继续处理了
          called = true  // 修改标志为改变过
          // 如果当前y还是promise接着递归处理
          pomiseResolve(y, promise2, resolve, reject)
        }, r => {
          if (called) return
          called = true
          reject(r);
        })
      } else {
          // 不是函数就是普通值
        resolve(x)
      }
    } catch (err) {
      if (called) return
      called = true
      reject(err)
    }
  } else {
      // 不是函数就是普通值
    resolve(x)
  }
}
// highlight-end

class Promise {
  constructor(executor) {
    this.state = PENDING;  // 初始状态为 pending
    this.value = undefined;  // resolve 的值
    this.reason = undefined;  // reject 的值
    this.fulfilledCallback = [];
    this.rejectCallback = [];

    const reslove = (value) => {
      if (this.state === PENDING) {  // 只有在pending的时候才会有状态的改变
        this.value = value
        this.state = FULFILLED;
        this.fulfilledCallback.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.reason = reason
        this.state = REJECTED;
        this.rejectCallback.forEach(fn => fn())
      }
    }
    try {
      executor(reslove, reject);  // 将定义好的函数，传给用户
    } catch (error) {
      reject(error)  // 如果用户传入的函数，执行错误捕获之后返回给用户
    }
  }

  then(onFulfilled, onRejected) {
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            // highlight-next-line
            pomiseResolve(x, promise2, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0);
      }
  
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            // highlight-next-line
            pomiseResolve(x, promise2, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0);
      }
  
      if (this.state === PENDING) {
        this.fulfilledCallback.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              // highlight-next-line
              pomiseResolve(x, promise2, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0);
        })
        this.rejectCallback.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              // highlight-next-line
              pomiseResolve(x, promise2, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0);
        })
      }
    })
    return promise2;
  }
}
```
### then穿透调用
如果我们这样调用promise
```js
let prmise2 = new Promise((resolve, reject) => {
  resolve(1)
}).then().then().then().then(res => {  // 使用多个then调用
  return new Promise((resolve, reject) => {
    resolve(res)
  })
})

prmise2.then(res => {
  console.log(res)
})
```
只要稍微修改一下传入then的默认值即可
```js
// promise 内部会维护三个状态
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

function pomiseResolve(x, promise2, resolve, reject) {
  if (promise2 === x) {  // 如果当前的返回值，是promise2直接抛错
    reject(new TypeError('[TypeError: Chaining cycle detected for promise #<Promise>]'))
  }

  // x 需要是一个对象，或者函数
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    let called = false;
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return
          called = true
          // 如果当前y还是promise接着递归处理
          pomiseResolve(y, promise2, resolve, reject)
        }, r => {
          if (called) return
          called = true
          reject(r);
        })
      } else {
        resolve(x)
      }
    } catch (err) {
      if (called) return
      called = true
      reject(err)
    }
  } else {
    resolve(x)
  }
}

class Promise {
  constructor(executor) {
    this.state = PENDING;  // 初始状态为 pending
    this.value = undefined;  // resolve 的值
    this.reason = undefined;  // reject 的值
    this.fulfilledCallback = [];
    this.rejectCallback = [];

    const reslove = (value) => {
      if (this.state === PENDING) {  // 只有在pending的时候才会有状态的改变
        this.value = value
        this.state = FULFILLED;
        this.fulfilledCallback.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.reason = reason
        this.state = REJECTED;
        this.rejectCallback.forEach(fn => fn())
      }
    }
    try {
      executor(reslove, reject);  // 将定义好的函数，传给用户
    } catch (error) {
      reject(error)  // 如果用户传入的函数，执行错误捕获之后返回给用户
    }
  }

  then(onFulfilled, onRejected) {
    // highlight-start
    // 设置默认值
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err};
    // highlight-end
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            pomiseResolve(x, promise2, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0);
      }
  
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            pomiseResolve(x, promise2, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0);
      }
  
      if (this.state === PENDING) {
        this.fulfilledCallback.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              pomiseResolve(x, promise2, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0);
        })
        this.rejectCallback.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              pomiseResolve(x, promise2, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0);
        })
      }
    })
    return promise2;
  }
}
```

### 最终版（通过测试）
进行promiseA+规范测试
```shell
# 安装全局包
npm install promises-aplus-tests -g
# 在cmd中运行当前的promise文件
promises-aplus-tests 1.js
```

```js title="1.js"
// promise 内部会维护三个状态
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

function pomiseResolve(x, promise2, resolve, reject) {
  if (promise2 === x) {  // 如果当前的返回值，是promise2直接抛错
    reject(new TypeError('[TypeError: Chaining cycle detected for promise #<Promise>]'))
  }

  // x 需要是一个对象，或者函数
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    let called = false;
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return
          called = true
          // 如果当前y还是promise接着递归处理
          pomiseResolve(y, promise2, resolve, reject)
        }, r => {
          if (called) return
          called = true
          reject(r);
        })
      } else {
        resolve(x)
      }
    } catch (err) {
      if (called) return
      called = true
      reject(err)
    }
  } else {
    resolve(x)
  }
}

class Promise {
  constructor(executor) {
    this.state = PENDING;  // 初始状态为 pending
    this.value = undefined;  // resolve 的值
    this.reason = undefined;  // reject 的值
    this.fulfilledCallback = [];
    this.rejectCallback = [];

    const reslove = (value) => {
      if (this.state === PENDING) {  // 只有在pending的时候才会有状态的改变
        this.value = value
        this.state = FULFILLED;
        this.fulfilledCallback.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.reason = reason
        this.state = REJECTED;
        this.rejectCallback.forEach(fn => fn())
      }
    }
    try {
      executor(reslove, reject);  // 将定义好的函数，传给用户
    } catch (error) {
      reject(error)  // 如果用户传入的函数，执行错误捕获之后返回给用户
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err};
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            pomiseResolve(x, promise2, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0);
      }
  
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            pomiseResolve(x, promise2, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0);
      }
  
      if (this.state === PENDING) {
        this.fulfilledCallback.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              pomiseResolve(x, promise2, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0);
        })
        this.rejectCallback.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              pomiseResolve(x, promise2, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0);
        })
      }
    })
    return promise2;
  }
}
// highlight-start
// 测试代码，创建延迟对象
Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
      dfd.resolve = resolve;
      dfd.reject = reject;
  });
  return dfd
}
// highlight-end

module.exports = Promise; // 测试时注意一定要导出promise
```

## 其他方法

### promisify
1. 将node中的异步方法，封装为promise
2. node内部中提供了更简便的`const fs = require('fs').promises`引入

```js
const fs = require('fs');
const path = require('path');

// 将一个方法转成promise
function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, data)=>{
                if(err) reject(err);
                resolve(data);
            })
        })
    }
}
// 将所有方法转成promise
function promisifyAll(obj) {
    let result = {}
    for(let key in obj) {
        result[key] = typeof obj[key] === 'function' ? promisify(obj[key]) : obj[key]
    }
    return result;
}
// 使用
let newfs = promisifyAll(fs);
newfs.readFile(path.resolve(__dirname, './1.txt'), 'utf-8').then(res => {
    console.log(res)
})
```

### Promise.deferred
用来封装一些方法使用。
```js
const fs = require('fs');
const path = require('path');

Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd
}

function readfile(...args) {
    // 使用延迟对象上面的方法
    let dfd = Promise.deferred();
    fs.readFile(...args, function (err,data) {
        if(err) dfd.reject(err);
        dfd.resolve(data);
    })
    return dfd.promise  // 同样return promise
}

readfile(path.resolve(__dirname, './1.txt'), 'utf-8').then(res => {
    console.log(res)
})
```
### Promise.resolve
1. resolve 方法有等待效果
2. 可以直接返回一个成功状态的promise
```js
Promise.reslove = function (value) {
    return new Promise((reslove, reject) => {
        if (value instanceof Promise) {
            return value.then(reslove, reject)
        } else {
            reslove(value)
        }
    })
}
```

```js title="test"
let p = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove('aaa')  // 会等待3秒后执行
    }, 3000);
})
Promise.reslove(p).then(res => {
    console.log(res)
})
```

### Promise.reject
reject没有resolve的等待效果，会直接抛出错误。
```js
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    })
}
```

```js title="test"
let p = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove('aaa')
    }, 3000);
})
Promise.reject(p).then(null, err => console.log(err))  // 直接抛出pending状态的promise
```

### Promise.prototype.catch
1. 用来捕获错误。本质上就是`.then`，程序员为了少写语法，做了一下包装
2. 可以用来做统一的错误处理
3. 如果`catch`之后继续`.then`依旧可以正常获取catch的返回值。
```js
Promise.prototype.catch = function (errfn) {
    return this.then(null, errfn)
}
```
```js title="test"
new Promise((resolve, reject) => {
    reject('1')
}).catch(res => {
    return res
}).then(res => {
    console.ltog(res) // 1
})
```

### Promise.prototype.finally
1. 无论成功失败都要执行
2. 如果返回的是异步，会有等待效果
```js
Promise.prototype.finally = function (finallyCb) {
    return this.then(
        value => Promise.reslove(finallyCb()).then(() => value),
        reason => Promise.reslove(finallyCb()).then(() => {throw reason})
    )
}
```

```js title="test"
new Promise((resolve, reject) => {
    resolve(1);
    // or reject('1')
}).finally(res => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res)
            console.log('finally')
        }, 1000);
    })
}).then((res)=>{
    console.log(res)
}).catch(err => {
    console.log('f', err)
})
```


### promise.all
并发请求，一个有错就报错
```js
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let arr = [];
        let times = 0;
        function processData(key, value) {
            arr[key] = value;  // 没有反正就进行赋值
            if (promises.length === ++times) { // 记录promise完成，返回最终结果
                resolve(arr)
            }
        }

        for(let i = 0; i < promises.length; i ++) {
            // 对传入的promise进行循环处理，如果不是promise就让她变成promise
            Promise.reslove(promises[i]).then((res) => {
                processData(i, res)
            }, reject)  // 错误直接进行错误处理
        }
    })
}
```

```js title="test"
Promise.all([fs.readFile(path.resolve(__dirname, './1.txt'), 'utf-8'), 2]).then(res => {
    console.log(res)
}).catch(err => console.log(err))
```

### promise.race
1. 竞速，谁快先走谁
2. 一个成功或者失败就不在获取其他结果
```js
promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < promise.length; i ++) {
            // 并发托管传入的promise，然后谁快就会改变promise的状态，另一个即使改变也不会再处理
            Promise.resolve(promise[i]).then(resolve, reject);
        }
    })
}
```
常用来处理超时逻辑
```js
const timeout = (time) => new Promise((resolve, reject) => {
    setTimeout(reject, time, new Error('超时'))
})

const promise = (time) => new Promise((resolve, reject) => {
    setTimeout(resolve, time, '成功')
})

Promise.race([timeout(1000), promise(2000)]).then(res => {
    console.log(res)
}).catch(err => console.log(err))
```
### promise.allSettled
无论成功和失败所有状态都会返回
```js
Promise.allSettled = function (promises) {
    return new Promise((resolve, reject) => {
        let result = [];
        let time = 0;
        function processData(value, index, status) {
            // 返回一个对象
            result[index] = {
                status,
                [status === 'fulfilled' ? 'value' : 'reason']: value
            }
            if (promises.length === ++time) {  // 同样达到长度就返回
                resolve(result)
            }
        }
        for(let i = 0; i < promises.length; i++) {
            // 成功失败都放到数组中统一处理
            Promise.resolve(promises[i]).then(res => {
                processData(res, i, 'fulfilled')
            }, (err) => {
                processData(err, i, 'rejected')
            })
        }
    })
}

Promise.allSettled([fs.readFile(path.resolve(__dirname, './1.txt'), 'utf-8'), fs.readFile(path.resolve(__dirname, './12.txt'), 'utf-8')]).then(res => {
    console.log(res)
})
```

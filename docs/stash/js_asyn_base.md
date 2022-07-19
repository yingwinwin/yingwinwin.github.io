---
id: asyn_base
title: 异步基础
---

### 1. 并发和并行的区别
- 并发是宏观概念，任务A和任务B，在一段时间内通过任务间的切换完成了这两个任务，这种情况就是并发
- 并行是微观概念，CPU有两个核心，那么就可以同时完成任务AB，同时完成两个任务的情况就是并行

### 2. 回调函数
```js
ajax(url, () =>{
    // 处理逻辑 
})
```
- 为了让代码顺序执行，一般会层层嵌套回调函数，导致回调地狱出现
- 回调地狱既不利于维护，也不利于阅读
- 耦合性高
- 很难处理错误，且不能使用try catch捕获错误，不能直接return

### 3. Generator
- 通过在function 旁边加一个*，来声明一个生成器函数
- 通过yield关键字，来进行挂起和执行，碰到yield关键字会生成中间结果，返回一个新的对象
- 生成器的工作
1. 挂起开始：创建一个生成器，最开始以这个状态开始，里面一行代码都不会执行
2. 执行：生成器中的代码执行的状态。执行可能是刚开始，也可能是上次挂起的时候继续。当生成器调用了next方法的时候，会进入到这个状态。
3. 挂起让渡：当生成器执行的时候遇到了yield表达式，会创建一个包含返回值的对象，然后在挂起执行。这个时候生成器在等待执行
4. 完成：在生成器执行的时候。遇到return，或者所有代码都执行完成之后，生成器进入该状态
- 生成器的执行上下文是一直存在的，挂起的时候一直存在，没有使用的时候是undefined，有值了之后也不会销毁和函数不同，类似创建了一个闭包，可以更好的取挂起的状态和值。
```js
function* WeaponGenerator() {
  yield "Katana";
  yield "Wakizashi";
}

let weapon = WeaponGenerator()
let result1 = weapon.next()
let result2 = weapon.next()
let result3 = weapon.next()
console.log(result1);
console.log(result2);
console.log(result3);
/* 
  {value: "Katana", done: false}
  {value: "Wakizashi", done: false}
  {value: undefined, done: true}
*/
```
- 用while循环进行迭代
```js
function* WeaponGenerator() {
  yield "Katana";
  yield "Wakizashi";
}

let weapon = WeaponGenerator()
let item;
while(!(item = weapon.next()).done) {
 console.log(item.value);  // Katana 
                           // Wakizashi 
}
```
- 生成唯一id
```js
function* idGenerator() {
  let id = 0;
  while(true) {  // 在生成器中写死循环也没关系，因为next触发才会执行，所以不会出现死循环
    yield ++id;
  }
}
// 生成器，返回一个迭代器
let idIterator = idGenerator();
let name1 = idIterator.next().value;
let name2 = idIterator.next().value;
let name3 = idIterator.next().value;

console.log(name1, name2, name3);  // 1, 2, 3
```
- 生成器的参数
```js
function *foo(x) {
    // 传入的二个迭代器的值，是第一个yield的返回值
    // 也就是yield (x + 1) = 12
  let y = 2 * (yield (x + 1))  // 2 * 12 = 24
  let z = yield ( y / 3);
  return x + y + z  // 42
}

let itor = foo(5);  //x = 5
let itor1 = itor.next()
let itor2 = itor.next(12) // y = 24
let itor3 = itor.next(13) // z = 13
console.log(itor1, itor2, itor3);  
// {value: 6, done: false} {value: 8, done: false} {value: 42, done: true}
```

```js
// 用上一个的返回值，去请求下一个内容
const fs = require('fs');
const util = require('util')
let readFile = util.promisify(fs.readFile);

function* read() {
    let data = yield readFile('./a.txt', 'utf8');
    // 拿到 b.txt
    data = yield readFile(data, 'utf8');
    // 输出b
    return data;
}


let it = read();
let {value, done } = it.next();

value.then(data =>{
    let { value, done } = it.next(data);
    value.then(data => {
        console.log(data);
    })
})
```

- co
```js
const fs = require('fs');
const util = require('util')
let readFile = util.promisify(fs.readFile);

function* read() {
    let data = yield readFile('./a.txt', 'utf8');
    // 拿到 b.txt
    data = yield readFile(data, 'utf8');
    // 输出b
    return data;
}

function co(it) {
    return new Promise((resolve, reject) => {
        // 异步迭代用递归
        function next(data) {
            let {value, done} = it.next(data);
            if(done) {
                resolve(value);
            }else {
              // 如果没有结束递归取出结果
                Promise.resolve(value).then(next, reject)
            }
        }
        next();
    })
}

co(read()).then(data => {
    console.log(data);
})
```

### 4. Promise
- [Promise](https://yingwinwin.github.io/docs/promise)

### 5. async await
- co + genertor
```js
const fs = require('fs');
const util = require('util')
let readFile = util.promisify(fs.readFile);

async function read() {
    let data = await readFile('./a.txt', 'utf8');
    // 拿到 b.txt
    data = await readFile(data, 'utf8');
    // 输出b
    return data;
}

read().then(data => {
    console.log(data);
})
```

- 是Promise + genertor的语法糖
```js
let a = 0;
// 异步代码会后执行，但是由于是闭包
// 所以a变量会存贮在当前执行的时候，在执行的时候取出的就是之前的a，所以是0 + 10
let b = async () => {
    a = a + await 10;
    console.log('2', a) // 2, 10
}
b();
a++
console.log('1', a)  // 1, 1
```

### 6. 定时器
- 定时器在延迟队列中，延迟队列会在消息队列结束之后执行。
```java
void ProcessTimerTask(){
  //从delayed_incoming_queue中取出已经到期的定时器任务
  //依次执行这些任务
}

TaskQueue task_queue；
void ProcessTask();
bool keep_running = true;
void MainTherad(){
  for(;;){
    //执行消息队列中的任务
    Task task = task_queue.takeTask();
    ProcessTask(task);
    
    //执行延迟队列中的任务
    ProcessDelayTask()

    if(!keep_running) //如果设置了退出标志，那么直接退出线程循环
        break; 
  }
}
```
- 注意事项
1. 如果当前任务执行时间过久，会影响定时器任务的执行
```js
function bar() {
    console.log('bar')
}
function foo() {
    setTimeout(bar, 0);
    // 定时器会等待js脚本执行完成之后，再执行
    for (let i = 0; i < 5000; i++) {
        let i = 5+8+8+8
        console.log(i)
    }
}
foo()
```
2. 如果 setTimeout 存在嵌套调用，那么系统会设置最短时间间隔为 4 毫秒，系统会认为当前任务阻塞，所以会延迟执行
3. 未激活的页面，setTimeout 执行最小间隔是 1000 毫秒，目的是为了节约资源
4. 延时执行时间有最大值 2147483647 毫秒，超过时间定时器会立即执行
5. 在定时器中使用this
   + 使用箭头函数
   + 使用bind绑定

### 7. XMLHttpRequest
```js

 function GetWebData(URL){
    /**
     * 1:新建XMLHttpRequest请求对象
     */
    let xhr = new XMLHttpRequest()

    /**
     * 2:注册相关事件回调处理函数 
     */
    xhr.onreadystatechange = function () {
      // 请求的状态
        switch(xhr.readyState){
          case 0: //请求未初始化
            console.log("请求未初始化")
            break;
          case 1://OPENED
            console.log("OPENED")
            break;
          case 2://HEADERS_RECEIVED
            console.log("HEADERS_RECEIVED")
            break;
          case 3://LOADING  
            console.log("LOADING")
            break;
          case 4://DONE
            if(this.status == 200||this.status == 304){
                console.log(this.responseText);
                }
            console.log("DONE")
            break;
        }
    }

    // 超时触发
    xhr.ontimeout = function(e) { console.log('ontimeout') }
    // 错误触发
    xhr.onerror = function(e) { console.log('onerror') }

    /**
     * 3:打开请求
     */
    xhr.open('Get', URL, true);//创建一个Get请求,采用异步


    /**
     * 4:配置参数
     */
    xhr.timeout = 3000 //设置xhr请求的超时时间
    xhr.responseType = "text" //设置响应返回的数据格式
    // 配置其他请求头信息
    xhr.setRequestHeader("X_TEST","time.geekbang")

    /**
     * 5:发送请求
     */
    xhr.send();
}
```

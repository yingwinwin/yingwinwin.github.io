---
id: RegExp
title: 正则表达式基本使用
---
## 推荐网址
- [正则可视化](https://jex.im/regulex/)
- [正则可视化](https://regexper.com/)
- [正则101](https://regex101.com/)
## 正则表达式 regular expression RegExp
> 用来处理字符串的规则
- 只能处理字符串
- 它是一个规则： 可以验证字符串是否符合某个规则(test), 也可以,把字符串中符合规则的内容捕获到(exec / match...)

```js
let str = 'good good study , day day up !' ;
 // 学正则就是用来制定规则(是否包含数字);
let reg = /\d+/
reg.test(str);  // => false

str = '2019-08-12';
reg.exec(str); //=>['2019', index:0, inputs:'原始字符串']
```
## **编写正则表达式**
创建方式有两种
```js
// => 字面量创建方式(两个斜杠包起来的,都是用来描述规则的元字符)
let reg1 = /\d+/;

//=>构造函数模式创建  两个参数:元字符字符串, 修饰符字符串
let reg2 = new RegExp("\\d+");
```

### 1. 正则表达式由两部分组成
- 元字符
- 修饰符
```js
/* 常用元字符 */
// => 1.量词元字符: 设置出现的次数
* 零到多次
+ 一到多次
? 零次或者一次
{n} 出现n次
{n,} 出现n到多次
{n, m} 出现n到m次


// => 2.特殊元字符:单个或者组合在一起代表特殊的含义
\ 转义字符(普通->特殊->普通)
. 除\n(换行符)以外的任何字符
^ 以哪一个元字符作为开始
$ 以哪一个元字符作为结束
\n 换行符
\d 0~9之间的一个数字
\D 非0~9之间的一个数字(大写和小写的意思是相反的)
\w 数字、字母、下划线中的任意一个字符
\s 一个空白字符(包括空格、制表符、换页符等)
\t 一个制表符(一个tab键:四个空格)
\b 匹配一个单词的边界
x|y x或者y中的一个字符z
[xyz] x或者y或者z中的一个字符
[^xy] 除了x/y以外的任意字符
[a-z] 指定a-z这个范围中的任意字符 [0-9a-zA-Z_] === \w
[^a-z] 上一个的取反"非"
() 正则中的分组符号
(?:) 只匹配不捕获
(?=) 正向预查
(?!) 负向预查

// => 3.普通元字符: 代表本身含义的
/zengze/ 此正则匹配的就是"zengze"
```

```js
/* 正则表达式常用的修饰符: img */
i => ignoreCase 忽略单词大小写匹配
m => multiline  可以进行多行匹配
g => global     全局匹配
```

### 2. 正则捕获属性
```js
let reg = /([a-z])([0-9])([A-Z])/;
let result = '@#a1B888'.match(reg);
console.log(result);
/**
 * 1.匹配到的字符串部分a1B
 * 后面的就是分组 3个分组，值 分别是 a  1 B
 * 最后结果 数组中的元素有4个,其他是正则的属性
 */
console.log(result.length);  // 4 

let arr = ['a1B','a','1','B'];
arr.index = '@#a1B888'.indexOf('a1B');
arr.input = '@#a1B888';
console.log(arr);
//[ 'a1B', 'a', '1', 'B', index: 2, input: '@#a1B888' ]
```
### 3. groups属性
```js
console.log(/(?<x>\d{2})-(?<y>\d{2})/.exec('11-22'));
console.log('11-22'.match(/(?<x>\d{2})-(?<y>\d{2})/));
console.log('11-11'.match(/(?<x>\d{2})-\k<x>/));
console.log('11-22'.replace(/(?<x>\d{2})-(?<y>\d{2})/, "$<y>-$<x>"));
// 给分组起一个名字，你可通过分组名字引用这个分组的值

/* 
[
  '11-22',
  '11',
  '22',
  index: 0,
  input: '11-22',
  groups: [Object: null prototype] { x: '11', y: '22' }
]
[
  '11-22',
  '11',
  '22',
  index: 0,
  input: '11-22',
  groups: [Object: null prototype] { x: '11', y: '22' }
]
[
  '11-11',
  '11',
  index: 0,
  input: '11-11',
  groups: [Object: null prototype] { x: '11' }
]
22-11
 */
```

## **元字符详细解析**

### 1. `^ $`

```js
let reg = /^\d/
console.log(reg.test('zengze'))  // false
console.log(reg.test('2020zengze')) //true
console.log(reg.test('zengze2020')) //false
```

```js
let reg = /\d$/
console.log(reg.test('zengze'))  // false
console.log(reg.test('2020zengze')) //false
console.log(reg.test('zengze2020')) //true
```

```js
// 两个都不加: 包含字符串规则即可
let reg1 = /\d+/
// 两个都加: 字符串只能是和规则一致的内容
let reg2 = /^\d+$/

//=> 举个例子 : 验证手机号(11位数字, 第一个数字是1即可)
let reg = /^1\d{10}$/
```

### 2. `\`

```js
// => 点不是小数点,是除\n以外的任意字符
let reg = /^2.3$/
reg.test('2.3')  // true
reg.test('2@3')  // true
reg.test('23')   // false

// => 基于转义字符, 让其只能代表小数点
reg = /^2\.3$/;
reg.test('2.3')  // true
reg.test('2@3')  // false

let str = '\\d';
let reg1 = /^\d$/; //\d代表0-9的一个数字
reg.test(str);   //false
let reg2 = /^\\d$/ //=>把特殊符号转换为普通的
reg.test(str);   //true
```


### 3. `x|y`

```js
let reg = /^18|29$/;
reg.test('18')  // 全为true
reg.test('29')
reg.test('129')
reg.test('189')
reg.test('1829')
reg.test('829')
reg.test('182')

// -------- 直接用x|y 会存在很乱的优先级问题,一般写的时候都伴随着小括号进行分组,因为小括号改变处理的优先级 => 小括号:分组
let reg = /^(18|29)$/;
reg.test('18')  // true
reg.test('29')  // true
reg.test('129') // false
reg.test('189') // false
// 只能是x|y中的一个了
```

### 4. `[]`

```js
// 1.中括号中出现的字符一般都代表本身的含义
let reg = /^[@+]$/;
reg.test('@@'); //false
reg.test('@');  // true
reg.test('+');  // true

reg = /^[\d]$/;  // \d在中括号还是0-9
reg.test('d')   //false
reg.test('\\')  //false
reg.test('9')   //true


// 2. 中括号中不存在多位数
reg = /^[18]$/;
reg.test('1')  // true
reg.test('8')  // true
reg.test('18')  // false

reg = /^[10-29]$/    // 1或0-2或9
reg.test('1')  // true
reg.test('9')  // true
reg.test('0')  // true
reg.test('2')  // true
reg.test('10')   //false
```

## **常用的正则表达式**

### 1. 验证是否式有效数字

   ```js
   /*
   * 规则分析
   * 1. 可能出现 + - 号, 也可能不出现 [+-]?  加或减，只能出现0或者1次？
   * 2. 一位0-9都可以,多为首位不能是0  (\d|[1-9]\d+)
   * 3. 小数部分可能有可能没有,一旦有后面必须有小数点 + 数字(\.\d+)?   也是之恩出现0-1次小数点
   */
   let reg = /^[+-]?(\d|[1-9]\d+)(\.\d+)?$/;
   
   /^$/  // 只能是啥啥啥，以什么开头，以什么结尾
   ```

### 2. 验证密码

   ```js
   // => 数字、字母、下划线
   // => 6~16位
   let reg = /^\w{6,16}$/
   ```

### 3. 验证真实姓名

   ```js
   /*
   * 1. 汉字  /^[\u4E00-\u9FA5]$/
   * 2. 名字长度 2-10位 [\u4E00-\u9FA5]{2,10}
   * 3. 可能有译名·汉字 (·[\u4E00-\u9FA5]{2,10}){0,2}   前面小括号里面的内容能出现0-2次
   */
   let reg = /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/
   ```

### 4. 验证邮箱

   ```js
   let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
   
   //=> \w+((-\w+)|(\.\w+))*
   //1. 开头是数字字母下划线（1到多位）
   //2. 还可以是 -数字字母下划线 或者 .数字字母下划线,整体零到多次
   // => 邮箱的名字由"数字,字母,下划线 -." 几部分组成,大那是-.不能连续出现也不能作为开始
   
   // => @[A-Za-z0-9]+
   // 后面紧跟着: 数字,字母 (1-多位)
   
   // => ((\.|-)[A-Za-z0-9]+)*     *代表零到多次
   // 1. 对@后面的名字的补充
   // 多域名 .com.cn
   // 企业邮箱 
   
   //=>\.[A-Za-z0-9]+
   // 这个匹配的是最后的域名(.com/.cn/.org/...)
   
   ```

### 5. 身份证号码

   ```js
   /*
   * 1. 一共18位
   * 2. 最后一位可能是x
   * 
   * 身份证前六位 : 省市县 
   * 最后八位: 年月日
   * 最后四位:
   *    最后一位: X或者数字
   * 	 倒数第二位 => 偶数 女 奇数 男
   *	 其余的是经过算法算出来的
   */
   
   // let reg = /^\d{17}(\d|X)$/
   // => 小括号分组的第二个作用:分组捕获,不仅可以把大正则匹配的信息捕获到,还可以单独捕获到每个小分组的内容
   let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(\d|X)$/
   reg.exec("130828199012040617")
   
   //["130828199012040617", "130828", "1990", "12", "04", "1", "7", index: 0, input: "130828199012040617", groups: undefined]  捕获结果是一个数组,包含每一个小分组单独获取的内容
   ```

## **正则两种创建方式的区别**

```js
// => 构造函数因为传递的是字符串,\需要写两个才代表斜杠
let reg = /\d+/g;
reg = new RegExp('\\d+','g');

// => 正则表达式中的部分内容式变量储存的值
// 1. 两个斜杠中间包起来的都是元字符
let type = 'zhufeng';
reg = /^@"+type+"@$/;

console.log(reg.test("@zhufeng@"))   //false
//2. 只有构造函数才能用字符串拼接的方式
reg = new RegExp("^@"+type+"@$", 'g'); 
console.log(reg.test("@zhufeng@"))   //true
```

----

## **正则的捕获**

> 实现正则捕获的方法
>
> * 正则RegExp.prototype上的方法
>
>   * exec
>
>   * test
>
> * 字符串String.prototype上支持正则表达式处理的方法
> 	* replace
> 	* match
> 	* splite
> 	* .......

```js
let str = "www2019yyy2020zzz2021";
let reg = /\d+/;

/*
* 基于exec实现正则的捕获
*  1. 捕获到的结果是null或者一个数组
*      第一项: 本次捕获的内容
*      其余项: 对应小分组本次单独捕获的内容
*	   index: 当前捕获内容在字符串中的起始索引
*	   input: 原始字符串
*  2. 每执行一次exec, 只能捕获到一个符合正则规则的,但是默认情况下,我们执行100遍,获取的结果永远都是第一个匹配到的,其余的捕获不到   => "正则的懒惰性" : 默认只捕获第一个
*/
console.log(reg.exec(str));  //["2019", index: 3, input: "www2019yyy2020zzz2021", groups: undefined]

/*
//=> 实现正则捕获的前提是 : 当前正则要和字符串匹配,如果不匹配捕获的结果是null;
let reg = /^\d+$/;
console.log(reg.test(str)); //false
console.log(reg.exec(str)); // null
*/
```

## **正则的懒惰性**

```js
let str = "www2019yyy2020zzz2021";
  let reg = /\d+/;
  /**
   * reg.lastIndex: 当前正则下一次匹配的起始索引位置 
   *   懒惰性的原因: 默认情况下lastIndex的值不会被修改,每一次都是从字符串开始位置查找,所以只能找到第一个;
   * 解决办法 : 全局修饰符"g"
   */
  console.log(reg.lastIndex);  //=> 0 下面匹配捕获的是从str索引零位置开始找 
  console.log(reg.exec(str)); //=> 0 第一次匹配捕获完成,lastIndex没有改变,所以下次还是从字符串开始找,找到的永远是第一个匹配到的
  
  
  let reg = /\d+/g;
  
  
  console.log(reg.exec(str)); // => ["2019"...]
  console.log(reg.lastIndex); //=> 7 设置全局匹配修饰符g后,第一次匹配完,lastIndex会自己修改
  console.log(reg.exec(str)); // => ["2020"...]
  console.log(reg.lastIndex); //=> 14

  console.log(reg.exec(str)); // => ["2021"...]
  console.log(reg.lastIndex); //=> 21
  console.log(reg.exec(str)); // => null 当捕获到最后一次的时候,再次捕获的时候,结果是null, lastIndex也重新归零,匹配也重新开始了
  console.log(reg.lastIndex); //=> 0
  console.log(reg.exec(str)); // ["2019"...]



  if (reg.test(str)) {
    // => 验证一下: 只有正则和字符串匹配我们在捕获
    console.log(reg.lastIndex); // => 7 基于test匹配验证后,lastIndex 已经被修改为第一次匹配后的结果,所以下一次捕获不再从头开始了
    console.log(reg.exec(str)); // => ["2020"...]
  }


  // => 需求: execAll,执行一次把所有匹配的结果捕获到(前提正则一定要设置全局修饰符g)
  (function() {
    function execAll (str = "") {
      // str : 要匹配的字符串
      // this : RegExp的实例(当前操作的正则)
      // 进来后的第一件事,是验证当前正则是否加了g;
      if(!this.global) return this.exec(str);
      // ary : 储存最后所有捕获的信息 res储存每一次捕获的内容(数组)
      let ary = [],
          res = this.exec(str);
      while(res) {
        // 把每一次捕获的内容res[0]存放到数组中
        ary.push(res[0]);
        res = this.exec(str);
      }
      return ary;

    }
    RegExp.prototype.execAll = execAll
  })()

  console.log(reg.execAll(str));
  // => 字符串中的match方法,可以在执行一次的情况下,捕获到所有匹配的数据(前提:得设置g才可以)
  console.log(str.match(reg));
```

## **正则的分组捕获**
```js
let str = "130828199012040112"
let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(?:\d|X)$/
console.log(reg.exec(str))
console.log(str.match(reg))
//=>["130828199012040112", "130828", "1990", "12", "04", "1", "2", index: 0, input: "130828199012040112", groups: undefined]
//=>第一项：大正则匹配的结果
//=>其余项：每一个小分组单独匹配捕获的结果
//=>如果设置了分组(改变优先级),但是捕获的时候不需要单独捕获,可以基于?:来处理
```

```js
//=>既要捕获到{数字},也想单独的把数字也获取到,例如:第一次找到{0}还需要单独获取0
let str = "{0}年{1}月{2}日"
let reg = /\{(\d+)\}/

//=>不设置g只匹配一次,exec和match结果一样,既有大正则,也有像分组
console.log(reg.exec(str))
console.log(str.match(reg))
// ["{0}", "0", index: 0, input: "{0}年{1}月{2}日", groups: undefined]

//=> 多次匹配的情况下,match只能把大正则匹配的内容获取到,小分组的信息匹配不到
let str = "{0}年{1}月{2}日"
let reg = /\{(\d+)\}/g
console.log(str.match(reg))  //["{0}", "{1}", "{2}"]

//分组捕获
let aryBig = [],
    arySmall = [],
    res = reg.exec(str);
while(res){
  let [big, small] = res;
  aryBig.push(big);
  arySmall.push(small);
  res = reg.exec(str);
}
console.log(aryBig, arySmall); 
// ["{0}", "{1}", "{2}"]  // ["0", "1", "2"]

```

```js
//=>分组的第三个作用,"分组引用";
let str = "book"; // good look moon foot 
let reg = /^[a-zA-Z]([a-zA-Z])\1[a-zA-Z]$/; //=>分组引用就是通过"\数字"让其代表和对应分组出现一模一样的内容

console.log(reg.test('book'))  //true
console.log(reg.test('deep'))  //true
console.log(reg.test('some'))  //false
```

## **正则捕获的贪婪性**

```js
let str = 'aaa2019@2020bbb';
//=>正则捕获的贪婪性:默认情况下,正则捕获的时候,是按照当前正则所匹配的最长的结果来获取的
let reg = /\d+/g
console.log(str.match(reg)); // => ['2019','2020'];

//=>在量词元字符后面设置? 取消捕获时候的贪婪性(按照正则匹配的最短结果来获取)
reg = /\d+?/g;
console.log(str.match(reg)); // ["2", "0", "1", "9", "2", "0", "2", "0"]
```
## **问号在正则的五大作用**
- 问号左边是非量词元字符:本身代表量词元字符,出现零到一次;
- 问号左边是量词元字符: 取消捕获时候的贪婪性
- (?:) 只匹配不捕获
- (?=) 正向预查
- (?!) 负向预查
```js
//匹配分组捕获
console.log('1ab'.match(/1([a-z])([a-z])/));
//非捕获分组
console.log('1ab'.match(/1(?:[a-z])([a-z])/));
//正向肯定前瞻 并不消耗掉字符
console.log('1a'.match(/\d(?=[a-z])[a-z]/));
//正向否定前瞻
console.log('1a'.match(/\d(?![A-Z])[a-z]/));
//反向肯定后瞻
//反向否定后瞻
console.log('b1a'.match(/(?<=[a-z])\d[a-z]/));
console.log('A1a'.match(/(?<![a-z])\d[a-z]/));

/* 
[ '1ab', 'a', 'b', index: 0, input: '1ab', groups: undefined ]
[ '1ab', 'b', index: 0, input: '1ab', groups: undefined ]
[ '1a', index: 0, input: '1a', groups: undefined ]
[ '1a', index: 0, input: '1a', groups: undefined ]
[ '1a', index: 1, input: 'b1a', groups: undefined ]
[ '1a', index: 1, input: 'A1a', groups: undefined ]
 */
```


## **其他正则捕获的方法**
### 1. test也能捕获(本意是匹配)
```js
let str = "{0}年{1}月{2}日"
let reg = /\{(\d+)\}/g;
console.log(reg.test(str));  // => true
console.log(RegExp.$1); // => "0"

console.log(reg.test(str));  // => true
console.log(RegExp.$1); // => "1"

console.log(reg.test(str));  // => true
console.log(RegExp.$1); // => "2"

console.log(reg.test(str));  // => false
console.log(RegExp.$1); // => "2" 储存的是上次捕获的结果

// => RegExp.$1~RegExp.$9 获取当次本次正则匹配后,第一个到第九个分组信息
```
### 2. replace字符串中实现替换的方法(一般都是伴随正则一起使用的)
```js
let str = "zzz@2019|zzz@2020";
// => 把 zzz 换成 "中"
// 1. 不用正则一次只能替换一个
str = str.replace('zzz', '中');
console.log(str);
//2.使用正则会简单点
str = str.replace(/zzz/g,'中');
console.log(str);
```

案例:把时间字符串进行处理
```js
let time = "2019-08-13";
// => 变为 "2019年08月13日"
let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;

// => 这样可以实现
// time = time.replace(reg, "$1年$2月$3日");
console.log(time); //=> 2019年8月13日

//=>还可以这样处理[str].replace([reg],[function])
//1.首先拿reg和time进行匹配捕获,能匹配到几次就会把传递的函数执行几次(而且是匹配一次就执行一次)
//2.不仅把方法执行,而且replace还给方法传递了实参信息(和exec捕获的内容一致的信息:大正则匹配的内容,小分组匹配的信息...)
//3.在函数中我们返回的是啥,就把当前大正则匹配的内容替换成啥
time = time.replace(reg, (big, $1,$2,$3)=>{
  //=> 这里的$1-$3 是我们自己设置的变量
  console.log(big, $1,$2,$3)   //2019-08-13 2019 08 13
})


time = time.replace(reg, (big, (...arg))=>{
  let [,$1, $2, $3] = arg;
  $2.length < 2 ? $3 = "0"+$2:null;
  $3.length < 2 ? $3 = "0"+$2:null;
  return `${$1}年${$2}月${$3}日`;
})
```

### 3. 单词首字母大写
```js
let str = "good good study, day day up!";
let reg = /\b([a-zA-Z])[a-zA-Z]*\b/g;

//=> 函数被执行了六次,每一次都把正则匹配的信息传递给函数
//=> 每一次arg: ["good","g"]  //["good","g"]...

str = str.replace(reg, (...arg) => {
  let [content, $1] = arg;
  $1 = $1.toUpperCase();
  content = content.substring(1);
  return $1 + content;
})
console.log(str) "Good Good Study, Day Day Up!"
```

### 4. 验证一个字符串中，哪个字母出现的次数最多，多少次？
```js
/* ======去重方法===== */
let str = "zhufengpeixunzhoulaoshi";
let obj = {};
/* 储存每一个出现的次数 */
[].forEach.call(str, char => {
  if(typeof obj[char] !== "undefined") {  // 如果obj里面有这个属性就++,之后return;
    obj[char]++;
    return;
  }
  //没有这个属性,就直接等于1;
  obj[char] = 1;   // 记录次数;
})

/* 得到最大值 */
let max = 1;
    res = [];
for(let key in obj) {
  let item = obj[key];
  item > max ? max = item : null;
}
/* 得到最大值的 key */
for (let key in obj) {
  let item = obj[key];
  if(item === max) {
    res.push(key);
  }
}

console.log(`出现次数最多的字符:${res},出现了${max}次`)


/* ======排序======= */
let str = "zhufengpeixunzhoulaoshi";
str = str.split('').sort((a, b) => a.localeCompare(b)).join('');   // 字符串排序 aeefghhhiilnnoopsuuuxzz
let reg = /([a-zA-Z])\1+/g   //分组捕获字母大于1次的内容
let ary = str.match(reg)  // ["ee", "hhh", "ii", "nn", "oo", "uuu", "zz"]
ary.sort((a, b) => b.length - a.length)   // ["hhh", "uuu", "ee", "ii", "nn", "oo", "zz"]
let res = [ary[0].substr(0, 1)]   // 取出数组的第一项的第一个字母
    max = ary[0].length
/* 循环数组,如果数组的后一项小于第一项那么就结束循环,否则就加到结果数组中,展示 */
for( let i = 1; i < ary.length ; i++) {
  if( max > ary[i].length) {
    break;
  }
  res.push(ary[i].substr(0, 1))
}
console.log(`出现次数最多的字符:${res},出现了${max}次`)


/* ====replace===== */
let str = "zhufengpeixunzhoulaoshi";
    max = 0,
    res = [],
    flag = false;
str = str.split('').sort((a, b) => a.localeCompare(b)).join(''); //排序
/* 倒着循环 */
for (let i = str.length ; i > 0 ; i --) {
  /* 分组捕获每一项,连着的次数和字符串倒删长度一致 */
  let reg = new RegExp("([a-zA-Z])\\1{" + ( i - 1 ) + "}", "g")
  /* 匹配到正则的才会进入到循环, */
  str.replace(reg, (content, $1) => {
    res.push($1)  // 放入匹配的第一个字母;
    max = i;  // 当前循环的i
    flag = true;  // 找到了就变成true
  })
  if(flag) break;
}
console.log(`出现次数最多的字符:${res},出现了${max}次`)
```

### 5. 常用方法
```js
~function () {
  /**
   * @method formatTime : 时间字符串的格式化处理
   * @param {string}  要转换的格式 {0}为年 {1-5}为月日小时分钟秒,用户传入
   * @return {string} 格式化转换后的字符串 
  */
   function formatTime(templete = "{0}年{1}月{2}日 {3}时{4}分{5}秒") {
    //1.首先获取时间字符串中的年月日等信息
    let timeAry = this.match(/\d+/g);   // ["2019", "8", "13", "16", "51", "3"]
    /* 返回替换后的值 */
    return templete.replace(/\{(\d+)\}/g, (...[, $1]) => {
      let time = timeAry[$1] || "00";    // time是数组里面匹配到数字的每一项,如果用户传了就是当前数字,每传就为00
      return time.length < 2 ? "0" + time : time;   // 判断传的数字如果是一位的,就补一个0, 否则直接return 当前值;
    });
   }

   /**
    * @method querURLParams: 获取URL地址问号后面的参数信息(可能也包含HASH值)
    * @params
    * @return {object} 把所有问号参数信息以键值对的方式储存起来并且返回
   */
  function querURLParams() {
    let obj = {};
    this.replace(/([^?=&#]+)=([^?=&#]+)/g, (...[, $1, $2]) => obj[$1] = $2)
    this.replace(/(#[^?=&#]+)/g, (...[, $1]) => obj['HASH'] = $1)
    return obj
  }

  /**
   * @method millimeter
   * @params 
   * @return {object} 千分符后的字符串
  */
  function millimeter() {
    /* 正向预查,查到但是不捕获,只捕获前面的部分,然后每次捕获到的加逗号就可以了 */
    return this.replace(/\d{1,3}(?=(\d{3})+$)/g, content => content + ',')
  }

   /* 扩展到内置类String.prototype上 */
   ["formatTime", "querURLParams", "millimeter"].forEach(item => {
     String.prototype[item] = eval(item)
   })
}()



/* 时间字符串格式化; */
let time = "2019-8-13 16:51:3";
// => 服务器获取的
// "2019-8-13 16:51:3"
// "2019/8/13 16:51:3"

// => 想要转换的格式
// "08月13日 16时51分"
// "2019年08月13日"
// ... 
console.log(time.formatTime())   // 2019年08月13日 16时51分03秒   默认
console.log(time.formatTime("{1}-{2} {3}:{4}"))   // 08-13 16:51   // 用户传入格式

/* 得到url的参数 */
let url = "http://www.zhufengpeixun.cn/?lx=1&from=wx#video";
console.log(url.querURLParams())  //{lx: "1", from: "wx", HASH: "#video"}

/* 千分位符 */
let num = "15628954";
console.log(num.millimeter())  // 15,628,954
```
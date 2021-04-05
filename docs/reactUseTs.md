---
id: reactUseTs
title: react中使用ts
---

> 最近在用ts写项目，遇到了一些问题

### 1. 枚举类型的使用问题
```ts
// 枚举类型
enum USER_ROLE {
    USER, // 默认下标从零开始
    ADMIN,
    MANAGER
}
// 默认可以正向取出，也可以反举， 可以通过数字自动向下推断
console.log(USER_ROLE[0])  // USER
console.log(USER_ROLE.USER)  // 0

// 常量枚举 只是提供了一个类型 ，前面加了一个const，不建议用枚举类型赋值字符串，赋值后就不能递增了
const enum USER_ROLE1 {  // 语义化
    USER,
    ADMIN
}
// 取值的时候才会转义,而且不可以反着取
console.log(USER_ROLE1.USER)
```

- 枚举类型编译为js代码

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;  // 1
let colorName: string = Color[2];  // 'Blue'

var Color = {};
Color[Color['Red'] = 0] = 'Red';
Color[Color['Green'] = 1] = 'Green';
Color[Color['Blue'] = 2] = 'Blue';
```

### 2. 动态调用和赋值的问题
- 问题:  前端需要处理一些逻辑，动态取值,这个时候只能设置state的值为`[key:string]:any`不然就会报错。

- 如果确定要取的值的话可以定义type来专门放当前可能取到的字符串

```tsx
/* state需要这样处理 */
interface IState {
    [key:string]: any
}
type valueType = 'value1' | 'value2';

class App extends Component<{},IState> {
    constructor(props:{}) {
        super(props);
        this.state = {
            value1: '',
            value2: ''
        }
    }

    /* 同时改变两个input的方法 */
    handleChange = (e:React.ChangeEvent<HTMLInputElement>, setValue:valueType) => {
        this.setState({
            [setValue]: e.target.value;
        })
    }
    render() {
        return (
            <>
                <input type="text" value={this.state.value1} onChange={(e) => this.handleChange(e, 'value1')} />
                <input type="text" value={this.state.value2} onChange={(e) => this.handleChange(e, 'value2')} />
            </>
        )
    }
}
```



### 3. 定义后台接口的问题

- 一般来说处理确定的类型建议写好每一个值的类型，如果是后台接口的话，之后后端可能会新添加新的逻辑，所以可以写的稍微活泛一些。
- 前端的组件的输入输出这个是一定要定义好的。我的感觉就是ts在前端的使用上，加大了前端的工作量，在项目排期没有改变的情况下，前端的工作量感觉增加了很多，一些逻辑修改后，还要去改type，很耗时。如果要公司支持ts的话，感觉项目排期是一个问题。


### 4. react中的内置类型使用
- 类组件，定义state 和 props
```tsx
class App extends Component<IProps, IState> {
    render() {
        return (
            <div></div>
        )
    }
}
```

- 函数组件 定义函数为FC传入props的泛型

```tsx
const App:React.FC<IProps> = () => {
    return <div></div>
}
```

- react事件

事件描述 | 事件类型 | 泛型类型 | 举例
 - | - | - | -
合成事件 | SyntheticEvent | null | - 
Change事件 | ChangeEvent | <T = Element> | `input:React.ChangeEvent<HTMLInputElement>` 
剪贴板事件 | ClipboardEvent | <T = Element> | -
拖拽事件 | DragEvent | <T = Element> | -  
键盘事件 | KeyboardEvent | <T = Element> | - 
鼠标事件 | MouseEvent | <T = Element> | - 
触摸事件 | TouchEvent | <T = Element> | - 
滚轮事件 | WheelEvent | <T = Element> | - 
动画事件 | AnimationEvent | <T = Element> | - 
过渡事件 | TransitionEvent | <T = Element> | - 


### 5. 引入包的时候报错
- 不一定是因为路径错误，可能是因为包里面没有export导出，或者文件中没有任何内容。ts识别不到当前的文件，进行报错，所以如果真的确定路径是没有任何问题的话。去看看tsconfig的配置，或者看看自己有没有export当前的模块吧

### 6. ts中引入png, svg等来源报错

- 在index.d.ts文件中添加`delcare`
```tsx
declare module '*.svg'{
  const content: string;
  export default content;
}
```
### 不定时更新...

---
id: reactHook
title: Hook基本使用
---

### Hello World! 
```jsx
import React from 'react';

/* 定义传入的接口类型 */
interface IHelloProps {
    message?: string;
}

/* 泛型定义 */
const Hello: React.FC<IHelloProps> = (props) =>  {
    return <h2>{props.message}</h2>
}

/* 设置传入的默认值 */
Hello.defaultProps = {
    message: 'Hello World!'
}

export default Hello;
```

### hooks
- 组件很难复用状态逻辑，之前需要用HOC 和 render props
- 复杂组件难以理解，尤其是生命周期函数


### useState
- const = [ like, setlike ] = useState(0) 设置初始值，是数字。解构数组，第一个参数是默认的state值，第二个参数是改变第一个参数的方法
```jsx
import React, { useState } from 'react'

const LikeButton: React.FC = () => {
    const [ Like, setLike ]  = useState(0);
    const [ on, setOn ] = useState(true);
    return <>
    <button onClick={() => {setOn(!on)}}>
        {on ? 'ON' : 'OFF'}
    </button>
    <button onClick={() => {setLike(Like + 1)}}>
        {Like}
    </button>
    </>
}

export default LikeButton;
```

### useEffect(副作用)
- useEffect，第一个参数是个函数，第一个是个数组。返回值是一个函数。
> 不需要清除副作用
```jsx
import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {
    const [ Like, setLike ]  = useState(0);
    const [ on, setOn ] = useState(true);
    /* 不需要清除副作用时 */
    useEffect(() => {
        document.title = `点击了${Like}次`
        /* 只有在like改变的时候才触发，否则不触发 */
    }, [Like])
    return <>
    <button onClick={() => {setOn(!on)}}>
        {on ? 'ON' : 'OFF'}
    </button>
    <button onClick={() => {setLike(Like + 1)}}>
        {Like}
    </button>
    </>
}

export default LikeButton;
```

> return 中写清除副作用的逻辑，在useEffect第二个参数中当谁改变的时候触发副作用

```jsx
import React, { useState, useEffect} from 'react';

const MouseTracker: React.FC = () => {
    const [ positions, setPosition ] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const changePosition = (e: MouseEvent) => {
            setPosition({x : e.clientX, y: e.clientY})
        }
        /* 添加这个状态 */
        document.addEventListener('click', changePosition);
        return () => {
            /* 卸载某个状态的时候 */
            console.log('remove', positions.x)
            document.removeEventListener('click', changePosition)
        }
        /* []所有改变的时候都触发 */
    }, [])
    console.log('render', positions.x)
    return (
        <p>{'X : ' + positions.x +', Y : ' + positions.y }</p>
    )
}

export default MouseTracker;
```

### hook简单的逻辑复用
- 需要复用的组件（注意命名规范）
```jsx
import { useState, useEffect} from 'react';

const useMoustTracker = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    useEffect(() => {
        console.log('add', position.x)
        const changeMouse = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        document.addEventListener('mousemove', changeMouse);
        return () => {
            console.log('remove', position.x)
            document.removeEventListener('mousemove', changeMouse);
        }
    }, [])
    // 直接return 当前的变化值
    return position;
}

export default useMoustTracker;
```
- 复用组件的使用
```jsx
import React, { useState } from 'react';
import useMouseTracker from './useMouseTracker';

const App: React.FC = () => {
 // 调用函数，获取return出来的值
  const position = useMouseTracker();
  return (
    <p>{position.x}{position.y}</p>
  );
}

export default App;
```

### hook的复用(获取逻辑)
- 复用的逻辑
```jsx
import { useState, useEffect} from 'react';
import axios from 'axios';

/* deps的默认值是一个[] */
const useURLLoader = (url: string, deps: any[] = []) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get(url).then(reselt => {
            setData(reselt.data);
            setLoading(false)
        })
    }, deps)
    // 导出获取的数据，和当前的loading的参数
    return [data, loading]
}

export default useURLLoader;
```
- 使用
```jsx
import React, { useState } from 'react';
import useURLLoader from './hook/useURLLoader'

interface IShowRuslt  {
  message: string;
  status: string;
}
const App: React.FC = () => {
  const [show, setShow] = useState(true)
  /* 传入两个参数，一个url，获取数据，一个effect什么时候出发更新的值，show改变的时候更新值 */
  const [data, loading] = useURLLoader('url', [show])
  // 把 data 的数据模式改成 IShowRuslt类型
  const dogResult = data as IShowRuslt;
  
  return (
    <div className="App">
      {/* 如果在获取中，就是现实加载中，否则就是显示图片 */}
      {loading ? <p>加载中...</p> : <img src={dogResult && dogResult.message}/> }
      <button onClick={()=> {setShow(!show)}}>show</button>
    </div>
  );
}

export default App;
```
### useRef()
- 当this用，改变不会重新使组件渲染
- 模拟生命周期didmount
- 获取dom节点
```jsx
import React, { useState, useEffect, useRef } from 'react';

const LikeButton: React.FC = () => {
    const [ Like, setLike ]  = useState(0);
    /* 相当于类组件的this，不会引起函数的闭包，可以获取到最新的变更值 */
    const likeRef = useRef(0);
    useEffect(() => {
        document.title = `点击了${Like}次`
    }, [Like])
    
    /* 模拟didMountUpdate! */
    useEffect(() => {
        if(didMountRef.current) {
            console.log('this is update!');
        } else {
            didMountRef.current = true;
        }
    })
    
    useEffect(() => {
        // 获取dom节点
        if(domRef && domRef.current) {
            domRef.current.focus();
        }
    })
    
    function handleAlertClick() {
        setTimeout(() => {
            alert('you clicked on' + likeRef.current)
        }, 3000)
    }

    return <>
        <input type="text" ref={domRef} />
        <button onClick={handleAlertClick}>
            {'Alert!'}
        </button>
        <button onClick={() => {setLike(Like + 1); likeRef.current ++}}>
            {Like}
        </button>
    </>
}

export default LikeButton;
```

### useContext
- 父组件
```jsx
import React from 'react';
import LikeButton from './components/LikeButton';

interface IThemeProps {
  [key: string]: {
    color: string,
    background: string
  }
}
/* 创建传递的值 */
const themes:IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}
/* 导出组件 */
export const ThemeContext = React.createContext(themes.light);
const App: React.FC = () => {
  return (
    <div>
      {/* 用provider包裹需要用值得组件 */}
      <ThemeContext.Provider value={themes.dark}>
        <LikeButton />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
```
- 使用的子组件
```jsx
import React, { useState, useContext } from 'react'
/* 引入context组件 */
import { ThemeContext } from '../App'

const LikeButton: React.FC = () => {
    const [ Like, setLike ]  = useState(0);
    /* 使用context组件 */
    const theme = useContext(ThemeContext)
    const style = {
        color: theme.color,
        background: theme.background
    }
    return <>
        <button style={style}>
            {Like}
        </button>
    </>
}
export default LikeButton;
```
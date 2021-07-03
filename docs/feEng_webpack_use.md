---
id: webpack_use
title: webpack使用
---

> 官网：https://webpack.docschina.org/

## 安装
- 开发依赖
1. webpack
2. webpack-cli 脚手架
3. webpack-dev-server  开发服务器
```cmd
npm install webpack webpack-cli webpack-dev-server --save-dev
```
- 配置脚本`pakeage.json`
```json
"scripts": {
  "build": "webpack",
  "dev": "webpack serve"
}
```

## 基础配置
### 1. 入口和出口
- webpack.config.js
```js
const path = require('path')

module.exports = {
    entry: './src/index.js',  // 打包入口
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包出口
        filename: 'main.js'  // 打包到的出口文件
    }
}
```

### 2. loader
> webpack 只能理解 JavaScript 和 JSON 文件。
> loader是用来对webpack不认识文件类型，进行翻译的处理，让webpack认识。

- 安装依赖
```cmd
npm install raw-loader --save-dev
```

- webpack.config.js
```js
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    /* 添加module属性 */
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader',  // 用来识别txt，这种原始文件
            }
        ]
    }
}
```

### 3. plugin
> 解决loader无法解决的其他事情

```cmd
npm install html-webpack-plugin --save-dev
```
- webpack.config.js
```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入插件
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader',
            }
        ]
    },
    /* 添加插件配置 */
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'  // 自动生成编译后的html文件
        })
    ]
}
```

### 4. mode
> 区别开发 development 和 生产 production 分别两套webpack配置，通过环境变量进行一些区别

#### 4.1 默认配置: production，可选配置development
- webpack.config.js
```js
mode: 'production', // development
```

#### 4.2 通过脚本环境变量修改, 配置的值，可以在前端拿到，在webpack配置文件中拿不到
- pakeage.json
```js
"scripts": {
  "build": "webpack --mode production",
  "dev": "webpack serve --mode development"
},
```

#### 4.3 通过配置脚本文件添加 env 属性，在webpack中获取当前的环境变量
- pakeage.json
```js
"scripts": {
  "build": "webpack --env production",
  "dev": "webpack serve --env development"
},
```
- webpack.config.js
```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

// webpack.config.js 中使用函数来接受当前的env值
module.exports = (env) => {
    console.log(env);  // { production: true} 用来区别环境变量
    return {
        mode: env.production ? 'production' : 'development',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js'
        },
        module: {
            rules: [
                {
                    test: /\.txt$/,
                    use: 'raw-loader',
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
}
```

#### 4.4 通过 DefinePlugin 设置变量

```js
const path = require('path');
const webpack = require('webpack');  // 内置模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = () => {
    /* 这里是获取不到的 */
    console.log('webpack.config.js', process.env.NODE_ENV);
    return {
        mode: 'production',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js'
        },
        module: {
            rules: [
                {
                    test: /\.txt$/,
                    use: 'raw-loader',
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            /* 通过插件来定义变量，定义的并非对象，全局中并没有这个变量。浏览器拿不到
            而只是普通的字符串 */
            new webpack.DefinePlugin({
                'process.env.NODE_ENV':JSON.stringify('development'),  // 不加stringify的话，就会在内部模块中显示变量，会报错，所以需要用stringify包裹一下
                'NODE_ENV':JSON.stringify('production'),
            })
        ]
    }
}
```

#### 4.5 cross-env 设置环境变量（最佳实践）
- 可以在webpack中拿到需要安装`cross-env`依赖包，来设置跨系统的环境变量。windows是`set`, mac是`export`。
- pakeage.json
```js
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack",
    "dev": "cross-env NODE_ENV=development webpack serve"
  },
```
- webpack.config.json
```js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = {
    mode: process.env.NODE_ENV,  // 直接获取当前的环境变量进行赋值
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV), // 直接获取当前的环境变量进行赋值
            'NODE_ENV':JSON.stringify('production'),
        })
    ]
}
```

#### 4.6 建立.env文件
- 在.env中写入其他key value 对，用于配置当前环境变量
- .env
```
NODE_ENV=production
```

```cmd
npm install dotenv -D
```

```js
// 读取.env这个文件，把里面配置的key value写入到process.env对象里
require('dotenv').config({ path: path.resolve('config/.env') });
console.log(process.env.NODE_ENV);  // 直接可以在webpack.config.js中拿到
```

### 5. webpack-dev-server
- 安装开发服务器依赖包
```cmd
npm install webpack-dev-server -D
```
- server是在内存中读取文件，而不是在硬盘中
- webpack.config.js
```js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'  // 默认是斜杠
    },
    devServer: {
        publicPath: '/',  // 默认是斜杠,这里设置会覆盖出口的设置，是给默认文件加路径的，会加到./main.js前
        contentBase: path.resolve('public'),  // http://localhost:8080/龙套.jpg, 可以访问在其他目录下的文件,访问public文件夹下面的龙套头像
        open: true, // 启动服务的时候是否自动打开浏览器页面
        port: 8080, // 浏览器服务端口，默认8080
        compress: true // 是否启动压缩gzip
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV),
            'NODE_ENV':JSON.stringify('production'),
        })
    ]
}
```

## 开发环境配置

### 支持css
- css-loader 用来翻译@import语法 和 url()语法
- style-loader 是用来把 css 插入到 dom 结构中
```cmd
npm install style-loader css-loader  -D
npm install less less-loader -D
```
- webpack.config.js
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'  // 默认是斜杠
    },
    devServer: {
        publicPath: '/',  // 默认是斜杠,这里设置会覆盖出口的设置，是给默认文件加路径的，会加到./main.js前
        contentBase: path.resolve('public'),  // http://localhost:8080/龙套.jpg,可以访问在其他目录下的文件
        open: true, // 启动服务的时候是否自动打开浏览器页面
        port: 8080, // 浏览器服务端口，默认8080
        compress: true // 是否启动压缩gzip
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',  // 返回js,webpack只认识js
                    {
                        loader: 'css-loader', // 对url import进行处理
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'  // css预处理器，处理厂商前缀
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',  // 返回js,webpack只认识js
                    {
                        loader: 'css-loader', // 对url import进行处理
                        options: {
                            importLoaders: 2
                        }
                    },
                    'less-loader'
                    'postcss-loader'  // css预处理器，处理厂商前缀
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
```

- 添加css厂商前缀

```cmd
npm install postcss-loader postcss-preset-env -D
```
-webpack.config.js
```js
{
    test: /\.css$/,
    use: [
        'style-loader',  // 返回js,webpack只认识js
        {
            loader: 'css-loader', // 对url import进行处理
            options: {
                importLoaders: 1
            }
        },
        'postcss-loader'  // css预处理器，处理厂商前缀
    ]
},
```
- 配置config文件
- postcss.config.js
```js
let postCSSPresetEnv = require('postcss-preset-env');
module.exports = {
    plugins:[
        postCSSPresetEnv({
            browsers:'last 10 version'  // 支持最新的十个版本
        })
    ]
}
```
### 支持图片
- 安装依赖包
- webpack5中已经取消这个模块，内置了
```cmd
npm install file-loader url-loader -D
```

- webpack.config.js
```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 通过 npm 安装

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/", // 默认是斜杠
  },
  devServer: {
    publicPath: "/", // 默认是斜杠,这里设置会覆盖出口的设置，是给默认文件加路径的，会加到./main.js前
    contentBase: path.resolve("public"), // http://localhost:8080/龙套.jpg,可以访问在其他目录下的文件
    open: true, // 启动服务的时候是否自动打开浏览器页面
    port: 8080, // 浏览器服务端口，默认8080
    compress: true, // 是否启动压缩gzip
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|bmp|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,  // 直接取文件当前路径
              name: "[hash:10].[ext]",  // 取10位hash值，保留原来扩展名字
              // 以8K为分界线 如果引入的文件小于8K，就把图片变成base64字符串插入html,否则 和file-loader一样的
            //   limit: 8 * 1024,  // url-loader
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
```

### js兼容
- 把 es6 转换为 es5
- 用babel-loader转义为js，@babel/core是编译的核心包
- @babel/preset-env 是预设包。把很多插件放到里面
```cmd
npm i babel-loader @babel/core @babel/preset-env @babel/preset-react  -D
npm i @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties -D  // 兼容装饰器
```

- webpack.config.js
```js
{
  test: /\.js$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react"
        ],
        plugins: [
          ["@babel/plugin-proposal-decorators", {legacy: true}],
          ["@babel/plugin-proposal-class-properties", {loose: true}]
        ]
      }
    }
  ]
},
```

### 代码校验
- eslint-loader 会调用 babel-eslint 在调用 eslint 来进行一个代码检查
```cmd
npm install eslint eslint-loader babel-eslint --D
```

- webpack.config.js
```js
{
  test: /\.js$/,
  loader: 'eslint-loader',  // 进行代码检查
  enforce: 'pre', // 给loader进行分类 pre -> normal -> inline -> post
  options: { fix: true },  // 自动修复
  exclude: /node_modules/  // 排除的文件
},
```
- .eslintrc.js
```js
// 普通配置
module.exports = {
    root: true, // 根文件，因为eslint是可以继承的
    parser: 'babel-eslint',
    parserOptions: {
        surceType: 'module',
        ecmaVersion: 2015
    },
    //指定脚本的运行环境
    env: {
        browser: true
    },
    rules: {
        indent: 'off',
        quotes: 'off',
        'no-console': 'error'
    }
}
```
- 使用被人的eslint规范
```cmd
npm install eslint-config-airbnb  -D
```

```js diff
// 继承配置
module.exports = {
+  extends: "airbnb",
   parser: "babel-eslint",
  // 指定脚本的运行环境
   env: {
    browser: true,
+   node: true,
   },
+  /* 可以覆盖当前继承的配置 */
   rules: {
    indent: "off",
    quotes: "off",
    "no-console": "error",
  },
};
```
### sourcemap
<!-- TODO: -->
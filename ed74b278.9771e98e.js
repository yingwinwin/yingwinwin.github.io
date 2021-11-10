(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{139:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return o}));var l=t(3),a=t(7),r=(t(0),t(148)),c={id:"webpack_use",title:"webpack\u4f7f\u7528"},s={unversionedId:"webpack_use",id:"webpack_use",isDocsHomePage:!1,title:"webpack\u4f7f\u7528",description:"\u5b98\u7f51\uff1ahttps://webpack.docschina.org/",source:"@site/docs/feEng_webpack_use.md",slug:"/webpack_use",permalink:"/docs/webpack_use",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/feEng_webpack_use.md",version:"current",sidebar:"someError",previous:{title:"react\u8def\u7531",permalink:"/docs/react_router"},next:{title:"\u62a5\u9519/\u95ee\u9898/\u8bb0\u5f55",permalink:"/docs/errors"}},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",children:[{value:"1. \u5165\u53e3\u548c\u51fa\u53e3",id:"1-\u5165\u53e3\u548c\u51fa\u53e3",children:[]},{value:"2. loader",id:"2-loader",children:[]},{value:"3. plugin",id:"3-plugin",children:[]},{value:"4. mode",id:"4-mode",children:[]},{value:"5. webpack-dev-server",id:"5-webpack-dev-server",children:[]}]},{value:"\u5f00\u53d1\u73af\u5883\u914d\u7f6e",id:"\u5f00\u53d1\u73af\u5883\u914d\u7f6e",children:[{value:"\u652f\u6301css",id:"\u652f\u6301css",children:[]},{value:"\u652f\u6301\u56fe\u7247",id:"\u652f\u6301\u56fe\u7247",children:[]},{value:"js\u517c\u5bb9",id:"js\u517c\u5bb9",children:[]},{value:"\u4ee3\u7801\u6821\u9a8c",id:"\u4ee3\u7801\u6821\u9a8c",children:[]},{value:"sourcemap",id:"sourcemap",children:[]}]}],b={toc:p};function o(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5b98\u7f51\uff1a",Object(r.b)("a",{parentName:"p",href:"https://webpack.docschina.org/"},"https://webpack.docschina.org/"))),Object(r.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5f00\u53d1\u4f9d\u8d56")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"webpack"),Object(r.b)("li",{parentName:"ol"},"webpack-cli \u811a\u624b\u67b6"),Object(r.b)("li",{parentName:"ol"},"webpack-dev-server  \u5f00\u53d1\u670d\u52a1\u5668")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cmd"},"npm install webpack webpack-cli webpack-dev-server --save-dev\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e\u811a\u672c",Object(r.b)("inlineCode",{parentName:"li"},"pakeage.json"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "build": "webpack",\n  "dev": "webpack serve"\n}\n')),Object(r.b)("h2",{id:"\u57fa\u7840\u914d\u7f6e"},"\u57fa\u7840\u914d\u7f6e"),Object(r.b)("h3",{id:"1-\u5165\u53e3\u548c\u51fa\u53e3"},"1. \u5165\u53e3\u548c\u51fa\u53e3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"webpack.config.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path')\n\nmodule.exports = {\n    entry: './src/index.js',  // \u6253\u5305\u5165\u53e3\n    output: {\n        path: path.resolve(__dirname, 'dist'), // \u6253\u5305\u51fa\u53e3\n        filename: 'main.js'  // \u6253\u5305\u5230\u7684\u51fa\u53e3\u6587\u4ef6\n    }\n}\n")),Object(r.b)("h3",{id:"2-loader"},"2. loader"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"webpack \u53ea\u80fd\u7406\u89e3 JavaScript \u548c JSON \u6587\u4ef6\u3002\nloader\u662f\u7528\u6765\u5bf9webpack\u4e0d\u8ba4\u8bc6\u6587\u4ef6\u7c7b\u578b\uff0c\u8fdb\u884c\u7ffb\u8bd1\u7684\u5904\u7406\uff0c\u8ba9webpack\u8ba4\u8bc6\u3002")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5b89\u88c5\u4f9d\u8d56")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cmd"},"npm install raw-loader --save-dev\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"webpack.config.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path')\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'main.js'\n    },\n    /* \u6dfb\u52a0module\u5c5e\u6027 */\n    module: {\n        rules: [\n            {\n                test: /\\.txt$/,\n                use: 'raw-loader',  // \u7528\u6765\u8bc6\u522btxt\uff0c\u8fd9\u79cd\u539f\u59cb\u6587\u4ef6\n            }\n        ]\n    }\n}\n")),Object(r.b)("h3",{id:"3-plugin"},"3. plugin"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u89e3\u51b3loader\u65e0\u6cd5\u89e3\u51b3\u7684\u5176\u4ed6\u4e8b\u60c5")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cmd"},"npm install html-webpack-plugin --save-dev\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"webpack.config.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path')\nconst HtmlWebpackPlugin = require('html-webpack-plugin'); // \u5f15\u5165\u63d2\u4ef6\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'main.js'\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.txt$/,\n                use: 'raw-loader',\n            }\n        ]\n    },\n    /* \u6dfb\u52a0\u63d2\u4ef6\u914d\u7f6e */\n    plugins: [\n        new HtmlWebpackPlugin({\n            template: './src/index.html'  // \u81ea\u52a8\u751f\u6210\u7f16\u8bd1\u540e\u7684html\u6587\u4ef6\n        })\n    ]\n}\n")),Object(r.b)("h3",{id:"4-mode"},"4. mode"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u533a\u522b\u5f00\u53d1 development \u548c \u751f\u4ea7 production \u5206\u522b\u4e24\u5957webpack\u914d\u7f6e\uff0c\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u4e00\u4e9b\u533a\u522b")),Object(r.b)("h4",{id:"41-\u9ed8\u8ba4\u914d\u7f6e-production\uff0c\u53ef\u9009\u914d\u7f6edevelopment"},"4.1 \u9ed8\u8ba4\u914d\u7f6e: production\uff0c\u53ef\u9009\u914d\u7f6edevelopment"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"webpack.config.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"mode: 'production', // development\n")),Object(r.b)("h4",{id:"42-\u901a\u8fc7\u811a\u672c\u73af\u5883\u53d8\u91cf\u4fee\u6539-\u914d\u7f6e\u7684\u503c\uff0c\u53ef\u4ee5\u5728\u524d\u7aef\u62ff\u5230\uff0c\u5728webpack\u914d\u7f6e\u6587\u4ef6\u4e2d\u62ff\u4e0d\u5230"},"4.2 \u901a\u8fc7\u811a\u672c\u73af\u5883\u53d8\u91cf\u4fee\u6539, \u914d\u7f6e\u7684\u503c\uff0c\u53ef\u4ee5\u5728\u524d\u7aef\u62ff\u5230\uff0c\u5728webpack\u914d\u7f6e\u6587\u4ef6\u4e2d\u62ff\u4e0d\u5230"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"pakeage.json")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  "build": "webpack --mode production",\n  "dev": "webpack serve --mode development"\n},\n')),Object(r.b)("h4",{id:"43-\u901a\u8fc7\u914d\u7f6e\u811a\u672c\u6587\u4ef6\u6dfb\u52a0-env-\u5c5e\u6027\uff0c\u5728webpack\u4e2d\u83b7\u53d6\u5f53\u524d\u7684\u73af\u5883\u53d8\u91cf"},"4.3 \u901a\u8fc7\u914d\u7f6e\u811a\u672c\u6587\u4ef6\u6dfb\u52a0 env \u5c5e\u6027\uff0c\u5728webpack\u4e2d\u83b7\u53d6\u5f53\u524d\u7684\u73af\u5883\u53d8\u91cf"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"pakeage.json")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  "build": "webpack --env production",\n  "dev": "webpack serve --env development"\n},\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"webpack.config.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path')\nconst HtmlWebpackPlugin = require('html-webpack-plugin'); // \u901a\u8fc7 npm \u5b89\u88c5\n\n// webpack.config.js \u4e2d\u4f7f\u7528\u51fd\u6570\u6765\u63a5\u53d7\u5f53\u524d\u7684env\u503c\nmodule.exports = (env) => {\n    console.log(env);  // { production: true} \u7528\u6765\u533a\u522b\u73af\u5883\u53d8\u91cf\n    return {\n        mode: env.production ? 'production' : 'development',\n        entry: './src/index.js',\n        output: {\n            path: path.resolve(__dirname, 'dist'),\n            filename: 'main.js'\n        },\n        module: {\n            rules: [\n                {\n                    test: /\\.txt$/,\n                    use: 'raw-loader',\n                }\n            ]\n        },\n        plugins: [\n            new HtmlWebpackPlugin({\n                template: './src/index.html'\n            })\n        ]\n    }\n}\n")),Object(r.b)("h4",{id:"44-\u901a\u8fc7-defineplugin-\u8bbe\u7f6e\u53d8\u91cf"},"4.4 \u901a\u8fc7 DefinePlugin \u8bbe\u7f6e\u53d8\u91cf"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst webpack = require('webpack');  // \u5185\u7f6e\u6a21\u5757\nconst HtmlWebpackPlugin = require('html-webpack-plugin'); // \u901a\u8fc7 npm \u5b89\u88c5\n\nmodule.exports = () => {\n    /* \u8fd9\u91cc\u662f\u83b7\u53d6\u4e0d\u5230\u7684 */\n    console.log('webpack.config.js', process.env.NODE_ENV);\n    return {\n        mode: 'production',\n        entry: './src/index.js',\n        output: {\n            path: path.resolve(__dirname, 'dist'),\n            filename: 'main.js'\n        },\n        module: {\n            rules: [\n                {\n                    test: /\\.txt$/,\n                    use: 'raw-loader',\n                }\n            ]\n        },\n        plugins: [\n            new HtmlWebpackPlugin({\n                template: './src/index.html'\n            }),\n            /* \u901a\u8fc7\u63d2\u4ef6\u6765\u5b9a\u4e49\u53d8\u91cf\uff0c\u5b9a\u4e49\u7684\u5e76\u975e\u5bf9\u8c61\uff0c\u5168\u5c40\u4e2d\u5e76\u6ca1\u6709\u8fd9\u4e2a\u53d8\u91cf\u3002\u6d4f\u89c8\u5668\u62ff\u4e0d\u5230\n            \u800c\u53ea\u662f\u666e\u901a\u7684\u5b57\u7b26\u4e32 */\n            new webpack.DefinePlugin({\n                'process.env.NODE_ENV':JSON.stringify('development'),  // \u4e0d\u52a0stringify\u7684\u8bdd\uff0c\u5c31\u4f1a\u5728\u5185\u90e8\u6a21\u5757\u4e2d\u663e\u793a\u53d8\u91cf\uff0c\u4f1a\u62a5\u9519\uff0c\u6240\u4ee5\u9700\u8981\u7528stringify\u5305\u88f9\u4e00\u4e0b\n                'NODE_ENV':JSON.stringify('production'),\n            })\n        ]\n    }\n}\n")),Object(r.b)("h4",{id:"45-cross-env-\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff08\u6700\u4f73\u5b9e\u8df5\uff09"},"4.5 cross-env \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff08\u6700\u4f73\u5b9e\u8df5\uff09"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728webpack\u4e2d\u62ff\u5230\u9700\u8981\u5b89\u88c5",Object(r.b)("inlineCode",{parentName:"li"},"cross-env"),"\u4f9d\u8d56\u5305\uff0c\u6765\u8bbe\u7f6e\u8de8\u7cfb\u7edf\u7684\u73af\u5883\u53d8\u91cf\u3002windows\u662f",Object(r.b)("inlineCode",{parentName:"li"},"set"),", mac\u662f",Object(r.b)("inlineCode",{parentName:"li"},"export"),"\u3002"),Object(r.b)("li",{parentName:"ul"},"pakeage.json")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'  "scripts": {\n    "build": "cross-env NODE_ENV=production webpack",\n    "dev": "cross-env NODE_ENV=development webpack serve"\n  },\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"webpack.config.json")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst webpack = require('webpack');\nconst HtmlWebpackPlugin = require('html-webpack-plugin'); // \u901a\u8fc7 npm \u5b89\u88c5\n\nmodule.exports = {\n    mode: process.env.NODE_ENV,  // \u76f4\u63a5\u83b7\u53d6\u5f53\u524d\u7684\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u8d4b\u503c\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'main.js'\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.txt$/,\n                use: 'raw-loader',\n            }\n        ]\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            template: './src/index.html'\n        }),\n        new webpack.DefinePlugin({\n            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV), // \u76f4\u63a5\u83b7\u53d6\u5f53\u524d\u7684\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u8d4b\u503c\n            'NODE_ENV':JSON.stringify('production'),\n        })\n    ]\n}\n")),Object(r.b)("h4",{id:"46-\u5efa\u7acbenv\u6587\u4ef6"},"4.6 \u5efa\u7acb.env\u6587\u4ef6"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5728.env\u4e2d\u5199\u5165\u5176\u4ed6key value \u5bf9\uff0c\u7528\u4e8e\u914d\u7f6e\u5f53\u524d\u73af\u5883\u53d8\u91cf"),Object(r.b)("li",{parentName:"ul"},".env")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"NODE_ENV=production\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cmd"},"npm install dotenv -D\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// \u8bfb\u53d6.env\u8fd9\u4e2a\u6587\u4ef6\uff0c\u628a\u91cc\u9762\u914d\u7f6e\u7684key value\u5199\u5165\u5230process.env\u5bf9\u8c61\u91cc\nrequire('dotenv').config({ path: path.resolve('config/.env') });\nconsole.log(process.env.NODE_ENV);  // \u76f4\u63a5\u53ef\u4ee5\u5728webpack.config.js\u4e2d\u62ff\u5230\n")),Object(r.b)("h3",{id:"5-webpack-dev-server"},"5. webpack-dev-server"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5b89\u88c5\u5f00\u53d1\u670d\u52a1\u5668\u4f9d\u8d56\u5305")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cmd"},"npm install webpack-dev-server -D\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"server\u662f\u5728\u5185\u5b58\u4e2d\u8bfb\u53d6\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u5728\u786c\u76d8\u4e2d"),Object(r.b)("li",{parentName:"ul"},"webpack.config.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst webpack = require('webpack');\nconst HtmlWebpackPlugin = require('html-webpack-plugin'); // \u901a\u8fc7 npm \u5b89\u88c5\n\nmodule.exports = {\n    mode: process.env.NODE_ENV,\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'main.js',\n        publicPath: '/'  // \u9ed8\u8ba4\u662f\u659c\u6760\n    },\n    devServer: {\n        publicPath: '/',  // \u9ed8\u8ba4\u662f\u659c\u6760,\u8fd9\u91cc\u8bbe\u7f6e\u4f1a\u8986\u76d6\u51fa\u53e3\u7684\u8bbe\u7f6e\uff0c\u662f\u7ed9\u9ed8\u8ba4\u6587\u4ef6\u52a0\u8def\u5f84\u7684\uff0c\u4f1a\u52a0\u5230./main.js\u524d\n        contentBase: path.resolve('public'),  // http://localhost:8080/\u9f99\u5957.jpg, \u53ef\u4ee5\u8bbf\u95ee\u5728\u5176\u4ed6\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6,\u8bbf\u95eepublic\u6587\u4ef6\u5939\u4e0b\u9762\u7684\u9f99\u5957\u5934\u50cf\n        open: true, // \u542f\u52a8\u670d\u52a1\u7684\u65f6\u5019\u662f\u5426\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\u9875\u9762\n        port: 8080, // \u6d4f\u89c8\u5668\u670d\u52a1\u7aef\u53e3\uff0c\u9ed8\u8ba48080\n        compress: true // \u662f\u5426\u542f\u52a8\u538b\u7f29gzip\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.txt$/,\n                use: 'raw-loader',\n            }\n        ]\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            template: './src/index.html'\n        }),\n        new webpack.DefinePlugin({\n            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV),\n            'NODE_ENV':JSON.stringify('production'),\n        })\n    ]\n}\n")),Object(r.b)("h2",{id:"\u5f00\u53d1\u73af\u5883\u914d\u7f6e"},"\u5f00\u53d1\u73af\u5883\u914d\u7f6e"),Object(r.b)("h3",{id:"\u652f\u6301css"},"\u652f\u6301css"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"css-loader \u7528\u6765\u7ffb\u8bd1@import\u8bed\u6cd5 \u548c url()\u8bed\u6cd5"),Object(r.b)("li",{parentName:"ul"},"style-loader \u662f\u7528\u6765\u628a css \u63d2\u5165\u5230 dom \u7ed3\u6784\u4e2d")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cmd"},"npm install style-loader css-loader  -D\nnpm install less less-loader -D\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"webpack.config.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin'); // \u901a\u8fc7 npm \u5b89\u88c5\n\nmodule.exports = {\n    mode: process.env.NODE_ENV,\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'main.js',\n        publicPath: '/'  // \u9ed8\u8ba4\u662f\u659c\u6760\n    },\n    devServer: {\n        publicPath: '/',  // \u9ed8\u8ba4\u662f\u659c\u6760,\u8fd9\u91cc\u8bbe\u7f6e\u4f1a\u8986\u76d6\u51fa\u53e3\u7684\u8bbe\u7f6e\uff0c\u662f\u7ed9\u9ed8\u8ba4\u6587\u4ef6\u52a0\u8def\u5f84\u7684\uff0c\u4f1a\u52a0\u5230./main.js\u524d\n        contentBase: path.resolve('public'),  // http://localhost:8080/\u9f99\u5957.jpg,\u53ef\u4ee5\u8bbf\u95ee\u5728\u5176\u4ed6\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\n        open: true, // \u542f\u52a8\u670d\u52a1\u7684\u65f6\u5019\u662f\u5426\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\u9875\u9762\n        port: 8080, // \u6d4f\u89c8\u5668\u670d\u52a1\u7aef\u53e3\uff0c\u9ed8\u8ba48080\n        compress: true // \u662f\u5426\u542f\u52a8\u538b\u7f29gzip\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.css$/,\n                use: [\n                    'style-loader',  // \u8fd4\u56dejs,webpack\u53ea\u8ba4\u8bc6js\n                    {\n                        loader: 'css-loader', // \u5bf9url import\u8fdb\u884c\u5904\u7406\n                        options: {\n                            importLoaders: 1\n                        }\n                    },\n                    'postcss-loader'  // css\u9884\u5904\u7406\u5668\uff0c\u5904\u7406\u5382\u5546\u524d\u7f00\n                ]\n            },\n            {\n                test: /\\.less$/,\n                use: [\n                    'style-loader',  // \u8fd4\u56dejs,webpack\u53ea\u8ba4\u8bc6js\n                    {\n                        loader: 'css-loader', // \u5bf9url import\u8fdb\u884c\u5904\u7406\n                        options: {\n                            importLoaders: 2\n                        }\n                    },\n                    'less-loader'\n                    'postcss-loader'  // css\u9884\u5904\u7406\u5668\uff0c\u5904\u7406\u5382\u5546\u524d\u7f00\n                ]\n            },\n        ]\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            template: './src/index.html'\n        })\n    ]\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6dfb\u52a0css\u5382\u5546\u524d\u7f00")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cmd"},"npm install postcss-loader postcss-preset-env -D\n")),Object(r.b)("p",null,"-webpack.config.js"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\n    test: /\\.css$/,\n    use: [\n        'style-loader',  // \u8fd4\u56dejs,webpack\u53ea\u8ba4\u8bc6js\n        {\n            loader: 'css-loader', // \u5bf9url import\u8fdb\u884c\u5904\u7406\n            options: {\n                importLoaders: 1\n            }\n        },\n        'postcss-loader'  // css\u9884\u5904\u7406\u5668\uff0c\u5904\u7406\u5382\u5546\u524d\u7f00\n    ]\n},\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6econfig\u6587\u4ef6"),Object(r.b)("li",{parentName:"ul"},"postcss.config.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let postCSSPresetEnv = require('postcss-preset-env');\nmodule.exports = {\n    plugins:[\n        postCSSPresetEnv({\n            browsers:'last 10 version'  // \u652f\u6301\u6700\u65b0\u7684\u5341\u4e2a\u7248\u672c\n        })\n    ]\n}\n")),Object(r.b)("h3",{id:"\u652f\u6301\u56fe\u7247"},"\u652f\u6301\u56fe\u7247"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5b89\u88c5\u4f9d\u8d56\u5305"),Object(r.b)("li",{parentName:"ul"},"webpack5\u4e2d\u5df2\u7ecf\u53d6\u6d88\u8fd9\u4e2a\u6a21\u5757\uff0c\u5185\u7f6e\u4e86")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cmd"},"npm install file-loader url-loader -D\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"webpack.config.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\nconst HtmlWebpackPlugin = require("html-webpack-plugin"); // \u901a\u8fc7 npm \u5b89\u88c5\n\nmodule.exports = {\n  mode: process.env.NODE_ENV,\n  entry: "./src/index.js",\n  output: {\n    path: path.resolve(__dirname, "dist"),\n    filename: "main.js",\n    publicPath: "/", // \u9ed8\u8ba4\u662f\u659c\u6760\n  },\n  devServer: {\n    publicPath: "/", // \u9ed8\u8ba4\u662f\u659c\u6760,\u8fd9\u91cc\u8bbe\u7f6e\u4f1a\u8986\u76d6\u51fa\u53e3\u7684\u8bbe\u7f6e\uff0c\u662f\u7ed9\u9ed8\u8ba4\u6587\u4ef6\u52a0\u8def\u5f84\u7684\uff0c\u4f1a\u52a0\u5230./main.js\u524d\n    contentBase: path.resolve("public"), // http://localhost:8080/\u9f99\u5957.jpg,\u53ef\u4ee5\u8bbf\u95ee\u5728\u5176\u4ed6\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\n    open: true, // \u542f\u52a8\u670d\u52a1\u7684\u65f6\u5019\u662f\u5426\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\u9875\u9762\n    port: 8080, // \u6d4f\u89c8\u5668\u670d\u52a1\u7aef\u53e3\uff0c\u9ed8\u8ba48080\n    compress: true, // \u662f\u5426\u542f\u52a8\u538b\u7f29gzip\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.(jpg|png|gif|bmp|svg)$/,\n        use: [\n          {\n            loader: "file-loader",\n            options: {\n              esModule: false,  // \u76f4\u63a5\u53d6\u6587\u4ef6\u5f53\u524d\u8def\u5f84\n              name: "[hash:10].[ext]",  // \u53d610\u4f4dhash\u503c\uff0c\u4fdd\u7559\u539f\u6765\u6269\u5c55\u540d\u5b57\n              // \u4ee58K\u4e3a\u5206\u754c\u7ebf \u5982\u679c\u5f15\u5165\u7684\u6587\u4ef6\u5c0f\u4e8e8K\uff0c\u5c31\u628a\u56fe\u7247\u53d8\u6210base64\u5b57\u7b26\u4e32\u63d2\u5165html,\u5426\u5219 \u548cfile-loader\u4e00\u6837\u7684\n            //   limit: 8 * 1024,  // url-loader\n            },\n          },\n        ],\n      },\n    ],\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      template: "./src/index.html",\n    }),\n  ],\n};\n')),Object(r.b)("h3",{id:"js\u517c\u5bb9"},"js\u517c\u5bb9"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u628a es6 \u8f6c\u6362\u4e3a es5"),Object(r.b)("li",{parentName:"ul"},"\u7528babel-loader\u8f6c\u4e49\u4e3ajs\uff0c@babel/core\u662f\u7f16\u8bd1\u7684\u6838\u5fc3\u5305"),Object(r.b)("li",{parentName:"ul"},"@babel/preset-env \u662f\u9884\u8bbe\u5305\u3002\u628a\u5f88\u591a\u63d2\u4ef6\u653e\u5230\u91cc\u9762")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cmd"},"npm i babel-loader @babel/core @babel/preset-env @babel/preset-react  -D\nnpm i @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties -D  // \u517c\u5bb9\u88c5\u9970\u5668\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"webpack.config.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'{\n  test: /\\.js$/,\n  use: [\n    {\n      loader: \'babel-loader\',\n      options: {\n        presets: [\n          "@babel/preset-env",\n          "@babel/preset-react"\n        ],\n        plugins: [\n          ["@babel/plugin-proposal-decorators", {legacy: true}],\n          ["@babel/plugin-proposal-class-properties", {loose: true}]\n        ]\n      }\n    }\n  ]\n},\n')),Object(r.b)("h3",{id:"\u4ee3\u7801\u6821\u9a8c"},"\u4ee3\u7801\u6821\u9a8c"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"eslint-loader \u4f1a\u8c03\u7528 babel-eslint \u5728\u8c03\u7528 eslint \u6765\u8fdb\u884c\u4e00\u4e2a\u4ee3\u7801\u68c0\u67e5")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cmd"},"npm install eslint eslint-loader babel-eslint --D\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"webpack.config.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\n  test: /\\.js$/,\n  loader: 'eslint-loader',  // \u8fdb\u884c\u4ee3\u7801\u68c0\u67e5\n  enforce: 'pre', // \u7ed9loader\u8fdb\u884c\u5206\u7c7b pre -> normal -> inline -> post\n  options: { fix: true },  // \u81ea\u52a8\u4fee\u590d\n  exclude: /node_modules/  // \u6392\u9664\u7684\u6587\u4ef6\n},\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},".eslintrc.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// \u666e\u901a\u914d\u7f6e\nmodule.exports = {\n    root: true, // \u6839\u6587\u4ef6\uff0c\u56e0\u4e3aeslint\u662f\u53ef\u4ee5\u7ee7\u627f\u7684\n    parser: 'babel-eslint',\n    parserOptions: {\n        surceType: 'module',\n        ecmaVersion: 2015\n    },\n    //\u6307\u5b9a\u811a\u672c\u7684\u8fd0\u884c\u73af\u5883\n    env: {\n        browser: true\n    },\n    rules: {\n        indent: 'off',\n        quotes: 'off',\n        'no-console': 'error'\n    }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4f7f\u7528\u88ab\u4eba\u7684eslint\u89c4\u8303")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cmd"},"npm install eslint-config-airbnb  -D\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:"diff",diff:!0},'// \u7ee7\u627f\u914d\u7f6e\nmodule.exports = {\n+  extends: "airbnb",\n   parser: "babel-eslint",\n  // \u6307\u5b9a\u811a\u672c\u7684\u8fd0\u884c\u73af\u5883\n   env: {\n    browser: true,\n+   node: true,\n   },\n+  /* \u53ef\u4ee5\u8986\u76d6\u5f53\u524d\u7ee7\u627f\u7684\u914d\u7f6e */\n   rules: {\n    indent: "off",\n    quotes: "off",\n    "no-console": "error",\n  },\n};\n')),Object(r.b)("h3",{id:"sourcemap"},"sourcemap"))}o.isMDXComponent=!0},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return m}));var l=t(0),a=t.n(l);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),o=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=o(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),i=o(t),d=l,m=i["".concat(c,".").concat(d)]||i[d]||u[d]||r;return t?a.a.createElement(m,s(s({ref:n},b),{},{components:t})):a.a.createElement(m,s({ref:n},b))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,c=new Array(r);c[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,c[1]=s;for(var b=2;b<r;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
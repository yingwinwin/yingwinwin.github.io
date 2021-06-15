(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),i=(t(0),t(137)),c={id:"cs_algorithm",title:"\u7b97\u6cd5\u9898"},l={unversionedId:"cs_algorithm",id:"cs_algorithm",isDocsHomePage:!1,title:"\u7b97\u6cd5\u9898",description:"1. \u4e24\u6570\u4e4b\u548c",source:"@site/docs/cs_algorithm.md",slug:"/cs_algorithm",permalink:"/docs/cs_algorithm",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/cs_algorithm.md",version:"current"},o=[{value:"1. \u4e24\u6570\u4e4b\u548c",id:"1-\u4e24\u6570\u4e4b\u548c",children:[]},{value:"2. \u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd III",id:"2-\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd-iii",children:[]},{value:"3. \u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32",id:"3-\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32",children:[]},{value:"4. \u7535\u8bdd\u53f7\u7801\u5b57\u6bcd\u7ec4\u5408",id:"4-\u7535\u8bdd\u53f7\u7801\u5b57\u6bcd\u7ec4\u5408",children:[]}],u={toc:o};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"1-\u4e24\u6570\u4e4b\u548c"},"1. \u4e24\u6570\u4e4b\u548c"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e00\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"var twoSum = function(nums, target) {\n    const map = new Map();\n    for(let i = 0; i < nums.length; i ++) {\n        if(map.has(target - nums[i])) {\n            return [map.get(target - nums[i]), i];\n        };\n        map.set(nums[i], i);\n    }\n};\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e8c\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"var twoSum = function(nums, target) {\n    for(let i = 0; i < nums.length; i ++) {\n        for(let j = i + 1; j < nums.length; j ++) {\n            if (nums[i] + nums[j] === target) {\n                return [i, j]\n            }\n        }\n    }\n};\n")),Object(i.b)("h3",{id:"2-\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd-iii"},"2. \u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd III"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'\u8f93\u5165\uff1a"Let\'s take LeetCode contest"'),Object(i.b)("li",{parentName:"ul"},'\u8f93\u51fa\uff1a"s\'teL ekat edoCteeL tsetnoc"')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"var reverseWords = function(s) {\n  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')\n};\n")),Object(i.b)("h3",{id:"3-\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32"},"3. \u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'\u8f93\u5165: "00110011"'),Object(i.b)("li",{parentName:"ul"},"\u8f93\u51fa: 6")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {string} s\n * @return {number}\n */\nvar countBinarySubstrings = function(s) {\n    let match = (str) => {\n        let j = str.match(/^(0+)|(1+)/)[0];  // \u6b63\u5219\u53d6\u53cd\n        let o = (j[0]^1).toString().repeat(j.length);\n        /* \u8fd9\u91cc\u5982\u679c\u7528\u6b63\u5219\u5339\u914d\u4f1a\u5806\u6808\u6ea2\u51fa */\n        if(str.startsWith(`${j}${o}`)) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n    let count = 0;\n    for (let i = 0 ; i < s.length - 1; i++) {\n        let sub = match(s.slice(i));\n        if (sub) {\n            count ++;\n        }\n    }\n    return count;\n};\n")),Object(i.b)("h3",{id:"4-\u7535\u8bdd\u53f7\u7801\u5b57\u6bcd\u7ec4\u5408"},"4. \u7535\u8bdd\u53f7\u7801\u5b57\u6bcd\u7ec4\u5408"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'\u8f93\u5165\uff1adigits = "23"'),Object(i.b)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",'["ad","ae","af","bd","be","bf","cd","ce","cf"]')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {string} digits\n * @return {string[]}\n */\nvar letterCombinations = function(digits) {\n    if(digits === '') {\n        return []\n    }\n    //\u7535\u8bdd\u53f7\u7801\u8868\n    let arr = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];\n    let num = digits.split('')  // \u628a\u5b57\u7b26\u4e322\uff0c3\u53d8\u6210\u6570\u7ec4[2, 3];\n    let code = num.map(item => arr[item]);  // \u5f97\u52302,3\u5bf9\u5e94\u7684\u7535\u8bdd\u53f7\u7801\u5b57\u6bcd\u7684\u6570\u7ec4['abc', 'def'];\n    if(code.length == 1) {\n        return code[0].split('')\n    }\n    let comb = arr => {\n        let tmp = [];\n        \n        for(let i = 0 ; i < arr[0].length; i ++) {\n            for(let j = 0; j < arr[1].length; j ++ ) {\n                tmp.push(arr[0][i] + arr[1][j]);\n            }\n        }\n        arr.splice(0, 2, tmp); // \u628a\u6570\u7ec4\u7684\u524d\u4e24\u9879\u53d8\u4e3a\u4e00\u4e2a\u6570\u7ec4\n        if(arr.length > 1) {\n            comb(arr);\n        } else {\n            return tmp;\n        }\n        return arr[0];\n    }\n    return comb(code);\n};\n")))}s.isMDXComponent=!0},137:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,f=p["".concat(c,".").concat(b)]||p[b]||m[b]||i;return t?a.a.createElement(f,l(l({ref:n},u),{},{components:t})):a.a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=b;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
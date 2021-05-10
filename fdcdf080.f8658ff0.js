(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{126:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return c})),t.d(e,"toc",(function(){return s})),t.d(e,"default",(function(){return u}));var r=t(3),i=t(7),o=(t(0),t(132)),a={id:"ds_list",title:"\u94fe\u8868"},c={unversionedId:"ds_list",id:"ds_list",isDocsHomePage:!1,title:"\u94fe\u8868",description:"`js",source:"@site/docs/ds_list.md",slug:"/ds_list",permalink:"/docs/ds_list",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/ds_list.md",version:"current",sidebar:"someError",previous:{title:"\u62a5\u9519/\u95ee\u9898/\u8bb0\u5f55",permalink:"/docs/errors"}},s=[],l={toc:s};function u(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"/* \n    1. \u94fe\u8868\u4e2d\u7684\u5143\u7d20\u5728\u5185\u5b58\u4e2d\u4e0d\u7528\u662f\u8fde\u7eed\u7684\u7a7a\u95f4\n    2. \u94fe\u8868\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u50a8\u5b58\u5143\u7d20\u672c\u8eab\u7684\u8282\u70b9\u548c\u6307\u5411\u4e0b\u4e00\u4e2a\u5143\u7d20\u7684\u5f15\u7528\n\n    \u548c\u6570\u7ec4\u6bd4\u8f83\u7684\u65f6\u5019\u7684\u4f18\u70b9\uff1a\n    1. \u5185\u5b58\u7a7a\u95f4\u4e0d\u7528\u662f\u8fde\u7eed\u7684\uff0c\u4e00\u4e2a\u6307\u5411\u4e00\u4e2a\n    2. \u5728\u521b\u5efa\u7684\u65f6\u5019\u4e0d\u7528\u786e\u5b9a\u5927\u5c0f\n    3. \u5728\u63d2\u5165\u548c\u5220\u9664\u7684\u65f6\u5019\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(1),\u6548\u7387\u9ad8\u4e8e\u6570\u7ec4\n    \u548c\u6570\u7ec4\u6bd4\u8f83\u7684\u65f6\u5019\u7684\u7f3a\u70b9:\n    1. \u94fe\u8868\u8bbf\u95ee\u4efb\u4f55\u4e00\u4e2a\u4f4d\u7f6e\u7684\u5143\u7d20\uff0c\u90fd\u8981\u4ece\u5934\u5f00\u59cb\u8bbf\u95ee\uff08\u65e0\u6cd5\u8df3\u8fc7\uff09\n    2. \u65e0\u6cd5\u901a\u8fc7\u4e0b\u6807\u76f4\u63a5\u8bbf\u95ee\n*/\n\n  function ListLink() {\n    function Node(data) {\n        this.data = data;\n        this.next = null;\n    }\n    this.head = null;\n    this.length = 0;\n    \n    ListLink.prototype.append = function (data) {\n        let newNode = new Node(data);\n        if(this.length === 0) {\n            this.head = newNode;\n        } else {\n            let current = this.head;\n            // \u627e\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u3002\u7136\u540e\u8ba9\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u7684next\u6307\u5411\u65b0\u8282\u70b9\n            while(current.next) {\n                current = current.next\n            }\n            current.next = newNode;\n        }\n        this.length ++;\n    }\n    ListLink.prototype.toString = function () {\n        let current = this.head;\n        let listString = '';\n        while(current) {\n            listString += current.data + ' ';\n            current = current.next\n        }\n        return listString;\n    }\n    ListLink.prototype.insert = function (positon, data) {\n      if (positon < 0 || positon > this.length) return false;\n\n      let newNode = new Node(data);\n\n      // \u5982\u679c\u662f\u7b2c\u4e00\u9879\n      if (positon === 0) {\n        newNode.next = this.head; // \u65b0\u8282\u70b9\u6307\u5411\u7b2c\u4e00\u4e2a\u8282\u70b9\uff0cthis.head\u5c31\u662f\u7b2c\u4e00\u4e2a\u8282\u70b9\n        this.head = newNode;  // \u7136\u540e\u5f53\u63d2\u5165\u4e4b\u540e\uff0c\u628a\u6307\u5411\u65b0\u8282\u70b9\uff0c\u4e5f\u5c31\u662f\u7b2c\u4e00\u4e2a\u8282\u70b9\n      } else {\n        // \u9700\u8981\u4e09\u4e2a\u53d8\u91cf\uff0c\u5faa\u73af\u7528\u7684index\uff0c\u5f53\u524d\u8282\u70b9\uff0c\u4e0a\u4e00\u4e2a\u8282\u70b9\n        let index = 0;\n        let current = this.head;\n        let previous = null;\n        // \u5faa\u73af\u5230\u5f53\u524d\u7684\u8282\u70b9\u4f4d\u7f6e\n        /* \n          1\u3001\u7528\u5faa\u73af\u627e\u5230\uff0c\u7136\u540e\u628a\u4f4d\u7f6e\u7a7a\u51fa\u6765\n          2\u3001\u518d\u628a\u65b0\u8282\u70b9\u63d2\u5165\u8fdb\u53bb\n        */\n        while(index ++ < positon) {\n          previous = current;  // \u628a\u5f53\u524d\u8282\u70b9\u5b58\u5230\u4e0a\u4e00\u4e2a\u8282\u70b9\u4e2d\n          current = current.next;  // \u628a\u5f53\u524d\u8282\u70b9\u7684\u6307\u5411\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\u7ed9\u5230current\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u4e2d\u95f4\u7a7a\u4e86\u4e2a\u4f4d\u7f6e\n        }\n        previous.next = newNode;  // \u8ba9\u4e0a\u4e00\u4e2a\u8282\u70b9\u7684next = \u65b0\u7684\u8282\u70b9\n        newNode.next = current; // \u5f53\u65b0\u8282\u70b9\u7684next = \u5f53\u524d\u8282\u70b9\uff1b\n      }\n      this.length ++;\n      return true;\n    }\n\n    ListLink.prototype.get = function (position) {\n      if (position < 0 || position >= this.length) return null;\n      let index = 0;\n      let current = this.head;\n      while(index++ < position) {\n        current = current.next;\n      }\n      \n      return current.data;\n    }\n}\n\nlet list = new ListLink();\nlist.append('abc')\nlist.append('cba')\nlist.append('aaa')\nlist.insert(2, 'ccc')\nconsole.log(list.get(2)); // ccc\n\nconsole.log(list.toString());  // abc cba ccc aaa\n")))}u.isMDXComponent=!0},132:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return h}));var r=t(0),i=t.n(r);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=i.a.createContext({}),u=function(n){var e=i.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},p=function(n){var e=u(n.components);return i.a.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},f=i.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,a=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),p=u(t),f=r,h=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return t?i.a.createElement(h,c(c({ref:e},l),{},{components:t})):i.a.createElement(h,c({ref:e},l))}));function h(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:r,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);
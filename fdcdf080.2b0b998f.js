(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{126:function(n,t,e){"use strict";e.r(t),e.d(t,"frontMatter",(function(){return s})),e.d(t,"metadata",(function(){return c})),e.d(t,"toc",(function(){return a})),e.d(t,"default",(function(){return u}));var r=e(3),i=e(7),o=(e(0),e(132)),s={id:"ds_list",title:"\u94fe\u8868"},c={unversionedId:"ds_list",id:"ds_list",isDocsHomePage:!1,title:"\u94fe\u8868",description:"`js",source:"@site/docs/ds_list.md",slug:"/ds_list",permalink:"/docs/ds_list",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/ds_list.md",version:"current",sidebar:"someError",previous:{title:"\u62a5\u9519/\u95ee\u9898/\u8bb0\u5f55",permalink:"/docs/errors"}},a=[],l={toc:a};function u(n){var t=n.components,e=Object(i.a)(n,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,e,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"/* \n    1. \u94fe\u8868\u4e2d\u7684\u5143\u7d20\u5728\u5185\u5b58\u4e2d\u4e0d\u7528\u662f\u8fde\u7eed\u7684\u7a7a\u95f4\n    2. \u94fe\u8868\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u50a8\u5b58\u5143\u7d20\u672c\u8eab\u7684\u8282\u70b9\u548c\u6307\u5411\u4e0b\u4e00\u4e2a\u5143\u7d20\u7684\u5f15\u7528\n\n    \u548c\u6570\u7ec4\u6bd4\u8f83\u7684\u65f6\u5019\u7684\u4f18\u70b9\uff1a\n    1. \u5185\u5b58\u7a7a\u95f4\u4e0d\u7528\u662f\u8fde\u7eed\u7684\uff0c\u4e00\u4e2a\u6307\u5411\u4e00\u4e2a\n    2. \u5728\u521b\u5efa\u7684\u65f6\u5019\u4e0d\u7528\u786e\u5b9a\u5927\u5c0f\n    3. \u5728\u63d2\u5165\u548c\u5220\u9664\u7684\u65f6\u5019\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(1),\u6548\u7387\u9ad8\u4e8e\u6570\u7ec4\n    \u548c\u6570\u7ec4\u6bd4\u8f83\u7684\u65f6\u5019\u7684\u7f3a\u70b9:\n    1. \u94fe\u8868\u8bbf\u95ee\u4efb\u4f55\u4e00\u4e2a\u4f4d\u7f6e\u7684\u5143\u7d20\uff0c\u90fd\u8981\u4ece\u5934\u5f00\u59cb\u8bbf\u95ee\uff08\u65e0\u6cd5\u8df3\u8fc7\uff09\n    2. \u65e0\u6cd5\u901a\u8fc7\u4e0b\u6807\u76f4\u63a5\u8bbf\u95ee\n*/\n\n  function ListLink() {\n    function Node(data) {\n        this.data = data;\n        this.next = null;\n    }\n    this.head = null;\n    this.length = 0;\n    \n    ListLink.prototype.append = function (data) {\n        let newNode = new Node(data);\n        if(this.length === 0) {\n            this.head = newNode;\n        } else {\n            let current = this.head;\n            // \u627e\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u3002\u7136\u540e\u8ba9\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u7684next\u6307\u5411\u65b0\u8282\u70b9\n            while(current.next) {\n                current = current.next\n            }\n            current.next = newNode;\n        }\n        this.length ++;\n    }\n    ListLink.prototype.toString = function () {\n        let current = this.head;\n        let listString = '';\n        while(current) {\n            listString += current.data + ' ';\n            current = current.next\n        }\n        return listString;\n    }\n    ListLink.prototype.insert = function (positon, data) {\n      if (positon < 0 || positon > this.length) return false;\n\n      let newNode = new Node(data);\n\n      // \u5982\u679c\u662f\u7b2c\u4e00\u9879\n      if (positon === 0) {\n        newNode.next = this.head; // \u65b0\u8282\u70b9\u6307\u5411\u7b2c\u4e00\u4e2a\u8282\u70b9\uff0cthis.head\u5c31\u662f\u7b2c\u4e00\u4e2a\u8282\u70b9\n        this.head = newNode;  // \u7136\u540e\u5f53\u63d2\u5165\u4e4b\u540e\uff0c\u628a\u6307\u5411\u65b0\u8282\u70b9\uff0c\u4e5f\u5c31\u662f\u7b2c\u4e00\u4e2a\u8282\u70b9\n      } else {\n        // \u9700\u8981\u4e09\u4e2a\u53d8\u91cf\uff0c\u5faa\u73af\u7528\u7684index\uff0c\u5f53\u524d\u8282\u70b9\uff0c\u4e0a\u4e00\u4e2a\u8282\u70b9\n        let index = 0;\n        let current = this.head;\n        let previous = null;\n        // \u5faa\u73af\u5230\u5f53\u524d\u7684\u8282\u70b9\u4f4d\u7f6e\n        /* \n          1\u3001\u7528\u5faa\u73af\u627e\u5230\uff0c\u7136\u540e\u628a\u4f4d\u7f6e\u7a7a\u51fa\u6765\n          2\u3001\u518d\u628a\u65b0\u8282\u70b9\u63d2\u5165\u8fdb\u53bb\n        */\n        while(index ++ < positon) {\n          previous = current;  // \u628a\u5f53\u524d\u8282\u70b9\u5b58\u5230\u4e0a\u4e00\u4e2a\u8282\u70b9\u4e2d\n          current = current.next;  // \u628a\u5f53\u524d\u8282\u70b9\u7684\u6307\u5411\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\u7ed9\u5230current\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u4e2d\u95f4\u7a7a\u4e86\u4e2a\u4f4d\u7f6e\n        }\n        previous.next = newNode;  // \u8ba9\u4e0a\u4e00\u4e2a\u8282\u70b9\u7684next = \u65b0\u7684\u8282\u70b9\n        newNode.next = current; // \u5f53\u65b0\u8282\u70b9\u7684next = \u5f53\u524d\u8282\u70b9\uff1b\n      }\n      this.length ++;\n      return true;\n    }\n\n    ListLink.prototype.get = function (position) {\n      if (position < 0 || position >= this.length) return null;\n      let index = 0;\n      let current = this.head;\n      while(index++ < position) {\n        current = current.next;\n      }\n      \n      return current.data;\n    }\n\n    ListLink.prototype.indexOf = function (data){\n      let current = this.head;\n      let index = 0;\n\n      while(current) {\n        if(current.data === data) {\n          return index\n        }\n        current = current.next;\n        index++;\n      }\n      return -1;\n    }\n\n    ListLink.prototype.update = function (position, newdata) {\n      if (position < 0 || position >= this.length) return false;\n      let current = this.head;\n      let index = 0;\n      while(index++ < position) {\n        current = current.next;\n      }\n      current.data = newdata;\n      return true;\n    }\n\n    ListLink.prototype.removeAt = function (position) {\n      if (position < 0 || position >= this.length) return null;\n      let current = this.head;\n      if(position === 0) {\n        this.head = this.head.next\n      } else {\n        let index = 0;\n        let previous = null;\n        while(index++ < position) {\n          previous = current;\n          current = current.next;\n        }\n\n        previous.next = current.next; // \u4e0a\u4e00\u4e2a\u8282\u70b9\u6307\u5411\u5f53\u524d\u8282\u70b9\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\n      }\n      this.length -=1\n      return current.data;\n    }\n\n    ListLink.prototype.remove = function (data) {\n      return this.removeAt(this.indexOf(data))\n    }\n\n    ListLink.prototype.isEmpty = function () {\n      return !this.length\n    }\n    ListLink.prototype.size = function () {\n      return this.length\n    }\n}\n\nlet list = new ListLink();\nconsole.log(list.isEmpty()); //\u4e0d\u5305\u542b\u4efb\u4f55\u5143\u7d20\u8fd4\u56detrue\nlist.append('abc')\nlist.append('cba')\nlist.append('aaa')\nlist.insert(2, 'ccc')\nlist.update(3, 'bbb')\nconsole.log(list.indexOf('ccc'));  // 2\nconsole.log(list.get(2)); // ccc\nconsole.log(list.removeAt(2));  // ccc\nconsole.log(list.remove('cba'));  // cba\nconsole.log(list.isEmpty());  // \u5305\u542b\u5143\u7d20\u8fd4\u56detrue\nconsole.log(list.size());  // 2\nconsole.log(list.toString());  // abc bbb \n")))}u.isMDXComponent=!0},132:function(n,t,e){"use strict";e.d(t,"a",(function(){return p})),e.d(t,"b",(function(){return h}));var r=e(0),i=e.n(r);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var l=i.a.createContext({}),u=function(n){var t=i.a.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):c(c({},t),n)),e},p=function(n){var t=u(n.components);return i.a.createElement(l.Provider,{value:t},n.children)},d={inlineCode:"code",wrapper:function(n){var t=n.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(n,t){var e=n.components,r=n.mdxType,o=n.originalType,s=n.parentName,l=a(n,["components","mdxType","originalType","parentName"]),p=u(e),f=r,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return e?i.a.createElement(h,c(c({ref:t},l),{},{components:e})):i.a.createElement(h,c({ref:t},l))}));function h(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var o=e.length,s=new Array(o);s[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=n,c.mdxType="string"==typeof n?n:r,s[1]=c;for(var l=2;l<o;l++)s[l]=e[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,e)}f.displayName="MDXCreateElement"}}]);
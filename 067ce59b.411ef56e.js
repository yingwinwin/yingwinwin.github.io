(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),l=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=l.a.createContext({}),u=function(e){var n=l.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return l.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},b=l.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||s;return t?l.a.createElement(d,o(o({ref:n},c),{},{components:t})):l.a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=b;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return u}));var r=t(3),l=t(7),s=(t(0),t(145)),i={id:"promise",title:"Promise"},o={unversionedId:"promise",id:"promise",isDocsHomePage:!1,title:"Promise",description:"1. \u4ecb\u7ecd",source:"@site/docs/js_promise.md",slug:"/promise",permalink:"/docs/promise",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/js_promise.md",version:"current",sidebar:"someError",previous:{title:"\u5f02\u6b65\u57fa\u7840",permalink:"/docs/asyn_base"},next:{title:"\u4e1a\u52a1\u5b9e\u73b0",permalink:"/docs/business_scenario"}},a=[{value:"1. \u4ecb\u7ecd",id:"1-\u4ecb\u7ecd",children:[]},{value:"2. \u7b80\u7248promise",id:"2-\u7b80\u7248promise",children:[]},{value:"3. \u7b26\u5408A+\u89c4\u8303",id:"3-\u7b26\u5408a\u89c4\u8303",children:[]},{value:"4. \u5176\u4ed6\u65b9\u6cd5",id:"4-\u5176\u4ed6\u65b9\u6cd5",children:[{value:"4.1 \u5ef6\u8fdf\u5bf9\u8c61",id:"41-\u5ef6\u8fdf\u5bf9\u8c61",children:[]},{value:"4.2 resolve",id:"42-resolve",children:[]},{value:"4.3 reject",id:"43-reject",children:[]},{value:"4.3 all",id:"43-all",children:[]},{value:"4.4 race",id:"44-race",children:[]},{value:"4.5 catch",id:"45-catch",children:[]},{value:"4.6 finally",id:"46-finally",children:[]},{value:"4.7 allSettled",id:"47-allsettled",children:[]},{value:"4.8 any",id:"48-any",children:[]},{value:"4.9 promisify",id:"49-promisify",children:[]}]}],c={toc:a};function u(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"1-\u4ecb\u7ecd"},"1. \u4ecb\u7ecd"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"https://promisesaplus.com/"},"https://promisesaplus.com/")," Promises/A+\u89c4\u8303")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Promise \u662f\u4e00\u4e2a\u7c7b")))),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"promise \u6709\u4e09\u4e2a\u72b6\u6001\uff1a \u6210\u529f resolve\uff0c\u5931\u8d25 reject\uff0c\u7b49\u5f85 pending"),Object(s.b)("li",{parentName:"ol"},"\u7528\u6237\u81ea\u5df1\u53ef\u4ee5\u51b3\u5b9a\u6210\u529f\u548c\u5931\u8d25\u7684\u539f\u56e0\u3002"),Object(s.b)("li",{parentName:"ol"},"promise \u9ed8\u8ba4\u6267\u884c\u5668\u65f6\u7acb\u5373\u6267\u884c"),Object(s.b)("li",{parentName:"ol"},"promise \u7684\u5b9e\u4f8b\u90fd\u62e5\u6709\u4e00\u4e2a then \u65b9\u6cd5\uff0c\u4e00\u4e2a\u53c2\u6570\u662f\u6210\u529f\u7684\u56de\u8c03\uff0c\u4e00\u4e2a\u53c2\u6570\u662f\u5931\u8d25\u7684\u56de\u8c03"),Object(s.b)("li",{parentName:"ol"},"\u5982\u679c\u6267\u884c\u51fd\u6570\u65f6\u53d1\u751f\u4e86\u5f02\u5e38\u4e5f\u4f1a\u6267\u884c\u5931\u8d25\u903b\u8f91"),Object(s.b)("li",{parentName:"ol"},"\u5982\u679c promise \u4e00\u65e6\u6210\u529f\u5c31\u4e0d\u80fd\u5931\u8d25\u4e86\uff0c\u53cd\u8fc7\u6765\u4e5f\u662f\u4e00\u6837\uff0c\u4e5f\u5c31\u662f\u53ea\u6709 pending \u72b6\u6001\u7684\u65f6\u5019\uff0c\u624d\u53ef\u4ee5\u6539\u53d8\u72b6\u6001")),Object(s.b)("h2",{id:"2-\u7b80\u7248promise"},"2. \u7b80\u7248promise"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u57fa\u672c\u7684\u72b6\u6001\u6539\u53d8"),Object(s.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u5f02\u6b65\u64cd\u4f5c(\u7528\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f --- \u89e3\u51b3\u540c\u6b65\u5e76\u53d1\u95ee\u9898)")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'// promise \u7684\u7279\u70b9\u4ee5\u53ca\u6982\u5ff5\n// https://promisesaplus.com/  Promises/A+\u89c4\u8303\n\n// promise es6\u5df2\u7ecf\u5b9e\u73b0\u3002ie\u4e0d\u652f\u6301\uff0c\u9700\u8981polyfill\n\n/* \n    promise\u7684\u4ea7\u751f---\x3e\u89e3\u51b3\u5f02\u6b65\u95ee\u9898\n    1. \u591a\u4e2a\u5f02\u6b65\u8bf7\u6c42\u5e76\u53d1\uff08\u5e0c\u671b\u540c\u6b65\u6700\u7ec8\u7684\u7ed3\u679c\uff09 Promise.all\n    2. \u94fe\u5f0f\u5f02\u6b65\u8bf7\u6c42\u7684\u95ee\u9898\uff0c\u4e0a\u4e00\u4e2a\u4eba\u7684\u8f93\u51fa\u662f\u4e0b\u4e00\u4e2a\u4eba\u7684\u8f93\u5165\uff0cPromise\u94fe\u5f0f\u8c03\u7528\n    3. \u7f3a\u9677\uff1a\u8fd8\u662f\u57fa\u4e8e\u56de\u8c03\n*/\n\n// \u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684promise\n/* \u5b9a\u4e49\u4e09\u79cdpromise\u7684\u72b6\u6001 */\nlet RESOLVE = "RESOLVE";\nlet REJECT = "REJECT";\nlet PENDING = "PENDING";\n\nclass Promise {\n  /* \u63a5\u6536\u4e00\u4e2a\u6267\u884c\u5668 */\n  constructor(executor) {\n    this.status = PENDING; // \u9ed8\u8ba4\u72b6\u6001\u4e3apending\n    this.value = undefined; // \u6210\u529f\u7684\u4fe1\u606f\n    this.reason = undefined; // \u5931\u8d25\u7684\u4fe1\u606f\n    this.onFulfilledCallback = []; // \u6210\u529f\u56de\u8c03\u7684\u50a8\u5b58\u5668\n    this.onRejectedCallback = []; // \u5931\u8d25\u56de\u8c03\u7684\u50a8\u5b58\u5668\n    let resolve = (value) => {\n      // \u6210\u529f\u8c03\u7528\u7684\u65b9\u6cd5\n      if (this.status === PENDING) {\n        // \u5982\u679c\u662fpending\u72b6\u6001\u624d\u9700\u8981\u6539\u53d8\u72b6\u6001\n        this.status = RESOLVE;\n        this.value = value;\n        this.onFulfilledCallback.forEach((fn) => fn()); // \u5f53\u8c03\u7528\u6210\u529fresolve\u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u4f9d\u6b21\u6267\u884c\u51fd\u6570\n      }\n    };\n\n    let reject = (reason) => {\n      // \u5931\u8d25\u8c03\u7528\u7684\u65b9\u6cd5\n      if (this.status === PENDING) {\n        this.status = REJECT;\n        this.reason = reason;\n        this.onRejectedCallback.forEach((fn) => fn()); // \u5f53\u8c03\u7528reject\u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u4f9d\u6b21\u6267\u884c\u51fd\u6570\n      }\n    };\n    /* \u8fd9\u91cc\u7528\u6765\u6355\u83b7error\u9519\u8bef */\n    try {\n      executor(resolve, reject); // \u4f1a\u7acb\u5373\u6267\u884c\n    } catch (e) {\n      reject(e);\n    }\n  }\n  /* \u6bcf\u4e00\u4e2apromise\u5fc5\u987b\u6709\u4e00\u4e2athen\u65b9\u6cd5 */\n  then(onFulfilled, onRejected) {\n    /* \u5982\u679c\u72b6\u6001\u4e3a\u6210\u529f\uff0c\u90a3\u5c31\u8c03\u7528\u4f60\u6210\u529f\u7684\u65b9\u6cd5\uff0c\u4f20\u5165\u6210\u529f\u7684\u4fe1\u606f */\n    if (this.status === RESOLVE) {\n      onFulfilled(this.value);\n    }\n    /* \u5982\u679c\u72b6\u6001\u4e3a\u5931\u8d25\uff0c\u5c31\u8c03\u7528\u5931\u8d25\u7684\u65b9\u6cd5\uff0c\u4f20\u5165\u9519\u8bef\u4fe1\u606f */\n    if (this.status === REJECT) {\n      onRejected(this.reason);\n    }\n    /*  \u5982\u679c\u8c03\u7528then\u7684\u65f6\u5019\uff0cstatus\u7684\u72b6\u6001\u662fPending\u72b6\u6001\u8bf4\u660e\uff0c\u662f\u5f02\u6b65\u8c03\u7528\uff0c\n        \u9700\u8981\u628a\u8c03\u7528\u7684\u6210\u529f\u56de\u8c03\u548c\u5931\u8d25\u56de\u8c03\u5b58\u5165\u961f\u5217\u4e2d\uff0c\u5f53\u8c03\u7528resolve\u7684\u65f6\u5019\uff0c\u518d\u6267\u884c\uff08\u53d1\u5e03\u8ba2\u9605\u89e3\u51b3\u5f02\u6b65\u95ee\u9898\uff09\n     */\n    if (this.status === PENDING) {\n      this.onFulfilledCallback.push(() => {\n        // TODO:\n        onFulfilled(this.value); // \u5207\u7247\uff0c\u628a\u51fd\u6570\u5207\u5f00\uff0c\u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684\u903b\u8f91\u8fdb\u53bb\n      });\n      this.onRejectedCallback.push(() => {\n        // TODO:\n        onRejected(this.reason);\n      });\n    }\n  }\n}\n// \u4f7f\u7528\nlet promise = new Promise((res, rej) => {\n  //   throw new Error("\u62a5\u9519");\n  //   res("\u6210\u529f")\n  setTimeout(() => {\n    rej("\u5931\u8d25");\n  }, 2000);\n});\npromise.then(\n  (data) => {\n    console.log(data); // \u6210\u529f\n  },\n  (err) => {\n    console.log(err); // \u5931\u8d25\n  }\n);\n')),Object(s.b)("h2",{id:"3-\u7b26\u5408a\u89c4\u8303"},"3. \u7b26\u5408A+\u89c4\u8303"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u94fe\u5f0f\u8c03\u7528",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},".then\u8fd4\u56de\u666e\u901a\u503c\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u5230\u4e0b\u4e00\u4e2athen\u4e2d\u7684\u6210\u529f"),Object(s.b)("li",{parentName:"ul"},".then\u4e2d\u6267\u884c\u5931\u8d25\uff0c\u76f4\u63a5\u4f1a\u4e0b\u4e00\u4e2athen\u4e2d\u7684\u5931\u8d25\u3002\u6216catch\u4e2d"),Object(s.b)("li",{parentName:"ul"},"\u5982\u679cthen\u8fd4\u56de\u4e00\u4e2apromise\u4f1a\u8fd4\u56depromise\u7684\u6267\u884c\u7ed3\u679c"),Object(s.b)("li",{parentName:"ul"},"\u9012\u5f52\u8fd4\u56depromise\u8c03\u7528"))),Object(s.b)("li",{parentName:"ul"},"\u7a7f\u900f\u8c03\u7528",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u5982\u679c\u662fthen\u6ca1\u6709\u4f20function\uff0c\u5c31\u7ed9\u4ed6\u5305\u4e00\u4e2av=>v"),Object(s.b)("li",{parentName:"ul"},"\u5982\u679c\u662fcatch\uff0c\u5c31\u5305\u4e00\u4e2athrow")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'/**\n * @description \u6838\u5fc3\u903b\u8f91\uff0c\u7528\u4e8e\u5904\u7406\u8fd4\u56de\u503c\u662fpromise\u8fd8\u662f\u4e00\u4e2a\u666e\u901a\u503c\n * @param {*} promise2 \u8fd4\u56de\u7684promise\n * @param {*} x then\u7684\u8fd4\u56de\u503c\n * @param {*} resolve \u65b0\u7684promise\u7684resolve\u51fd\u6570\n * @param {*} reject \u65b0\u7684promise\u7684reject\u51fd\u6570\n * @returns undefined\n */\nfunction resolvePromise(promise2, x, resolve, reject) {\n  console.log(promise2, x, resolve, reject);\n  // \u5982\u679c x \u662f\u5f53\u524d\u7684promise2\uff0c\u5c31\u76f4\u63a5\u629b\u51fa\u7c7b\u578b\u9519\u8bef\n  if (x === promise2) {\n    // \u76f4\u63a5\u629b\u51fa\u9519\u8bef\n    return reject(new TypeError("\u7c7b\u578b\u9519\u8bef"));\n  };\n  // \u5982\u679c\u662f\u522b\u4eba\u7684promise\u53ef\u80fd\u6210\u529f\u540e\u8fd8\u4f1a\u5931\u8d25\uff0c\u4e3a\u4e86\u786e\u4fdd\u72b6\u6001\u53ea\u6539\u53d8\u4e00\u6b21\uff0c\u6240\u4ee5\u8981\u52a0\u4e00\u4e2a\u9501\uff0c\u53ea\u80fd\u6267\u884c\u4e00\u6b21\n  let called = false;\n  // \u5982\u679c\u662f\u7c7bpromise\uff0c\u90a3\u4e48\u5c31\u6267\u884c\u8fd4\u56de\u7ed3\u679c\n  if ((typeof x === "object" && x !== null) || typeof x === "function") {\n    try {\n      let then = x.then; // \u53ea\u53d6\u4e00\u6b21then\n      if (typeof then === "function") {\n        then.call(\n          x,\n          (y) => {\n            if (called) return;\n            called = true;\n            // \u9012\u5f52\uff0c\u6765\u5904\u7406\u5982\u679cpromise\u91cc\u9762\u53c8\u8fd4\u56de\u4e00\u4e2apromise\u7684\u60c5\u51b5\n            resolvePromise(promise2, y, resolve, reject);\n          },\n          (r) => {\n            if (called) return;\n            called = true;\n            reject(r);\n          }\n        ); // \u6267\u884c\n      } else {\n        // \u53ef\u80fd\u662f{ this: {}}\n        resolve(x);\n      }\n    } catch (error) {\n      if (called) return;\n      called = true;\n      reject(error);\n    }\n  } else {\n    // \u5982\u679c\u8fd4\u56de\u503c\u662f\u666e\u901a\u503c\uff0c\u76f4\u63a5\u8fd4\u56dex\u5c31\u53ef\u4ee5\n    resolve(x);\n  }\n}\n\n// promise\nlet PENDING = "PENDING";\nlet FULFILLED = "FULFILLED";\nlet REJECTED = "REJECTED";\nclass Promise {\n  constructor(executor) {\n    this.state = PENDING;\n    this.result = undefined;\n    this.reason = undefined;\n    this.onFulfilledCallbacks = [];\n    this.onRejectedCallbacks = [];\n    let resolve = (result) => {\n      // \u8fd9\u91cc\u8981\u7528\u7bad\u5934\u51fd\u6570\uff0c\u4e0d\u7136this\uff0c\u5c31\u4e0d\u662f\u5f53\u524d\u7684\u7c7b\u4e86\uff0c\u4f1a\u62a5\u9519\u8bf4\u62ff\u4e0d\u5230state\n      if (this.state === PENDING) {\n        this.state = FULFILLED;\n        this.result = result;\n        this.onFulfilledCallbacks.forEach((fn) => fn());\n      }\n    };\n\n    let reject = (reason) => {\n      // \u53ea\u6709pending\u72b6\u6001\u624d\u53ef\u4ee5\u8f6c\u6210\u5176\u4ed6\u72b6\u6001\n      if (this.state === PENDING) {\n        this.state = REJECTED;\n        this.reason = reason;\n        this.onRejectedCallbacks.forEach((fn) => fn());\n      }\n    };\n\n    try {\n      executor(resolve, reject);\n    } catch (error) {\n      reject(error);\n    }\n  }\n\n  then(onFulfilled, onRejected) {\n    /* \u5904\u7406\u7a7f\u900f\u903b\u8f91 */\n    onFulfilled = typeof onFulfilled === \'function\' ? onFulfilled : v=>v;\n    onRejected = typeof onRejected === \'function\' ? onRejected : e=>{throw e};\n    /* \n        \u94fe\u5f0f\u8c03\u7528\uff1a\u8c03\u7528.then\u4e4b\u540e\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684promise\n        1. then\u91cc\u9762\u662f\u4e00\u4e2a\u6210\u529f\u666e\u901a\u503c\uff0c\u4f1a\u76f4\u63a5\u8fd4\u56de\u4e3a\u4e0b\u4e00\u4e2apromise\u7684then\u7684\u6210\u529f\u7ed3\u679c\n        2. \u5982\u679c\u5f53\u524dthen\u5931\u8d25\uff0c\u90a3\u4e48\u4f1a\u8d70\u4e0b\u4e00\u6b21\u7684then\u7684\u5931\u8d25\n        3. \u4e0d\u7ba1\u5f53\u524dthen\u662f\u6210\u529f\u8fd8\u662f\u5931\u8d25\uff0c\u53ea\u8981\u8fd4\u56de\u7684\u662f\u666e\u901a\u503c\uff0c\u90fd\u4f1a\u8d70\u4e0b\u4e00\u4e2a\n    */\n    let promise2 = new Promise((resolve, reject) => {\n      if (this.state === FULFILLED) {\n        setTimeout(() => {\n          // \u4e3a\u4e86\u62ff\u5230promise2\uff0c\u7528setTimeout\u5f02\u6b65\u83b7\u53d6promise2\n          try {\n            let x = onFulfilled(this.result); // \u5904\u7406\u666e\u901a\u503c\u3002\u8fd4\u56de\u4e4b\u540e\u3002\u8d70\u4e0b\u4e00\u4e2athen\u7684\u6210\u529f\n            resolvePromise(promise2, x, resolve, reject);\n          } catch (e) {\n            // \u5982\u679c\u5f02\u5e38\u5c31\u629b\u51fa\n            reject(e);\n          }\n        }, 0);\n      }\n\n      if (this.state === REJECTED) {\n        setTimeout(() => {\n          try {\n            let x = onRejected(this.reason);\n            resolvePromise(promise2, x, resolve, reject);\n          } catch (e) {\n            reject(e);\n          }\n        }, 0);\n      }\n\n      if (this.state === PENDING) {\n        this.onFulfilledCallbacks.push(() => {\n          setTimeout(() => {\n            try {\n              let x = onFulfilled(this.result);\n              resolvePromise(promise2, x, resolve, reject);\n            } catch (e) {\n              reject(e);\n            }\n          }, 0);\n        });\n        this.onRejectedCallbacks.push(() => {\n          setTimeout(() => {\n            try {\n              let x = onRejected(this.reason);\n              resolvePromise(promise2, x, resolve, reject);\n            } catch (e) {\n              reject(e);\n            }\n          }, 0);\n        });\n      }\n    });\n    return promise2;\n  }\n}\n\nPromise.deferred = function () {\n    let dfd = {};\n    dfd.promise = new Promise((resolve, reject) => {\n        dfd.resolve = resolve;\n        dfd.reject = reject;\n    })\n    return dfd;\n}\n\nmodule.exports = Promise;\n')),Object(s.b)("h2",{id:"4-\u5176\u4ed6\u65b9\u6cd5"},"4. \u5176\u4ed6\u65b9\u6cd5"),Object(s.b)("h3",{id:"41-\u5ef6\u8fdf\u5bf9\u8c61"},"4.1 \u5ef6\u8fdf\u5bf9\u8c61"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u81ea\u5df1\u5b9e\u73b0\u7684promise\u652f\u6301\uff0c\u6d4f\u89c8\u5668\u63d0\u4f9b\u7684promise\u5e76\u4e0d\u652f\u6301")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"Promise.deferred = function () {\n    let dfd = {};\n    dfd.promise = new Promise((resolve, reject) => {\n        dfd.resolve = resolve;\n        dfd.reject = reject;\n    })\n    return dfd;\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst Promise = require('./1.js');\n\n// \u5229\u7528\u5ef6\u8fdf\u5bf9\u8c61\u8bfb\u53d6\u6587\u4ef6\nfunction readFile(filePath, encoding) {\n    let dfd = Promise.deferred();\n    fs.readFile(filePath, encoding, (err, data) => {\n        if(err) return dfd.reject(err);\n        dfd.resolve(data);\n    })\n    return dfd.promise\n}\n\nreadFile('a.txt', 'utf8').then(data => {\n    console.log(data);\n})\n")),Object(s.b)("h3",{id:"42-resolve"},"4.2 resolve"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u9759\u6001\u65b9\u6cd5")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"static resolve (data) {\n  return new Promise((resolve) => {\n    resolve(data)\n  })\n}\n")),Object(s.b)("h3",{id:"43-reject"},"4.3 reject"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"static reject (err) {\n  return new Promise((resolve, reject) => {\n    return reject(err);\n  })\n}\n")),Object(s.b)("h3",{id:"43-all"},"4.3 all"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u8bb0\u5f55\u4e0b\u6807")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"}," static all (promises) {\n    return new Promise((resolve, reject) => {\n      let result = [];\n      let time = 0;\n      const processSucess = (index, data) => {\n        result[index] = data; // \u653e\u5230\u5bf9\u5e94\u7684\u4e0b\u6807\u4e2d\n        if(++time === result.length) {  // \u5f53\u5faa\u73af\u7684\u6b21\u6570\u548c\u7ed3\u679c\u7684\u6570\u7ec4\u957f\u5ea6\u4e00\u81f4\u5c31\u629b\u51fa\u7ed3\u679c\n          resolve(result);\n        }\n      }\n      /* \u5bf9\u6570\u7ec4\u8fdb\u884c\u5faa\u73af */\n      for(let i = 0 ; i < promises.length; i++) {\n        let p = promises[i];\n        /* \u5224\u65ad\u662f\u5426\u662fpromise\uff0c\u5982\u679c\u662f\u5c31\u53d6promise\u7684\u7ed3\u679c */\n        if( p.then && typeof p.then === 'function') {\n          p.then(data => {\n            processSucess(i, data);\n          }, reject)\n        } else {\n          // \u5982\u679c\u4e0d\u662f\u76f4\u63a5\u629b\u51fa\u7ed3\u679c\n          processSucess(i, p);\n        }\n      }\n    })\n  }\n")),Object(s.b)("h3",{id:"44-race"},"4.4 race"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u7ade\u6001")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"static race (promises) {\n  return new Promise((resolve, reject) => {\n    for(let i = 0; i < promises.length; i++) {\n      let p = promises[i];\n      if( p && typeof p.then === 'function') {\n        p.then(resolve, reject)  // \u6709\u4e00\u4e2a\u6210\u529f\u5c31\u6210\u529f\uff0c\u72b6\u6001\u6210\u529f\u5c31\u4e0d\u4f1a\u518d\u6539\u53d8\u4e86\n      } else {\n        resolve(p);\n      }\n    }\n  })\n}\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"race\u5e94\u7528--\u8d85\u65f6")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"let p1 = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve('\u6210\u529f')\n    }, 3000);\n})\nfunction wrap(p1) {\n    let abort;\n    let p = new Promise((resolve, reject) => {\n        abort = reject\n    })\n    let p2 = Promise.race([p, p1]);\n    p2.abort = abort;\n    return p2;\n}\n\nlet p2 = wrap(p1);\n\np2.then(data => {\n    console.log(data);\n}, (err) => {\n    console.log(err);\n})\n\nsetTimeout(() => {\n    p2.abort('\u8d85\u8fc72\u79d2')\n}, 2000);\n")),Object(s.b)("h3",{id:"45-catch"},"4.5 catch"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"catch(errfn) {\n  return this.then(null, errfn);\n}\n")),Object(s.b)("h3",{id:"46-finally"},"4.6 finally"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"finally(cb) {\n  return this.then((data) => {\n    // \u5916\u9762\u5305\u4e00\u5c42Promise.resolve\uff0c\u91cc\u9762\u8fd4\u56de\u4e00\u4e2apormise\u7684\u8bdd\u4f1a\u8fdb\u884c\u7b49\u5f85\n    // \u4f46\u662ffinally\u6210\u529f\u5e76\u4e0d\u4f1a\u8bb0\u5f55\u91cc\u9762\u7684\u7ed3\u679c\uff0c\u53ea\u4f1a\u8bb0\u5f55\u4e0a\u4e00\u4e2athen\u7684\u7ed3\u679c\u3002\n    return Promise.resolve(cb()).then(() => data);\n  }, (err) => {\n    // \u9519\u8bef\u5982\u679cfinally\u91cc\u9762\u9519\u8bef\uff0c\u5916\u9762catch\u4f1a\u6355\u83b7\u5230\uff0c\u4f1a\u8fd4\u56de1000\n    // \u5982\u679cfinally\u91cc\u9762\u662f\u6b63\u786e\u7684\uff0c\u5916\u9762catch\u4f1a\u6355\u83b7\u539f\u59cb\u7684\u2018\u5931\u8d25\u2019\u9519\u8bef\u3002\n    return Promise.resolve(cb()).then(() => {throw err});\n  })\n}\n")),Object(s.b)("h3",{id:"47-allsettled"},"4.7 allSettled"),Object(s.b)("h3",{id:"48-any"},"4.8 any"),Object(s.b)("h3",{id:"49-promisify"},"4.9 promisify"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"node\u81ea\u5e26\u7684\u65b9\u6cd5")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst util = require('util');\nlet readFile = util.promisify(fs.readFile);\nreadFile('./a.txt', 'utf8').then(data => {\n    console.log(data);\n})\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u5b9e\u73b0",Object(s.b)("inlineCode",{parentName:"li"},"promisify"))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nfunction promisify(fn) {\n    /* \u62ff\u5230\u51fd\u6570\u8fd4\u56de\u503c\u7684\u53c2\u6570 */\n    return function (...args) {\n        return new Promise((resolve, reject) => {\n            /* \u4f20\u5165\u53c2\u6570 */\n            fn(...args, (err, data) => {\n                if(err) return reject(err);\n                resolve(data);\n            })\n        })\n    }\n}\n// \u5305\u88c5\u6240\u6709fs\u65b9\u6cd5\u4e3apromise\nfunction promisifyAll(obj) {\n    let o = {};\n    for(let key in obj) {\n        o[key + 'Promise'] = promisify(obj[key]);\n    }\n    return o;\n}\nlet newFs = promisifyAll(fs);\nnewFs.readFilePromise('./a.txt', 'utf8').then(data => {\n    console.log(data);\n})\n")))}u.isMDXComponent=!0}}]);
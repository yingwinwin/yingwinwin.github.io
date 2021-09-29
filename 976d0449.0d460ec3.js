(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return o}));var r=t(3),a=t(7),l=(t(0),t(145)),i={id:"cs_algorithm",title:"\u7b97\u6cd5"},c={unversionedId:"cs_algorithm",id:"cs_algorithm",isDocsHomePage:!1,title:"\u7b97\u6cd5",description:"\u6570\u7ec4\u94fe\u8868",source:"@site/docs/cs_algorithm.md",slug:"/cs_algorithm",permalink:"/docs/cs_algorithm",editUrl:"https://github.com/yingwinwin/yingwinwin.github.io/tree/master/docs/cs_algorithm.md",version:"current",sidebar:"someError",previous:{title:"\u8ba1\u7b97\u673a\u7f51\u7edc",permalink:"/docs/cs_net"},next:{title:"\u300aJs\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\u300b\u7b2c\u56db\u7248",permalink:"/docs/js4"}},b=[{value:"\u6570\u7ec4\u94fe\u8868",id:"\u6570\u7ec4\u94fe\u8868",children:[{value:"\u79fb\u52a8\u96f6",id:"\u79fb\u52a8\u96f6",children:[]},{value:"\u76db\u6c34\u6700\u591a\u7684\u5bb9\u5668",id:"\u76db\u6c34\u6700\u591a\u7684\u5bb9\u5668",children:[]},{value:"\u722c\u697c\u68af",id:"\u722c\u697c\u68af",children:[]},{value:"3\u6570\u4e4b\u548c",id:"3\u6570\u4e4b\u548c",children:[]},{value:"\u53cd\u8f6c\u94fe\u8868",id:"\u53cd\u8f6c\u94fe\u8868",children:[]},{value:"\u4e24\u4e24\u4ea4\u6362\u94fe\u8868\u4e2d\u7684\u8282\u70b9",id:"\u4e24\u4e24\u4ea4\u6362\u94fe\u8868\u4e2d\u7684\u8282\u70b9",children:[]},{value:"\u73af\u5f62\u94fe\u8868",id:"\u73af\u5f62\u94fe\u8868",children:[]},{value:"\u73af\u5f62\u94fe\u88682",id:"\u73af\u5f62\u94fe\u88682",children:[]}]}],u={toc:b};function o(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u6570\u7ec4\u94fe\u8868"},"\u6570\u7ec4\u94fe\u8868"),Object(l.b)("h3",{id:"\u79fb\u52a8\u96f6"},"\u79fb\u52a8\u96f6"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/move-zeroes/"},"leetcode")),Object(l.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 ",Object(l.b)("inlineCode",{parentName:"li"},"O(n)")," n\u4e3a\u6570\u7ec4\u7684\u957f\u5ea6"),Object(l.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 ",Object(l.b)("inlineCode",{parentName:"li"},"O(1)")," \u53ea\u9700\u8981\u5e38\u91cf\u50a8\u5b58 ",Object(l.b)("inlineCode",{parentName:"li"},"j = 0"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"  let arr = [0, 2, 3, 0, 1, 0];\n  function moveZero(arr) {\n    let j = 0;\n    for (let i = 0; i < arr.length; i++) {\n      if (arr[i] !== 0) {\n        arr[j] = arr[i];\n        if (j < i) {\n          arr[i] = 0;\n        }\n        j++;\n      }\n    }\n  }\n  moveZero(arr);\n")),Object(l.b)("h3",{id:"\u76db\u6c34\u6700\u591a\u7684\u5bb9\u5668"},"\u76db\u6c34\u6700\u591a\u7684\u5bb9\u5668"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/container-with-most-water/"},"leetcode"))),Object(l.b)("h4",{id:"\u66b4\u529b\u89e3\u6cd5"},"\u66b4\u529b\u89e3\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(n^2)"),Object(l.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"  let arr = [1,8,6,2,5,4,8,3,7]\n  function maxArea(arr) {\n    let max = 0;\n    for(let i = 0; i < arr.length - 1; i++) {\n      for(let j = 0; j < arr.length; j ++) {\n        let area = (j - i) * Math.min(arr[j] , arr[i]);\n        max = Math.max(area, max);\n      }\n    }\n\n    return max;\n  }\n  console.log(maxArea(arr));\n")),Object(l.b)("h4",{id:"\u53cc\u6307\u9488"},"\u53cc\u6307\u9488"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(n)"),Object(l.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"  let arr = [1,8,6,2,5,4,8,3,7]\n  function maxArea(arr) {\n    let max = 0, i = 0, j = arr.length - 1;\n    while(i < j) {\n      // \u8c01\u5c0f\u8c01\u52a8\n      max =Math.max((j - i) * (arr[i] < arr[j] ? arr[i ++] : arr[j --]), max);\n    }\n    return max;\n  }\n  console.log(maxArea(arr));\n")),Object(l.b)("h3",{id:"\u722c\u697c\u68af"},"\u722c\u697c\u68af"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/climbing-stairs/"},"leetcode")),Object(l.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(n)"),Object(l.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"function climbStairs(n) {\n  if(n <= 2) return n;\n  let f1 = 1, f2 = 2, f3 = 3;\n  for (let i = 3; i <= n; i ++) {\n    f3 = f2 + f1;\n    f1 = f2;\n    f2 = f3;\n  }\n  return f3;\n}\nconsole.log(climbStairs(10));\n")),Object(l.b)("h3",{id:"3\u6570\u4e4b\u548c"},"3\u6570\u4e4b\u548c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/3sum/"},"leetcode"))),Object(l.b)("h4",{id:"\u53cc\u6307\u9488-1"},"\u53cc\u6307\u9488"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(n^2)"),Object(l.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(N)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"var threeSum = function(nums) {\n   let arr = [];\n    let len = nums.length;\n    if (len < 3) return arr;  // \u5982\u679c\u4f20\u5165\u6570\u7ec4\u7684\u957f\u5ea6\u5c0f\u4e8e3\uff0c\u5c31\u4e0d\u8ba1\u7b97\u4e86\n    nums.sort((a, b) => a - b);  // \u5148\u6392\u5e8f\n    // \u8fdb\u884c\u53cc\u6307\u9488\u5faa\u73af\n    for (let i = 0; i < len; i++) {\n      if (nums[i] > 0) break; // \u5982\u679cnums[i] \u5927\u4e8e0\uff0c\u8bf4\u660e\u540e\u9762\u7684\u6570\u5b57\u90fd\u5927\u4e8e0\uff0c\u6ca1\u6709\u5fc5\u8981\u5728\u8fdb\u884c\u5faa\u73af\u4e86\n      if (i > 0 && nums[i] === nums[i - 1]) continue;  // i > 0, \u9632\u6b62i-1 \u6ea2\u51fa\u7684\u60c5\u51b5\uff0c\u8fd9\u91cc\u662f\u89e3\u51b3\u5f53nums[i]\u5df2\u7ecf\u679a\u4e3e\u8fc7\uff0c\u53bb\u6389\u91cd\u590d\u7684\u60c5\u51b5\n      let l = i + 1;  // i \u5de6\u8fb9\u7684\u4e0b\u6807\n      let r = len - 1;  // \u53f3\u8fb9\u7684\u4e0b\u6807\n      while (l < r) {  // \u4e24\u4e2a\u4e0b\u6807\u6ca1\u6709\u6328\u5230\u4e00\u8d77\n        let sum = nums[i] + nums[l] + nums[r];  // \u8ba1\u7b97\u4e09\u6570\u4e4b\u548c\n        if (sum === 0) {  // \u5982\u679c\u4e09\u6570\u4e4b\u548c\u7b49\u4e8e0\n          arr.push([nums[i], nums[l], nums[r]]); // \u5b58\u5165\u7ed3\u679c\u4e2d\n          while (nums[l] === nums[l + 1]) l++;   // \u8df3\u8fc7\u76f8\u540c\u7684\u4e0d\u8ba1\u7b97\n          while (nums[r] === nums[r + 1]) r--;   // \u8df3\u8fc7\u76f8\u540c\u7684\u4e0d\u8ba1\u7b97\n          l++;  // \u8df3\u5230\u4e0d\u76f8\u540c\u7684\u4e0b\u6807\n          r--;  // \u8df3\u5230\u4e0d\u76f8\u540c\u7684\u4e0b\u6807\n        } else if (sum < 0) { \n          l++; // \u5982\u679c\u4e09\u6570\u4e4b\u548c\u5c0f\u4e8e0\uff0c\u4e5f\u5c31\u662f\u8bf4\u5de6\u8fb9\u7684\u6570\u5b57\u592a\u5c0f\u4e86\uff0c\u56e0\u4e3a\u5df2\u7ecf\u6392\u597d\u5e8f\u4e86\uff0c\u6240\u4ee5\u5de6\u8fb9\u5411\u53f3\u79fb\u4e00\u4f4d\n        } else if (sum > 0) { \n          r--; // \u5982\u679c\u4e09\u6570\u4e4b\u548c\u5927\u4e8e0\uff0c\u53f3\u8fb9\u7684\u6570\u5b57\u592a\u5927\u4e86\uff0c\u53f3\u8fb9\u5411\u91cc\u9762\u79fb\u4e00\u4f4d\n        };\n      }\n    }\n    return arr;\n};\n")),Object(l.b)("h3",{id:"\u53cd\u8f6c\u94fe\u8868"},"\u53cd\u8f6c\u94fe\u8868"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/reverse-linked-list/"},"leetcode"))),Object(l.b)("h4",{id:"\u9012\u63a8"},"\u9012\u63a8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(n)"),Object(l.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"var reverseList = function(head) {\n    let prev = null;\n    while(head) {\n      // head.next \u9700\u8981\u5148\u8fdb\u884c\u66ff\u6362\n      [head.next, prev, head] = [prev, head, head.next]\n    }\n    return prev;\n};\n")),Object(l.b)("h4",{id:"\u9012\u5f52"},"\u9012\u5f52"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(n)"),Object(l.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(n)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"var reverseList = function(head) {\n    if (head === null || head.next === null) return head;\n    let newHead = reverseList(head.next);  // \u5148\u628a\u540e\u9762\u7684\u53cd\u8f6c\u56de\u6765\uff0c\u6700\u540e\u8fd4\u56de 1->2<-3<-4<-5\n    head.next.next = head;  // \u7136\u540e\u628a 1->2<-3<-4<-5   head.next \u662f 2  2.next = 1  1<-2<-3<-4<-5\n    head.next = null; // 1.next = null<-1<-2<-3<-4<-5\n    return newHead;\n};\n")),Object(l.b)("h3",{id:"\u4e24\u4e24\u4ea4\u6362\u94fe\u8868\u4e2d\u7684\u8282\u70b9"},"\u4e24\u4e24\u4ea4\u6362\u94fe\u8868\u4e2d\u7684\u8282\u70b9"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/swap-nodes-in-pairs/"},"leetcode")),Object(l.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(n)"),Object(l.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"var swapPairs = function(head) {\n    let listnode = new ListNode(0); // \u521b\u5efa\u4e00\u4e2a\u5934\u90e8\u8282\u70b9\n    listnode.next = head;  // \u5934\u90e8\u8282\u70b9\u6307\u5411\u5f53\u524d\u94fe\u8868\u7684\u5934\u90e8 temp -> 1 -> 2 -> 3\n    let p = listnode;\n    // \u5982\u679c\u6709\u4e24\u4e2a\u4ee5\u4e0a\u7684node\uff0c\u5c31\u7ee7\u7eed\u5faa\u73af\n    while(p.next && p.next.next) {\n        let n1 = p.next; // \u7b2c\u4e00\u4e2a\u8282\u70b9\n        let n2 = p.next.next;  // \u7b2c\u4e8c\u4e2a\u8282\u70b9 \n        /* \u5f00\u59cb\u8fdb\u884c\u53cd\u8f6c */\n        p.next = n2;\n        n1.next = n2.next; \n        n2.next = n1;\n        p = n1 // \u5f00\u59cb\u4e0b\u4e00\u8f6e\u5faa\u73af\n    }\n    return listnode.next; // \u8fd4\u56de\u7b2c\u4e00\u4e2a\u8282\u70b9\n};\n")),Object(l.b)("h3",{id:"\u73af\u5f62\u94fe\u8868"},"\u73af\u5f62\u94fe\u8868"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/linked-list-cycle/"},"leetcode")),Object(l.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(n)"),Object(l.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"var hasCycle = function(head) {\n    // \u5982\u679chead \u4e3a\u7a7a\uff0c\u90a3\u5c31\u6ca1\u6709\u73af\uff0c\u76f4\u63a5\u8fd4\u56de\n    if (!head) {\n        return false;\n    }\n    // \u5feb\u6162\u6307\u9488\n    let slow = head;\n    let fast = head;\n    // \u5224\u65ad\u662f\u5426\u6709\u4e24\u6b65\u53ef\u4ee5\u8d70\uff0c\u5982\u679c\u6ca1\u6709\u76f4\u63a5\u8df3\u51fa\uff0c\u8bf4\u660e\u6ca1\u6709\u73af\u4e86\u3002\n    while (fast.next && fast.next.next) {\n        slow = slow.next;  // \u6162\u6307\u9488\u8d70\u4e00\u6b65\n        fast = fast.next.next;  // \u5feb\u6307\u9488\u8d70\u4e24\u6b65\n\n        if (slow === fast) {  // \u5f53\u5feb\u6307\u9488\u8ffd\u4e0a\u6162\u6307\u9488\u7684\u65f6\u5019\n            return true;  // \u8bf4\u660e\u6709\u73af\n        }    \n    }\n    return false;\n};\n")),Object(l.b)("h3",{id:"\u73af\u5f62\u94fe\u88682"},"\u73af\u5f62\u94fe\u88682"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/linked-list-cycle-ii/"},"leetcode")),Object(l.b)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6 O(n)"),Object(l.b)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"var detectCycle = function(head) {\n    if (!head) return null;\n\n    let slow = head;\n    let fast = head;\n    let isCycle = false;  // \u7528\u6765\u8bb0\u5f55\u662f\u5426\u6709\u73af\n\n    // \u4e0e\u73af\u5f62\u94fe\u8868\u4e00\u81f4\n    while(fast.next && fast.next.next) {\n        slow = slow.next;\n        fast = fast.next.next;\n\n        if(fast == slow) {\n            isCycle = true;// \u627e\u5230\u73af\u5c31\u505c\u6b62\u5faa\u73af\n            break;\n        }\n    }\n    // \u5982\u679c\u505c\u4e86\u5faa\u73af\uff0c\u4f46\u662f\u6ca1\u6709\u73af\u76f4\u63a5\u8fd4\u56denull\n    if(!isCycle) {\n        return null;\n    }\n    fast = head;  // \u5982\u679c\u6709\u73af\u3002\u5148\u628a\u5feb\u6307\u9488\u6307\u5411\u5934\u3002\n    // \u7136\u540e\u4e24\u4e2a\u6307\u9488\u90fd\u8d701\u6b65\uff0c\u6ca1\u78b0\u5230\u5c31\u4e00\u76f4\u8d70\uff0c\u76f4\u5230\u78b0\u5230\u4e86\u8df3\u51fa\u5faa\u73af\uff0c\u7136\u540e\u8fd4\u56de\u5f53\u524d\u5feb\u6307\u9488\n    while(slow !== fast) {\n        slow = slow.next;\n        fast = fast.next;\n    }\n\n    return fast;\n};\n")))}o.isMDXComponent=!0},145:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),o=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=o(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),s=o(t),p=r,d=s["".concat(i,".").concat(p)]||s[p]||m[p]||l;return t?a.a.createElement(d,c(c({ref:n},u),{},{components:t})):a.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<l;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);
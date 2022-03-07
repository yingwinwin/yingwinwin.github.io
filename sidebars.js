module.exports = {
  // 设置进去文档tabs的侧边栏
  // English: {
  //   '介绍': ['English/english1'],
  //   '英语': ["English/english/togo", "English/english/down",  "English/english/come"]
  // },
  
  FEBasis: [
    "FE/FEBasis/FEBasis",
  ],
  // professionalWork: [
  //   "FE/professionalWork/work",
  //   {
  //     type: 'category',
  //     label: '文件上传',
  //     items: [
  //       "FE/professionalWork/upload/front",
  //       "FE/professionalWork/upload/node",
  //     ],
  //   },
  // ],
  javaSciprt: [
    "FE/javaSciprt/js",
    {
      type: 'category',
      label: '异步',
      collapsed: false,
      items: [
        "FE/javaSciprt/async/callback",
        "FE/javaSciprt/async/promise",
        "FE/javaSciprt/async/generator",
        "FE/javaSciprt/async/co",
        "FE/javaSciprt/async/asyncAwait",
        // "FE/javaSciprt/async/eventloop",
      ],
    },
  ],
  CSS: [
    "FE/CSS/CSS",
  ],
  browser: [
    "FE/browser/browser",
    {
      type: 'category',
      label: '事件机制',
      collapsed: false,
      items: [
        "FE/browser/events/eventloop",
      ],
    },
  ],
  typeScript: [
    "FE/typeScript/TS", 
    {
      type: 'category',
      label: '基础',
      collapsed: false,
      items: [
        "FE/typeScript/tsBasics/basicDataType",
        "FE/typeScript/tsBasics/complexDataType",
        "FE/typeScript/tsBasics/functionType",
        "FE/typeScript/tsBasics/classType",
        "FE/typeScript/tsBasics/interface",
      ],
    },
  ],
  visualization: [
    "FE/visualization/visualization",
    {
      type: 'category',
      label: 'SVG',
      items: [
        "FE/visualization/svg/SVG",
      ],
    },
    {
      type: 'category',
      label: 'GIS',
      items: [
        "FE/visualization/gis/leaflet",
      ],
    },
  ],
  node: [
    "AE/node/node",
    // {
    //   type: 'category',
    //   label: 'express',
    //   collapsed: false,
    //   items: [
    //     "AE/node/express/http",
    //   ],
    // },
  ],
  react: [
    "framework/react/react",
  ],
  vue: [
    "framework/vue/vue",
  ],
  components: [
    "framework/components/components",
  ],
  netWork: [
    "CS/netWork/netWork",
  ],
  leetcode: [
    "CS/leetcode/leetcode",
    {
      type: 'category',
      label: '数据结构',
      collapsed: false,
      items: [
        "CS/leetcode/dataStructure/heap",
      ],
    },
    {
      type: 'category',
      label: '算法',
      collapsed: false,
      items: [
        "CS/leetcode/ai/binary",
        // "CS/leetcode/ai/random",
        "CS/leetcode/ai/sort",
      ],
    },
  ],
  essayist: [
    "liftStyle/essayist/essayist",
  ],
  English: [
    "liftStyle/english/english",
    {
      type: 'category',
      label: '单词',
      items: ["liftStyle/english/word/togo", "liftStyle/english/word/down",  "liftStyle/english/word/come"],
    },
  ],
  // someError: [
  //   {
  //     type: "category", // 类别
  //     label: "JavaScript", // 一级标题
  //     items: [
  //       "js_base",
  //       "RegExp", // md文件中设置的id ，这里找的是当前id是webpack文件的那篇文章
  //       "js_writeTopic",
  //       {
  //         type: "category",
  //         label: "函数", // 二级标题
  //         items: ["highFc", "utilsFunction"],
  //       },
  //       {
  //         type: "category",
  //         label: "设计模式",
  //         items: ["design_singe", "onEmit", "obverse"],
  //       },
  //       {
  //         type: "category",
  //         label: "异步",
  //         items: ["asyn_base", "promise"],
  //       },
  //       "business_scenario"
  //     ],
  //   },
  //   {
  //     type: "category", // 类别
  //     label: "HTML", // 一级标题
  //     items: [], // domAPI，historyApi
  //   },
  //   {
  //     type: "category", // 类别
  //     label: "CSS", // 一级标题
  //     items: ["remFit", "css_definition"] // 盒模型，float布局，定位，felx，glad一些小技巧
  //   },
  //   {
  //     type: "category", // 类别
  //     label: "React", // 一级标题
  //     items: [
  //       {
  //         type: "category",
  //         label: "使用",
  //         items: ["reactHook", "reactUseTs"], // redux，hook，
  //       },
  //       {
  //         type: "category",
  //         label: "面试",
  //         items: ["react_dataFlow", "react_vdom", "react_other"],
  //       },
  //       {
  //         type: "category",
  //         label: "原理", // 待学习
  //         items: ["react_render","react_lifecycle", "react_advance", "react_hooks", "react_router"],
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "前端工程化",
  //     items: ["webpack_use"],
  //   },
  //   {
  //     type: "category",
  //     label: "问题/记录/总结",
  //     items: ["errors", "sum_macUse"],
  //   },
  //   {
  //     type: "category", // 类别
  //     label: "CS基础", // 一级标题
  //     items: [
  //       {
  //         type: "category",
  //         label: "数据结构",
  //         items: ["ds_list", "ds_doublyLinkedList"], // 栈，队列，链表，树
  //       },
  //       "cs_net",
  //       // {
  //       //   type: "category",
  //       //   label: "计算机网络",
  //       //   items: [],  // 浏览器输入后到底发生了什么？
  //       // },
  //       {
  //         type: "category",
  //         label: "算法",
  //         items: ["cs_arrayListnode", "cs_stackQueue", "cs_hashTable"], // 栈，队列，链表，树
  //       },
  //     ], // HTTP协议，数据结构，算法等等
  //   },
  //   {
  //     type: "category", // 类别
  //     label: "More", // 一级标题
  //     items: [], // Electron， Chrome插件，vscode插件，前端性能优化，java，Vue，Angular
  //   },
  //   {
  //     type: "category", // 类别
  //     label: "看书总结", // 一级标题
  //     items: ["js4"],
  //   },
  // {
  //   type: "category",
  //   label: "个人生活",
  //   items: ['life_musice', {
  //     type: "category",
  //     label: "单词",
  //     items: ["English/togo", "English/down",  "English/come"],
  //   },],
  // },
  // ],
};

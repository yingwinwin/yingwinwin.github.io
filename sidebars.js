/* 
  什么时候我这些都补充好，并且都烂熟于心，我是不是就很厉害了？ 加油吧！
*/

module.exports = {
  // 设置进去文档tabs的侧边栏
  someError: [
    {
      type: "category", // 类别
      label: "JavaScript", // 一级标题
      items: [
        "js_base",
        "RegExp", // md文件中设置的id ，这里找的是当前id是webpack文件的那篇文章
        {
          type: "category",
          label: "函数", // 二级标题
          items: ["highFc", "utilsFunction"],
        },
        {
          type: "category",
          label: "设计模式",
          items: ["design_singe", "onEmit", "obverse"],
        },
        {
          type: "category",
          label: "异步",
          items: ["asyn_base", "promise"],
        },
        "business_scenario"
      ],
    },
    {
      type: "category", // 类别
      label: "HTML", // 一级标题
      items: [], // domAPI，historyApi
    },
    {
      type: "category", // 类别
      label: "CSS", // 一级标题
      items: ["remFit", "css_definition"] // 盒模型，float布局，定位，felx，glad一些小技巧
    },
    {
      type: "category", // 类别
      label: "React", // 一级标题
      items: [
        {
          type: "category",
          label: "使用",
          items: ["reactHook", "reactUseTs"], // redux，hook，
        },
        {
          type: "category",
          label: "面试",
          items: ["react_dataFlow"],
        },
        {
          type: "category",
          label: "原理", // 待学习
          items: ["react_render","react_lifecycle", "react_advance", "react_hooks", "react_router"],
        },
      ],
    },
    {
      type: "category",
      label: "前端工程化",
      items: ["webpack_use"],
    },
    {
      type: "category",
      label: "问题/记录/总结",
      items: ["view", "errors", "sum_macUse", "everyDay"],
    },
    {
      type: "category", // 类别
      label: "CS基础", // 一级标题
      items: [
        {
          type: "category",
          label: "数据结构",
          items: ["ds_list", "ds_doublyLinkedList"], // 栈，队列，链表，树
        },
        {
          type: "category",
          label: "计算机网络",
          items: [],  // 浏览器输入后到底发生了什么？
        },
      ], // HTTP协议，数据结构，算法等等
    },
    {
      type: "category", // 类别
      label: "More", // 一级标题
      items: [], // Electron， Chrome插件，vscode插件，前端性能优化，java，Vue，Angular
    },
    {
      type: "category", // 类别
      label: "看书总结", // 一级标题
      items: ["js4"], // js忍者秘籍， 你不知道的js123， js高级程序设计3
    },
  ],
};

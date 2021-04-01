/* 
  什么时候我这些都补充好，并且都烂熟于心，我是不是就很厉害了？ 加油吧！
*/

module.exports = {
  // 设置进去文档tabs的侧边栏
  someError: [
    {
      type: "category", // 类别
      label: "javaScript基础", // 一级标题
      items: [
        "RegExp", // md文件中设置的id ，这里找的是当前id是webpack文件的那篇文章
        {
          type: "category",
          label: "函数", // 二级标题
          items: ["highFc"],
        },
        {
          type: "category",
          label: "类", // 二级标题
          items: [], // 继承和原型
        },
        {
          type: "category",
          label: "设计模式",
          items: ["onEmit", "obverse"],
        },
        {
          type: "category",
          label: "异步",
          items: ["promise"],
        },
        {
          type: "category",
          label: "API实现",
          /* 
            1.函数：bind，call，apply
            2.数组：forEach，map，filter，some，every，reduce
            3.类：create
          */
          items: ["call"],
        },
      ],
    },
    {
      type: "category", // 类别
      label: "HTML", // 一级标题
      items: [], // domAPI，historyApi
    },
    {
      type: "category", // 类别
      label: "CSS相关", // 一级标题
      items: ["remFit"], // 盒模型，float布局，定位，felx，glad一些小技巧
    },
    {
      type: "category", // 类别
      label: "CS基础", // 一级标题
      items: [
        {
          type: "category", // 类别
          label: "算法", // 一级标题
          items: [], // 刷一刷算法题
        }
      ], // HTTP协议，数据结构，算法等等
    },
    {
      type: "category", // 类别
      label: "React", // 一级标题
      items: [
        {
          type: "category",
          label: "生态圈",
          items: ["reactHook"], // redux，hook，
        },
        {
          type: "category",
          label: "组件封装/常用逻辑",
          items: [],
        },
        {
          type: "category",
          label: "原理", // 待学习
          items: ["reactTheory_JSX"],
        },
      ],
    },
    {
      type: "category",
      label: "问题解决",
      items: ['reactUseTs', 'timeDeal', "cssDeal"],
    },
    {
      type: "category",
      label: "花里胡哨的面试题",
      items: ["view"],
    },
    
    {
      type: "category", // 类别
      label: "More", // 一级标题
      items: [], // Electron， Chrome插件，java，Vue，Angular
    },
    {
      type: "category", // 类别
      label: "看书总结", // 一级标题
      items: [], // js忍者秘籍， 你不知道的js123， js高级程序设计3， 犀牛书, css3解密
    },
  ],
};

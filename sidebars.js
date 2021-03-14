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
          label: "手写API",
          /* 
            1.函数：bind，call，apply
            2.数组：forEach，map，filter，some，every，reduce
            3.类：create
          */
          items: [],
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
      items: [], // 盒模型，float布局，定位，felx，glad，一些小技巧
    },
    {
      type: "category", // 类别
      label: "CS基础", // 一级标题
      items: [], // HTTP协议，数据结构，算法等等
    },
    {
      type: "category", // 类别
      label: "React", // 一级标题
      items: [],
    },
  ],
};

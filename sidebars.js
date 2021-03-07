module.exports = {
  // 设置进去文档tabs的侧边栏
  someError: [
    {
      type: "category", // 类别
      label: "开发问题", // 一级标题
      items: [
        "webpack", // md文件中设置的id ，这里找的是当前id是webpack文件的那篇文章
        {
          type: "category",
          label: "子节点", // 二级标题
          items: ["doc1"],
        },
      ],
    },
  ],
};

module.exports = {
  title: "yingwinwin的前端之路", // 标题
  tagline: "多读书，多看报，少吃零食，多睡觉！", // 标题下面的字
  url: "https://yingwinwin.github.io", // 当前页面的url
  baseUrl: "/", // 这里看自己需要添加，如果添加为/win/  访问主页就是 https://yingwinwin.github.io/win/
  onBrokenLinks: "throw", // 只有部署的时候生效
  onBrokenMarkdownLinks: "warn", // 只有部署的时候生效
  favicon: "img/favicon.ico", // 网页标签上面的小logo
  organizationName: "yingwinwin", // 这里是你github的名字
  projectName: "yingwinwin.github.io", // 这个是你要部署到的github的项目名字
  themeConfig: {
    // 主题的配置
    navbar: {
      // 头部
      title: "yingwinwin", // h1位置的标题
      logo: {
        alt: "logo",
        src: "img/logo.svg",
      },
      items: [
        // tabs
        {
          to: "docs/", // 路由
          activeBasePath: "docs", // 路径
          label: "文档",
          position: "left",
        },
        { to: "blog", label: "博客", position: "left" },
        // {to: 'blog', label: '博客', position: 'left'},  看需求可以添加多个tabs
        {
          href: "https://github.com/yingwinwin", // 自己的github主页
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      // 下面的介绍，看需求
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "高阶函数",
              to: "docs/highFc",
            },
            {
              label: "设计模式",
              to: "docs/onEmit",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "哔哩哔哩",
              href: "https://www.bilibili.com/",
            },
            {
              label: "掘金",
              href: "https://juejin.cn/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "博客",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/yingwinwin",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} YingWinWin, Inc. Built with Docusaurus.`, // 版权信息
    },
  },
  presets: [
    // 插件
    [
      "@docusaurus/preset-classic", // 一开始安装的主题
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"), // 这个是点击来之后边上侧边栏的配置
          // Please change this to your repo.
          editUrl:
            "https://github.com/yingwinwin/yingwinwin.github.io/tree/master", // 项目url
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/yingwinwin/yingwinwin.github.io/blob/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"), // 主题使用的css
        },
      },
    ],
  ],
};

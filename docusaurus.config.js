const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "yingwinwin的前端之路", // 标题
  tagline: "工欲善其事，必先利其器", // 标题下面的字
  url: "https://yingwinwin.github.io", // 当前页面的url
  baseUrl: "/", // 这里看自己需要添加，如果添加为/win/  访问主页就是 https://yingwinwin.github.io/win/
  onBrokenLinks: "throw", // 只有部署的时候生效
  onBrokenMarkdownLinks: "warn", // 只有部署的时候生效
  favicon: "img/favicon.ico", // 网页标签上面的小logo
  organizationName: "yingwinwin", // 这里是你github的名字
  projectName: "yingwinwin.github.io", // 这个是你要部署到的github的项目名字
  onBrokenLinks: 'ignore',
  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    liveCodeBlock: {
      /**
       * 实时效果显示的位置，可位于编辑器上方或下方。
       * 可为："top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    hideableSidebar: true,
    // 主题的配置
    navbar: {
      // 头部
      hideOnScroll: true,
      title: "yingwinwin", // h1位置的标题
      logo: {
        alt: "logo",
        src: "img/logo.jpg",
      },
      items: [
        // tabs
        {
          activeBasePath: "docs", // 路径
          label: "前端",
          position: "right",
          items: [
            {
              label: "前端基础",
              to: "/docs/FE/FEBasis",
            },
            {
              label: "JavaSciprt",
              to: "/docs/FE/javaSciprt",
            },
            {
              label: "CSS",
              to: "/docs/FE/CSS",
            },
            {
              label: "浏览器",
              to: "/docs/FE/browser",
            },
            {
              label: "TypeScript ",
              to: "/docs/FE/typeScript ",
            },
            {
              label: "可视化 ",
              to: "/docs/FE/visualization",
            },
            // {
            //   label: "前端业务",
            //   to: "/docs/FE/professionalWork ",
            // },
            // {
            //   label: "可视化 ",
            //   to: "/docs/FE/",
            // },
          ],
        },
        {
          label: "框架",
          position: "right",
          items: [
            {
              label: "react",
              to: "/docs/framework/react",
            },
            {
              label: "vue",
              to: "/docs/framework/vue",
            },
            {
              label: "组件设计",
              to: "/docs/framework/components",
            },
          ],
        },
        {
          label: "计算机",
          position: "right",
          items: [
            {
              label: "计算机网络",
              to: "/docs/CS/netWork",
            },
            {
              label: "数据结构与算法",
              to: "/docs/CS/leetcode",
            },
          ],
        },
        {
          label: "杂七杂八",
          position: "right",
          items: [
            // {
            //   label: "工具",
            //   to: "/book",
            // },
            {
              label: "随笔",
              to: "/docs/liftStyle/essayist",
            },
            // {
            //   label: "推荐",
            //   to: "/book",
            // },
            {
              label: "英语",
              to: "/docs/liftStyle/English",
            },
          ],
        },
        { to: "blog", label: "博客", position: "right" },
        {
          to: "/docs/aboutMe",
          label: "关于我",
          position: "right",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/yingwinwin",
            },
            {
              label: "LeetCode",
              href: "https://leetcode-cn.com/u/yingwinwin/",
            },
          ],
        },
      ],
    },
    footer: {
      // 下面的介绍，看需求
      style: "dark",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "JS基础",
      //         to: "docs/js_base",
      //       },
      //       {
      //         label: "问题总结",
      //         to: "docs/errors",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "哔哩哔哩",
      //         href: "https://www.bilibili.com/",
      //       },
      //       {
      //         label: "掘金",
      //         href: "https://juejin.cn/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "博客",
      //         to: "blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/yingwinwin",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} YingWinWin, Inc. Built with Docusaurus.`, // 版权信息
    },
  },
  plugins: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      "@docusaurus/preset-classic", // 一开始安装的主题
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"), // 这个是点击来之后边上侧边栏的配置
          // Please change this to your repo.
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // showLastUpdateTime: true,
          editUrl:
            "https://github.com/yingwinwin/yingwinwin.github.io/tree/master", // 项目url
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          remarkPlugins: [math],
          blogSidebarTitle: "近期文章",
          rehypePlugins: [katex],
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

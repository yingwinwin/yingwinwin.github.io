---
slug: 使用docusaurus搭建博客，并部署到github pages
title: docusaurus部署
author: yingwinwin
author_title: 前端开发
author_url: https://github.com/yingwinwin
author_image_url: https://avatars.githubusercontent.com/u/55273635?s=60&v=4
tags: [blog, react]
---

> 因为公司一直用react，看了一下vuepress不太会，然后查了一下react用这个docusaurus很友好，就选择了这个，部署到Github pages遇到了一些问题，记录分享一下。

- [github项目位置`https://github.com/yingwinwin/yingwinwin.github.io`](https://github.com/yingwinwin/yingwinwin.github.io)
- [部署之后的项目`https://yingwinwin.github.io/`](https://yingwinwin.github.io/)可能国外站点不稳定，有时候就会进不去，不知道是自己家网不好还是什么原因。

### 搭建本地的项目
- [docusaurus官网脚手架](https://www.docusaurus.cn/docs/installation)

- 脚手架的设计真的很良心，像react脚手架一样安装启动，`my-website`就是项目的名字，`classic`是`docusaurus`的默认主题，官网中也有其他的可以下载插件[配置主题](https://www.docusaurus.cn/docs/configuration#%E4%B8%BB%E9%A2%98%E3%80%81%E6%8F%92%E4%BB%B6%E5%92%8C%E9%A2%84%E8%AE%BE%E9%85%8D%E7%BD%AE)
```cmd
npx @docusaurus/init@latest init my-website classic
```
- 安装完成之后根据提示
```cmd
cd my-website
npm run start
```
- 这个时候已经可以在`localhost:3000`，看到项目的主页了

### 修改配置
- 配置文件是[`docusaurus.config.js`](https://github.com/yingwinwin/yingwinwin.github.io/blob/master/docusaurus.config.js)，在里面修改一些主页的展示，这里的部分自己改一改都知道是什么意思了。我在这个文件中写了注释可以参考一下。

- 侧边栏的配置文件[`sidebars.js`](https://github.com/yingwinwin/yingwinwin.github.io/blob/master/sidebars.js)，可以参考，也可以看官方文档。

- 修改好自己的配置之后，就可以尝试部署了。

### 建立github pages项目 + 自动部署
#### **1. 准备工作**
- 创建一个项目，然后在setting里面设置`GitHub Pages`, 把构建的分支改为`gh-pages`,这个分支是要自己建立的，目前里面什么都不用有，把当前的项目代码都推到`master`分支。
![image](../static/resource/githubpagessetting.png)
- 注意一定要配置好`docusaurus.config.js`文件中的这四个属性比较重要，如果有什么问题，可能就是这里没有配置好，其他按需就可以
```js
  url: 'https://yingwinwin.github.io',    // 当前页面的url，setting里面 都可以看到部署后的url
  baseUrl: '/',   // 这里看自己需要添加，如果添加为/win/  访问主页就是 https://yingwinwin.github.io/win/
  organizationName: 'yingwinwin', // 这里是你github的名字
  projectName: 'yingwinwin.github.io', // 这个是你要部署到的github的项目名字
```
#### **2. 设置自动部署**
- 设置`push`到`master`分支之后自动部署，这个时候就要用到刚才建立好的`gh-pages`分支了，在根目录建立`.github/workflows/documentation.yml`文件，参考[阮一峰大佬的博客](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
- 要注意一下`ACCESS_TOKEN`的配置，这个要提前在`github`中配置一下。参考[github官网](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
- 要注意一下`CNAME`文件，如果你有自己的域名用的不是`username.github.io`这个域名的话，需要建立`CNAME`文件，并在里面写上自己的域名。
```yml
name: Deploy Github pages
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: Build and Deploy
      uses: JamesIves/github-pages-deploy-action@4.1.0
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BRANCH: gh-pages
        FOLDER: build
        BUILD_SCRIPT: npm install && npm run build
```

#### **3. 推送项目**
- 把当前的项目文件都推送到`master`分支上，这个时候如果没有什么问题，`github`的`action`就开始工作自动部署了。在图中这个地方可以查看部署详情。部署完成后就可以打开你的主页看到部署后的内容了。大概就和官网差不多。
![image](../static/resource/deploy.png)
![image](../static/resource/indexpage.png)

- 如果有其他问题，可以留言一起解决。
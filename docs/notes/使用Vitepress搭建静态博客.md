# 使用 VitePress 搭建个人博客

## 什么是 VitePress

VitePress 是一个静态网站生成器，用于快速创建以内容为中心的静态网站，例如技术文档、教程和博客等等。

VitePress 通过 Markdown 文件来展示网站内容，因此你需要先了解 Markdown 的基本语法。同时，最新的 VitePress 需要你本地安装 Node.js 18 或更高版本。

官方文档：[VitePress | Vite & Vue Powered Static Site Generator](https://vitepress.dev/)

## 快速开始

（1）打开命令提示符（cmd），创建目录。

```bash
D:
mkdir vitepress-blog && cd vitepress-blog
```

（2）初始化 package.js 文件。

```bash
pnpm init
```

在该文件中添加以下配置项：

```js
"type": "module"
```

（3）安装 vitepress。

```bash
pnpm add -D vitepress
```

（4）运行 VitePress 设置向导，配置项目的基本信息。

```bash
pnpm dlx vitepress init
```

运行以上命令后，设置向导会提供几个选项给你。其中，第一项会要求你设置初始化目录，通常将目录命名为 docs。其他选项根据你的喜好来设置。

```
┌   Welcome to VitePress! 
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  No
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
└  Done! Now run npm run docs:dev and start writing.
```

（5）配置完后，执行 `pnpm run docs:dev`，运行项目。

效果：

![vitepress-site-demo](http://picture.alialiali.top/img/vitepress-site-demo.gif)

## 文件结构

```
.
|-- docs
|   |-- .vitepress
|   |   |-- cache
|   |   `-- config.js
|   |-- api-examples.md
|   |-- index.md
|   `-- markdown-examples.md
|-- package.json
`-- pnpm-lock.yaml
```

- docs 目录被认为是网站的项目根目录。

- 当使用构建命令时，生成的 dist 目录将会存储在 .vitepress 目录下。

- config.js 文件则是网站的配置文件，在这里可以配置网站的基本信息，路由以及导航等等。

- 在 .vitepress 目录之外的 Markdown 文件被称为资源文件。VitePress 采用基于文件的路由，每个 .md 文件都会被编译成相同路径下 .html 文件。举个例子：
  ```
  docs/index.md --> /index.html
  docs/api-examples.md --> /api-example.html
  ```

  

## 参考资料
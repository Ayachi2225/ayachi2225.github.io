---
title: 第一篇文章
date: 2026-06-09 23:40:00
categories:
  - 日常
tags:
  - Hexo
  - Blog
---
这是一篇用于展示博客样式的示例文章。当前主题包含固定侧边栏、文章目录、响应式布局，并且可以通过主题配置切换背景图片和侧边栏图片。

## 写作

Hexo 使用 Markdown 编写文章。你可以在 `source/_posts` 目录下新增文章，或者运行下面的命令创建：

``` bash
$ hexo new "新的文章标题"
```

### Front Matter

每篇文章顶部的 `title`、`date`、`tags` 会被主题读取并展示在页面里。标签会显示在文章标题下方，便于后续归档和检索。

## 本地预览

启动 Hexo 本地服务后，可以在浏览器里实时查看博客界面：

``` bash
$ npm run server
```

### 目录

文章页右侧会自动读取二级、三级标题生成目录。移动端屏幕较窄时，目录会移动到文章正文上方，避免遮挡内容。

## 更换图片

背景图和侧边栏图片配置在 `themes/minimal/_config.yml`：

``` yaml
background_image: https://example.com/background.jpg
sidebar_image: https://example.com/sidebar.jpg
```

也可以把图片放到 `source/images` 目录，然后写成站内路径：

``` yaml
background_image: /images/background.jpg
sidebar_image: /images/sidebar.jpg
```

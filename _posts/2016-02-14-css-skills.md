---
layout: post
title: "CSS技巧"
categories: [web]
---

* content
{:toc}

### 栅格布局

![Roma Italia](/assets/images/css-skills-00.jpg)

### 标签区别
--------

* `blockquote`、`q`、`cite`引用
 1. `blockquote`块引用
 2. `q`行引用
 3. `cite`引用来源，也可用作`blockquote`和`q`的属性

* `pre`、`code`显示源代码
 1. `pre`代码块
 2. `code`行内代码

### 常用的元素命名
--------

*  页面结构

| 元素 | 命名 | 元素 | 命名 |
|:---:|:---:|:---:|:---:|
| 容器 | container | 导航 | nav |
| 页眉 | header | 侧栏 | sidebar |
| 内容 | content | 栏目 | column |
| 主体 | main/mainbody | 包裹层 | wrapper |
| 页脚 | footer | 区域 | area |

* 导航

| 元素 | 命名 | 元素 | 命名 |
|:---:|:---:|:---:|:---:|
| 导航 | nav | 菜单 | menu |
| 主导航 | mainnav | 子菜单 | submenu |
| 顶导航 | topnav | 标题 | title |
| 边导航 | sidenav | 摘要 | summary |
| 左导航 | leftnav | 右导航 | rightnav |

* 功能

| 元素 | 命名 | 元素 | 命名 | 元素 | 命名 | 元素 | 命名 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 标志 | logo | 标题 | title | 提示信息 | msg | 热点 | hot |
| 广告 | banner | 加入 | joinus | 激活 |  active | 新闻 | news |
| 登陆 | login | 状态 | status | 小技巧 | tips | 下载 | download |
| 登录条 | loginbar | 按钮 | btn | 图标 | icon | 投票 | vote |
| 注册 | regsiter | 滚动 | scroll | 注释 | note | 合作伙伴 | partner |
| 搜索 | search | 标签页 | tab | 指南 | guide | 友情链接 | link |
| 功能区 | shop | 文章列表 | list | 服务 | service | 版权 | copyright |

### CSS选择器性能
--------

* 高耗能属性
  * Box-shadows
  * Border-radius
  * Transparency
  * Transforms
  * CSS filters

* 选择器性能排序
  * id选择器（#id）
  * 类选择器（.classname）
  * 标签选择器（div,h1,p）
  * 相邻选择器（h1+p）
  * 子选择器（ul>li）
  * 后代选择器（li a）
  * 通配符选择器（*）
  * 属性选择器（a[rel="external"]）
  * 伪类选择器（a:hover, li:nth-child(n)）

### `a`链接伪类样式顺序
--------

`a:link, a:visited, a:hover, a:focus, a:active`

### 其他伪类及伪元素
--------

伪类

 1. `E:first-child`父元素内的第一个子元素E
 2. `E:last-child`父元素内的最后一个子元素E
 3. `E:nth-child(n)`父元素内的第n个子元素E
 4. `E:first-of-type`父元素内的第一个E元素
 5. `E:last-of-type`父元素内的最后一个E元素
 6. `E:nth-of-type(n)`父元素内的第n个E元素

伪元素

 1. `E:first-letter`E元素文本内的首字母
 2. `E:first-line`E元素文本内的首行
 3. `E:before`在E元素之前插入某些内容
 4. `E:after`在E元素之后插入某些内容

### `font`样式简写
--------

`font: 是否斜体 字体粗细 字体大小/行高 字体样式;`

### `text-indent`首行缩进
--------

使用`text-indent`设置文本缩进以避免计算`padding-left`左内边距
使用负值的`text-indent`实现标点符号悬挂

### 居中方法
--------

文字或图片的水平居中，`text-align: center;`
文字的垂直居中，设置`height`和`line-height`的值相等
多个元素垂直居中对齐，同时对这几个元素设置`vertical-align:middle;`
元素的`display`是`inline`或`inline-block`时，垂直对齐`vertical-align`才起作用

### `vertical-align`垂直对齐

对元素设置`vertical-align`值可以调节垂直方向上的位置

### 清除浮动
--------

浮动导致的常见问题：

  1. 父元素高度无法自动扩展（高度塌陷）
  2. 元素上移，填满浮动元素右侧或中间的间隙

清除浮动的常用方法：

  1.对相邻元素设置：`clear: both;`
  2.对浮动元素设置：

```CSS
width:100%; /*或固定宽度*/
overflow: hidden;
```

  3.使用`after`伪类：`.clearfix`

```CSS
.clearfix:after {
    content: "\200B";
    display: block;
    clear: both;
    height: 0;
}

.clearfix {
    *zoom: 1; /*兼容IE*/
}
```

### 解决父子元素边框重叠的问题
--------

子元素的`magrin`设置为负值，将`border`与父元素的`border`重叠，如`margin-bottom: -1px;`，不必添加类

### 解决多个`li`边框重叠的问题
--------

将`li`的样式设置为`margin-left: -1px;`
`active`部分利用定位提高`z-index`值

### 使用背景图片代替文本
--------

用选用的特殊字体制作一张图片，并用这张图片作为背景替换文本，同时把文字缩进到屏幕外
浏览器中会显示首选字体制作的图片，但是文本依然出现在文档中，以供搜索引擎检索和屏幕阅读器识别

```CSS
div.classname {
      text-indent: -9999px;
}
```

### `display`与`visibility`的异同
--------

`display: none`，不再占用页面空间
`visibility: hidden`，仍占用页面空间

### 解决`inline-block`的间距问题
--------

将父元素（如`ul`）的样式设置为`font-size: 0;`
再将子元素的（如`li`）的样式设置字体大小

### 利用CSS画三角形
--------

```CSS
div {
    border-width: 4px;
    border-style: solid dashed dashed dashed;
    border-color: #000 transparent transparent transparent;
    width: 0;
    height: 0;
}
```

该样式所画三角形，长和高分别为4px
只有`top`具有`style`和`color`值，因此该三角形朝下
想画出朝左、朝上、朝右的三角形，可分别改变`right`、`bottom`、`left`的`style`和`color`值

### 渐变背景图像设置
--------

1.制作一个很高但很窄的渐变图
2.设置CSS：

```CSS
.class {
       background-image: url(../images/bgimg.gif);
       background-repeat: repeat-x;
}
```

3.页面高度超过渐变图的高度时，渐变会显得突然终止，此时应该再添加一个与渐变图底部相同的颜色:`background-color: #xxxxxx;`

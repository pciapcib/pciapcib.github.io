---
layout: post
title: "JavaScript技巧"
categories: [web]
---

* content
{:toc}

### 尽量使用原生JavaScript

### 命名规范
--------

* 变量，使用下划线，如`my_Number`
* 私有属性、变量和方法，以下划线 _ 开头，如`_privateMethod`
* 常量，大写、下划线分隔，如`HTML_ENTITY`
* 函数，驼峰和动宾短语，如`getStyles`
* boolean类型变量，is 或 has 开头，如`isReady`和`hasMoreCommands`
* jQuery对象命名使用$前缀，如`$myDiv`

### 性能优化
--------

选择器

```JavaScript
// Not Recommended
var $products = $("div.products");

// Recommended
var $products = $(".products");
```

DOM操作

```JavaScript
// Not recommended
for (var i = 0; i < 100; i++) {
document.getElementById("myList").innerHTML += "<span>" + i + "</span>";
}

// Recommended
var myList = "";
var myListHTML = document.getElementById("myList");

for (var i = 0; i < 100; i++) {
 myList += "<span>" + i + "</span>";
}

myListHTML.innerHTML = myList;
```

缓存数组长度

```JavaScript
var arr = new Array(1000),
len, i;

// Not recommended
for (i = 0; i < arr.length; i++) {
    //..
}

// Recommended
for (i = 0, len = arr.length; i < len; i++) {
    //..
}
```

高效循环

```JavaScript
// Not Recommended
var $products = $("div.products");

// Recommended
var $products = $(".products");
```

### 注释
--------

函数/方法注释

```JavaScript
/**
* 函数描述
* @param {string} p1 参数1的说明
* @param {string} p2 参数2的说明，
* 比较长就换行
* @param {number=} p3 参数3的说明（可选）
* @return {Object} 返回值描述
*/
function foo(p1, p2, p3) {
var p3 = p3 || 10;
return {
    p1: p1,
    p2: p2,
    p3: p3
    };
}
```

函数/方法注释

```JavaScript
/**
* @fileoverview Description of file, its uses and information
* about its dependencies.
* @author user@gmail.com (Firstname Lastname)
* Copyright 2009 Google Inc. All Rights Reserved.
*/
```

### 移动端touch事件
--------

* touchstart：当手指触碰屏幕时候发生，不论手指数量
* touchmove：当手指在屏幕上滑动时连续触发
* touchend：当手指离开屏幕时触发

* TouchEvent
  * touches：屏幕上所有手指的信息
  * targetTouches：手指在目标区域的手指信息
  * changedTouches：最近一次触发该事件的手指信息
  * 触发touchend时，touches与targetTouches信息会被删除，changedTouches保存的最后一次的信息，最好用于计算手指信息\

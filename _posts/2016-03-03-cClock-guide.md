---
layout: post
title: "cClock 使用说明"
categories: [design]
---

# cClock

Demo地址： [shenting.me/cClock/demo]({{ site.url }}/cClock/demo)

### 使用说明

引入下列文件，

```html
<script src="scripts/cClock.min.js"></script>
```

添加`<canvas>`标签，设置宽高，并在标签内部添加一些描述，

```html
<canvas class="cClock" width="400" height="400">A flat and dynamic clock.</canvas>
```

运行函数，

```javascript
cClock({}, "cClock");
```

即可实现默认效果。

### 配置选项

cClock拥有丰富的自定义功能。

```javascript
cClock(options, className, showTime);
//或
cClock({
    option: value,
    option2: value2,
    ...
}, className, {
    hour: hour,
    minute: minute,
    second: second
});
```

参数分别为：

1. 自定义cClock外观的配置对象，可选参数列于下表，空对象表示默认效果。
2. cClock的类名，字符串形式。
3. 可选，传入一个时间对象，可使cClock静止在设置的时间，也可传入`true`使之静止在默认时间——10 : 08 : 30。

| 选项 | 类型 | 默认值 | 描述 |
|:---:|:---:|:---:|:---:|
| hourLength | Number | 0.65 | 时针的长度 |
| hourWidth | Number | 2 | 时针的宽度 |
| minuteLength | Number | 0.85 | 分针的长度 |
| minuteWidth | Number | 2 | 分针的宽度 |
| secondLength | Number | 0.8 | 秒针的长度 |
| secondWidth | Number | 2 | 秒针的宽度 |
| handColor | String | "#000" | 指针的颜色 |
| handStyle | String | "butt" | 指针的类型，还可设置为"round"、"square" |
| centerRadius | Number | 5 | 中心圆的半径 |
| hourBackLength | Number | 0.2 | 时针后部的长度 |
| minuteBackLength | Number | 0.2 | 分针后部的长度 |
| secondBackLength | Number | 0.2 | 秒针后部的长度 |
| borderWidth | Number | 2 | 边框的宽度 |
| borderColor | String | "#000" | 边框的颜色 |
| padding | Number | 0 | 边框和刻度之间的内边距 |
| bgColor | String | "#fff" | 时钟的背景色 |
| hourDialWidth | Number | 2 | 小时刻度的宽度  |
| hourDialLength | Number | 0.15 | 小时刻度的长度 |
| minuteDialWidth | Number | 2 | 分钟刻度的宽度 |
| minuteDialLength | Number | 0.08 | 分钟刻度的长度 |
| dialColor | String | "#000" | 刻度的颜色 |

### 注意事项

1. 时钟的大小取决于`<canvas>`的宽高。
2. 必须要给该标签设置宽高，并且保证是一个正方形，也就是宽高要相等。
3. 一些与长度有关的选项需设置为小数，与时钟半径有关。
4. 如果选项的长度或宽度设置为0，则表示不显示该选项有关的内容。
5. 例如，如果设置"secondLength: 0"，就表示不需要秒针。
6. 如果把小时刻度设置为不显示，那么分钟刻度也不会显示。

### 其它

1. 制作这个时钟的原因是我在看红皮书《JavaScript高级程序设计》时，在“使用 Canvas 绘图”这一章看到了作为示例的时钟。感叹Canvas的神奇之时，有了让这个时钟转动起来的想法。
2. 开发过程中，看着代码逐渐从稀少到臃肿，从清晰到混乱，一遍又一遍地重构、剥离函数，增长了一些这方面的经验。
3. 复习了不少高中数学的知识。。。
4. 未来有时间精力的情况下，会继续维护开发这款时钟，提供更多效果。

### License

Under the MIT License.

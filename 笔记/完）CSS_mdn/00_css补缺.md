# 伪元素

例如，`::first-line` 是会选择一个元素（下面的情况中是`<p>`）中的第一行

```css
p::first-line { }
```

## ::after

用来创建一个伪元素，作为已选中元素的最后一个子元素。通常会配合content属性来为该元素添加装饰内容。这个虚拟元素默认是行内元素。

```css
a::after {
  content: "→";
}
```

## ::before

与 `::after` 同理

# 替代模型

标准模型盒子的大小还要加上边框和内边距，这样很麻烦

如果需要使用替代模型，您可以通过为其设置 `box-sizing: border-box` 来实现。这样就可以告诉浏览器使用 `border-box` 来定义区域，从而设定您想要的大小。

# 背景

## 大小

如果图片长宽比和盒子不同

```css
background-size: cover      填满盒子的宽或高，如果比例不对就裁切
background-size: contain    填满盒子的宽或高，如果比例不对就会出现间隙
```

通过调整图片填充方式和定位，就可以实现复杂的位置
```css
background-positation-x
```

## 平铺

```css
/* 不重复 */
background-repeat: no-repeat;

repeat-x —水平重复
repeat-y —垂直重复
repeat — 在两个方向重复
```

## 滚动

由 `background-attachment` 属性控制，它可以接受以下值：

- scroll: 固定在页面的相同位置，会随着页面的滚动而滚动。
- fixed: 始终保持在屏幕上相同的位置。
- local: 背景固定在设置的元素上，因此当您滚动元素时，背景也随之滚动。

## 缩写background

这里有一些规则，需要在简写背景属性时遵循，例如：

- `color` 只能在逗号之后指定。
- `size` 值只能包含在背景位置之后，用'/'字符分隔，例如：center/80%。

# 圆角

`border-radius: 10px;`

# 纵向文本

```css
writing-mode: vertical-rl;

horizontal-tb: 块流向从上至下。对应的文本方向是横向的。
vertical-rl: 块流向从右向左。对应的文本方向是纵向的。
vertical-lr: 块流向从左向右。对应的文本方向是纵向的。
```

# 溢出处理

- 隐藏溢出 `overflow: hidden`
- 加上滚动条 `overflow: scroll`
- 仅在y轴滚动 `overflow-y: scroll`
- 让浏览器决定是否显示滚动条 `overflow: auto`

# 图片

将一张图片的 `max-width` 设为 100%。这将会使图片的尺寸小于等于盒子。这个技术也会对其他替换元素（例如 `<video>`，或者 `<iframe>` 起作用

```css
width: 100%;
height: 100%;
做上面两步填满盒子的宽或高，让填充属性生效

object-fit: cover;      如果比例不对就裁切
object-fit: contain;    如果比例不对就会出现间隙
```

# 文本样式

阴影：`shadow`

对齐：`text-align`

行高：`line-height`

字体的1.5倍：`line-height: 1.5em;`

字母和单词间距：`letter-spacing` 和 `word-spacing`

## Font 简写

顺序：
1. font-style
2. font-variant
3. font-weight
4. font-stretch
5. font-size（必须指定）
6. line-height
7. font-family（必须指定）

> 注意：大小、行高之间要放一个 `"/"`

```css
font: italic normal bold normal 1em/1.5em Helvetica, Arial, sans-serif;
```

# 列表

这三个属性可以在 `<ul>` 或 `<ol>` 元素上设置：

- list-style-type ：项目符号的类型
- list-style-position ：项目符号出现在表内 `inside` 还是表外 `outside`
- list-style-image ：为项目符号使用自定义图片` url(star.svg)`

## 从 4 开始计数

`<ol start="4">`从 4 开始计数

## 倒计数

`<ol start="4" reversed>`   4,3,2,1

## 设置列表项指定数值

`<li value="2">`

# a标签伪类

- Link: 没有访问过的
- Visited: 已经被访问过了
- Hover: 光标停留在这个链接
- Focus: 被选中的时候
- Active: 被激活的时候 (比如被点击的时候)
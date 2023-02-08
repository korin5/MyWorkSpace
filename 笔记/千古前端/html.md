# 自动跳转
下面的意思是说，3秒之后，自动跳转到百度页面
```html
<meta http-equiv="refresh" content="3;http://www.baidu.com">
```

# base标签
base 标签用于指定基础的路径。指定之后，所有的 a 链接都是以这个路径为基准。
```html
<base href="/">
```

# 转义字符
- `&nbsp;`：空格 （non-breaking spacing，不断打空格）
- `&lt;`：小于号<（less than）
- `&gt;`：大于号>（greater than）

# 下划线、中划线、斜体标签
- `<u>`：下划线标记
- `<s>`或`<del>`：中划线标记（删除线）
- `<i>`或`<em>`：斜体标记

# 上标`<sup>` 下标`<sub>`

这两个标签容易混淆，怎么记呢？这样记：b的意思是bottom：底部

# a标签

```html
<a href="http://www.baidu.com" target="_blank">点我点我</a>
```

## 锚链接

- 锚点：`name='name1'`或者`id='name1'`
- 跳转：`<a href="a.html#name1">回到顶部</a>`

>说明：name属性是HTML4.0以前使用的，id属性是HTML4.0后才开始使用。为了向前兼容，因此，name和id这两个属性都要写上，并且值是一样的。

## target属性

- `_self`：在同一个网页中显示（默认）
- `_blank`：在新的窗口中打开

# img标签

- `alt` 属性：当图片不可用时替代的文本
- `title` 属性：鼠标悬停之后的提示文本

# 自定义列表`<dl>`

- `<dt>`：列表标题，必须有
- `<dd>`：列表项，不需要可以不加

# 表格

tr是行，td是列

1行3列表格：
```html
<table>
    <caption>这是标题</caption>
	<tr>
		<td>第1列</td>
		<td>第2列</td>
		<td>第3列</td>
	</tr>
</table>
```

## 合并单元格

- `colspan`属性：横向合并
- `rowspan`属性：纵向合并

# 表单

`<form action='login.php' method='post'></form>`

## input标签

- text（默认）
- password：密码
- radio：单选，必须要有相同的name属性
- checkbox：多选，name属性值相同的作为一组
- button：按钮
- submit：提交，会被提交到action属性中指定的页面
- reset：重置，清空表单
- image：图片，和提交按钮的功能完全一致，只不过图片按钮可以显示图片
- file：文件选择框
- disabled属性：不可选

H5新增：
- email 只能输入email格式。自动带有验证功能。
- tel 手机号码。
- url 只能输入url格式
- number 只能输入数字
- search 搜索框
- range 滑动条
- color 拾色器
- time 时间
- date 日期
- datetime 时间日期
- month 月份
- week 星期

新增属性：
- require 表示必填项
- multiple 文件上传多选
- autofocus 自动获取焦点
- placeholder 占位符（提示文字）
- pattern 自定义正则

## select下拉列表标签

每一项用`<option>`表示

- `<select multiple>`：可多选
- `<option selected>`：预选中

## label标签

要实现点文字也能选中，就让 label 标签的 for 属性值和 input 标签的 id 属性值相同

```html
<input type="radio" name="sex" id="nan" />
<label for="nan">男</label>

<input type="checkbox" name="sex" id="nv"  />
<label for="nv">女</label>
```

## 表单标题

会有一个很好看的边框穿透文字效果
```html
<fieldset>
    <legend>表单标题</legend>
    <input>
</fieldset>
```

<fieldset>
    <legend>表单标题</legend>
    <input>
</fieldset>

# marquee滚动字幕标签

如果在这个标签里设置了内容，那么，打开网页时，内容会像弹幕一样自动移动

# 多媒体标签

H5新增audio和video标签

`<audio src="music/yinyue.mp3" autoplay controls></audio>`

`<video src="music/yinyue.mp3" autoplay controls></video>`

# 拖拽元素

页面中设置了 `draggable="true"` 属性的元素可以被拖拽


# W3C标准
W3C: 万维网联盟
包括结构，表现，行为标准

# meta标签
描述网站的信息, 一般用来做SEO
```
<meta charset="utf-8">
<meta name="keywords" content="关键词内容">
<meta name="description" content="描述内容">
```

# 常用标签
```
<h1>标题</h1>
<p>段落</p>
<br/>       换行
<hr/>       水平线
&nbsp;      空格
&copy;      版权符号
```

# 图片
```
<img src="./1.jpg" alt="名称（加载失败时显示）" title="标题（鼠标悬停显示）">
```

# 超链接
```
<a href="./2.html" target="_blank">新窗口</a>
<a href="#" target="_self">本窗口</a>
```

# 锚链接
先需要一个name标记
```
<p name="top"></p>
<a href="#top"></a>
<a href="./2.html#top"></a>
```

# 列表
```
<ul>
    <li>无序列表元素</li>
</ul>

<ol>
    <li>有序列表元素</li>
</ol>

<dl>
    <dt>自定义列表标题</dt>
    <dd>元素</dd>
</dl>
```

# 表格
```
<table border="1">
    <tr>
        <td colspan="2">1左右跨行</td>
        <td rowspan="2">2上下跨列</td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
    </tr>
</table>
```

# 音频视频
```
<video src="./1.mp4" controls autoplay></video>
<audio src="./1.mp3" controls autoplay></audio>
```

# 结构
```
<header>头</header>
<section>一部分内容</section>
<nav>导航</nav>
<footer>脚</footer>
```

# 内联框架
内嵌网页
```
<iframe src="" name="hello"> </iframe>
<a href="https://www.bilibili.com" target="hello">连接</a>
```

# 表单
```
<form method="post" action="result.html">
    <p>姓名：<input type="text" name="username" id="" value="12312" ></p>
    <p>密码：<input type="password" name="password" id=""></p>
</form>
```
- get可以在url看到提交的参数
- post更安全，也用来传输大文件

# input的type
- text文本，maxlength最长字符
- radio单选框，name要相同才能实现单选
- checkbox多选框，checked表示默认选中
- button按钮
- image图片，src是图片路径
- submit提交
- reset重置
- file文件域
- range滑块，有min属性和max属性，step步长
- search搜索框，后面有X，可以清空文本

# 下拉框
```
<select name="列表名称" id="">
    <option value="选项值">中国</option>
    <option value="选项值" selected>中国</option>
</select>
```

# 文本域
```
<textarea name="" id="" cols="30" rows="10"></textarea>
```

# 表单应用
- readonly属性让域内文本无法修改
- disable属性来禁用选项
- hidden属性来隐藏域
- require属性表示不能为空
- placeholder灰色的提示信息
- pattern="[正则表达式]"

# 增强鼠标可用性
点文字也可激活控件
```
<label for="mark">转</label>
<input type="text" id="mark">
```

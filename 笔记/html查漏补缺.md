# head标签

图标，网页描述（SEO）
```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<meta name="description" content="">
```

# a标签

使用 download 属性来提供一个下载文件默认的保存文件名

```html
<a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN"
   download="firefox-latest-64bit-installer.exe">
  下载最新的 Firefox 中文版 - Windows（64 位）
</a>
```

电子邮件链接 (mailto:)

```html
<a href="mailto:635472561@qq.com">向 635472561 发邮件</a>
```

# 缩略语

默认样式为虚线下划线，当鼠标放上文字才显示title的信息

```css
<p>我们使用 <abbr title="超文本标记语言（Hyper text Markup Language）">HTML</abbr> 来组织网页文档。</p>
```

# 上标和下标

```html
<sub>下标</sub>
<sup>上标</sup>
```

# 展示代码

- `<code>`: 用于标记计算机通用代码。
- `<pre>`: 用于保留空白字符（通常用于代码块）

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('噢，噢，噢，别点我了。');
}</code></pre>
```

以上代码输出如下

<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('噢，噢，噢，别点我了。');
}</code></pre>

# 时间

```html
<time datetime="2016-01-20">20 January 2016</time>
<time datetime="2016-01">January 2016</time>
<time datetime="01-20">20 January</time>
<time datetime="19:30">19:30</time>
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
```

世界上有许多种书写日期的格式，上边的日期可能被写成：

- 20 January 2016
- 20th January 2016
- Jan 20 2016

# 图片

- alt：在图片失效时显示的文本
- title：鼠标放上后显示的文本

```html
<img src="images/dinosaur.jpg" alt="The head" title="标题">
```


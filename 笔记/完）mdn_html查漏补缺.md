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

## 响应式图片

### 选择合适大小的图片

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

- srcset 定义了浏览器可选择的图片设置以及每个图片的大小
- sizes 定义了一组媒体条件（例如屏幕宽度）为真时，用什么图片尺寸（例子是当视口的宽度小于等于 600px 时，图片480px）

有了这些属性后，浏览器会：

1. 检查设备宽度
2. 检查 sizes 列表中哪个媒体条件是第一个为真
3. 查看给予该媒体查询的槽大小
4. 加载 srcset 列表中引用的最接近所选的槽大小的图像

### 多分辨率图片

如果设备有高分辨率，用两个或更多的设备像素表示一个 CSS 像素，会加载 elva-fairy-640w.jpg

```html
<img srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
     src="elva-fairy-640w.jpg"
     alt="Elva dressed as a fairy" />
```

### picture标签

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

在上述示例中，如果视窗的宽度为 799px 或更少，第一个 `<source>` 元素的图片就会显示

# 表格

```html
<table>
  <tr>
    <th>&nbsp;</th>
    <th>Knocky</th>
    <th>Flor</th>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
  </tr>
</table>
```
<table>
  <tr>
    <th>&nbsp;</th>
    <th>Knocky</th>
    <th>Flor</th>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
  </tr>
</table>

## 跨列跨行

```html
<table>
    <tr>
        <th colspan="2">Hippopotamus</th>
    </tr>
    <tr>
        <th rowspan="2">Horse</th>
        <td>Mare</td>
    </tr>
    <tr>
        <td>Stallion</td>
    </tr>
</table>
```

<table>
    <tr>
        <th colspan="2">Hippopotamus</th>
    </tr>
    <tr>
        <th rowspan="2">Horse</th>
        <td>Mare</td>
    </tr>
    <tr>
        <td>Stallion</td>
    </tr>
</table>

## col标签

对 `<col>` 应用样式，使用span多选

```html
<table>
  <colgroup>
    <col>
    <col style="background-color: yellow">
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
</table>
```

<table>
  <colgroup>
    <col>
    <col style="background-color: yellow" span="2">
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
    <th>Data 3</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
    <td>Ordfrge</td>
  </tr>
</table>

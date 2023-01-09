AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

# 实例
```html
<div id="myDiv"><h2>使用 AJAX 修改该文本内容</h2></div>
<button type="button" onclick="loadXMLDoc()">修改内容</button>

<script>    
function loadXMLDoc()
{
    .... AJAX 脚本执行 ...
}
</script>
```

# 创建对象

创建 XMLHttpRequest 对象（这个对象是内置的）
```js
variable = new XMLHttpRequest();
```

# 向服务器发送请求

使用 XMLHttpRequest 对象的 `open()` 和 `send()` 方法：

```js
//规定请求类型, 文件在服务器上的地址,true异步或false同步
xmlhttp.open("GET","ajax_info.txt",true);
//将请求发送到服务器
xmlhttp.send("...");
```

# GET和POST

GET 更简单也更快

这些情况使用POST：
- 不愿调用缓存
- 发送大量数据
- 包含未知字符输入

一个简单的 GET 请求：
```js
xmlhttp.open("GET","/try/ajax/demo_get.php",true);
xmlhttp.send();

//在上面的例子中，您可能得到的是缓存的结果。
//为了避免这种情况，请向 URL 添加一个唯一的 ID：
xmlhttp.open("GET","/try/ajax/demo_get.php?t=" + Math.random(),true);
xmlhttp.send();
```

一个简单 POST 请求：
```js
xmlhttp.open("POST","/try/ajax/demo_post.php",true);
xmlhttp.send();
```

如果需要像 HTML 表单那样 POST 数据

请添加 HTTP 头，使用 `setRequestHeader(头名称,头的值)`

然后在 `send()` 方法中规定您希望发送的数据：
```js
xmlhttp.open("POST","/try/ajax/demo_post2.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Henry&lname=Ford");
```

# 服务器响应

获得服务器的响应，使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性

如果来自服务器的响应并非 XML，请使用 responseText 属性

```js
//传来Text返回字符串,可以这样用
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;

//传来xml，那就解析
xmlDoc=xmlhttp.responseXML;
txt="";
x=xmlDoc.getElementsByTagName("ARTIST");
for (i=0;i<x.length;i++)
{
    txt=txt + x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("myDiv").innerHTML=txt;
```

# 事件


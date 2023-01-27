# XMLHttpRequest

XMLHttpRequest 用于在后台与服务器交换数据

创建:
```js
var xmlhttp;
xmlhttp = new XMLHttpRequest();
//所有现代浏览器均内建 XMLHttpRequest 对象
```

# 发送请求

```js
//规定请求
xmlhttp.open("GET","gethint.php?q="+str,true);
//open(GET|POST,文件在服务器上的位置,true异步|false同步)

//发送请求
xmlhttp.send();
xmlhttp.send(string);//仅用于POST
```

使用 async=false 时，JavaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会挂起或停止

# 服务器响应

使用 XMLHttpRequest 对象的属性

- responseText	获得字符串数据
- responseXML	获得 XML 数据

# onreadystatechange 事件

存储函数（或函数名）

readyState 属性改变会触发一次 onreadystatechange 事件（会被触发4次）

readyState 属性：

0. 请求未初始化
1. 服务器连接已建立
2. 请求已接收
3. 请求处理中
4. 请求已完成，且响应已就绪

status 属性：

- 200: "OK"
- 404: 未找到页面

当 readyState 等于 4 且状态为 200 时，表示响应已就绪：
```js
xmlhttp.onreadystatechange=function()
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
}
```

# showHint() 函数

当用户在输入框中键入字符时，会执行函数 "showHint()" 。该函数由 "onkeyup" 事件触发

# showCustomer() 函数

当用户在下拉列表中选择某个客户时，会执行名为 "showCustomer()" 的函数。该函数由 "onchange" 事件触发

# loadXMLDoc() 函数

当用户点击按钮，就会执行 loadXMLDoc() 函数。

# JSON

使用 JSON.parse() 方法将XML数据转换为 JavaScript 对象。
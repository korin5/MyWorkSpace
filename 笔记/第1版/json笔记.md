# 实例

```js
//表示sites数组中有3个对象，这3个对象都有name和url这两个key
var sites = [
    { "name":"runoob" , "url":"www.runoob.com" }, 
    { "name":"google" , "url":"www.google.com" }, 
    { "name":"微博" , "url":"www.weibo.com" }
];

//可以像这样访问 JavaScript 对象数组中的第一项（索引从 0 开始）
sites[0].name;

//可以像这样删除一个属性
delete sites[1].name;


//嵌套对象
var myObj = {
    "name":"runoob",
    "alexa":10000,
    "sites": {
        "site1":"www.runoob.com",
        "site2":"m.runoob.com",
        "site3":"c.runoob.com"
    }
}

myObj.sites.site1 = "www.runoob.com"
```

# 概念

JSON 其实就是创建 JavaScript 对象

由于这种相似性，无需解析器，JavaScript 程序能够使用内建的`eval()`函数，用 JSON 数据来生成原生的 javascript 对象

# 语法

- 书写格式：`键 : 值`
- `{} `保存对象
- `[] `保存数组，数组可以包含多个对象

## 数据类型

- 数字
- 字符串
- 布尔，真假
- 数组，在`[]`中
- 对象，在`{}`中
- `null`

# 解析

## JSON.parse()

将JSON转换为 JavaScript 对象

```js
//例如我们从服务器接收了一个使用JSON格式的字符串
{"name":"runoob","alexa":10000,"site":"www.runoob.com"}

//JSON.parse() 将它转换为 JavaScript 对象
var runoobInfo = JSON.parse('{"name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
```

## JSON.stringify()

将 JavaScript 对象转换为字符串
```js
//例如我们向服务器发送这个对象，要使用JSON格式的字符串
var obj = {
    "name":"runoob",
    "alexa":10000,
    "site":"www.runoob.com"
};

//JSON.stringify() 将其转换为字符串
var myJSON = JSON.stringify(obj);

//我们也可以将数组，日期转换为字符串
```


# 从服务端接收 JSON 数据

我们可以使用 AJAX 从服务器请求 JSON 数据，并解析为 JavaScript 对象

```js
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "/try/ajax/json_demo.txt", true);
xmlhttp.send();
```
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

//可以像这样修改数据
sites[0].name = "菜鸟教程";

//可以像这样删除一个属性
delete sites[1].name;
```

# 概念

JSON 其实就是创建 JavaScript 对象

由于这种相似性，无需解析器，JavaScript 程序能够使用内建的`eval()`函数，用 JSON 数据来生成原生的 javascript 对象

# 语法

- `, `分隔数据
- `\ `转义字符
- `{} `保存对象
- `[] `保存数组，数组可以包含多个对象

## 数据书写格式

`键 : 值`

也就是`key : value`

## 数据类型

- 数字
- 字符串
- 布尔，真或假
- 数组，在[]中
- 对象，在{}中
- null

对象里可以包括多个键值对

# 解析

## JSON.parse()

将JSON转换为 JavaScript 对象

例如我们从服务器接收了以下数据：
```js
{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }
```

我们使用 JSON.parse() 方法处理以上数据，将其转换为 JavaScript 对象：
```js
var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
```

## JSON.stringify()

将 JavaScript 对象转换为字符串

例如我们向服务器发送以下数据：
```js
var obj = { "name":"runoob", "alexa":10000, "site":"www.runoob.com"};
```

我们使用 JSON.stringify() 方法处理以上数据，将其转换为字符串：
```js
var myJSON = JSON.stringify(obj);
```

myJSON 为字符串。

我们可以将 myJSON 发送到服务器：
```js
var obj = { "name":"runoob", "alexa":10000, "site":"www.runoob.com"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
```

我们也可以将 JavaScript 数组转换为 JSON 字符串

将所有日期转换为字符串

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
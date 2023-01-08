# 交互
```
console.log(msg);       控制台输出
alert(msg);             浏览器弹出警示框
prompt(info);           浏览器弹出输入框
```

# 变量
通过var声明
```
var carName;    未定义的值为undefined
var text = "Hello" + "world!";
```

# 作用域
var有函数作用域
```
function one(){
    var
}
此处不能访问var
```

var没有块作用域
```
{
    var
}
此处可以访问var
```

let有块作用域
```
{
    let
}
此处不能访问let

在循环中使用let
for(let i = 0;i < 10;i++){

}
```

const定义常量（不可修改）

# 数据类型

- 数组 `x = [1,2,3,]` 也是对象
- null类型 也是对象
- 对象 `object = {name:'bill',age:6}`
- 布尔类型boolean

# 类型转换
```
把6转换为string类型
String(6)

把'6'转换为number类型
Number('6')

boolean转number
0或1
```

# 函数
```
function myFunction(p1,p2){
    return p1 * p2;
}
```

# 事件
- onchange 元素改变
- onclick 点击元素
- onmouseover 鼠标覆盖
- onmouseout 鼠标移开
- onkeydown 按下键盘
- onload 浏览器完成加载

# 异步处理
```
等待3秒，打印'6'
setTimeout(print('6'),3000)
```

# 类
- 类命名首字母大写
- 每个类都要添加`constructor()`方法
```
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);
```

## 继承
- 继承另父类的所有方法
- `super()`方法调用了父级的`constructor()`方法
```
class GoodStudent extends Student{
    constructor(name){
        super(name);
    }
}
```

# BOM
- window 浏览器窗口
- navigator 浏览器信息
- screen 屏幕尺寸
- location 当前url信息
- history 访问历史
```
window.open() - 打开新窗口
window.close() - 关闭当前窗口
window.moveTo() - 移动当前窗口

navigator.cookieEnabled - 如果cookie已启用,返回true
navigator不应该用于检测浏览器版本

screen.width
screen.height

window.location.href - 返回当前页面的 href (URL)
window.location.hostname - 返回 web 主机的域名

history.back() - 等同于在浏览器点击后退按钮
history.forward() - 等同于在浏览器中点击前进按钮
```

# DOM

## 获取元素
```
document.getElementById('id');
document.getElementsByTagName("p");
document.getElementsByClassName("intro");
document.querySelector("p.intro");
```

## 更改属性
```
element.innerHTML - 标签内的所有内容
element.innerText - 标签内的文本内容
element.setAttribute('type','text/css')
element.style.color = 'red'
element.removeChild(father.children[0]) - 删除第一个子元素
element.parentElement - 获取父元素
```

## 创建元素
```
可以用innerHTML直接写

将一个元素追加到最后，此元素必须是已存在的
list.appendChild(element)

创建p标签
var newP = document.createElement('p');
newP.id = 'newP';
newP.innerText = 'I am the new P.';

用此方法引入新的css或js
var newStyle = document.createElement('style');
newStyle.setAttribute('type','text/css');
newScript.setAttribute('type','text/javascript');
```

## 获取表单
```
获取表单的值
inputText.value

但单选框和多选框的值是不变的
查看是否选中，使用↓
theRadio.checked
```

## 提交表单

表单标签
```
<form action="https://www.baidu.com" method = "post" onsubmit="return submit()">
```

创建两个密码框，一个给用户输入，另一个隐藏，用来进行md5加密
```
<input type='password' id='inputPwd'>
<input type='hidden' id='md5Pwd'>
```

给提交按钮添加属性`onClick = "submit()"`
```
<button onClick = 'sublime()'>提交</button>
```

提交函数，进行文本验证，密码md5加密
```
function submit(){
    此处进行验证

    对密码进行md5加密
    md5Pwd.value = md5(inputPwd.value)

    return true 则为提交
    return false 则为拦截提交
}
```


# jQuery

唯一公式：`$(selector).action()`

## 很好的文档
https://jquery.cuishifeng.cn/

## CDN
许多用户在访问其他站点时，已经从百度、又拍云、新浪、谷歌或微软加载过 jQuery。所以结果是，当他们访问您的站点时，会从缓存中加载 jQuery，这样可以减少加载时间。同时，大多数 CDN 都可以确保当用户向其请求文件时，会从离用户最近的服务器上返回响应，这样也可以提高加载速度。
```
Staticfile CDN
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>

百度CDN
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>

又拍云CDN
<script src="https://upcdn.b0.upaiyun.com/libs/jquery/jquery-2.0.2.min.js"></script>

新浪CDN
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

微软CDN
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.1.min.js"></script>
```

## 选择器
```
其实就是CSS选择器
$(".myClass")
```

## 事件
```
鼠标按下
$("button").mousedown();

鼠标离开
$("button").mouseleave();

鼠标移动
$("button").mousemove();

点击结束
$("button").mouseover();

网页加载完毕
$(document).ready(function(){})
简化
$(function(){})

单击
click

双击
dblclick

键盘按下
keydown

键盘按住
keypress

键盘弹起
keyup

提交时
submit
```

获取鼠标的坐标
```
$(function(){
    mousemove方法获取了鼠标的坐标
    把此对象传给function中的e变量
    $('div').mousemove(function(e){
        显示在span标签内
        $('span').text('x:' + e.pageX + ' y:' + e.pageY);
    })
})
```

## 操作DOM
```
innerHTML
$().html('<p></p>')

innerText
$().text('123123')

css样式
$().css('color','red')
$().css({ "color": "red", "background": "blue" });

display显示
$().show()
$().hide()
```

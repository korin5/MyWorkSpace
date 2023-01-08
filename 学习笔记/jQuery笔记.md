唯一公式：`$(selector).action()`

# 很好的文档
https://jquery.cuishifeng.cn/

# CDN
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

# 选择器
```
其实就是CSS选择器
$(".myClass")
```

# 事件
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

## 获取鼠标的坐标
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

# 操作DOM
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
# 选择器

## 普通选择器

```css
标签选择器
p,a{}

类选择器
.text{}

id选择器
#bill{}

后代选择器
body内的所有p标签
body p{}

子选择器
儿子可以，孙子不行
body>p{}

兄弟选择器
和a标签同级的p标签，但只向下选择一个
a+p{}

通用兄弟选择器
向下选择全部的同级p标签
a~p{}
```

## 伪类选择器

```css
标签的第一个子元素
ul li:first-child{}

鼠标覆盖时
a:hover{}

鼠标按住时
a:active{}
```

## 属性选择器

```css
带有id或class属性的a标签
a[id]{}
a[id='first']{}
a[class='first']{}

包含即可（通配）
a[class*="links"]{}

开头和结尾
a[href^=http]{}
a[href$=com]{}
```

# 字体
```css
p{
    font-size: 50px;
    font-size: 50px;
    font-family: 微软雅黑;
    font-weight: bold;
    font: bold 12px 微软雅黑;
}
```

# 文本样式
```css
p{
    color: skyblue;         颜色
    text-align: center;     居中
    text-indent: 2em;       缩进2字符
    background-color: aliceblue;        背景颜色

    二者高度一致就是文字垂直居中了↓↓
    height: 300px;          块高度
    line-height: 300px;     行高

}
```

## 装饰线
```css
p{
    text-decoration: underline;         下划线
    text-decoration: line-through;      中划线
    text-decoration: overline;          上划线
    text-decoration: none;              去除超链接下划线
}
```

## 阴影
```css
p{
    分别为：阴影颜色，水平偏移，垂直偏移，阴影半径
    text-shadow: black 10px 10px 10px;
}
```

# 列表样式
```css
ul li{
    height: 10px;               行高
    list-style: square;         正方形标
    text-indent: 2em;           缩进2字符
}
```

# 背景
```css
div{
    默认是全部平铺满的（密恐控诉）
    background-image: url();

    设置为不平铺
    background-repeat: no-repeat;

    分别为：背景颜色，图片，图片位置，平铺方式
    background: red url() 200px 10px no-repeat;

    背景位置
    background-position: 200px 3px;
}
```

## 渐变色背景
```css
div{
    来自https://www.grabient.com/
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}
```

# 盒子模型
```css
div{
    上下和左右边距，auto居中
    margin: 0 auto;

    四个参数上右下左，顺时针
    margin: 1 2 3 4;
}
```

## 圆角边框（css3）
```css
div{
    border-radius: 10px;
}
```

# display显示方式
```css
div{
    块，大小固定，独占一行
    display: block;

    内联，大小随内容变化
    display: inline;

    内联的块，大小固定
    display: inline-block;
}
```

# 浮动
也就是不撑大父级的内联元素了
```css
div{
    float: left;
}
```

## 让父级适应浮动元素
```css
father:after{
    1.添加空元素
    content: '';
    
    2.设置为块
    display: block;
    
    3.清除两侧浮动
    clear: both;
}
```

# 定位
```css
div{
    相对定位，相对于上下左右
    position: relative;
    往上提高20px
    top: -20px;

    绝对定位
    position: absolute;
    如果父级元素存在定位，绝对定位就是相对于父级元素定位

    固定定位
    position: fixed;
    悬浮在窗口固定位置
}
```

# 图层
```css
div{
    最顶层
    z-index: 999;
}
```

# 透明度
```css
div{
    50%透明
    opacity: 0.5;
}
```

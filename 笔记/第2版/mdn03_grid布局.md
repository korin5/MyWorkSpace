一个网格通常具有许多的列（column）与行（row），以及间隙（gutter）

# 启用grid

在父元素添加 `display: grid` 来定义grid布局

加三个宽度为200px的列，用百分比也可以

```css
.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
}
```

![](./img03/1.png)

# 单位 fr

表示可用空间的比例： `grid-template-columns: 2fr 1fr 1fr` 比例为2：1：1

![](./img03/2.png)

可以和一般长度单位混用： `grid-template-columns: 300px 2fr 1fr` 第一列宽度是300px，剩下的两列会根据除去300px后的可用空间按比例分配。

> 注意：fr单位分配的是可用空间而非所有空间，如果格子中内容变多了，那么可用空间就会减少

![](./img03/3.png)

# 间隙 gap

使用 `grid-gap` 可以设定列间隙和行间隙（不能用fr）

```css
grid-gap: 20px 10px;
```

> `grid-gap` 是老名字，现在逐渐被 `gap` 取代，也可以把两个属性都写上

# 重复构建 repeat

使用 `repeat` 来重复构建行和列

`grid-template-columns: repeat(3, 1fr);` 相当于填入了 `1fr 1fr 1fr`

`repeat(2, 2fr 1fr)` 相当于填入了 `2fr 1fr 2fr 1fr`

# 显式网格与隐式网格

一句话，可以通过 `grid-auto-rows: 100px` 来手动设置每一行的固定高度

如果显式网格没有定义行高，那么隐式网格就会自适应设置行高，因为默认值为auto

简单来说，隐式网格就是为了放显式网格放不下的元素，根据已经定义的显式网格自动生成的网格部分。

# minmax 函数

`grid-auto-rows: minmax(100px, auto)` 表示行高根据内容自动调整，最小为100px

# 自动使用多列填充

在repeat函数中，用 `auto-fill` 来替代确定列的重复次数。第二个参数用minmax函数来设定，列宽最小为200px，最大为1fr

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
}
```

![](./img03/fill.png)

随着容器宽度的改变，网格会自动根据容器宽度进行调整，每一列的宽度总是大于200px，并且容器总会被列填满。

# 基于线的元素放置

第一条列分隔线在网格的最左边，第一条行分隔线在网格的最上面

我们根据分隔线来放置元素，通过以下属性来指定从哪条线开始或结束，值为分隔线的序号

- grid-column-start: 1
- grid-column-end
- grid-row-start
- grid-row-end

缩写，同时指定开始与结束的线

- grid-column: 1 / 3
- grid-row

1开始到3结束就意味着3格合并了

> 用-1来定位到最后一条列分隔线或是行分隔线，并且可以用负数来指定倒数的某一条分隔线。但对于隐式网格，-1不一定能定位到最后一条分隔线。

# 使用 grid-template-areas 属性放置元素


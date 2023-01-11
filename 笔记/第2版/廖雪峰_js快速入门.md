# 赋值
不要使用`==`比较，始终坚持使用`===`比较

# 字符串 String
## 多行字符串
```js
`多行
字符串`;
```

## ${name}
字符串中引用变量
```js
var name = 'bill';
var message = `the name is ${name}`;    //注意这里是反引号
```

## length
获取字符串长度
```js
var s = 'Hello, world!';
s.length; // 13
```

## 字符串索引
```js
var s = 'Hello, world!';
s[0]; // 'H'
s[7]; // 'w'
```

注意：对字符串的某个索引赋值，不会有任何效果 (这种方法只有数组可以)
```js
var s = '012345';
s[2] = 6;   //这样是无效的
```

## indexof()
搜索字符串出现的位置
```js
var s = 'hello, world';
s.indexOf('world'); // 返回7
s.indexOf('World'); // 没有找到指定的子串，返回-1
```

## substring()
返回指定索引区间的子串
```js
var s = 'hello, world'
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
s.substring(7); // 从索引7开始到结束，返回'world'
```

# 数组 Array
```js
var arr = [1,2,3];
arr[0] = 6;
arr;    //[6,2,3] 
```

注意：如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化（不建议）
```js
var arr = [1, 2, 3];
arr[5] = 'x';
arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
```

## length
获取数组的长度
```js
var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length; // 6
```

## indexOf()
搜索一个指定的元素的位置
```js
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 元素10的索引为0
arr.indexOf(30); // 元素30没有找到，返回-1
```

## slice()
`slice()`就是对应String的`substring()`版本
```js
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3); // 也就是索引0，1，2
arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
```

如果不给`slice()`传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array
```js
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
aCopy === arr; // false
```

## push()和pop()
`push()`向Array的末尾添加若干元素，`pop()`则把Array的最后一个元素删除掉
```js
var arr = [1, 2];
arr.push('A', 'B'); // 返回Array新的长度: 4
arr; // [1, 2, 'A', 'B']
arr.pop(); // pop()返回'B'
arr; // [1, 2, 'A']

// 空数组pop不会报错，而是返回undefined
```

## unshift()和shift()
`unshift()`往Array的头部添加若干元素，`shift()`则把Array的第一个元素删掉
```js
var arr = [1, 2];
arr.unshift('A', 'B'); // 返回Array新的长度: 4
arr; // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr; // ['B', 1, 2]

// 空数组shift不会报错，而是返回undefined
```

## sort()
排序，直接修改当前Array的元素位置
```js
var arr = ['B', 'C', 'A'];
arr.sort();
arr; // ['A', 'B', 'C']
```

## reverse()
反转整个Array
```js
var arr = ['one', 'two', 'three'];
arr.reverse(); 
arr; // ['three', 'two', 'one']
```

## splice()
这是修改Array的“万能方法”，从指定的索引开始删除若干元素，再从该位置添加若干元素
```js
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```

## concat()
把当前的Array和另一个Array连接起来，并返回一个新的Array
```js
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
added; // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']并未修改当前Array
```

## join()
把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串
```js
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'
```

## 多维数组
如果数组的某个元素又是一个Array，则可以形成多维数组
```js
var arr = [[1, 2, 3], [400, 500, 600], '-'];
//上述Array包含3个元素，其中头两个元素本身也是Array
```

# 对象 Object
一种无序的集合数据类型，由若干键值对组成
```js
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
```

## 获取属性
```js
xiaoming.name; // '小明'
xiaoming.birth; // 1990
```

## 操作属性
```js
var xiaoming = {
    name: '小明'
};
xiaoming.age = 18; // 新增一个age属性
delete xiaoming.age; // 删除age属性
```

## 检测属性

```js
var xiaoming = {
    name: '小明',
};
'name' in xiaoming; // true
'grade' in xiaoming; // false
```

注意：如果in检测一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的
```js
'toString' in xiaoming; // true
//所有对象都在原型链上指向object
//而toString定义在object对象中
//所以xiaoming也拥有toString属性
```

要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用`hasOwnProperty()`方法
```js
var xiaoming = {
    name: '小明'
};
xiaoming.hasOwnProperty('name'); // true
xiaoming.hasOwnProperty('toString'); // false
```

# 循环

## for
遍历数组
```js
var arr = ['Apple', 'Google', 'Microsoft'];
for (let i=0; i<arr.length; i++) {
    let x = arr[i];
    console.log(x);
}
```

## for ... in
把一个对象的所有属性依次循环出来
```js
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key); // 'name', 'age', 'city'
}
```

要过滤掉对象继承的属性，用`hasOwnProperty()`来实现
```js
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}
```

循环出Array的索引
```js
var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}
//注意，for ... in对Array的循环得到的是String而不是Number
```

# Map和Set

## Map
Map是一组键值对的结构
```js
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95
//无论这个表有多大，查找速度都很快
```

Map具有以下方法
```js
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 获得67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined

//多次对一个key放入value，后面的值会把前面的值冲掉
```

## Set
和Map类似，但不存储value
```js
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3
```

重复元素会被过滤
```js
var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}
```

Set具有以下方法
```js
s.add(4);       //添加
s; // Set {1, 2, 3, 4}

var s = new Set([1, 2, 3]);
s.delete(3);    //删除
s; // Set {1, 2}
```

# iterable

Array、Map和Set都属于iterable类型

具有iterable类型的集合可以通过for ... of循环来遍历
```js
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}
```

更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数
```js
var a = ['A','B','C'];

a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});
```

输出：
```
A, index = 0
B, index = 1
C, index = 2
```

Set没有索引，因此回调函数的前两个参数都是元素本身
```js
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(element);
    console.log(sameElement);
    console.log(set);
});
```

Map的回调函数参数依次为value、key和map本身
```js
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});
```

如果只需要获得Array的element
```js
var a = ['A', 'B', 'C'];
a.forEach(function (element) {
    console.log(element);
});
```




# 响应式

## reactive()

`reactive()` 函数能为对象或数组创建响应式代理（Proxy）

Proxy与原始对象是不全等的

只有代理对象是响应式的，所以更改原始对象不会触发更新

## ref()

为了解决`reactive()`的局限性，`ref()`诞生了

`ref()` 函数能创建对任意值的 “引用”，并能够在不丢失响应性的前提下传递这些引用

# 计算属性computed

用经典的计数器来举例，如果记过数，就返回Yes

```javascript
<script setup>
import { reactive, computed } from 'vue'

const counted = computed(() => {
  return count > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <span>{{ counted }}</span>
</template>
```

## 计算属性缓存 vs 方法

乍一看，这个`computed()`好像还不如定义一个function来的方便

虽然结果一样，但是计算属性值会基于其响应式依赖被缓存

如果是function，它就会重复执行

下面的计算属性永远不会更新，因为`Date.now()`并不是一个响应式依赖

```js
const now = computed(() => Date.now())
```

使用计算属性调用缓存能够节省性能

如果你确定不需要缓存，那么也可以使用方法调用

## 避免直接修改计算属性值

从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，应该更新它所依赖的源状态以触发新的计算

# class绑定

下方表示：active 是否存在，取决于 isActive 的真假
```js
<div :class="{ active: isActive }"></div>
```

也可以这样：
```js
const classObject = reactive({
  active: true,
  'text-danger': false
})
```

```js
<div :class="classObject"></div>
```

# style绑定

```js
const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})
```

```js
<div :style="styleObject"></div>
```

# v-show

与v-if不同的是，`v-show` 仅切换了了 `display` 属性

频繁切换使用 `v-show` 较好

# v-for

## 遍历数组

```js
const items = ref([
    { message: 'Foo' },
    { message: 'Bar' }
])
```

```js
<li v-for="item in items">
  {{ item.message }}
</li>
```

可以有第二个变量，代表索引值

`v-for="(item, index) in items"`

你也可以使用 of 作为分隔符来替代 in

## 遍历对象

```js
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
```

这里可以有第二和第三个参数，代表属性名和索引值

`v-for="(value, key, index) in myObject"`

## 范围

一看就懂：`v-for="n in 10"`

# 侦听器watch()

```js
watch(x,()=>{
    //当x变化时执行
})
```

侦听响应式对象的属性值要用getter

```js
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)
```

```js
watch(x, () => {
    // 立即执行，且当 x 改变时再次执行
}, { immediate: true })
```

## watchEffect()

```js
watchEffect(() => {
  const response = x//当这里的x变化时执行回调
})
```

特点：回调会立即执行，不需要指定 immediate: true。执行期间，它会自动追踪 todoId.value 作为依赖（和计算属性类似）。每当 todoId.value 变化时，回调会再次执行。

## 停止侦听

在 setup() 或 `<script setup>` 中用同步语句创建的侦听器，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止。因此，在大多数情况下，你无需关心怎么停止一个侦听器。

一个关键点是，侦听器必须用同步语句创建：如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。

```js
const unwatch = watchEffect(() => {})

// ...当侦听器不再需要
unwatch()
```

如果需要等待一些异步数据，你可以使用条件式的侦听逻辑：

```js
watchEffect(() => {
  if (data.value) {
    // 数据加载后执行...
  }
})
```

# 组件

在组件内声明defineProps，来接收值

如果要写一个博客，那么可以用数组来保存文章列表

```js
const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])
```

用 v-for 来渲染它们

```js
<BlogPost
  v-for="post in posts"
  :key="post.id"
  :title="post.title"
 />
```
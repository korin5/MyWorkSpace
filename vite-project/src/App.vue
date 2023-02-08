<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref, watch, watchEffect } from 'vue'

const text = ref()
const isRight = ref(' ')

watchEffect(() => {
    if (text.value == '123') {
        isRight.value = 'Right!'
    } else if (!text.value) {
        isRight.value = ' '
    } else isRight.value = 'It is wrong...'
})
</script>

<template>

    <div>
        <h1>Enter 123</h1>
        <input type="text" v-model="text">
        <p>{{ isRight }}</p>
    </div>

    <ListComponent />

    <HelloWorld msg="Hello World!">

        <template #header>
            <h2>标题</h2>
        </template>
        <template #main>
            <p>内容</p>
        </template>
        <template #footer>
            <h3>页脚</h3>
        </template>
        Click me!
    </HelloWorld>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

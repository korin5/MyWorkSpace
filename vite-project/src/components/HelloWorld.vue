<script setup>
import { ref,computed } from 'vue'

defineProps({
    msg: String
})

const state = ref({ count: 0 })

const now = computed(()=>{
    return Date.now()
})
</script>

<template>
    <h1>{{ msg }}</h1>

    <div class="card">
        <button type="button" @click="">count is {{ now }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
        starter
    </p>
    <p>
        Install
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
.baz{
    background-color: aqua;
}
</style>

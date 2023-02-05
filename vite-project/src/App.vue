<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref,watch } from 'vue'


const artists = ref([
    { name: 'seiji', type: 'fingerstyle' },
    { name: 'yuki', type: 'fingerstyle' },
    { name: 'okapi', type: 'fingerstyle' },
])
const text = ref()

watch(text,()=>{
    console.log(text)
})
</script>

<template>
    <div v-show=false>
        <a href="#" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>

    <div>
        <h1>List</h1>
        <input type="text" v-model="text">
        <p>{{ text }}</p>
    </div>



    <!-- <HelloWorld msg="Vite + Vue"/> -->
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

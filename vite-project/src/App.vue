<script setup>
import HelloWorld from './components/HelloWorld.vue'

const href = {
    vue: 'https://vuejs.org/',
    vite: 'https://vitejs.dev',
    baidu: 'https://baidu.com/'
}

const attrname = 'href'
</script>

<template>
  <div>
    <a :href="href.vite" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a :href="href.vue" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <a :[attrname]="href.baidu">baidu</a>

  <HelloWorld msg="Vite + Vue"/>
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

<template>
  <v-layout>

    <!-- 侧边栏 -->
    <NavBar></NavBar>

    <!-- 顶栏 -->
    <TopBar></TopBar>
    
    <!-- 主视图 -->
    <MainView></MainView>

  </v-layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import TopBar from "./views/TopBar.vue";
import NavBar from "./views/NavBar.vue"
import MainView from "./views/MainView.vue"
import { useDataStore } from "./stores/store";
// import {state} from "./scripts/state.js"

const store = useDataStore()

onMounted(()=>{
    // get请求乐手
    store.getPlayerList()

    // GET请求曲目
    store.getMusicList(['井草圣二'])
})
</script>
<template>
  <v-layout>

    <!-- 顶栏 -->
    <TopBar></TopBar>

    <!-- 侧边栏 -->
    <NavBar></NavBar>
    
    <!-- 主视图 -->
    <MainView></MainView>

  </v-layout>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import TopBar from "./views/TopBar.vue";
import NavBar from "./views/NavBar.vue"
import MainView from "./views/MainView.vue"
import {state} from "./scripts/state.js"

onMounted(()=>{
    // GET请求乐手列表
    state.playerList = ["井草圣二", "松井佑贵", "岸部真明", "Tommy Emmanuel"]

    // GET请求曲目列表
    state.musicList = [
        { 'title': '花火', 'tuning': 'DADGAD', 'type': '原创', 'img': '/src/assets/img/花火.png', 'link': 'https://www.bilibili.com/video/BV1Us411t7me' },
        { 'title': 'Silk Hat', 'tuning': '标准调弦', 'type': '原创', 'img': '/src/assets/img/silkHat.png', 'link': 'https://www.bilibili.com/video/BV1Vs411b7Vx' },
        { 'title': '夜のピエロ', 'tuning': '标准调弦', 'type': '改编', 'img': '/src/assets/img/夜のピエロ.png', 'link': 'https://www.bilibili.com/video/BV1aR4y1c7nY' },
        { 'title': '恋', 'tuning': '标准调弦', 'type': '改编', 'img': '/src/assets/img/恋.png', 'link': 'https://www.bilibili.com/video/BV1JJ411z7Ej' }]

})
</script>
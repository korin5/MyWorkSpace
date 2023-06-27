<template>
  <v-app-bar color="teal" >

    <!-- 侧边栏按钮 -->
    <v-app-bar-nav-icon icon="fas fa-bars" class="ml-2" v-show="!state.drawer||1" @click.stop="()=>{state.drawer = !state.drawer}"></v-app-bar-nav-icon>

    <v-app-bar-title >作品列表</v-app-bar-title>

    <v-btn rounded="lg" variant="outlined" class="mr-6 text-body-1 ">
      上传单曲
      <UploadMusicDialog></UploadMusicDialog>
    </v-btn>

  </v-app-bar>
</template>

<script setup>
import UploadMusicDialog from '../components/UploadMusicDialog.vue'
import {state} from "../scripts/state.js"
</script>
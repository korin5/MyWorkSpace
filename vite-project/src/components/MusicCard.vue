<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <v-card class="flex-1-1 ma-6 mr-0 mt-0 align-self-baseline" min-width="100" max-width="500" v-bind="props"
      rounded="lg" :elevation="isHovering ? 10 : 2">

      <v-card rounded="0" elevation="0">
        <div class="container">
          <img :src="music.img" class="image">
          <div class="overlay"></div>
          <div class="button d-flex justify-center align-center">
            <a class="ma-2" style="text-decoration: none;" v-if="music.link.bilibili" target="_blank"
              :href="music.link.bilibili">
              <v-btn size="x-large" icon="" color="pink-accent-1">
                <i class="fa-brands fa-bilibili fa-lg"></i>
              </v-btn>
              <v-tooltip activator="parent" location="bottom">转到BiliBili</v-tooltip>
            </a>

            <a class="ma-2" style="text-decoration: none;" v-if="music.link.youtube" target="_blank"
              :href="music.link.youtube">
              <v-btn size="x-large" icon="" color="red">
                <i class="fab fa-youtube fa-lg"></i>
              </v-btn>
              <v-tooltip activator="parent" location="bottom">转到Youtube</v-tooltip>
            </a>

            <a class="ma-2" style="text-decoration: none;" v-if="music.link.info || 1" target="_blank"
              :href="music.link.info">
              <v-btn size="x-large" icon="fas fa-list" color="white">
                <i class="fas fa-list fa-lg"></i>
              </v-btn>
              <v-tooltip activator="parent" location="bottom">详细信息</v-tooltip>
            </a>
          </div>

        </div>
      </v-card>

      <v-card-title class="pa-0 pl-6 mt-4"> <span class="text-h5"> {{ music.title }} </span></v-card-title>

      <v-card-subtitle class="pa-0 pl-6 pr-6 mt-4 mb-4">
        <v-chip class="mr-2"> {{ music.type }} </v-chip>
        <v-chip class="mr-2"> {{ music.tuning }} </v-chip>
      </v-card-subtitle>

      <v-card-text class="pa-0 pl-6 mt-2 mb-2" style="position: absolute;right:12px;bottom:2px">
        id: {{ index }}
      </v-card-text>

    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const props = defineProps(['music', 'index'])


</script>

<style>

.container {
  position: relative;
  width: 100%;
  height: 80%;
}

.image {
  transition: 0.4s ease;
  display: block;
  width: 100%;
  height: auto;
}


.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.4s ease;
  /* border-radius: 9px 9px 0px 0px; */
}

.button {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

a {
  transition: 0.4s ease;
  display: none;
}

.container:hover a {
  display: inline-block;
}


.container:hover .overlay {
  height: 100%;
}

.container:hover .image {
  transform: matrix(1.4, 0, -0, 1.4, 0, 0);
  filter: blur(2.5px);
}
</style>
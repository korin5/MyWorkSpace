<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <v-card class="flex-1-1 ma-6 mr-0 mt-0 align-self-baseline" min-width="100" max-width="500" v-bind="props"
      rounded="lg" :elevation="isHovering ? 22 : 2">

      <v-card rounded="0" elevation="0">
        <!-- <img id="img" :src="music.img">
        <a class="ma-auto" style="text-decoration: none;display: block;" v-if="music.link" target="_blank"
          :href="music.link"><v-btn v-show="isHovering" prepend-icon="mdi-open-in-new" variant="outlined" color="white">
            观看视频
          </v-btn></a> -->

        <div class="container">
          <img :src="music.img" class="image">
          <div class="overlay">
            <a class="btn ma-auto" style="text-decoration: none;display: block;" v-if="music.link" target="_blank"
              :href="music.link"><v-btn v-show="isHovering" prepend-icon="mdi-open-in-new" variant="outlined"
                color="white">
                观看视频
              </v-btn></a>
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

<script setup>
import { ref, reactive } from "vue";

const props = defineProps(['music', 'index'])


</script>

<style>
#img {
  transition: transform 0.5s;
  height: 200px;
  object-fit: cover;

}

#img:hover {
  transform: matrix(1.4, 0, -0, 1.4, 0, 0);
  background-color: rgba(0, 0, 0);
  opacity: 0.5;
}

.container {
  position: relative;
  width: 100%;
  height: 200px;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}


.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0,0.3);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.container:hover .overlay {
  height: 100%;
}

.btn {
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>
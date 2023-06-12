<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <v-card class="ma-6 mr-0 mt-0 align-self-baseline" min-width="100" max-width="600" v-bind="props"
      :elevation="isHovering ? 22 : 2">


      <v-hover>
        <v-img src="/src/assets/Demo/img/夜のピエロ.png" height="200px" :height="isHovering ? '400px' : '200px'" cover>
          <v-overlay :model-value="isHovering" contained class="align-center justify-center">
            <a href="#"><v-btn v-show="isHovering" prepend-icon="mdi-open-in-new" variant="outlined" color="white">
              转到视频
            </v-btn></a>
            

          </v-overlay>
          <v-card-actions v-show="isHovering" class="pa-0 pl-6 pr-6 mb-4">

          </v-card-actions>
        </v-img>
      </v-hover>



      <v-card-title class="pa-0 pl-6 mt-4"> <span class="text-h5"> 夜のピエロ </span></v-card-title>

      <v-card-subtitle class="pa-0 pl-6 pr-6 mt-4 mb-4">
        <v-chip class="mr-2"> 改编{{  }} </v-chip>
        <v-chip class="mr-2"> 标准调弦{{  }} </v-chip>
      </v-card-subtitle>

      <!-- <v-card-text style="position: absolute;right:12px;bottom:2px" class="pa-0 pl-6 mt-2 mb-2">
        上传者：{{ }}
      </v-card-text> -->

    </v-card>
  </v-hover>
</template>

<script setup>
import { ref, reactive } from "vue";


</script>
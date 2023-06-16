<template>
  <v-app-bar color="teal">

    <v-app-bar-nav-icon class="ml-2" v-show="!drawer" @click.stop="$emit('showNav')"></v-app-bar-nav-icon>

    <v-app-bar-title >作品列表</v-app-bar-title>

    <v-btn rounded="lg" prepend-icon="mdi-upload"  variant="outlined" class="mr-6 text-body-1 ">
      上传单曲
      <UploadMusicDialog></UploadMusicDialog>
    </v-btn>

  </v-app-bar>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import UploadMusicDialog from '../components/UploadMusicDialog.vue'

defineProps(['players', 'drawer'])

</script>
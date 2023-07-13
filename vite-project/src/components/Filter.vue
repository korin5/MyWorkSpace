<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <v-card class="ma-6 mb-0 pa-6" rounded="lg" height="auto" width="auto" :elevation="isHovering ? 10 : 2"
      v-bind="props">

      <span><h3 class="text-h6">创作类型</h3></span>
        
      <v-chip-group filter class="pa-0" multiple v-model="typeSelected">
        <v-chip color="teal" v-for="(type, i) in types" :key="i" :value="type">
          {{ type }}
        </v-chip>
      </v-chip-group>

      <h3 class="mt-6 text-h6">调音</h3>
      <v-chip-group filter class="pa-0" multiple v-model="tuningSelected">
        <!-- <v-chip color="teal">全选</v-chip> -->
        <v-chip color="teal" v-for="(tuning, i) in tunings" :key="i" :value="tuning">
          {{ tuning }}
        </v-chip>
      </v-chip-group>

      <!-- <v-btn class="mt-6" color="teal">应用</v-btn> -->
    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from "vue";
import { useDataStore } from "../stores/store";

const store = useDataStore()
const tunings = ref([]);
const types = ref([]);
const tuningSelected = ref([]);
const typeSelected = ref([]);

// 调试
watch(tuningSelected, async () => {
  // console.log('调音选择: ' + tuningSelected.value)
  // GET请求曲目
  store.getFilterMusicList({
    "tuning" : tuningSelected.value,
    "type" : typeSelected.value
  })
})
watch(typeSelected, async () => {
  // console.log('创作类型选择: ' + typeSelected.value)
  // GET请求曲目
  store.getFilterMusicList({
    "tuning" : tuningSelected.value,
    "type" : typeSelected.value
  })
})
watch(() => store.musicList, async () => {
  showChips()
  tuningSelected.value = tunings.value
  typeSelected.value = types.value
})

onMounted(() => {
  showChips()
  tuningSelected.value = tunings.value
  typeSelected.value = types.value
})

function showChips() {
  typeSelected.value=[]
  tuningSelected.value=[]
  tunings.value=[]
  types.value=[]
  store.musicList.forEach(function (music, index) {
    tunings.value[index] = music.tuning;
  })
  store.musicList.forEach(function (music, index) {
    types.value[index] = music.type;
  })

  tunings.value = sortByFrequency(tunings.value);
  types.value = sortByFrequency(types.value);
}

//按出现次数排序
function sortByFrequency(arr) {

  var frequency = {};

  arr.forEach(function (item) {
    frequency[item] = frequency[item] || 0;
    frequency[item]++;
  });

  var result = [];

  var sortedArr = Object.keys(frequency).sort(function (a, b) {
    return frequency[b] - frequency[a];
  });

  sortedArr.forEach(function (item) {
    result.push(item);
  });

  return result;
}

</script>
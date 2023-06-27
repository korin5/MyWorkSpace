<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <v-card class="ma-6 mb-0 pa-6" rounded="lg" height="auto" width="auto" :elevation="isHovering ? 20 : 2"
      v-bind="props">

      <h3 class="text-h6">创作类型</h3>
      <v-chip-group class="pa-0" multiple v-model="typeSelect">
        <!-- <v-chip color="teal">全选</v-chip> -->
        <v-chip color="teal" v-for="(typ, i) in types" :key="i">
          {{ typ }}
        </v-chip>
      </v-chip-group>

      <h3 class="mt-6 text-h6">调音</h3>
      <v-chip-group class="pa-0" multiple v-model="tuningSelect">
        <!-- <v-chip color="teal">全选</v-chip> -->
        <v-chip color="teal" v-for="(tuning, i) in tunings" :key="i">
          {{ tuning }}
        </v-chip>
      </v-chip-group>
    </v-card>
  </v-hover>
</template>

<script setup>
import { ref, reactive, watch, onUpdated, computed, onMounted } from "vue";
import { state } from "../scripts/state.js"

const tuningSelect = ref([0]);
const typeSelect = ref([0]);
const currentTuning = computed(() => { return selectItems(tuningSelect.value, 'tuning') });
const currentType = computed(() => { return selectItems(typeSelect.value, 'type') });
const tunings = ref([]);
const types = ref([]);

// const props = defineProps(['musicList'])

// 调试
watch(tuningSelect, async () => {
  console.log('调音选择: ' + currentTuning.value)
})
watch(typeSelect, async () => {
  console.log('创作类型选择: ' + currentType.value)
})
watch(() => state.musicList, async () => {
  console.log( state.musicList )
  showChips()
})

function selectItems(Items, type) {
  var list = [];
  var j = 0;

  if (type == 'tuning') {
    var obj = tunings.value
  } else if (type == 'type') {
    var obj = types.value
  }

  for (var i in Items) {
    list[j++] = obj[Items[i]];
  }

  return list
}


function showChips() {

  tunings.value = []
  types.value = []
  state.musicList.forEach(function (music, index) {
    tunings.value[index] = music.tuning;
  })
  state.musicList.forEach(function (music, index) {
    types.value[index] = music.type;
  })

  tunings.value = sortByFrequency(tunings.value);
  types.value = sortByFrequency(types.value);

  // console.log('tunings.value: ' + tunings.value)
  // console.log('types.value: ' + types.value)
}



onMounted(() => {
  showChips();
})

//按出现次数排序
function sortByFrequency(arr) {

  // 创建一个空对象来存储每个元素的出现次数
  var frequency = {};

  // 计算每个元素的出现次数
  arr.forEach(function (item) {
    frequency[item] = frequency[item] || 0;
    frequency[item]++;
  });

  // 创建一个新数组来存储排序后的结果
  var result = [];

  // 将对象转换为数组，并按照出现次数进行排序
  var sortedArr = Object.keys(frequency).sort(function (a, b) {
    return frequency[b] - frequency[a];
  });

  // 将排序后的元素添加到结果数组中
  sortedArr.forEach(function (item) {
    result.push(item);
  });

  return result;
}

</script>
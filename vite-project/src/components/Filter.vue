<template>
  <v-card class="ma-6 mb-0 pa-6" height="auto" width="auto" rounded>
    <h3 class="text-h6">调音</h3>
    <v-chip-group class="pa-0" multiple v-model="tuningSelect">
      <v-chip class="mr-2 " filter variant="outlined" v-for="(tuning, i) in musicInfoList.tunings" :key="i">
        {{ tuning }}
      </v-chip>
    </v-chip-group>

    <h3 class="mt-6 text-h6">创作类型</h3>
    <v-chip-group class="pa-0" multiple v-model="typeSelect">
      <v-chip class="mr-2" filter variant="outlined" v-for="(typ, i) in musicInfoList.types" :key="i">
        {{ typ }}
      </v-chip>
    </v-chip-group>
  </v-card>

  <!-- 调试 -->
  <v-snackbar v-model="snackbar">
    {{ snackbarText }}
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

const tuningSelect = ref([0]);
const typeSelect = ref([0]);
const snackbar = ref(null)
const snackbarText = ref('')

const props = defineProps(['musicInfoList'])

// 调试
watch(tuningSelect, async () => {
  snackbarText.value = '调音选择: ' + selectItems(tuningSelect.value, 'tuning')
  snackbar.value = true
})
watch(typeSelect, async () => {
  snackbarText.value = '创作类型选择: ' + selectItems(typeSelect.value, 'type')
  snackbar.value = true
})

function selectItems(Items, type) {
  var list = [];
  var j = 0;

  if (type == 'tuning') {
    var obj = props.musicInfoList.tunings
  } else if (type == 'type') {
    var obj = props.musicInfoList.types
  }

  for (var i in Items) {
    list[j++] = obj[Items[i]];
  }

  return list
}

</script>
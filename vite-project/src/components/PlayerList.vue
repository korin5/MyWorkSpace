<template>
    <!-- <v-list class="" > -->
    <!-- <v-list-subheader class="text-body-1"> 乐手 </v-list-subheader> -->

    <v-chip-group class="ma=0 pa-6" height="auto" v-model="playerSelect" mandatory>
        <v-chip
            v-for="(player, i) in musicInfoList.players" :key="i" class="w-100 ma-0 mb-2"
            @click="$emit('playerChanged',player)"
            size="x-large" color="teal" rounded="lg" variant="outlined" border="0" label>
            {{ player }}
        </v-chip>
    </v-chip-group>
    <!-- </v-list> -->


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
import { ref, reactive, watch, defineExpose } from "vue";

const playerSelect = ref(0)
const snackbar = ref(null)
const snackbarText = ref('')
const playerSelected = ref('')

const props = defineProps(['drawer', 'musicInfoList'])

// const musicInfoList = defineProps(['musicInfoList'])
// 调试
watch(playerSelect, async () => {
    snackbarText.value = '乐手选择: ' + props.musicInfoList.players[playerSelect.value]
    playerSelected.value = props.musicInfoList.players[playerSelect.value]
    snackbar.value = true
    // console.log(props.musicInfoList.players)
})


</script>
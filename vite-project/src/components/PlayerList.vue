<template>
        <v-list class="pa-6" height="auto">
            <!-- <v-list-subheader class="text-body-1"> 乐手 </v-list-subheader> -->

            <v-chip-group class="ma=0 pa-0" v-model="playerSelect" mandatory>
                <v-chip v-for="(player, i) in musicInfoList.players" :key="i" class="w-100 ma-0 mb-2" size="x-large"
                    color="teal" variant="outlined" rounded="rounded" border="0" label>
                    {{ player }}
                </v-chip>
            </v-chip-group>
        </v-list>

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

const playerSelect = ref(0)
const snackbar = ref(null)
const snackbarText = ref('')

const props = defineProps(['drawer', 'musicInfoList'])

// const musicInfoList = defineProps(['musicInfoList'])
// 调试
watch(playerSelect, async () => {
    snackbarText.value = '乐手选择: ' + props.musicInfoList.players[playerSelect.value]
    snackbar.value = true
    // console.log(props.musicInfoList.players)
})
</script>
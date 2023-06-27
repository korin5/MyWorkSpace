<template>
    <v-chip-group class="ma=0 pa-6" height="auto" v-model="playerSelect" mandatory>
        <v-chip v-for="(player, i) in state.playerList" :key="i" class="w-100 ma-0 mb-2" size="x-large" color="teal"
            rounded="lg" variant="outlined" border="0" label>
            {{ player }}
        </v-chip>
    </v-chip-group>
</template>

<script setup>
import { ref, reactive, watch, onMounted, computed } from "vue";
import { state } from "../scripts/state.js"

const playerSelect = ref(0)
const currentPlayer = computed(() => { return state.playerList[playerSelect.value] })

onMounted(() => {
    playerSelect.value = [0];
})

watch(playerSelect, async () => {
    console.log('切换到了: ' + currentPlayer.value + ' 他有这些曲子: ')

    // GET请求曲目列表
    if (currentPlayer.value == "松井佑贵") {
        state.musicList = [
            {
                'title': '君と僕', 'tuning': '标准调弦', 'type': '原创', 'img': '/src/assets/img/君と僕.png', 'link': {
                    'bilibili': 'https://www.bilibili.com/video/BV1Mx41147R4',
                    'youtube': '',
                    'info': ''
                }
            }]
    }

    if (currentPlayer.value == "井草圣二") {
        state.musicList = [
            {
                'title': '花火',
                'tuning': 'DADGAD',
                'type': '原创',
                'img': '/src/assets/img/花火.png',
                'link': {
                    'bilibili': 'https://www.bilibili.com/video/BV1Us411t7me',
                    'youtube': '',
                    'info': ''
                }
            },
            {
                'title': 'Silk Hat', 'tuning': '标准调弦', 'type': '原创', 'img': '/src/assets/img/silkHat.png', 'link': {
                    'bilibili': 'https://www.bilibili.com/video/BV1Vs411b7Vx',
                    'youtube': 'https://www.youtube.com/watch?v=YMEukSriypI',
                    'info': ''
                }
            },
            {
                'title': '夜のピエロ', 'tuning': '标准调弦', 'type': '改编', 'img': '/src/assets/img/夜のピエロ.png', 'link': {
                    'bilibili': 'https://www.bilibili.com/video/BV1aR4y1c7nY',
                    'youtube': '',
                    'info': ''
                }
            },
            {
                'title': '恋', 'tuning': '标准调弦', 'type': '改编', 'img': '/src/assets/img/恋.png', 'link': {
                    'bilibili': 'https://www.bilibili.com/video/BV1JJ411z7Ej',
                    'youtube': '',
                    'info': ''
                }
            }]
    }

    if (currentPlayer.value == "岸部真明") {
        state.musicList = []
    }

    if (currentPlayer.value == 'Tommy Emmanuel') {
        state.musicList = []
    }
})

</script>
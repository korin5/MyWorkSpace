<template>
    <v-chip-group class="ma=0 pa-6" height="auto" v-model="playerSelect" mandatory>
        <v-chip v-for="(player, i) in playerList.player" :key="i" class="w-100 ma-0 mb-2" size="x-large" color="teal"
            rounded="lg" variant="outlined" border="0" label>
            {{ player }}
        </v-chip>
    </v-chip-group>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, computed } from "vue";
import playerList from '../data/PlayerList.json'
// import state from '../scripts/state.js'

const playerSelect = ref("")
const selected = ref([])
// const currentPlayer = computed(() => { return state.playerList[playerSelect.value] })
const currentPlayer = computed(()=> {return playerList.player[playerSelect.value]})


watch(selected,async()=>{
    console.log(1)
    console.log(selected.value)
})

watch(playerSelect, async () => {
    console.log('切换到了: ' + currentPlayer.value + ' 他有这些曲子: ')

    // GET请求曲目列表
})

</script>
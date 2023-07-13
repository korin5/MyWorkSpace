<template>
    <v-list v-model:selected="playerSelect" class="ma=0  rounded-be-xl rounded-te-xl">
        <v-list-subheader>乐手</v-list-subheader>

        <v-list-item
            v-for="(player, i) in playerList" :key="i" :value="player.name"
            color="teal" class="w-100 ma-0" size="x-large"> 
            <template v-slot:prepend>
                <v-icon :icon="player.avatar"></v-icon>
            </template>

            <v-list-item-title v-text="player.name"></v-list-item-title>
        </v-list-item>
    </v-list>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import { useDataStore } from '../stores/store'

const playerSelect = ref(['井草圣二'])
const store = useDataStore()
const playerList = computed(() => store.playerList)

watch(playerSelect, async () => {
    console.log('选择了' + playerSelect.value)
    store.getMusicList(playerSelect.value)
})

</script>
<template>
    <v-main min-height="300" class="bg-grey-lighten-5">
        <Filter></Filter>

            <v-row no-gutters class="pr-6 pt-6">
                <v-col v-for="(music, index) in musicList" cols="12" sm="6" md="4" lg="3" xl="3">
                    <MusicCard :music="music" :index="index"></MusicCard>
                </v-col>
            </v-row>
    </v-main>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch,computed } from "vue";
import Filter from "../components/Filter.vue";
import MusicCard from "../components/MusicCard.vue";
import { useDataStore } from "../stores/store";
import { useRouter, useRoute } from 'vue-router'

const store = useDataStore()
const router = useRouter()
const route = useRoute()
const musicList = computed(() => {
    let newList = []
    for(let index in store.musicList){
        if(store.musicList[index].show === true){
            newList.push(store.musicList[index])
        }
    }
    return newList;
})
</script>
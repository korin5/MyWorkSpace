<template>
    <v-main min-height="300" class="bg-grey-lighten-5">

        <!-- 过滤器 -->
        <!-- <Filter></Filter> -->

        <!-- 卡片 -->
        <v-continer>
            <v-row no-gutters class="pr-6 pt-6">
                <v-col v-for="(music, index) in state.musicList" v-show="music.tuning" cols="12" xs="12" sm="6" md="4" lg="4" xl="3">
                    <MusicCard :music="music" :index="index"></MusicCard>
                </v-col>
            </v-row>
        </v-continer>

    </v-main>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import Filter from "../components/Filter.vue";
import MusicCard from "../components/MusicCard.vue";
import { state } from "../scripts/state.js"
</script>
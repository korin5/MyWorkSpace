<template>
  <v-layout>

    <!-- 侧边栏 NavBar -->
    <v-navigation-drawer v-model="drawer" color="grey-lighten-5">
      <PlayerList :musicInfoList="musicInfoList"></PlayerList>
    </v-navigation-drawer>


    <!-- 顶栏 TopBar -->
    <TopBar :drawer="drawer" :players="players" @showNav="drawer = !drawer">
    </TopBar>


    <!-- ---------------------------------------------------------------------------------- -->
    <!-- 主视图 MainView -->
    <!-- ---------------------------------------------------------------------------------- -->
    <v-main min-height="300">
      <v-card color="grey-lighten-5">
        <!-- <h1 class="text-h1 ma-6">{{ players[playerSelect].name }}</h1> -->

        <Filter :musicInfoList="musicInfoList"></Filter>

        <v-continer>
          <v-row no-gutters class="pr-6 pt-6">
            <v-col v-for="n in 10" :key="n" cols="12" xs="12" sm="6" md="4" lg="4">
              <MusicCard></MusicCard>
            </v-col>
          </v-row>
        </v-continer>
      </v-card>

    </v-main>

  </v-layout>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import MusicCard from "./components/MusicCard.vue";
import Filter from "./components/Filter.vue";
import PlayerList from "./components/PlayerList.vue";
import TopBar from "./views/TopBar.vue";

const drawer = ref(null);
const musicInfoList = reactive({
  'players': ['井草圣二', '松井佑贵', '岸部真明', 'Tommy Emmanuel'],
  'tunings': ['标准调弦', 'DADGAD', 'DADGBE', 'CGDGAD','DADF#AD'],
  'types': ['原创', '改编', '翻奏']
})


</script>
<template>
  <v-layout>
    <!-- ---------------------------------------------------------------------------------- -->
    <!-- 顶栏 TopBar -->
    <!-- ---------------------------------------------------------------------------------- -->
    <TopBar :drawer="drawer" :players="players" @showNav="drawer = !drawer">
    </TopBar>


    <!-- ---------------------------------------------------------------------------------- -->
    <!-- 侧边栏 NavBar -->
    <!-- ---------------------------------------------------------------------------------- -->
    <v-navigation-drawer v-model="drawer" color="grey-lighten-5">
      <PlayerList :musicInfoList="musicInfoList" @playerChanged="playerChanged"></PlayerList>
    </v-navigation-drawer>

    <!-- ---------------------------------------------------------------------------------- -->
    <!-- 主视图 MainView -->
    <!-- ---------------------------------------------------------------------------------- -->
    <v-main min-height="300" class="bg-grey-lighten-5">
        <!-- <h1 transition="fade-transition" class="text-h1 ma-6"><span>{{ playerSelected }}</span></h1> -->

        <Filter :musicList="musicList"></Filter>

        <!-- grid视图 -->
        <v-continer>
          <v-row no-gutters class="pr-6 pt-6">
            <v-col v-for="(music, index) in musicList" cols="12" xs="12" sm="6" md="4" lg="4">
              <MusicCard :music="music" :index="index"></MusicCard>
            </v-col>
          </v-row>
        </v-continer>

        <!-- flex视图 -->
        <!-- <v-continer class="d-flex flex-wrap pr-6 pt-6">
          <MusicCard v-for="n in 10" :key="n"></MusicCard>
        </v-continer> -->
    </v-main>

  </v-layout>
</template>

<script setup>
import { ref, reactive, onMounted,watch } from "vue";
import MusicCard from "./components/MusicCard.vue";
import Filter from "./components/Filter.vue";
import PlayerList from "./components/PlayerList.vue";
import TopBar from "./views/TopBar.vue";

const drawer = ref(null);
const musicInfoList = reactive({
  'players': ['井草圣二', '松井佑贵', '岸部真明', 'Tommy Emmanuel'],
  'tunings': ['标准调弦', 'DADGAD', 'DADGBE', 'CGDGAD', 'DADF#AD'],
  'types': ['原创', '改编', '翻奏']
})
const playerSelected = ref('')
const musicList = ref([{ 'title': '花火', 'tuning': 'DADGAD', 'type': '原创', 'img': '/src/assets/img/花火.png', 'link': 'https://www.bilibili.com/video/BV1Us411t7me' },
  { 'title': 'Silk Hat', 'tuning': '标准调弦', 'type': '原创', 'img': '/src/assets/img/silkHat.png', 'link': 'https://www.bilibili.com/video/BV1Vs411b7Vx' },
  { 'title': '夜のピエロ', 'tuning': '标准调弦', 'type': '改编', 'img': '/src/assets/img/夜のピエロ.png', 'link': 'https://www.bilibili.com/video/BV1aR4y1c7nY' },
  { 'title': '恋', 'tuning': '标准调弦', 'type': '改编', 'img': '/src/assets/img/恋.png', 'link': 'https://www.bilibili.com/video/BV1JJ411z7Ej' }])

function playerChanged(player) {
  // console.log('切换到了: ' + player)
  playerSelected.value = player

  //GET乐手的曲目列表
  //Demo
  if (player == "松井佑贵") {
    musicList.value = [{ 'title': '君と僕', 'tuning': '标准调弦', 'type': '原创', 'img': '/src/assets/img/君と僕.png', 'link': 'https://www.bilibili.com/video/BV1Mx41147R4' }]
  }

  if (player == "井草圣二") {
    musicList.value = [{ 'title': '花火', 'tuning': 'DADGAD', 'type': '原创', 'img': '/src/assets/img/花火.png', 'link': 'https://www.bilibili.com/video/BV1Us411t7me' },
    { 'title': 'Silk Hat', 'tuning': '标准调弦', 'type': '原创', 'img': '/src/assets/img/silkHat.png', 'link': 'https://www.bilibili.com/video/BV1Vs411b7Vx' },
    { 'title': '夜のピエロ', 'tuning': '标准调弦', 'type': '改编', 'img': '/src/assets/img/夜のピエロ.png', 'link': 'https://www.bilibili.com/video/BV1aR4y1c7nY' },
    { 'title': '恋', 'tuning': '标准调弦', 'type': '改编', 'img': '/src/assets/img/恋.png', 'link': 'https://www.bilibili.com/video/BV1JJ411z7Ej' }]
  }

  if (player == "岸部真明") {
    musicList.value = []
  }

  if (player == 'Tommy Emmanuel') {
    musicList.value = []
  }

}

onMounted(() => {
  playerSelected.value = musicInfoList.players[0]
  
})


</script>
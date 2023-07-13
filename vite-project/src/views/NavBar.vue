<template>
    <v-navigation-drawer v-model="store.drawer" color="grey-lighten-5">

        <PlayerList></PlayerList>

    </v-navigation-drawer>
</template>

<script setup lang="ts">
// import {state} from "../scripts/state.js"
import PlayerList from "../components/PlayerList.vue"
import { useStateStore } from '../stores/store'
const store = useStateStore()
</script>
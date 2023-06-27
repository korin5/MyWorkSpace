<template>
    <v-navigation-drawer v-model="state.drawer" color="grey-lighten-5">

        <PlayerList></PlayerList>

    </v-navigation-drawer>
</template>

<script setup>
import {state} from "../scripts/state.js"
import PlayerList from "../components/PlayerList.vue"
</script>
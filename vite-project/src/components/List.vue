<script setup>
import {ref} from 'vue'


const lists = ref([
    'Bill','Alice','Dan',
])

</script>

<template>
    <div>
        <h2>About</h2>
        <ol>
            <li v-for="list in lists">
                {{ list }}
            </li>
        </ol>
    </div>
</template>
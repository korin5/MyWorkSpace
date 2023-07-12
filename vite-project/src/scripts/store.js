import { defineStore } from 'pinia'
import {ref} from 'vue'


export const useStateStore = defineStore('State', ()=>{
    const drawer = ref()

    return { drawer }
})
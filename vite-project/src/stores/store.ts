import { defineStore } from 'pinia'
import { ref, reactive, watch, toRaw } from 'vue'
import axios from 'axios'

export const useStateStore = defineStore('state', () => {
    const drawer = ref()
    return { drawer }
})

export const useDataStore = defineStore('data', () => {
    const playerList = ref([])
    const musicList = ref([])

    function getPlayerList() {
        //get请求乐手
        axios.get('/?players')
            .then(function (response) {
            // 处理成功情况
            console.log(response);
            })
            .catch(function (error) {
            // 处理错误情况
            console.log(error);
            })
            .then(function () {
            // 总是会执行
            });
        playerList.value = [
            { "name": "井草圣二", prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', },
            { "name": "松井佑贵", prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', },
            { "name": "岸部真明", prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', },
            { "name": "Tommy Emmanuel", prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', },
        ]
    }
    function getMusicList(playerSelect) {
        //get请求曲目
        axios.get('/?'+playerSelect)
            .then(function (response) {
            // 处理成功情况
            console.log(response);
            })
            .catch(function (error) {
            // 处理错误情况
            console.log(error);
            })
            .then(function () {
            // 总是会执行
            });
        if (playerSelect == '井草圣二') {
            musicList.value = [
                {
                    "title": "花火",
                    "tuning": "DADGAD",
                    "type": "原创",
                    "show": true,
                    "img": "/src/assets/img/花火.png",
                    "link": {
                        "bilibili": "https://www.bilibili.com/video/BV1Us411t7me"
                    }
                },
                {
                    "title": "Silk Hat",
                    "tuning": "标准调弦",
                    "type": "原创",
                    "show": true,
                    "img": "/src/assets/img/silkHat.png",
                    "link": {
                        "bilibili": "https://www.bilibili.com/video/BV1Vs411b7Vx",
                        "youtube": "https://www.youtube.com"
                    }
                },
                {
                    "title": "夜のピエロ",
                    "tuning": "标准调弦",
                    "type": "改编",
                    "show": true,
                    "img": "/src/assets/img/夜のピエロ.png", "link": {
                        "bilibili": "https://www.bilibili.com/video/BV1aR4y1c7nY"
                    }
                },
                {
                    "title": "恋",
                    "tuning": "标准调弦",
                    "type": "改编",
                    "show": true,
                    "img": "/src/assets/img/恋.png", "link": {
                        "bilibili": "https://www.bilibili.com/video/BV1JJ411z7Ej"
                    }
                }
            ]
        } else if (playerSelect == '松井佑贵') {
            musicList.value = [
                {
                    "title": "花火",
                    "tuning": "DADGAD",
                    "type": "原创",
                    "show": true,
                    "img": "/src/assets/img/花火.png",
                    "link": {
                        "bilibili": "https://www.bilibili.com/video/BV1Us411t7me"
                    }
                }
            ]
        }

    }
    function getFilterMusicList(filter) {
        let tuningSelected = Object.values(filter.tuning)
        let typeSelected = Object.values(filter.type)
        let musics = Object.values(musicList.value)
        for (let index in musics) {
            if (tuningSelected.includes(musics[index].tuning) && typeSelected.includes(musics[index].type)) {
                musics[index].show = true
                // console.log('show' + musics[index].title)
            } else {
                musics[index].show = false
                // console.log('hide' + musics[index].title)
            }
        }
    }

    return { playerList, musicList, getPlayerList, getMusicList, getFilterMusicList }
})


<template>
    <v-dialog v-model="dialog" activator="parent" max-width="1024" transition="dialog-top-transition">
        <v-card class="pa-6">
            <v-form @submit.prevent class="text-body-1">
                <v-card-title>
                    <span class="text-h4">上传单曲</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="uploadMusicForm.nameCN" label="曲名 (中文)" required variant="solo-inverted"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="uploadMusicForm.nameEN" label="曲名 (英文)" required
                                variant="solo-inverted" hint="每个单词首字母大写"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="uploadMusicForm.nameJP" label="曲名 (日文)" required
                                variant="solo-inverted"></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="4">
                                <v-combobox v-model="uploadMusicForm.player" :items="musicInfoList.players" label="乐手" required
                                variant="solo-inverted"></v-combobox>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-combobox v-model="uploadMusicForm.tuning" :items="musicInfoList.tunings" label="调音" required
                                variant="solo-inverted">
                                </v-combobox>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select v-model="uploadMusicForm.type" :items="musicInfoList.types" label="创作类型" required
                                variant="solo-inverted"></v-select>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-text-field v-model="uploadMusicForm.videoLink" label="视频链接"
                                    hint="格式: https://www.bilibili.com/video/BV1CV411r7r6" required
                                    variant="solo-inverted"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-text-field v-model="uploadMusicForm.uploader" label="上传者" hint="你的昵称" required
                                    variant="solo-inverted"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-checkbox v-model="uploadMusicForm.agree" :rules="[(a) => { return !!a ? true : '请确认信息准确无误' }]"
                        label="我确认信息准确无误" required></v-checkbox>
                    <v-spacer></v-spacer>
                    <v-btn elevation="2" variant="tonal" width="100" @click="dialog = false">
                        取消
                    </v-btn>
                    <v-btn elevation="2" type="submit" variant="tonal" color="teal" width="100">
                        确定
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

defineProps(['players'])

const dialog = ref(false);
const musicInfoList = reactive({
    'players' : ['井草圣二','松井佑贵','岸部真明'],
    'tunings' : ['标准调弦', 'DADGAD', 'DADGBE', 'CGDGAD','DADF#AD'],
    'types' : ['原创', '改编', '翻奏']
})
const uploadMusicForm = reactive({
    nameCN: null,
    nameEN: null,
    nameJP: null,
    player: null,
    tuning: null,
    type: null,
    videoLink: null,
    uploader: null,
    agree: null
})

function uploadMusic() {
}

</script>
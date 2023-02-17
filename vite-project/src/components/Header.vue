<script setup lang='ts'>
//<script setup>
import { ref,reactive } from 'vue'

</script>

<template>

    <div id="main">
        <ul>
            <li><a href="#">曲目</a></li>
            <li><a href="#">演奏家</a></li>
        </ul>
    </div>

    <iframe src="//player.bilibili.com/player.html?aid=723739713&bvid=BV1dS4y1y7vd&cid=887643808&page=12" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

</template>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    ul li{
        display:inline-block;
        width: 200px;
        font-size: 30px;
        margin: 10px;
        background-color: rgb(83, 90, 99);
        border-radius: 100px;
        text-align: center;
    }
    
    a{
        text-decoration: none;
        color: rgb(249, 252, 255);
    }
    #main{
        background-color: rgb(118, 135, 152);
        border-radius: 100px;
    }
</style>
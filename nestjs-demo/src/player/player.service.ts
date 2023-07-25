import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayerService {

  findPlayers() {
    return [
      { "name": "井草圣二", prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', },
      { "name": "松井佑贵", prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', },
      { "name": "岸部真明", prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', },
      { "name": "Tommy Emmanuel", prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', },
    ];
  }

  findMusics(name: string) {
    let musicList
    if (name == '井草圣二') {
      musicList = [
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
    } else if (name == '松井佑贵') {
      musicList = [
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
    return musicList
  }

}

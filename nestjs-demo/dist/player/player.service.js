"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
let PlayerService = exports.PlayerService = class PlayerService {
    findPlayers() {
        return [
            { "name": "井草圣二", prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', },
            { "name": "松井佑贵", prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', },
            { "name": "岸部真明", prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', },
            { "name": "Tommy Emmanuel", prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', },
        ];
    }
    findMusics(name) {
        let musicList;
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
            ];
        }
        else if (name == '松井佑贵') {
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
            ];
        }
        return musicList;
    }
};
exports.PlayerService = PlayerService = __decorate([
    (0, common_1.Injectable)()
], PlayerService);
//# sourceMappingURL=player.service.js.map
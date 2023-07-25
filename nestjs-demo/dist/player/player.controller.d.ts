import { PlayerService } from './player.service';
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    findPlayers(): {
        name: string;
        prependAvatar: string;
    }[];
    findMusics(param: any): any;
}

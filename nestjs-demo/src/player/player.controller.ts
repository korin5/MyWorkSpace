import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  findPlayers() {
    return this.playerService.findPlayers();
  }

  @Get(':name')
  findMusics(@Param() param){
    return this.playerService.findMusics(param.name);
  }
}

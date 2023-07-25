import { Controller, Get, Post, Body, Patch, Param, Delete,Request,Query,Headers,HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query() query){
    console.log(query.name)

    return {
      code:200
    }
  }
}

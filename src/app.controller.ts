import { Controller, Get,Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { PlayerDTO } from './dto/player.dto';
import { RoomDTO } from './dto/room.dto';
import { TeamDTO } from './dto/team.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('players')
  allPlayers(){
   return this.appService.allPlayers()
  }

  @Get('teams')
  allTeams(){
   return this.appService.allTeams()
  }

  
  @Get('rooms')
  allRooms(){
   return this.appService.allRooms()
  }

  
  @Post('addPlayer')
  addPlayer(@Body() data:PlayerDTO){
   return this.appService.addPlayer(data)
  }

  @Post('addTeam')
  addTeam(@Body() data:TeamDTO){
   return this.appService.addTeam(data)
  }

  @Post('addRoom')
  addRoom(@Body() data:RoomDTO){
   return this.appService.addRoom(data)
  }

  @Post('upRoom')
  upRoom(@Body() data:RoomDTO){
   return this.appService.upRoom(data)
  }
  
  
  

  

  
}

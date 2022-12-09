import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PlayerDTO } from './dto/player.dto';
import { RoomDTO } from './dto/room.dto';
import { TeamDTO } from './dto/team.dto';
@Injectable()
export class AppService {

  constructor(
    @Inject('PLAYERS_TEAMS_MS') private readonly players_teams_ms:ClientProxy,
    @Inject('ROOMS_MS') private readonly rooms_ms:ClientProxy,
    ){}

  getHello(): string {
    return 'Hello World!';
  }

  allPlayers(){
    return this.players_teams_ms.send({cmd:'all-players'},[])
  }
  allTeams(){
    return this.players_teams_ms.send({cmd:'all-teams'},[])
  }
  allRooms(){
    return this.rooms_ms.send({cmd:'all-rooms'},[])
  }

  addPlayer(data:PlayerDTO){
    return this.players_teams_ms.send({cmd:'add-player'},data)
  }
  addTeam(data:TeamDTO){
    return this.players_teams_ms.send({cmd:'add-team'},data)
  }
  addRoom(data:RoomDTO){
    return this.rooms_ms.send({cmd:'add-room'},data)
  }
  upRoom(data:RoomDTO){
    return this.rooms_ms.send({cmd:'up-room'},data)
  }


}

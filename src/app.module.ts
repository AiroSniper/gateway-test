import { Module } from '@nestjs/common';
import { ClientsModule , Transport} from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name:'PLAYERS_TEAMS_MS',
        transport:Transport.TCP,
        options: {
          host: 'localhost',
          port: 6370,
        }
      },
      {
        name:'ROOMS_MS',
        transport:Transport.TCP,
        options: {
          host: 'localhost',
          port: 6371,
        }
      },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

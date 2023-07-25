import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoController } from './demo/demo.controller';
import { DemoModule } from './demo/demo.module';
import { UserModule } from './user/user.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [DemoModule, UserModule, PlayerModule],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}

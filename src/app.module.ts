import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Top75Module } from './top75-leet-code/top75.module';

@Module({
  imports: [Top75Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

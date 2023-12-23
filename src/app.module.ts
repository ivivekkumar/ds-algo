import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwoSumModule } from './top75-leet-code/two-sum/two-sum.module';

@Module({
  imports: [TwoSumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

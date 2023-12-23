import { Module } from '@nestjs/common';
import { TwoSumService } from './two-sum.service';
import { TwoSumController } from './two-sum.controller';

@Module({
  providers: [TwoSumService],
  controllers: [TwoSumController]
})
export class TwoSumModule {}

import { Module } from '@nestjs/common';
import { Top75Controller } from './top75.controller';
import { Top75 } from './top75.service';
import { TwoSumModule } from './two-sum/two-sum.module';
import { BuySellStocksModule } from './buy-sell-stocks/buy-sell-stocks.module';


@Module({
  imports: [TwoSumModule, BuySellStocksModule],
  controllers: [Top75Controller],
  providers: [Top75],
})
export class Top75Module {}

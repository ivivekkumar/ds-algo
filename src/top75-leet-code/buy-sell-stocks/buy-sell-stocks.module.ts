import { Module } from '@nestjs/common';
import { BuySellStocksService } from './buy-sell-stocks.service';
import { BuySellStocksController } from './buy-sell-stocks.controller';

@Module({
  providers: [BuySellStocksService],
  controllers: [BuySellStocksController]
})
export class BuySellStocksModule {}

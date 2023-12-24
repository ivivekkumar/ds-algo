import { Controller, Get } from '@nestjs/common';
import { BuySellStocksService } from './buy-sell-stocks.service';

@Controller('top75/buy-sell-stocks')
export class BuySellStocksController {
    constructor(private readonly buySellStocksService: BuySellStocksService) { }
    // Best Time to Buy and Sell Stock
    // You are given an array prices where prices[i] is the price of a given
    // stock on the ith day.

    // You want to maximize your profit by choosing a single day to buy
    // one stock and choosing a different day in the future to sell that
    // stock.

    // Return the maximum profit you can achieve from this transaction.
    // If you cannot achieve any profit, return 0.
    @Get()
    buySellStocks(): number {
        // const prices = [1, 2, 3, 4, 5];
        // // Expected output: 4 (Buy on day 1 (price = 1) and sell on day 5 (price = 5))

        // const prices = Array.from({ length: 1000000 }, (_, index) => index + 1);
        // // Expected output: 999999 (Buy on day 0 (price = 1) and sell on day 999999 (price = 1000000))

        const prices = [7, 6, 4, 3, 1];
        // Expected output: 0 (No profitable transaction is possible)

        return this.buySellStocksService.buySellStocks(prices);
    }

}

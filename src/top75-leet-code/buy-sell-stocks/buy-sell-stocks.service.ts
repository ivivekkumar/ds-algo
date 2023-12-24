import { Injectable } from '@nestjs/common';

@Injectable()
export class BuySellStocksService {
    buySellStocks(prices: number[]): number {
        if (prices.length <= 1) {
            return 0
        }

        let maxProfit = 0,
            minPrice = prices[0];

        for (let i = 1; i < prices.length; i++) {
            minPrice = Math.min(minPrice, prices[i])

            const potentialProfit = prices[i] - minPrice;
            maxProfit = Math.max(potentialProfit, maxProfit);
        }
        return maxProfit;
    }
}

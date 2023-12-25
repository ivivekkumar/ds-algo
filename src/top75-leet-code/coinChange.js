// Coin Change
// You are given an integer array coins representing coins of different
// denominations and an integer amount representing a total amount
// of money.

// Return the fewest number of coins that you need to make up that
// amount. If that amount of money cannot be made up by any
// combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of
// coin.

const coinChange = (coinsArr, target) => {
    let dp = new Array(target + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coinsArr) {
        for (let i = coin; i <= target; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    console.log('dp', dp);
    return dp[target] === Infinity ? -1 : dp[target];
}

const coins = [1, 2, 5];
const target = 11;

console.log(coinChange(coins, target));

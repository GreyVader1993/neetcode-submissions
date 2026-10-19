class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = {}
        const fewest = (amount) => {
            if (amount === 0){
                return 0;
            }

            if(dp[amount] !== undefined){
                return dp[amount]
            }

            let best = Infinity
            let returnVal = 0

            for(let coin of coins){
                if(amount - coin >= 0){
                    returnVal = 1 + fewest(amount - coin)
                    best = Math.min(best, returnVal)
                }
            }

            dp[amount] = best
            return best
        }
        const coinsMin = fewest(amount)
        return coinsMin === Infinity ? -1 : coinsMin;
    }
}

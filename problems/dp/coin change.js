/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    if (amount <= 0)
        return 0;

    const dp = new Array(amount + 1);
    dp.fill(Number.MAX_VALUE);
    dp[0] = 0;

    for(let i = 1;i<=amount;++i){
        for (const coin of coins){
            if (coin <= i && dp[i-coin]!=Number.MAX_VALUE){
                dp[i] = Math.min((dp[i-coin] + 1), dp[i]);
            }
        }
    }
    if(dp[amount]!=Number.MAX_VALUE){
        return dp[amount];
    }
    return -1;
};
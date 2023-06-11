var maxProfit = function(prices) {
    let buyPrice = Number.MAX_VALUE;
    let profit = 0;

    prices.forEach((price) => {
        if (buyPrice > price) {
            buyPrice = price;
        } 
         else
             {profit = Math.max(profit,price - buyPrice);}
    });
        
    return profit;
};
class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j = 0;
        let profit = 0;

        while (j < prices.length) {
            profit = Math.max(profit, prices[j] - prices[i]);
            if (prices[j] < prices[i]) i = j;
            j++;
        }
        return profit;
    }
}

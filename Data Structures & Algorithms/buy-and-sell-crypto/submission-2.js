class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let res = 0;

        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                const profit = prices[right] - prices[left];
                res = Math.max(profit, res);
            } else {
                left = right
            }
            right++;
        }
        return res;
    }
}

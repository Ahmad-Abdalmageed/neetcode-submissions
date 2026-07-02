class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        // O(n^2)
        let res = 0;

        // for(let i = 0; i < prices.length; i++) {
        //     for(let j = i + 1; j < prices.length; j++) {
        //         res = Math.max(res, prices[j] - prices[i]);
        //     }
        // }
        // return res;

        let i = 0;
        let j = i + 1;

        while(j < prices.length) {
            while(i < j && prices[i] > prices[j]) i++;
            res = Math.max(res, prices[j] - prices[i]);
            j++;
        }
        return res;
    }
}
 
class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let len = temperatures.length;
        let res = [];
        for(let i = 0; i < len; i++) {
            let days = 0;
            for(let j = i + 1; j < len; j++) {
                if(temperatures[j] > temperatures[i]) {
                    days = j - i;
                    break;
                }
            }
            res.push(days);
        }
        return res;
    }
}

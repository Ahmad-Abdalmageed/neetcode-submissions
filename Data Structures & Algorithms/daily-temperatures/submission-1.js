class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // O(n^2)
        // let len = temperatures.length;
        // let res = [];
        // for(let i = 0; i < len; i++) {
        //     let days = 0;
        //     for(let j = i + 1; j < len; j++) {
        //         if(temperatures[j] > temperatures[i]) {
        //             days = j - i;
        //             break;
        //         }
        //     }
        //     res.push(days);
        // }
        // return res;
        let stack = [];
        let res = new Array(temperatures.length).fill(0);

        for (let i = temperatures.length - 1; i >= 0; i--) {
            while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
                stack.pop();
            }
            if (stack.length) {
                res[i] = stack[stack.length - 1] - i;
            }
            stack.push(i);
        }
        return res;
    }
}

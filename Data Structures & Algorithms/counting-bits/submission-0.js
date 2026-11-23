class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = [0];
        let number = 1;

        for(let number = 1; number < n + 1; number++) {
            let currentNumber = number;
            let bits = 0
            while(currentNumber != 0) {
                currentNumber &= currentNumber - 1;
                bits++;
            }
            res.push(bits);
        }

        return res;
    }
}

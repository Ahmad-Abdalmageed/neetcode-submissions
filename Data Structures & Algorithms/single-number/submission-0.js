class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let res = 0;
        for(let num of nums) {
            res ^= num;
        }
        return res;
    }
}

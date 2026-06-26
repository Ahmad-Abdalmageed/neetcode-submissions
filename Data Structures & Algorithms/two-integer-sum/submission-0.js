class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const sumTable = {};
        for (let idx = 0; idx < nums.length; idx++) {
            const currentNumber = nums[idx];
            const complementNumber = target - currentNumber;
            if (sumTable[complementNumber] !== undefined) {
                return [idx, sumTable[complementNumber]];
            }
            sumTable[currentNumber] = idx;
        }
        return [-1, -1];
    }
}

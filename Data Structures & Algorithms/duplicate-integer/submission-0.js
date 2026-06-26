class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {};
        for (const num of nums) {
            if (hash[num] !== undefined) {
                return true;
            }
            hash[num] = hash[num] + 1 || 0;
        }
        return false;
    }

}

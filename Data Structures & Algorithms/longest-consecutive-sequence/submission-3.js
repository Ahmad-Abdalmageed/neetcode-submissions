class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0;
        let res = 1;
        let i = 0;
        let count = 1;
        nums = nums.sort((a,b) => a - b);
    
        while (i < nums.length) {
            while (nums[i] === nums[i + 1]) i++;
            if (nums[i] + 1 === nums[i + 1]) {
                count++;
                res = Math.max(res, count);
            } else {
                count = 1;
            }
            i++;
        }
        return res;
    }
}

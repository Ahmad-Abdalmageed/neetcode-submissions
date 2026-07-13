class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];
        let l = 0;
        let r = k - 1;

        while (r < nums.length) {
            let max = -Infinity;
            for (let i = l; i <= r; i++) {
                max = Math.max(nums[i], max);
            }
            res.push(max);
            r++;
            l++;
        }
        return res;
    }
}

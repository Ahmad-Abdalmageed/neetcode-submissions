class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let count = {};
        let res = [];
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (let i = 0; i < nums.length; i++) {
            count[nums[i]] -= 1;
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            for (let j = i + 1; j < nums.length; j++) {
                count[nums[j]] -= 1;
                if (j > i + 1 && nums[j] == nums[j - 1]) continue;

                let comp = -(nums[i] + nums[j]);
                if (count[comp] > 0) {
                    res.push([nums[i], nums[j], comp]);
                }
            }
            for (let j = i + 1; j < nums.length; j++) {
                count[nums[j]] += 1;
            }
        }
        return res;
    }
}

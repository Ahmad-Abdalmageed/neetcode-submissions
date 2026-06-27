class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let res = [];

        for (let i = 0; i < nums.length; i++) {
            let l = i + 1;
            let r = nums.length - 1;
            if(i > 0 && nums[i] === nums[i -1]) continue

            while (l < r) {
                let sum = nums[i] + nums[r] + nums[l];
                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    res.push([nums[i], nums[r], nums[l]]);
                    r--;
                    l++;

                    while (l < r && nums[l] === nums[l - 1]) l++;
                }
            }
        }
        return res;
    }
}

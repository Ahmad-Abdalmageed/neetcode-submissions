class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];

        function backtrack(path, sum, start) {
            if (sum > target) return;
            if (sum === target) {
                ans.push([...path]);
                return;
            }

            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);

                backtrack(path, sum + nums[i], i);

                path.pop();
                
            }
        }

        backtrack([], 0, 0);
        return ans;
    }
}

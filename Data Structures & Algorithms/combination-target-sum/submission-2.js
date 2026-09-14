class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];
        nums.sort((a, b) => a - b);

        function backtrack(path, sum, start) {
            if (sum === target) {
                ans.push([...path]);
                return;
            }

            for (let i = start; i < nums.length; i++) {
                if (sum + nums[i] > target) break;
                path.push(nums[i]);
                backtrack(path, sum + nums[i], i);
                path.pop();
            }
        }

        backtrack([], 0, 0);
        return ans;
    }
}

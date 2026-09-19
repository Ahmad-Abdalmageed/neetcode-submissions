class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let ans = [];
        nums.sort((a, b) => a - b);

        function backtrack(path, idx) {
            if (idx === nums.length) {
                ans.push([...path]);

                return;
            }

            path.push(nums[idx]);
            backtrack(path, idx + 1);
            path.pop();
            let j = idx;
            while (j < nums.length && nums[j] == nums[j + 1]) {
                j += 1;
            }
            backtrack(path, j + 1);
        }

        backtrack([], 0);
        return Array.from(ans);
    }
}

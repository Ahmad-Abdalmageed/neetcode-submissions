class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let ans = [];

        function dfs(path, index) {
            if(index === nums.length) {
                ans.push([...path])
                return;
            }
            path.push(nums[index]);
            dfs(path, index+1);
            path.pop();
            dfs(path, index+1);
        }

        dfs([], 0);
        return ans;
    }
}

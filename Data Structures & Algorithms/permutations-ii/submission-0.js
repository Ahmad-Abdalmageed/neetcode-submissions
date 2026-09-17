class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let ans = [];
        nums.sort((a, b) => a - b);

        function backtrack(path, picks) {
            if(path.length == nums.length) {
                ans.push([...path]);
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                if(!picks[i]) {
                    if(i > 0 && nums[i] === nums[i - 1] && picks[i - 1]) continue;
                    path.push(nums[i]);
                    picks[i] = true;
                    backtrack(path, picks);
                    path.pop();
                    picks[i] = false;
                }
            }
        }

        backtrack([], new Array(nums.length).fill(false));
        return ans;
    }
}

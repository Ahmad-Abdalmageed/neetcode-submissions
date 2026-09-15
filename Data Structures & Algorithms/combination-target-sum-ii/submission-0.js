class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let ans = [];
        candidates.sort((a, b) => a - b);

        function backtrack(path, sum, start) {
            if (sum > target) return;
            if (sum === target) {
                ans.push([...path]);
                return;
            }

            for (let i = start; i < candidates.length; i++) {
                if(i > start && candidates[i] == candidates[i - 1]) continue;
                path.push(candidates[i]);
                backtrack(path, sum + candidates[i], i + 1);
                path.pop();
            }
        }

        backtrack([], 0, 0);
        return ans;
    }
}

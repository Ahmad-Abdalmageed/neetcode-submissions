class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let ans = [];

        function backtrack(path, idx) {
            
            if(path.length == k) {
                ans.push([...path]);
                return;
            }

            for(let i = idx; i <= n; i++) {
                path.push(i);
                backtrack(path, i + 1);
                path.pop();
            }
        }

        backtrack([], 1);
        return ans;
    }

}

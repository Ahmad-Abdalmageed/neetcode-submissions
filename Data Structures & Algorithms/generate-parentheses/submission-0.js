class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let ans = [];

        function backtrack(path, open, closed) {
            if (path.length == 2 * n) {
                ans.push(path);
                return;
            }

            if (open < n) {
                backtrack(path + '(', open + 1, closed);
            }
            if (closed < open) {
                backtrack(path + ')', open, closed + 1);
            }
        }

        backtrack("", 0, 0);
        return ans;
    }
}

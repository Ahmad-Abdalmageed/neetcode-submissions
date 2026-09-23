class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let ans = [];

        function isPalindrome(left, right) {
            while (left <= right) {
                if (s[left] !== s[right]) return false;
                left++;
                right--;
            }
            return true;
        }

        function backtrack(path, start, idx) {
            if (idx == s.length) {
                if (start == s.length) {
                    ans.push([...path]);
                }
                return;
            }

            if (isPalindrome(start, idx)) {
                path.push(s.slice(start, idx + 1));
                backtrack(path, idx + 1, idx + 1);
                path.pop();
            }
            backtrack(path, start, idx + 1);
        }

        backtrack([], 0, 0);
        return ans;
    }
}

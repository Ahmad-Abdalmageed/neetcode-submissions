class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;
        let set = new Set();

        let i = 0;
        let j = 0;
        while(j < s.length) {
            while(i <= j && set.has(s[j])) {
                set.delete(s[i]);
                i++;
            }
            set.add(s[j]);
            max = Math.max(max, j - i + 1);
            j++;
        }
        return max;
    }
}

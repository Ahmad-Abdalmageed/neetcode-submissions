class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0
        let left = 0;
        let right = 0;
        const charSet = new Set();

        while (right < s.length) {
            while (charSet.has(s[right])) {
                charSet.delete(s[left]);
                left++;
            }
            charSet.add(s[right]);
            res = Math.max(res, right - left + 1)
            right++;
        }
        return res;
    }
}

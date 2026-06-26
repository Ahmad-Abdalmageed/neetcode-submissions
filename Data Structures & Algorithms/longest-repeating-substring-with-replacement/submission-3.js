class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let left = 0;
        let right = 0;
        const charMap = new Map();
        let maxF = 0;

        while (right < s.length) {
            charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);
            maxF = Math.max(maxF, charMap.get(s[right]));
            while ((right - left + 1) - maxF > k) {
                charMap.set(s[left], charMap.get(s[left]) - 1);
                left++;
            }
            res = Math.max(res, (right - left + 1));
            right++;
        }
        return res;
    }
}

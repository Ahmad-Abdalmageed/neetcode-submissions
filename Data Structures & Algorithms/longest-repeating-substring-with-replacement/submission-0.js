class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        const charCountPerWindow = {};
        let i = 0;
        let j = 0;

        while (j < s.length) {
            const windowLen = j - i + 1;
            charCountPerWindow[s[j]] = (charCountPerWindow[s[j]] || 0) + 1;
            let decreaseWindow = windowLen - (Math.max(...Object.values(charCountPerWindow))) > k;

            if (decreaseWindow) {
                charCountPerWindow[s[i]] = (charCountPerWindow[s[i]] || 0) - 1;
                i++;
            }
            res = Math.max(j - i + 1, res);
            j++;
        }
        return res;

    }
}

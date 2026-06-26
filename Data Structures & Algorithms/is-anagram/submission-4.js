class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        let hash = {};

        for (let i = 0; i < s.length; i++) {
            hash[s[i]] = hash[s[i]] + 1 || 1;
        }

        for (let i = 0; i < t.length; i++) {
            hash[t[i]] = hash[t[i]] - 1;
            if (hash[t[i]] < 0) return false;
        }

        for (let i in hash) {
            if (hash[i] > 0) return false;
        }
        return true;
    }
}

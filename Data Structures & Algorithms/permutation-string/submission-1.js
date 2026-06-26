class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Map = new Map();
        for (let s of s1) {
            s1Map.set(s, (s1Map.get(s) || 0) + 1);
        }
        for (let i = 0; i < s2.length; i++) {
            const charMap = new Map();
            let sameCharCount = 0
            for (let j = i; j < s2.length; j++) {
                charMap.set(s2[j], (charMap.get(s2[j]) || 0) + 1);

                if ((s1Map.get(s2[j]) || 0) < charMap.get(s2[j])) break; // Exit loop if one of the characters exceeds the one in the first map
                if ((charMap.get(s2[j]) || 0) === s1Map.get(s2[j])) {
                    sameCharCount++;
                }
                if (sameCharCount == s1Map.size) return true;
            }
        }
        return false
    }
}

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
        for (let j = i; j < i + s1.length; j++) {
            charMap.set(s2[j], (charMap.get(s2[j]) || 0) + 1);
        }
        let equalCount = 0;
        for (const [key, value] of charMap) {
            if (value !== s1Map.get(key)) break;
            equalCount++;
        }
        if (equalCount === s1Map.size) return true;

    }
    return false
    }
}

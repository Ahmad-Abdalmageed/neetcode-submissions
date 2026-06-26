class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) matches++;
        }

        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) return true;

            let rIndex = s2.charCodeAt(right) - 97;
            s2Count[rIndex]++;
            if (s1Count[rIndex] === s2Count[rIndex]) {
                matches++;
            } else if (s1Count[rIndex] + 1 == s2Count[rIndex]) {
                matches--;
            }

            let lIndex = s2.charCodeAt(left) - 97;
            s2Count[lIndex]--;
            if (s1Count[lIndex] === s2Count[lIndex]) {
                matches++;
            } else if (s1Count[lIndex] - 1 == s2Count[lIndex]) {
                matches--;
            }
            left++;
        }
        return matches === 26
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(string1, string2) {
        if (string1.length !== string2.length) {
            return false;
        }
        const hash1 = {};
        const hash2 = {};
        for(let i = 0; i < string1.length; i++){
            hash1[string1[i]] = 1 + (hash1[string1[i]] || 0);
            hash2[string2[i]] = 1 + (hash2[string2[i]] || 0);
        }
        for(const key in hash1){
            if(hash1[key] !== hash2[key]) return false;
        }
        return true;
    }
}

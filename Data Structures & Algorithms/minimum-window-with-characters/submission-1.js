class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    isHashEqual(h1, h2) {
        for (let key in h1) {
            if (h2[key] < h1[key]) return false;
            if(!h2[key]) return false;
        }
        return true;
    }
    minWindow(s, t) {
        let minLength = Number.MAX_SAFE_INTEGER;
        let res = "";
        let tHash = {};

        for (let c of t) {
            tHash[c] = (tHash[c] || 0) + 1;
        }

        for (let i = 0; i < s.length; i++) {
            let sHash = {};
            for (let j = i; j < s.length; j++) {
                sHash[s[j]] = (sHash[s[j]] || 0) + 1;
                let currentLength = j - i + 1;
                if (this.isHashEqual(tHash, sHash) && currentLength < minLength) {
                    res = s.substring(i, j + 1);
                    console.log(res);
                    minLength = currentLength;
                }
            }
        }

        return res;
    }
}

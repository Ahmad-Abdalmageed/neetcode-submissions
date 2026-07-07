class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    sameFrequencies(f1, f2) {
        for (let p = 0; p < 26; p++) {
            if (f1[p] !== f2[p]) return false;
        }
        return true;
    }
    checkInclusion(s1, s2) {
        // if(s1.length > s2.length) return false;
        // let f1 = new Array(26).fill(0);
        // for (let s of s1) {
        //     let pos = s.charCodeAt(0) - "a".charCodeAt(0);
        //     f1[pos] = (f1[pos] || 0) + 1;
        // }
        // f1 = f1.join("");

        // for (let i = 0; i <= s2.length - s1.length; i++) {
        //     let f2 = new Array(26).fill(0);
        //     for (let j = i; j < i + s1.length; j++) {
        //         let pos = s2[j].charCodeAt(0) - "a".charCodeAt(0);
        //         f2[pos] = (f2[pos] || 0) + 1;
        //     }
        //     f2 = f2.join("");

        //     if (f1 === f2) return true;
        // }

        // return false;

        // if (s1.length > s2.length) return false;
        // let f1 = new Array(26).fill(0);
        // for (let s of s1) {
        //     let pos = s.charCodeAt(0) - "a".charCodeAt(0);
        //     f1[pos] = (f1[pos] || 0) + 1;
        // }

        // let i = 0;
        // let j = 0;
        // let f2 = new Array(26).fill(0);

        // while (j < s2.length) {
        //     let pos = s2[j].charCodeAt(0) - 97;
        //     f2[pos] = (f2[pos] || 0) + 1;

        //     if (j - i + 1 === s1.length) {
        //         if(this.sameFrequencies(f1, f2)) return true;
        //         let posi = s2[i].charCodeAt(0) - 97;
        //         f2[posi] = f2[posi] - 1;
        //         i++;
        //     }
        //     j++;
        // }
        // return false;

        if (s1.length > s2.length) return false;

        let f1 = new Array(26).fill(0);
        let f2 = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            f1[s1.charCodeAt(i) - 97] += 1;
            f2[s2.charCodeAt(i) - 97] += 1;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (f1[i] === f2[i]) matches++;
        }

        let i = 0;
        let j = s1.length;

        while (j < s2.length) {
            if (matches == 26) return true;

            let index = s2.charCodeAt(j) - 97;
            f2[index] += 1;
            if (f2[index] === f1[index]) matches++;
            else if (f2[index] === f1[index] + 1) matches--;

            index = s2.charCodeAt(i) - 97;
            f2[index] -= 1;
            if (f2[index] === f1[index]) matches++;
            else if (f2[index] === f1[index] - 1) matches--;

            j++;
            i++;
        }
        return matches === 26;
    }
}

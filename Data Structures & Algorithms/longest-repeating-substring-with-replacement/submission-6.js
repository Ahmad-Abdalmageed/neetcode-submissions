class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // let max = 0;
        
        // for(let i = 0; i < s.length; i++) {
        //     let hash = {};
        //     let currentMax = 0;
        //     for(let j = i; j < s.length; j++) {
        //         let currentLength = j - i + 1
        //         hash[s[j]] = (hash[s[j]] || 0) + 1;
        //         currentMax = Math.max(currentMax, hash[s[j]]);

        //         if((currentLength - currentMax) === k) {
        //             max = Math.max(max, currentLength)
        //         } 
        //     }
        // }
        // return max;

        let max = 0;
        let count = {};
        let currentMax = 0;
        let i = 0;
        let j = 0;

        while(j < s.length) {
            let currentLength = j - i + 1;
            count[s[j]] = (count[s[j]] || 0) + 1;
            currentMax = Math.max(currentMax, count[s[j]]);
            while(i < j && currentLength - currentMax > k) {
                count[s[i]] = count[s[i]] - 1;
                i++;
                currentLength = j - i + 1;
            }
            if(currentLength - currentMax <= k) {
                max = Math.max(max, currentLength);
            }
            j++;
        }
        return max;
    }
}

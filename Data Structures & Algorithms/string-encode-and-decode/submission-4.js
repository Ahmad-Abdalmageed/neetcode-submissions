class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for (const str of strs) {
            res += `${str.length}+${str}`;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        let j = 0;

        while(i < str.length){
            while(str[j] !== '+'){
                j++;
            }
            let length = parseInt(str.substring(i, j), 10); // number might be multiple digits
            i = j + 1;
            j = i + length;
            res.push(str.substring(i, j));
            i  = j;
        }
        return res;
    }
}

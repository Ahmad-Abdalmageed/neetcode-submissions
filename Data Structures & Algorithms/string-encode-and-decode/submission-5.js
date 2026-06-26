class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';
        for(const str of strs){
            encodedString += str.length + '^' + str;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] !== '^'){
                j++;
            }
            let length = +str.substring(i, j);
            i = j + 1;
            j = i + length;
            res.push(str.substring(i, j));
            i = j
        }
        return res;
    }
}

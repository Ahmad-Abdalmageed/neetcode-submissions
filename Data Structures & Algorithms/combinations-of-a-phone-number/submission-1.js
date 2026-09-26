class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits.length) return [];
        let map = {
            '2': 'abc',
            '3': 'def',
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        let ans = [];

        function backtrack(path, i){
            if(path.length == digits.length) {
                ans.push(path);
                return;
            }

            let chrs = map[digits[i]];

            for(let j = 0; j < chrs.length; j++) {
                backtrack(path + chrs[j], i+1);
            }
        }

        backtrack("", 0);
        return ans;
    }
}

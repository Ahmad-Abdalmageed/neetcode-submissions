class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();
        console.log(str);
        let reverted = str.split("").reverse().join("");
        console.log(reverted);
        return str === reverted
    }
}

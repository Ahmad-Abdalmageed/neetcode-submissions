class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(c) {
        return (
            (c.toLowerCase().charCodeAt(0) >= "a".charCodeAt(0) &&
                c.toLowerCase().charCodeAt(0) <= "z".charCodeAt(0)) ||
            (c.charCodeAt(0) >= "0".charCodeAt(0) && c.charCodeAt(0) <= "9".charCodeAt(0))
        );
    }
    isPalindrome(s) {
        // let str = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();
        // let reverted = str.split("").reverse().join("");
        // return str === reverted
        let str = "";
        for (let c of s) {
            if (this.isAlphaNumeric(c)) str += c.toLowerCase();
        }
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }

        return reversed === str;
    }
}

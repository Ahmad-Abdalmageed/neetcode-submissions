class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // REVERSE STRING
        function isAlphanumeric(char) {
            return (char >= 'a' && char <= 'z')
                || (char >= 'A' && char <= 'Z')
                || (char >= '0' && char <= '9')
        }
        let alphanumericString = '';
        for (let c of s) {
            if (isAlphanumeric(c)) {
                alphanumericString += c.toLowerCase()
            }
        }
        const reversed = alphanumericString.split('').reverse().join('');
        return reversed === alphanumericString;
    }
}

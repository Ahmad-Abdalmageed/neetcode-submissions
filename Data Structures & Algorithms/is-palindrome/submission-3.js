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
        // let alphanumericString = '';
        // for (let c of s) {
        //     if (isAlphanumeric(c)) {
        //         alphanumericString += c.toLowerCase()
        //     }
        // }
        // const reversed = alphanumericString.split('').reverse().join('');
        // return reversed === alphanumericString;
            let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
        left++;
        right--;
    }
    return true;
    }
}

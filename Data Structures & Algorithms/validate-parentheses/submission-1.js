class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const bracketMap = {
            '}': '{',
            ']': '[',
            ')': '('
        }
        let bStack = [];
        for (let b of s) {
            if (bracketMap[b]) {
                if (bStack.length > 0 && bStack[bStack.length - 1] === bracketMap[b]) {
                    bStack.pop()
                } else {
                    return false
                }
            } else {
                bStack.push(b)
            }
        }
        return bStack.length === 0
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let order = [];
        let brackets = {
            "[": "]",
            "(": ")",
            "{": "}",
        };

        for (let bracket of s) {
            if (brackets[bracket] !== undefined) {
                order.push(brackets[bracket]);
                continue;
            }

            if (bracket === order[order.length - 1]) order.pop();
            else {
                return false;
            }
        }
        return order.length === 0;
    }
}

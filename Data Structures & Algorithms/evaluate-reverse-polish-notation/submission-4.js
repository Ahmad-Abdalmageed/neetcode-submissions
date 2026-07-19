class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for (let token of tokens) {
            if (token !== "+" && token !== "-" && token !== "/" && token !== "*") {
                stack.push(Number(token));
                continue;
            }

            let op2 = stack.pop();
            let op1 = stack.pop();

            if (token === "*") {
                stack.push(op1 * op2);
            }
            if (token === "/") {
                stack.push((op1 / op2) | 0);
            }
            if (token === "-") {
                stack.push(op1 - op2);
            }
            if (token === "+") {
                stack.push(op1 + op2);
            }
        }
        return stack[0]
    }
}

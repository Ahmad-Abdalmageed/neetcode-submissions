class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let opStack = [];

        for(let operation of operations){
            switch(operation){
                case 'D':
                    opStack.push(2 * opStack[opStack.length - 1]);
                    break;
                case 'C':
                    opStack.pop();
                    break;
                case '+':
                    let res = opStack[opStack.length - 1] + opStack[opStack.length - 2];
                    opStack.push(res);
                    break;
                default:
                    opStack.push(Number(operation));
                    break;
            }
        }
        let sum = 0;
        for(let score of opStack){
            sum += score;
        }
        return sum;
    }
}

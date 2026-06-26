class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let operations = [];
        for(let token of tokens){
            if(token === '+' || token === '-' || token === '/' || token === '*'){
                let op2 = operations.pop();
                let op1 = operations.pop();
                switch(token){
                    case '+':
                        operations.push(Number(op1) + Number(op2));
                        break;
                    case '-':
                        operations.push(Number(op1) - Number(op2));
                        break;
                    case '/':
                        operations.push(Math.trunc(Number(op1) / Number(op2)));
                        break;
                    case '*':
                        operations.push(Number(op1) * Number(op2));
                        break;
                    default:
                        break;
                }
            }else{
                operations.push(token);
            }
        }
        return operations.pop();
    }
}

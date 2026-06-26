class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // for (let i of board) {
        //     let check = new Set();
        //     for (let digit of i) {
        //         if (digit === ".") continue;
        //         if (check.has(digit)) return false;
        //         check.add(digit);
        //     }
        // }

        // for (let j of board) {
        //     let check = new Set();
        //     for (let digit of j) {
        //         if (digit === ".") continue;
        //         if (check.has(digit)) return false;
        //         check.add(digit);
        //     }
        // }

        for (let row = 0; row < 9; row++) {
            let seen = new Set();
            for (let i = 0; i < 9; i++) {
                if (board[row][i] === '.') continue;
                if (seen.has(board[row][i])) return false;
                seen.add(board[row][i]);
            }
        }

        for (let col = 0; col < 9; col++) {
            let seen = new Set();
            for (let i = 0; i < 9; i++) {
                if (board[i][col] === '.') continue;
                if (seen.has(board[i][col])) return false;
                seen.add(board[i][col]);
            }
        }

        for (let square = 0; square < 9; square++) {
            let check = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square/3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if(board[row][col] === '.') continue;
                    if(check.has(board[row][col])) return false;
                    check.add(board[row][col]);
                }
            }
        }
        return true;
    }
}

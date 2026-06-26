class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            let seen = new Set();
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") continue;
                if (seen.has(board[i][j])) return false;
                seen.add(board[i][j]);
            }
        }
        for (let i = 0; i < 9; i++) {
            let seen = new Set();
            for (let j = 0; j < 9; j++) {
                if (board[j][i] === ".") continue;
                if (seen.has(board[j][i])) return false;
                seen.add(board[j][i]);
            }
        }

        for (let box = 0; box < 9; box++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let bRow = Math.floor(box / 3) * 3 + i;
                    let bCol = (box % 3) * 3 + j;
                    if(board[bRow][bCol] === '.') continue;
                    if(seen.has(board[bRow][bCol])) return false;
                    seen.add(board[bRow][bCol])
                }
            }
        }
        return true;
    }
}

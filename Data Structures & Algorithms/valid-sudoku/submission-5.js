class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // 3 Pass solution
        //     for (let i = 0; i < 9; i++) {
        //         let seen = new Set();
        //         for (let j = 0; j < 9; j++) {
        //             if (board[i][j] === ".") continue;
        //             if (seen.has(board[i][j])) return false;
        //             seen.add(board[i][j]);
        //         }
        //     }
        //     for (let i = 0; i < 9; i++) {
        //         let seen = new Set();
        //         for (let j = 0; j < 9; j++) {
        //             if (board[j][i] === ".") continue;
        //             if (seen.has(board[j][i])) return false;
        //             seen.add(board[j][i]);
        //         }
        //     }

        //     for (let box = 0; box < 9; box++) {
        //         let seen = new Set();
        //         for (let i = 0; i < 3; i++) {
        //             for (let j = 0; j < 3; j++) {
        //                 let bRow = Math.floor(box / 3) * 3 + i;
        //                 let bCol = (box % 3) * 3 + j;
        //                 if(board[bRow][bCol] === '.') continue;
        //                 if(seen.has(board[bRow][bCol])) return false;
        //                 seen.add(board[bRow][bCol])
        //             }
        //         }
        //     }
        //     return true;
        // }

        let seen = new Set();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let pos = board[i][j];
                if (pos === ".") continue;
                let box = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (seen.has(`r${i}${pos}`) || seen.has(`c${j}${pos}`) || seen.has(`b${box}${pos}`))
                    return false;
                seen.add(`r${i}${pos}`);
                seen.add(`c${j}${pos}`);
                seen.add(`b${box}${pos}`);
            }
        }
        return true;
    }
}

class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let ans = [];
        let board = [];

        for (let i = 0; i < n; i++) {
            let line = [];
            for (let j = 0; j < n; j++) {
                line.push(".");
            }
            board.push(line);
        }
        console.log(board);

        function isValidBoard(board, r, c) {
            for (let i = 0; i < n; i++) {
                if (board[r][i] == "Q") return false;
                if (board[i][c] == "Q") return false;
                if (i > 0) {
                    if (r - i >= 0 && c - i >= 0 && board[r - i][c - i] == "Q") return false;
                    if (r - i >= 0 && c + i < n && board[r - i][c + i] == "Q") return false;
                    if (r + i < n && c + i < n && board[r + i][c + i] == "Q") return false;
                    if (r + i < n && c - i >= 0 && board[r + i][c - i] == "Q") return false;
                }
            }
            return true;
        }
        function backtrack(board, r) {
            if (r === n) {
                ans.push(board.map((row) => row.join("")));
                return;
            }

            for (let i = 0; i < n; i++) {
                if (!isValidBoard(board, r, i)) continue;
                board[r][i] = "Q";
                backtrack(board, r + 1);
                board[r][i] = ".";
            }
        }

        backtrack(board, 0);

        return ans;
    }
}

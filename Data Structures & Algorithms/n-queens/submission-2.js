class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let ans = [];
        let board = Array.from({ length: n }, () => Array.from({ length: n }).fill("."));
        let col = new Set();
        let posDiag = new Set();
        let negDiag = new Set();

        function isValidBoard(r, c) {
            for (let i = 0; i < n; i++) {
                // if (board[r][i] == "Q") return false; // no need to check the row since we already back track on it.
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
        function backtrack(r) {
            if (r === n) {
                ans.push(board.map((row) => row.join("")));
                return;
            }

            for (let c = 0; c < n; c++) {
                // if (!isValidBoard(board, r, i)) continue;
                if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue;

                board[r][c] = "Q";
                col.add(c);
                posDiag.add(r + c);
                negDiag.add(r - c);

                backtrack(r + 1);

                board[r][c] = ".";
                col.delete(c);
                posDiag.delete(r + c);
                negDiag.delete(r - c);
            }
        }

        backtrack(0);

        return ans;
    }
}

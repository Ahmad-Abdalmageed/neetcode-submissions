class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;
        let dirs = [
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 0],
        ];

        function dfs(r, c) {
            if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] == "X" || board[r][c] == "#")
                return;
            board[r][c] = "#";
            for (let dir of dirs) {
                let dr = r + dir[0];
                let dc = c + dir[1];
                dfs(dr, dc);
            }
            return;
        }

        for (let r = 0; r < rows; r++) {
            console.log(r, 0);
            console.log(r, )
            dfs(r, 0);
            dfs(r, cols - 1);
        }

        for (let c = 0; c < cols; c++) {
            dfs(0, c);
            dfs(rows - 1, c);
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if(board[r][c] == 'O') {
                    board[r][c] = 'X'
                }
                else if(board[r][c] == '#') {
                    board[r][c] = 'O'
                }
            }
        }
        return board;
    }
}

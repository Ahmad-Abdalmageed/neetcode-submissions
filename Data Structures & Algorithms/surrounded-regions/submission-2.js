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

        // Iterative DFS
        let stack = [];

        for (let r = 0; r < rows; r++) {
            if (board[r][0] == "O") stack.push([r, 0]);
            if ((board[r][cols - 1] == "O")) stack.push([r, cols - 1]);
        }

        for (let c = 0; c < cols; c++) {
            if (board[0][c] == "O") stack.push([0, c]);
            if (board[rows - 1][c] == 'O') stack.push([rows - 1, c]);
        }

        console.log(stack);
        while (stack.length !== 0) {
            let [r, c] = stack.pop();

            board[r][c] = "#";

            for (let dir of dirs) {
                let dr = r + dir[0];
                let dc = c + dir[1];

                if (
                    dr < 0 ||
                    dr >= rows ||
                    dc < 0 ||
                    dc >= cols ||
                    board[dr][dc] == "X" ||
                    board[dr][dc] == "#"
                )
                    continue;
                stack.push([dr, dc]);
            }
        }
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] == "O") {
                    board[r][c] = "X";
                } else if (board[r][c] == "#") {
                    board[r][c] = "O";
                }
            }
        }

        // RECURSIVE DFS t: O(mn) s: O(mn)
        // function dfs(r, c) {
        //     if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] == "X" || board[r][c] == "#")
        //         return;
        //     board[r][c] = "#";
        //     for (let dir of dirs) {
        //         let dr = r + dir[0];
        //         let dc = c + dir[1];
        //         dfs(dr, dc);
        //     }
        //     return;
        // }

        // for (let r = 0; r < rows; r++) {
        //     dfs(r, 0);
        //     dfs(r, cols - 1);
        // }

        // for (let c = 0; c < cols; c++) {
        //     dfs(0, c);
        //     dfs(rows - 1, c);
        // }

        // for (let r = 0; r < rows; r++) {
        //     for (let c = 0; c < cols; c++) {
        //         if(board[r][c] == 'O') {
        //             board[r][c] = 'X'
        //         }
        //         else if(board[r][c] == '#') {
        //             board[r][c] = 'O'
        //         }
        //     }
        // }
    }
}

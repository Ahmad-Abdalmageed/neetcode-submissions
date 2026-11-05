class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        const dirs = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        // let visited = Array.from({ length: rows }, () => Array.from({ length: cols }).fill(false));
        // function dfs(r, c, t) {
        //     if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c]) return Infinity;
        //     if (r == rows - 1 && c == cols - 1) return Math.max(t, grid[r][c]);

        //     visited[r][c] = true;

        //     t = Math.max(t, grid[r][c]);

        //     let res = Math.min(
        //         dfs(r + 1, c, t),
        //         dfs(r - 1, c, t),
        //         dfs(r, c + 1, t),
        //         dfs(r, c - 1, t),
        //     );
        //     visited[r][c] = false;
        //     return res;
        // }

        let best =  Array.from({ length: rows }, () => Array.from({ length: cols }).fill(Infinity));
        function dfs(r, c, t) {
            if (r < 0 || r >= rows || c < 0 || c >= cols) return;
            t = Math.max(t, grid[r][c]);

            if (t >= best[r][c]) return;
            best[r][c] = t;
            for (let dir of dirs) {
                dfs(r + dir[0], c + dir[1], t);
            }
        }
        dfs(0, 0, 0);
        return best[rows -1][cols - 1];
    }
}

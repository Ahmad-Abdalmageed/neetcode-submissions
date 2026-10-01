class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        const dirs = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const INF = 2147483647;


        // DFS mn.3^m.n
        // const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
        // function dfs(i, j, step) {
        //     if (i < 0 || i >= rows || j < 0 || j >= cols) return INF;
        //     if (grid[i][j] === -1 || visited[i][j]) return INF;
        //     if (grid[i][j] === 0) return step;
        //     if (grid[i][j] > 0 && grid[i][j] < INF) return grid[i][j] + step;

        //     visited[i][j] = true;
        //     const best = Math.min(
        //         dfs(i + 1, j, step + 1),
        //         dfs(i - 1, j, step + 1),
        //         dfs(i, j + 1, step + 1),
        //         dfs(i, j - 1, step + 1),
        //     );
        //     visited[i][j] = false;
        //     return best;
        // }

        // for (let r = 0; r < rows; r++) {
        //     for (let c = 0; c < cols; c++) {
        //         if (grid[r][c] === INF) grid[r][c] = dfs(r, c, 0);
        //     }
        // }

        // BFS m.n
        let q = new Queue();

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(grid[r][c] == 0) q.push([r, c]);
            }
        }

        while(!q.isEmpty()) {
            let [r, c] = q.pop();

            for(let dir of dirs){
                let dr = r + dir[0];
                let dc = c + dir[1];

                if(dr < 0 || dr >= rows || dc < 0 || dc >= cols || grid[dr][dc] == -1) continue;
                if(grid[dr][dc] == INF) {
                    grid[dr][dc] = grid[r][c] + 1;
                    q.push([dr, dc]);
                }
            }
        }
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let dirs = [
            [0, -1],
            [0, 1],
            [1, 0],
            [-1, 0]
        ]

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
                if(grid[dr][dc] == 2147483647) {
                    grid[dr][dc] = grid[r][c] + 1;
                    q.push([dr, dc]);
                }
            }
        }

        // function bfs(i, j) {
        //     let q = new Queue();

        //     q.push([i, j, 0]);

        //     while (!q.isEmpty()) {
        //         let [r, c, step] = q.pop();

        //         if (r >= rows || r < 0 || c < 0 || c >= cols || grid[r][c] == -1) continue;
        //         if (grid[r][c] > 0) {
        //             grid[r][c] = Math.min(step, grid[r][c]);
        //             continue;
        //         }

        //         for(let [dr, dc] of dirs) {
        //             if(grid[r+dr][c+dc] ==)
        //         }

                
        //         q.push([r + 1, c, step + 1]);
        //         q.push([r - 1, c, step + 1]);
        //         q.push([r, c + 1, step + 1]);
        //         q.push([r, c - 1, step + 1]);
                
        //     }
        // }

        // for (let r = 0; r < rows; r++) {
        //     for (let c = 0; c < cols; c++) {
        //         if (grid[r][c] == 0) bfs(r, c);
        //     }
        // }
    }
}

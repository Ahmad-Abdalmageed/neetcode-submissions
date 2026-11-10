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

        // DFS O(4^(r * c))
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

        // Dijkstra O(r * c)
        let pq = new MinPriorityQueue((x) => x[0]);
        let visited = Array.from({ length: rows }, () => Array.from({ length: cols }).fill(false));

        pq.enqueue([grid[0][0], 0, 0]);
        
        while (!pq.isEmpty()) {
            let [currentTime, r, c] = pq.dequeue();
            if(r === rows - 1 && c === cols - 1) return Math.max(currentTime, grid[r][c]);

            for (let dir of dirs) {
                let dr = r + dir[0];
                let dc = c + dir[1];

                if (dr < 0 || dr >= rows || dc < 0 || dc >= cols || visited[dr][dc]) continue;
                // if (dr == rows - 1 && dc === cols - 1) return Math.max(currentTime, grid[dr][dc]);
                visited[dr][dc] = true;

                let dt = Math.max(currentTime, grid[dr][dc]);
                pq.enqueue([dt, dr, dc]);
            }
        }
        return -1;
    }
}

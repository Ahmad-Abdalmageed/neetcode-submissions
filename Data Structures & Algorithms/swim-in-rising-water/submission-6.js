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

        // Dijkstra O(r * c * log r * c) == n^2logn
        // let pq = new MinPriorityQueue((x) => x[0]);
        // let visited = Array.from({ length: rows }, () => Array.from({ length: cols }).fill(false));

        // pq.enqueue([grid[0][0], 0, 0]);

        // while (!pq.isEmpty()) {
        //     let [currentTime, r, c] = pq.dequeue();
        //     if(r === rows - 1 && c === cols - 1) return Math.max(currentTime, grid[r][c]);

        //     for (let dir of dirs) {
        //         let dr = r + dir[0];
        //         let dc = c + dir[1];

        //         if (dr < 0 || dr >= rows || dc < 0 || dc >= cols || visited[dr][dc]) continue;
        //         visited[dr][dc] = true;

        //         let dt = Math.max(currentTime, grid[dr][dc]);
        //         pq.enqueue([dt, dr, dc]);
        //     }
        // }
        // return -1;

        // Kruskal
        let parent = Array.from({ length: rows * cols }, (_, i) => i);
        let size = Array.from({ length: rows * cols }).fill(1);

        function find(u) {
            if (parent[u] != u) parent[u] = find(parent[u]);
            return parent[u];
        }

        function union(u, v) {
            let pu = find(u);
            let pv = find(v);

            if (pu == pv) return false;
            if (size[pv] > size[pu]) [pu, pv] = [pv, pu];
            parent[pv] = pu;
            size[pu] += size[pv];
            return true;
        }

        let edges = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                edges.push([grid[r][c], r, c]);
            }
        }
        console.log(edges);

        edges.sort((a, b) => a[0] - b[0]);

        for(let [t, r, c] of edges) {
            for(let dir of dirs) {
                let dr = r + dir[0];
                let dc = c + dir[1];

                if(dr < 0 || dr >= rows || dc < 0 || dc >= cols || grid[dr][dc] > t) continue;

                union(r * rows + c, dr * rows + dc);
            }
            if(find(0) == find(rows * cols - 1)) return t;
        }
        return rows * cols

    }
}

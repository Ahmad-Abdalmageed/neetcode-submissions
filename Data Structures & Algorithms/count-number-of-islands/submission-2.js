class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        let rows = grid.length;
        let cols = grid[0].length;

        // function dfs(i, j) {
        //     if (i < 0 || i >= rows || j < 0 || j >= cols) return;
        //     if (grid[i][j] == "0") return;

        //     grid[i][j] = "0";
        //     dfs(i + 1, j);
        //     dfs(i - 1, j);
        //     dfs(i, j + 1);
        //     dfs(i, j - 1);
        // }

        function dfsIterative(i, j) {
            let stack = [];
            stack.push([i, j]);

            while (stack.length) {
                let [r, c] = stack.pop();
                if (r < 0 || r >= rows || c < 0 || c >= cols) continue;
                if (grid[r][c] == "0") continue;
                grid[r][c] = "0";
                stack.push([r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]);
            }
            return;
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] == "1") {
                    // dfs(i, j);
                    dfsIterative(i, j)
                    islands++;
                }
            }
        }

        return islands;
    }
}

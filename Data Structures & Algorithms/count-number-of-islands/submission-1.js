class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        let rows = grid.length;
        let cols = grid[0].length;

        function dfs(i, j) {
            if (i < 0 || i >= rows || j < 0 || j >= cols) return;
            if (grid[i][j] == "0") return;
            if (grid[i][j] == "*") return;

            grid[i][j] = "*";
            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        }

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
               if(grid[i][j] == '1')  {
                dfs(i, j);
                islands++
               }
            }
        }

        return islands
    }
}

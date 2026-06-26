class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = Array.from({ length: rows }, () => new Array(cols).fill(0));

    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols) return;
        if (visited[r][c] || grid[r][c] === '0') return;

        visited[r][c] = true;

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    let islands = 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                dfs(i, j);
                islands += 1;
            }
        }
    }

    return islands
    }
}

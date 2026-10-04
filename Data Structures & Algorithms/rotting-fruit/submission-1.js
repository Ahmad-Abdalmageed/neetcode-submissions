class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let minutes = 0;
        let rows = grid.length;
        let cols = grid[0].length;
        let q = new Queue();
        let freshFruites = 0
        let dirs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
        let firstLevel = []
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] == 2) firstLevel.push([r, c]);
                if(grid[r][c] == 1) freshFruites++;
            }
        }
        q.push(firstLevel);

        while (!q.isEmpty()) {
            console.log(q.toArray());
            let currentLevel = q.pop();
            let newLevel = [];
            for (let [r, c] of currentLevel) {
                for (let dir of dirs) {
                    let dr = r + dir[0];
                    let dc = c + dir[1];

                    if (
                        dr < 0 ||
                        dr >= rows ||
                        dc < 0 ||
                        dc >= cols ||
                        grid[dr][dc] == 2 ||
                        grid[dr][dc] == 0
                    )
                        continue;

                    grid[dr][dc] = 2;
                    freshFruites--
                    newLevel.push([dr, dc]);
                }
            }
            if (newLevel.length) {
                minutes++;
                q.push(newLevel);
            }
        }
        
        return freshFruites === 0 ? minutes: -1;
    }
}

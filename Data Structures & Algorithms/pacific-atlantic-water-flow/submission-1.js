class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ans = [];
        let dirs = [
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 0],
        ];

        let rows = heights.length;
        let cols = heights[0].length;
        let pac = Array.from({ length: rows }, () => Array(cols).fill(false));
        let atl = Array.from({ length: rows }, () => Array(cols).fill(false));

        function dfs(r, c, ocean) {
            ocean[r][c] = true;

            for (let dir of dirs) {
                let dr = r + dir[0];
                let dc = c + dir[1];

                if (
                    dr < 0 ||
                    dr >= rows ||
                    dc < 0 ||
                    dc >= cols ||
                    ocean[dr][dc] || 
                    heights[dr][dc] < heights[r][c]
                )
                    continue;
                dfs(dr, dc, ocean);
            }
        }

        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pac);
            dfs(r, cols - 1, atl);
        }

        for (let c = 0; c < cols; c++) {
            dfs(0, c, pac);
            dfs(rows - 1, c, atl);
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (atl[r][c] && pac[r][c]) {
                    ans.push([r, c]);
                }
            }
        }

        //DFS + Backtracking (m.n)*4^(m*n)
        // let pacific = false;
        // let atlantic = false;

        // function dfs(r, c, val) {
        //     if (r < 0 || c < 0) {
        //         pacific = true;
        //         return;
        //     }
        //     if (r >= rows || c >= cols) {
        //         atlantic = true;
        //         return;
        //     }

        //     if (heights[r][c] > val) return;

        //     let curVal = heights[r][c];
        //     heights[r][c] = Infinity;

        //     for (let dir of dirs) {
        //         let dr = r + dir[0];
        //         let dc = c + dir[1];

        //         dfs(dr, dc, curVal);
        //         if (pacific && atlantic) break;
        //     }

        //     heights[r][c] = curVal;
        // }

        // for (let r = 0; r < rows; r++) {
        //     for (let c = 0; c < cols; c++) {
        //         pacific = false;
        //         atlantic = false;
        //         dfs(r, c, Infinity);

        //         if (atlantic && pacific) {
        //             ans.push([r, c]);
        //         }
        //     }
        // }

        return ans;
    }
}

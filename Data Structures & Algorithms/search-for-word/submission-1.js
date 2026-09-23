class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let x = board.length;
        let y = board[0].length;
        // let visited = Array.from({ length: x }, () => Array.from({ length: y }));

        function dfs(i, j, idx) {
            if (
                i < 0 ||
                j < 0 ||
                i >= x ||
                j >= y ||
                idx >= word.length ||
                // visited[i][j] ||
                board[i][j] == '#' ||
                board[i][j] != word[idx]
            )
                return false;
            if (idx == word.length - 1) return true;
            // visited[i][j] = true;
            board[i][j] = '#'

            let result =
                dfs(i + 1, j, idx + 1) ||
                dfs(i - 1, j, idx + 1) ||
                dfs(i, j - 1, idx + 1) ||
                dfs(i, j + 1, idx + 1);

            // visited[i][j] = false;
            board[i][j] = word[idx];

            return result;
        }

        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                if (board[i][j] == word[0] && dfs(i, j, 0)) return true;
            }
        }

        return false;
    }
}

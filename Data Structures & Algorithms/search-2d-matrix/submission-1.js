class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let i = 0;
        let j = rows * cols - 1;

        while(i <= j) {
            let middle = Math.floor((i + j) / 2);
            let row = Math.floor(middle / cols);
            let col = middle % cols;
            if(target < matrix[row][col]) {
                j = middle - 1;
            } else if(target > matrix[row][col]) {
                i = middle + 1;
            } else return  true;
        }
        return false;
    }
}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let res = 0

        while(i < j) {
            let w = Math.min(heights[i], heights[j]);
            let area = (j- i) * w;
            res = Math.max(area, res);

            if(heights[j] > heights[i]) i++;
            else j--;
        }
        return res;
    }
}

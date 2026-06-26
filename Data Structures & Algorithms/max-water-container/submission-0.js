class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let result = 0;

        while (i < j) {
            let axisLength = j - i;
            const currentArea = axisLength * Math.min(heights[i], heights[j]);
            result = Math.max(currentArea, result);
            if (heights[i] < heights[j]) i++;
            else j--;
        }
        return result;
    }
}

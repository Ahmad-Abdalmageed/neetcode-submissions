class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        // Brute Force O(n^2)
        let maxArea = -Infinity;

        for (let i = 0; i < heights.length; i++) {
            let left = i;
            while(left >= 0 && heights[left] >= heights[i]) {
                left--;
            }

            let right = i + 1;
            while(right < heights.length && heights[right] >= heights[i]) {
                right++
            }

            maxArea = Math.max(maxArea, heights[i] * (right - left - 1));
        }

        return maxArea;
    }
}

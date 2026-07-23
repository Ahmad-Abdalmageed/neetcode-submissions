class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        // Brute Force O(n^2)
        let maxArea = -Infinity;

        // for (let i = 0; i < heights.length; i++) {
        //     let left = i;
        //     while(left >= 0 && heights[left] >= heights[i]) {
        //         left--;
        //     }

        //     let right = i + 1;
        //     while(right < heights.length && heights[right] >= heights[i]) {
        //         right++
        //     }

        //     maxArea = Math.max(maxArea, heights[i] * (right - left - 1));
        // }
        // return maxArea;

        let stack = [];

        for (let i = 0; i < heights.length; i++) {
            while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
                let element = stack.pop();
                let nextSmall = i
                let prevSmall = stack.length ? stack[stack.length - 1] : -1;
                maxArea = Math.max(maxArea, heights[element] * (nextSmall - prevSmall - 1));
            }
            stack.push(i);
        }

        while (stack.length) {
            let element = stack.pop();
            let nextSmall = heights.length;
            let prevSmall = stack.length ? stack[stack.length - 1] : -1;
            maxArea = Math.max(maxArea, heights[element] * (nextSmall - prevSmall - 1));
        }
        return maxArea;
    }
}

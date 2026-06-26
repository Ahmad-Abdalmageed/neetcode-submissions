class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0;
        for (let i = 0; i < height.length; i++) {
            let maxLeft = height[i];
            let maxRight = height[i]

            for (let left = 0; left < i; left++) {
                maxLeft = Math.max(maxLeft, height[left]);
            }

            // get the highest to the right
            for (let right = i + 1; right < height.length; right++) {
                maxRight = Math.max(maxRight, height[right]);
            }

            res += Math.min(maxLeft, maxRight) - height[i]
        }
        return res;
    }
}

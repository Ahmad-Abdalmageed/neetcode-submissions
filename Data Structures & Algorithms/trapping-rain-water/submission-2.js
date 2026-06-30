class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft = -1;
        let maxRight = -1;

        let water = 0;

        let i = 0;
        let j = height.length - 1;

        while (i < j) {
            if(height[i] > maxLeft) maxLeft = height[i];
            if(height[j] > maxRight) maxRight = height[j];

            if(maxLeft < maxRight) {
                water += maxLeft - height[i];
                i++
            } else {
                water += maxRight - height[j];
                j--;
            }
        }
        return water;
    }
}

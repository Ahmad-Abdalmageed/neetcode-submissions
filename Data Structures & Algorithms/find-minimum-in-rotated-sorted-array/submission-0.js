class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0;
        let high = nums.length - 1;
        let ans = Infinity;

        while(low <= high) {
            let mid = Math.floor((low + high) / 2);
            if(nums[low] <= nums[mid]) {
                ans = Math.min(nums[low], ans)
                low = mid + 1;
            } else {
                ans = Math.min(nums[mid], ans)
                high = mid - 1
            }
        }

        return ans
    }
}

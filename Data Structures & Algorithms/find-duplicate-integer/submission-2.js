class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let fast = 0;
        let slow = 0

        while(true) {
            slow = nums[slow];
            fast = nums[nums[fast]]
            if(slow == fast) break
        }

        fast = 0;
        while(slow !== fast) {
            fast = nums[fast];
            slow = nums[slow];
            if(slow === fast) return fast
        }
        return -1;
    }
}

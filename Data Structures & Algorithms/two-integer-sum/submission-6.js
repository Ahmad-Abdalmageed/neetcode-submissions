class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {};
        for(let i = 0; i < nums.length; i++) {
            if(hash[nums[i]] != undefined) return [hash[nums[i]], i];
            let comp = target - nums[i]; 
            hash[comp] = i;
        }
        return [-1, -1];
    }
}

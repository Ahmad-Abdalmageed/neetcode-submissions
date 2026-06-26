class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complementMap = {};
        let result = [];
        for(let i = 0; i < nums.length; i++){
            const complement = target - nums[i];
            if(complementMap[nums[i]] !== undefined){
                result.push(i, complementMap[nums[i]]);
            }
            complementMap[complement] = i;
        }
        return result;
    }
}

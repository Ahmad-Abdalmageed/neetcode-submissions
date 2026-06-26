class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Naive solution: O(n^2), o(1)
        // for(let i = 0; i < nums.length; i++){
        //     for(let j = i + 1; j < nums.length; j++) {
        //         if(nums[i] + nums[j] == target) return [i, j];
        //     }
        // }
        // return [-1, -1]

        // Hash: O(n), O(n)
        let hash = {};
        for (let i = 0; i < nums.length; i++) {
            if(hash[nums[i]] !== undefined) return [hash[nums[i]], i];
            let comp = target - nums[i];
            hash[comp] = i;
        }

        return [-1, -1]
    }
}

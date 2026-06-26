class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Brute force O(n^2)
        // for(let i = 0; i < nums.length; i++){
        //     for(let j = i + 1; j < nums.length; j++){
        //         if(nums[j] == nums[i]) return true;
        //     }
        // }
        // return false

        // set
        const s = new Set();
        for(let i = 0; i < nums.length; i++) {
            if(s.has(nums[i])) return true;
            s.add(nums[i]);
        }
        return false
    }
}

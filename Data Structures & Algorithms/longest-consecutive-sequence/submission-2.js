class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        nums.sort((a, b) => a - b);
        
        let res = 0;
        let maxLen = 0;
        let i = 0;
        let checkNumber = nums[0];

        while(i < nums.length){
            if(checkNumber !== nums[i]){
                maxLen = 0;
                checkNumber = nums[i]
            }
            while(nums[i] === checkNumber && i < nums.length){ // handles duplication and increment
                i++;
            }
            maxLen++;
            checkNumber++;
            res = Math.max(res, maxLen);
        }
        return res;
    }   
}

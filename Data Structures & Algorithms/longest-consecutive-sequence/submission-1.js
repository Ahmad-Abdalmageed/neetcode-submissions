class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        const sequence = new Set(nums);
        for(let num of nums){
            if(!sequence.has(num - 1)){
                let maxLen = 1;
                while(sequence.has(num + maxLen)){
                    maxLen++;
                }
                res = Math.max(res, maxLen);
            }
        }
        return res;
    }   
}

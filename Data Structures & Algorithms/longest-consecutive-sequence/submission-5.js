class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Sorting O(nlogn)
        // if(!nums.length) return 0;
        // let res = 1;
        // let i = 0;
        // let count = 1;
        // nums.sort((a,b) => a - b);

        // while (i < nums.length) {
        //     while (nums[i] === nums[i + 1]) i++;
        //     if (nums[i] + 1 === nums[i + 1]) {
        //         count++;
        //         res = Math.max(res, count);
        //     } else {
        //         count = 1;
        //     }
        //     i++;
        // }
        // return res;
        let res = 0;

        let set = new Set(nums);

        for (let num of set) {
            if(!set.has(num - 1)) {
                let length = 1;
                while(set.has(num + length)) length++;
                res = Math.max(res, length);
            }
        }
        return res;
    }
}

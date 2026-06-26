class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Naiive o(n^2)
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            let prod = 1;
            for (let j = 0; j < nums.length; j++) {
                if(i === j) continue;
                prod *= nums[j];
            }
            res.push(prod);
        }
        return res;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Naiive o(n^2)
        // let res = [];
        // for (let i = 0; i < nums.length; i++) {
        //     let prod = 1;
        //     for (let j = 0; j < nums.length; j++) {
        //         if(i === j) continue;
        //         prod *= nums[j];
        //     }
        //     res.push(prod);
        // }
        // return res;

        // Suffix & Prefix O(n), O(n)
        // let prod = [];

        // // Left
        // let l = [];
        // for (let i = 0; i < nums.length; i++) {
        //     if (i === 0) {
        //         l[i] = 1;
        //         continue;
        //     }
        //     l[i] = nums[i - 1] * l[i - 1];
        // }

        // let r = [];
        // for (let i = nums.length - 1; i >= 0; i--) {
        //     if (i === nums.length - 1) {
        //         r[i] = 1;
        //         continue;
        //     }
        //     r[i] = nums[i + 1] * r[i + 1];
        // }

        // for (let i = 0; i < nums.length; i++) {
        //     prod.push(l[i] * r[i]);
        // }
        // return prod;

        // Suffix & postfix O(1) space
        let res = new Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            res[i] = nums[i - 1] * res[i - 1];
        }

        let post = 1;
        for(let i = nums.length - 1; i >=0 ; i--) {
            res[i] *= post;
            post *= nums[i];
        }
        return res;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let ans = [];
        
        // function backtrack(path, picks){
        //     if(path.length == nums.length) {
        //         ans.push([...path]);
        //         return;
        //     }

        //     for(let i = 0; i < nums.length; i++) {
        //         if(!picks[i]) {
        //             picks[i] = true;
        //             path.push(nums[i]);
        //             backtrack(path, picks);
        //             picks[i] = false;
        //             path.pop();
        //         }
        //     }
        // }
        // backtrack([], new Array(nums.length).fill(false));

        function swap(idx) {
            if(idx == nums.length) {
                ans.push([...nums]);
            }

            for(let i = idx; i < nums.length; i++) {
                [nums[i], nums[idx]] = [nums[idx], nums[i]];
                swap(idx+1);
                [nums[i], nums[idx]] = [nums[idx], nums[i]];
            }
        }

        swap(0);

        return ans;
    }
}

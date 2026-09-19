class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        // let ans = [];
        // function dfs(path, index) {
        //     if(index === nums.length) {
        //         ans.push([...path])
        //         return;
        //     }
        //     path.push(nums[index]);
        //     dfs(path, index+1);
        //     path.pop();
        //     dfs(path, index+1);
        // }
        // dfs([], 0);

        let ans = [[]];
        for(let num of nums) {
            let currSize = ans.length;
            for(let i = 0; i < currSize; i++) {
                let subset = [...ans[i]];
                subset.push(num);
                ans.push(subset);
            }
        }

        return ans;
    }
}
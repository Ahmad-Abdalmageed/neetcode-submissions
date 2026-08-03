class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Hash - O(nlogn)
        // let hash = {};
        // for (let num of nums) {
        //     hash[num] = (hash[num] || 0) + 1;
        // }
        // let arr = Object.entries(hash).map(([num, freq])=>[freq, parseInt(num)])
        // arr.sort((a, b)=>b[0] - a[0]);

        // return arr.slice(0, k).map((pair) => pair[1]);

        // Bucket sort O(n)
        let count = {};
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        let freq = Array.from({ length: nums.length + 1 }, () => []);
        for (let num in count) {
            freq[count[num]].push(parseInt(num));
        }

        let ans = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                ans.push(n);
                if (ans.length === k) {
                    return ans;
                }
            }
        }
        return ans;
    }
}

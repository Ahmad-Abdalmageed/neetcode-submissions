class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // O(n log k) time o(k) space
        // let heap = new MinPriorityQueue();

        // for(let i = 0; i < nums.length; i++) {
        //     heap.enqueue(nums[i]);
        //     if(heap.size() > k) {
        //         heap.dequeue();
        //     }
        // }

        // return heap.dequeue();

        // Quick select
        k = nums.length - k;

        function pivot(start, end) {
            let pivotIndx = end;
            let swapIdx = start - 1;

            for (let ptr = start; ptr < end; ptr++) {
                if (nums[ptr] < nums[pivotIndx]) {
                    swapIdx++;
                    [nums[ptr], nums[swapIdx]] = [nums[swapIdx], nums[ptr]];
                }
            }
            swapIdx++;
            [nums[pivotIndx], nums[swapIdx]] = [nums[swapIdx], nums[pivotIndx]];
            return swapIdx;
        }

        let left = 0;
        let right = nums.length - 1;
        while(true) {
            let p = pivot(left, right);
            if(p < k) {
                left = p + 1;
            } else if (p > k) {
                right = p - 1;
            } else {
                return nums[p]
            }
        }

    }
}

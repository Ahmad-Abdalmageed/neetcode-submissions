class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        // Brute O(n*k)
        // let res = [];
        // let l = 0;
        // let r = k - 1;

        // while (r < nums.length) {
        //     let max = -Infinity;
        //     for (let i = l; i <= r; i++) {
        //         max = Math.max(nums[i], max);
        //     }
        //     res.push(max);
        //     r++;
        //     l++;
        // }
        // return res;

        // const maxHeap = new MaxPriorityQueue((x) => x[0]);
        // let res = [];

        // let l = 0;
        // let r = k - 1;

        // for(let i = 0; i < k; i++) {
        //     maxHeap.enqueue([nums[i], i]);
        // }

        // while(r < nums.length) {
        //     maxHeap.enqueue([nums[r], r]);

        //     while(maxHeap.front()[1] < l) {
        //         maxHeap.dequeue();
        //     }
        //     res.push(maxHeap.front()[0]);
        //     r++;
        //     l++;
        // }
        // return res;

        // Max Heap O(nlogn)
        // const maxHeap = new MaxPriorityQueue((x) => x[0]);
        // let res = [];

        // for(let r = 0; r < nums.length; r++) {
        //     maxHeap.enqueue([nums[r], r]);

        //     if(r >= k - 1) {
        //         while(maxHeap.front()[1] <= r - k) {
        //             maxHeap.dequeue();
        //         }
        //         res.push(maxHeap.front()[0]);
        //     }

        // }
 
        // return res;      

        let res = [];
        let q = new Deque();
        
        let r = 0;
        let l = 0

        while(r < nums.length) {
            // Before pushing new element - eliminate less elements
            while(q.size() && nums[q.back()] < nums[r]) {
                q.popBack();
            }
            q.pushBack(r);

            if(q.front() < l) q.popFront();
            if(r+1>=k) {
                res.push(nums[q.front()]);
                l++;
            }
            r++;
        }
        return res;
    }
}

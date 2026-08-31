class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let heap = new MinPriorityQueue();

        for(let i = 0; i < nums.length; i++) {
            heap.enqueue(nums[i]);
            if(heap.size() > k) {
                heap.dequeue();
            }
        }

        return heap.dequeue();
    }
}

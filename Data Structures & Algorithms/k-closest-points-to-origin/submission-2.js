class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let heap = new MaxPriorityQueue((x) => x[0]);
        let ans = [];

        for (let i = 0; i < points.length; i++) {
            let distance = Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2));
            heap.enqueue([distance, points[i]]);

            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        while(heap.size()) {
            ans.push(heap.front()[1]);
            heap.dequeue();
        }
        return ans;
    }
}

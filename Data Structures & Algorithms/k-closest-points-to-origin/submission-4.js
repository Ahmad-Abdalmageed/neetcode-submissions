class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */

    partition(points, l, r) {
        let pivotDistance = points[r][0] ** 2 + points[r][1] ** 2;
        let swapIdx = l - 1;
        for (let ptr = l; ptr < r; ptr++) {
            let distance = points[ptr][0] ** 2 + points[ptr][1] ** 2;
            if (distance <= pivotDistance) {
                swapIdx++;
                [points[ptr], points[swapIdx]] = [points[swapIdx], points[ptr]];
            }
        }
        [points[r], points[swapIdx + 1]] = [points[swapIdx + 1], points[r]];
        return swapIdx + 1;
    }

    kClosest(points, k) {
        let left = 0;
        let right = points.length - 1;

        let pivot = points.length;

        while (pivot !== k) {
            pivot = this.partition(points, left, right);
            if (pivot > k) {
                right = pivot - 1;
            } else {
                left = pivot + 1;
            }
        }

        return points.slice(0, k);

        // Max Heap o(nlogk) o(k) space
        // let heap = new MaxPriorityQueue((x) => x[0]);
        // let ans = [];

        // for (let i = 0; i < points.length; i++) { // n
        //     let distance = points[i][0] ** 2 + points[i][1] ** 2;
        //     heap.enqueue([distance, points[i]]); // logk

        //     if (heap.size() > k) {
        //         heap.dequeue(); // logk
        //     }
        // }

        // while(heap.size()) {
        //     ans.push(heap.dequeue()[1]);
        // }
        // return ans;

        // Min heap => O(nlogn + klogn) o(n)space
        // let heap = new MinPriorityQueue((x) => x[0]);
        // let ans = [];

        // for (let i = 0; i < points.length; i++) {
        //     let distance = points[i][0] ** 2 + points[i][1] ** 2;
        //     heap.enqueue([distance, points[i]]);
        // }

        // for(let i = 0; i < k; i++) {
        //     let point = heap.dequeue();
        //     ans.push(point[1])
        // }

        // return ans;
    }
}

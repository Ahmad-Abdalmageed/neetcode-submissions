class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // Brute force
        // while(stones.length > 1) {
        //     stones.sort((a, b) => a - b);

        //     let x = stones.pop();
        //     let y = stones.pop();

        //     if(x == y) continue;
        //     stones.push(Math.abs(x - y));
        // }

        // return stones.length ? stones[0]: 0;

        let heap = new MaxPriorityQueue();

        for (let i = 0; i < stones.length; i++) {
            heap.enqueue(stones[i]);
        }

        while (heap.size() > 1) {
            let x = heap.dequeue();
            let y = heap.dequeue();

            if (x == y) continue;
            heap.enqueue(Math.abs(x - y));
        }
        return heap.size() ? heap.front() : 0;
    }
}

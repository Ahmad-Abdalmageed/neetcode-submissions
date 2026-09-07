class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // Max heap + queue
        let counts = new Array(26).fill(0);
        for (let task of tasks) {
            counts[task.charCodeAt(0) - "A".charCodeAt(0)]++;
        }

        let heap = new MaxPriorityQueue();
        for (let count = 0; count < counts.length; count++) {
            if (counts[count] > 0) heap.enqueue(counts[count]);
        }

        let q = new Queue();
        let time = 0;
        while(heap.size() || !q.isEmpty()) {
            time++;

            let count = heap.dequeue();
            count--;

            if(count>0) {
                q.push([count, n + time]);
            }

            if(!q.isEmpty() && q.front()[1] == time) {
                heap.enqueue(q.pop()[0]);
            }
        }

        return time;

        // Greedy O(m) m is length of tasks;
        // let counts = new Array(26).fill(0);

        // for(let task of tasks) {
        //     counts[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        // }
        // counts.sort((a, b) => a - b);
        // const maxF = counts[25];
        // let idle = (maxF - 1) * n;
        // for(let i = 24; i >= 0; i--) {
        //     idle -= Math.min(maxF -1, counts[i]);
        // }
        // return Math.max(0, idle) + tasks.length
    }
}

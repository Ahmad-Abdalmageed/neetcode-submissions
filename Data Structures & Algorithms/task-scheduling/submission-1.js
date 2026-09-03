class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let counts = new Array(26).fill(0);

        for(let task of tasks) {
            counts[task.charCodeAt(0) - 'A'.charCodeAt(0)]++; 
        }
        counts.sort((a, b) => a - b);
        console.log(counts);
        const maxF = counts[25];
        let idle = (maxF - 1) * n;
        for(let i = 24; i >= 0; i--) {
            idle -= Math.min(maxF -1, counts[i]);
        }
        return Math.max(0, idle) + tasks.length
    }
}

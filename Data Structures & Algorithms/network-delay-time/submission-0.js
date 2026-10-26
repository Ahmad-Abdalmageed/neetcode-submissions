class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let adjList = Array.from({length: n + 1}, () => []);
        let time = Array.from({length: n + 1}).fill(1e9);
        let pq = new MinPriorityQueue((u) => u[1]);
        let ans = -Infinity;

        for(let [u, v, t] of times) {
            adjList[u].push([v, t]);
        }

        time[k] = 0;
        pq.enqueue([k, 0]);


        while(!pq.isEmpty()) {
            let [node, t] = pq.dequeue();
            if(time[node] < t) continue;
            
            for(let [target, dt] of adjList[node]) {
                if(time[target] > dt + t) {
                    time[target] = dt + t;
                    pq.enqueue([target, dt+t]);
                }
            }
        }
        for(let i = 1; i < n + 1; i++) {
            if(time[i] > ans) ans = time[i];
        }
        return ans == 1e9? -1: ans;
    }
}

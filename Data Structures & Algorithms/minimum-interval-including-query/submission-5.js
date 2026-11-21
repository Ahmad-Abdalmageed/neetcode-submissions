class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        let n = queries.length;
        let ans = {};

        let sortedQueries = [...queries].sort((a, b) => a - b);
        intervals.sort((a, b) => a[0] - b[0]);

        let pq = new MinPriorityQueue((x) => x[0]);
        let interval = 0;

        for (let query of sortedQueries) {
            while(interval < intervals.length && intervals[interval][0] <= query) {
                let [left, right] = intervals[interval]
                pq.enqueue([right - left + 1, right]);
                interval++;
            }

            while (!pq.isEmpty() && pq.front()[1] < query) pq.dequeue();

            ans[query] = pq.isEmpty() ? -1 : pq.front()[0];
        }

        return queries.map(q => ans[q]);
    }
}

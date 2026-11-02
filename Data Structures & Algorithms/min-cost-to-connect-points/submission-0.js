class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let n = points.length;
        let adjList = Array.from({ length: points.length }, () => []);
        let pq = new MinPriorityQueue(x => x[1]);
        let visited = Array.from({ length: n }).fill(false);
        let cost = 0;

        for (let i = 0; i < n; i++) {
            let [x1, y1] = points[i];
            for (let j = i + 1; j < n; j++) {
                let [x2, y2] = points[j];
                let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                adjList[i].push([j, dist]);
                adjList[j].push([i, dist]);
            }
        }

        pq.enqueue([0, 0]);

        while (!pq.isEmpty()) {
            let [pi, di] = pq.dequeue();
            if (visited[pi]) continue;

            visited[pi] = true;
            cost += di;
            for (let [ni, nd] of adjList[pi]) {
                if (visited[ni]) continue;
                pq.enqueue([ni, nd]);
            }
        }
        return cost;
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let n = points.length;
        let cost = 0;

        let parent = Array.from({ length: n }, (_, i) => i);
        let size = Array.from({ length: n }).fill(1);
        let edges = [];

        for (let i = 0; i < n; i++) {
            let [x1, y1] = points[i];
            for (let j = i + 1; j < n; j++) {
                let [x2, y2] = points[j];
                let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                edges.push([dist, i, j]);
            }
        }
        edges.sort((a, b) => a[0] - b[0]);

        function findParent(u) {
            if (parent[u] !== u) parent[u] = findParent(parent[u]);
            return parent[u];
        }

        function union(u, v) {
            let pu = findParent(u);
            let pv = findParent(v);

            if (pu == pv) return false;

            if (size[pu] <= size[pv]) {
                parent[pu] = pv;
                size[pv] += size[pu];
            } else {
                parent[pv] = pu;
                size[pu] += size[pv];
            }
            return true;
        }

        for (let [d, u, v] of edges) {
            if (union(u, v)) cost += d;
        }
        return cost;

        // Prim
        // let adjList = Array.from({ length: n }, () => []);
        // let pq = new MinPriorityQueue(x => x[1]);
        // let visited = Array.from({ length: n }).fill(false);

        // for (let i = 0; i < n; i++) {
        //     let [x1, y1] = points[i];
        //     for (let j = i + 1; j < n; j++) {
        //         let [x2, y2] = points[j];
        //         let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
        //         adjList[i].push([j, dist]);
        //         adjList[j].push([i, dist]);
        //     }
        // }
        // pq.enqueue([0, 0]);

        // while (!pq.isEmpty()) {
        //     let [pi, di] = pq.dequeue();
        //     if (visited[pi]) continue;

        //     visited[pi] = true;
        //     cost += di;
        //     for (let [ni, nd] of adjList[pi]) {
        //         if (visited[ni]) continue;
        //         pq.enqueue([ni, nd]);
        //     }
        // }
        // return cost;
    }
}

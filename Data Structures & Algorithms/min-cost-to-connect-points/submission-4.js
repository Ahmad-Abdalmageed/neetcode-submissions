class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        //prim optimal Using array
        let n = points.length;
        let cost = 0;
        let dist = Array.from({ length: n }).fill(Infinity);
        let visited = Array.from({ length: n }).fill(false);

        dist[0] = 0;

        for (let i = 0; i < n; i++) {
            let u = -1; // initiation
            // Get minimal node -- Picks first unvisited node then compare distance
            for (let v = 0; v < n; v++) {
                if (!visited[v] && (u === -1 || dist[v] < dist[u])) u = v;
            }
            
            visited[u] = true;
            cost += dist[u];

            let [x1, y1] = points[u];
            for (let v = 0; v < n; v++) {
                if (visited[v]) continue;
                let [x2, y2] = points[v];
                let d = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                if (d < dist[v]) dist[v] = d;
            }
        }

        return cost;
    }
}

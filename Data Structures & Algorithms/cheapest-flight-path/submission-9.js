class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let adjList = Array.from({ length: n }, () => []);
        let stops = Array.from({ length: n }).fill(Infinity);
        let pq = new MinPriorityQueue((x) => x[0]);

        for (let [s, d, p] of flights) {
            adjList[s].push([d, p]);
        }

        // cost, stops, node
        pq.enqueue([0, 0, src]);

        while (!pq.isEmpty()) {
            let [currentCost, numberOfStops, node] = pq.dequeue();
            if (node == dst) return currentCost;
            if (stops[node] <= numberOfStops) continue;

            stops[node] = numberOfStops;

            if (numberOfStops === k + 1) continue;

            for (let [nextStop, price] of adjList[node]) {
                pq.enqueue([currentCost + price, numberOfStops + 1, nextStop]);
            }
        }

        return -1
    }
}

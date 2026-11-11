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
        let costs = Array.from({ length: n }).fill(1e9);
        let stops = Array.from({ length: n }).fill(Infinity);
        let pq = new MinPriorityQueue((x) => x[0]);

        for (let [s, d, p] of flights) {
            adjList[s].push([d, p]);
        }

        // cost, stops, node
        pq.enqueue([0, 0, src]);
        costs[src] = 0;
        stops[src] = 0;

        while(!pq.isEmpty()) {
            let [currentCost, numberOfStops, node] = pq.dequeue();
            if(numberOfStops > k + 1) continue;
            if(stops[node] < numberOfStops) continue;

            costs[node] = Math.min(currentCost, costs[node]);
            stops[node] = numberOfStops;

            for(let [nextStop, price] of adjList[node]) {
                pq.enqueue([currentCost+price, numberOfStops + 1, nextStop]);
            }
        }

        return costs[dst] == 1e9 ? -1: costs[dst];
    }
}

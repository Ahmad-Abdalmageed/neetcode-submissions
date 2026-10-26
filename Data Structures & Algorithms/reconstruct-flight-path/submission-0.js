class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        let adjList = {}
        let path = [];

        for(let [t1, t2] of tickets) {
            if(!adjList[t1]) adjList[t1] = [];
            adjList[t1].push(t2);
        } 

        for(let f in adjList) {
            adjList[f].sort().reverse();
        } 

        function dfs(stop) {
            console.log(stop);
            while(adjList[stop] && adjList[stop].length > 0) {
                dfs(adjList[stop].pop());
            }
            path.push(stop)
        }


        dfs('JFK');
        return path.reverse();
    }
}

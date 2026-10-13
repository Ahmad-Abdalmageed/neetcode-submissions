class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // DFS Cycle
        let preMap = {};
        let visited = new Set();

        for(let i = 0; i < numCourses; i++) {
            preMap[i] = [];
        }

        for(let [crs, pre] of prerequisites) {
            preMap[crs].push(pre);
        }

        function detectCycle(crs) {
            if(visited.has(crs)) return true;
            if(preMap[crs].length === 0) return false;

            visited.add(crs);

            for(let pre of preMap[crs]) {
                if(detectCycle(pre)) return true;
            }

            visited.delete(crs);
            preMap[crs] = [];
            return false;
        }

        for(let crs = 0; crs < numCourses; crs++) {
            if(detectCycle(crs)) return false;
        }

        return true;

        // TOPO Sort Kahn
        // let adjList = Array.from({length: numCourses}, () => []);
        // let indegree = Array.from({length: numCourses}).fill(0);
        // let q = new Queue();
        // let ans = [];


        // for(let [u, v] of prerequisites) {
        //     adjList[v].push(u);
        //     indegree[u]++;
        // }

        // for(let i = 0; i < indegree.length; i++) {
        //     if(indegree[i] == 0) q.push(i);
        // }

        // while(!q.isEmpty()) {
        //     let crs = q.pop();
        //     ans.push(crs);

        //     for(let pre of adjList[crs]) {
        //         indegree[pre]--;
        //         if(indegree[pre] == 0) q.push(pre);
        //     }
        // }

        // return ans.length == numCourses ? true: false;
    }
}

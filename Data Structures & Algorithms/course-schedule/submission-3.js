class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // DFS Cycle
        // let preMap = {};
        // let visited = new Set();

        // for(let i = 0; i < numCourses; i++) {
        //     preMap[i] = [];
        // }

        // for(let [crs, pre] of prerequisites) {
        //     preMap[crs].push(pre);
        // }

        // function dfs(crs) {
        //     if(visited.has(crs)) return false;
        //     if(preMap[crs].length === 0) return true;

        //     visited.add(crs);

        //     for(let pre of preMap[crs]) {
        //         if(!dfs(pre)) return false;
        //     }

        //     visited.delete(crs);
        //     preMap[crs] = [];
        //     return true;
        // }

        // for(let crs = 0; crs < numCourses; crs++) {
        //     if(!dfs(crs)) return false;
        // }

        // return true;

        // TOPO Sort Kahn
        let adjList = Array.from({length: numCourses}, () => []);
        let indegree = Array.from({length: numCourses}).fill(0);
        let q = new Queue();
        let ans = [];


        for(let [u, v] of prerequisites) {
            adjList[v].push(u);
            indegree[u]++;
        }

        for(let i = 0; i < indegree.length; i++) {
            if(indegree[i] == 0) q.push(i);
        }

        while(!q.isEmpty()) {
            let crs = q.pop();
            ans.push(crs);

            for(let pre of adjList[crs]) {
                indegree[pre]--;
                if(indegree[pre] == 0) q.push(pre);
            }
        }

        return ans.length == numCourses ? true: false;
    }
}

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let adjList = Array.from({ length: numCourses }, () => []);
        let visited = new Set();
        let path = new Set();

        let ans = [];

        for (let [u, v] of prerequisites) {
            adjList[u].push(v);
        }

        function dfs(crs, path) {
            if (path.has(crs)) return false;
            if (visited.has(crs)) return true;

            path.add(crs);
            visited.add(crs);

            for (let pre of adjList[crs]) {
                if (!dfs(pre, path)) return false;
            }
            path.delete(crs);
            ans.push(crs);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i, path)) return [];
        }

        return ans;

        // BFS Kahn's TOPO sort O(V + E)
        // let adjList = Array.from({length: numCourses}, () => []);
        // let indegree = Array.from({length: numCourses}).fill(0);
        // let ans = [];
        // let q = new Queue();

        // for(let [u, v] of prerequisites) {
        //     adjList[v].push(u);
        //     indegree[u]++;
        // }

        // for(let i = 0; i < indegree.length; i++) {
        //     if(indegree[i] == 0) q.push(i);
        // }

        // while(!q.isEmpty()) {
        //     let node = q.pop();
        //     ans.push(node);

        //     for(let u of adjList[node]) {
        //         indegree[u]--;
        //         if(indegree[u] == 0) q.push(u);
        //     }
        // }

        // return ans.length == numCourses ? ans: [];
    }
}

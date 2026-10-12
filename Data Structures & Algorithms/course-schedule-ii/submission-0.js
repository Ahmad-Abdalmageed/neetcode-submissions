class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let adjList = Array.from({length: numCourses}, () => []);
        let indegree = Array.from({length: numCourses}).fill(0);
        let ans = [];
        let q = new Queue();

        for(let [u, v] of prerequisites) {
            adjList[v].push(u);
            indegree[u]++;
        }

        for(let i = 0; i < indegree.length; i++) {
            if(indegree[i] == 0) q.push(i);
        }
        
        while(!q.isEmpty()) {
            let node = q.pop();
            ans.push(node);

            for(let u of adjList[node]) {
                indegree[u]--;
                if(indegree[u] == 0) q.push(u);
            }
        }

        return ans.length == numCourses ? ans: [];
    }
}

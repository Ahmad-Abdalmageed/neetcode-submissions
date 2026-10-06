class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let preMap = {};
        let visited = new Set();

        for(let i = 0; i < numCourses; i++) {
            preMap[i] = [];
        }

        for(let [crs, pre] of prerequisites) {
            preMap[crs].push(pre);
        }

        function dfs(crs) {
            if(visited.has(crs)) return false;
            if(preMap[crs].length === 0) return true;

            visited.add(crs);

            for(let pre of preMap[crs]) {
                if(!dfs(pre)) return false;
            }

            visited.delete(crs);
            preMap[crs] = [];
            return true;
        }

        for(let crs = 0; crs < numCourses; crs++) {
            if(!dfs(crs)) return false;
        }

        return true;
    } 
}

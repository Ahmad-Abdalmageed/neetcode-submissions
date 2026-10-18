class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let size = Array.from({length: n}).fill(1);
        let parent = Array.from({length: n});
        let res = n;

        for(let i = 0; i < n; i++) {
            parent[i] = i;
        }

        function findParent(node) {
            if(parent[node] !== node) parent[node] = findParent(parent[node])
            return parent[node];
        }

        function union(u, v) {
            let pU = findParent(u);
            let pV = findParent(v);

            if(pU == pV) return false;

            if(size[pU] < size[pV]) {
                parent[pU] = pV;
                size[pV] += size[pU]
            } else {
                parent[pV] = pU;
                size[pU] += size[pV]
            }
            return true;
        }

        for(let [u, v] of edges) {
            if(union(u, v)) res--;
        }

        return res;
    }
}

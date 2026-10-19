class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let n = edges.length;
        let size = Array.from({ length: n + 1 }, () => 1);
        let parent = Array.from({ length: n + 1 }, (_, i) => i);


        function findParent(node) {
            if(parent[node] !== node) parent[node] = findParent(parent[node])
            return parent[node];
        }

        function union(u, v)  {
            let pU = findParent(u);
            let pV = findParent(v);

            if(pU == pV) return true;

            if(size[pU] < size[pV]) {
                parent[pU] = pV;
                size[pV] += size[pU];
            } else {
                parent[pV] = pU;
                size[pU] += size[pV];                
            }
            return false;
        }


        for(let [u, v] of edges) {
            if(union(u, v)) return [u, v]
        }

        return [];
    }
}
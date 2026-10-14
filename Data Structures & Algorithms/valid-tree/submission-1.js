class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // DSU V + E
        if(edges.length < n - 1) return false;
        let size = Array.from({ length: n }).fill(1);
        let parent = Array.from({ length: n  });
        for (let i = 0; i < n; i++) {
            parent[i] = i;
        }

        function findParent(n) {
            if (n != parent[n]) parent[n] = findParent(parent[n]);
            return parent[n];
        }

        function union(u, v) {
            let pU = findParent(u);
            let pV = findParent(v);

            if (pU == pV) return false;

            if (size[pU] < size[pV]) {
                parent[pU] = pV;
                size[pV] += size[pU];
            } else {
                parent[pV] = pU;
                size[pU] += size[pV];
            }
            return true;
        }

        for(let [u, v] of edges) {
            if(!union(u, v)) return false;
        }

        return true;
    }
}

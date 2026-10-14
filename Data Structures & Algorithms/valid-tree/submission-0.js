class DSU {}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let size = Array.from({ length: n + 1 }).fill(1);
        let parent = Array.from({ length: n + 1 });
        for (let i = 0; i < n + 1; i++) {
            parent[i] = i;
        }

        function findParent(n) {
            if (n == parent[n]) return n;
            parent[n] = findParent(parent[n]);
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

        let cnt = 0
        for(let [u, v] of edges) {
            if(!union(u, v)) return false;
            cnt++;
        }

        return cnt == n - 1;


    }
}

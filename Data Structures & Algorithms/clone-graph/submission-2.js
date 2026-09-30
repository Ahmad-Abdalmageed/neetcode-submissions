/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let cloneMap = new Map();

        // function dfs(node) {
        //     if(node == null) return null;
        //     if (cloneMap.has(node)) return cloneMap.get(node);

        //     let copy = new Node(node.val);
        //     cloneMap.set(node, copy)

        //     for(let nei of node.neighbors) {
        //         copy.neighbors.push(dfs(nei))
        //     }
        //     return copy;
        // }

        // return dfs(node);
        if (!node) return null;
        let q = new Queue();
        q.push(node);
        cloneMap.set(node, new Node(node.val));

        while (!q.isEmpty()) {
            let n = q.pop();

            for (const nei of n.neighbors) {
                if (!cloneMap.has(nei)) {
                    cloneMap.set(nei, new Node(nei.val));
                    q.push(nei);
                }
                cloneMap.get(n).neighbors.push(cloneMap.get(nei));
            }
        }

        return cloneMap.get(node);
    }
}

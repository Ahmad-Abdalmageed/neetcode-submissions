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

        function dfs(node) {
            if(node == null) return null;
            if (cloneMap.has(node)) return cloneMap.get(node);

            let copy = new Node(node.val);
            cloneMap.set(node, copy)

            for(let nei of node.neighbors) {
                copy.neighbors.push(dfs(nei))
            }
            return copy;
        }

        return dfs(node);

    }
}

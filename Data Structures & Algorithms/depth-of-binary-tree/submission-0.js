/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        let max = -Infinity;

        function dfs(node, count) {
            if(!node) {
                max = Math.max(count, max);
                return;
            }
            dfs(node.left, count+1);
            dfs(node.right, count+1);
            return;
        }
        dfs(root, 0);
        return max;
    }
}

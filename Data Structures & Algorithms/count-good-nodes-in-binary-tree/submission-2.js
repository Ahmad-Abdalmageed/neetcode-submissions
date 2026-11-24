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
    goodNodes(root) {
        let ans = 0;

        function dfs(node, pastMax) {
            if(!node) return;
            if(node.val >= pastMax) {
                ans++;
            }
            dfs(node.left, Math.max(pastMax, node.val));
            dfs(node.right, Math.max(pastMax, node.val));
        }

        dfs(root, -Infinity);
        return ans;
    }
}

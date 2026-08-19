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
     * @return {boolean}
     */
    isValidBST(root) {
        function dfs(node, lb, rb) {
            if(!node) return true;
            if(!(node.val > lb && node.val < rb)) return false;
            return dfs(node.left, lb, node.val) && dfs(node.right, node.val, rb);
        }
        return dfs(root, -Infinity, Infinity);
    }
}

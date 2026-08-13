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
     * @return {number[]}
     */

    inorderTraversal(root) {
        let ans = [];

        function dfs(node) {
            if (!node) return;
            if (node.left) dfs(node.left);
            ans.push(node.val);
            if (node.right) dfs(node.right);
        }

        dfs(root);
        return ans;
    }
}

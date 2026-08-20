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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let index = 0;
        let ans = null;
        
        function dfs(node) {
            if (!node) {
                return;
            }
            
            dfs(node.left);
            index++;
            if (ans !== null) return;
            if (index === k) ans = node.val;
            dfs(node.right);
        }
        dfs(root);
        return ans;
    }
}

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

function sameTree(n1, n2) {
    if (!n1 && !n2) return true;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    return sameTree(n1.left, n2.left) && sameTree(n1.right, n2.right);
}

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function dfs(n1, n2) {
            if (!n2) return true;
            if (!n1) return false;

            if (sameTree(n1, n2)) {
                return true;
            }

            return dfs(n1.left, n2) || dfs(n1.right, n2);
        }
        return dfs(root, subRoot);
    }
}

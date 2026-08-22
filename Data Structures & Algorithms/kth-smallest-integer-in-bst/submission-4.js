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
        // Inorder recursive
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

        function morris(node) {
            let curr = node;

            while (curr !== null) {
                if (!curr.left) {
                    index++;
                    if (index == k) return curr.val;
                    curr = curr.right;
                } else {
                    let prev = curr.left;

                    while (prev.right && prev.right !== curr) {
                        prev = prev.right;
                    }

                    if (!prev.right) {
                        prev.right = curr;
                        curr = curr.left
                    } else {
                        prev.right = null;
                        index++;
                        if(index === k) return curr.val;
                        curr = curr.right;
                    }
                }
            }
        }

        return morris(root);
        // dfs(root);
        // return ans;
    }
}

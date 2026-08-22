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
        let curr = root;
        let inorder = [];

        while (curr) {
            if (!curr.left) {
                inorder.push(curr.val);
                curr = curr.right;
            } else {
                let prev = curr.left;

                while(prev.right && prev.right !== curr) {
                    prev = prev.right;
                }

                if(!prev.right) {
                    prev.right = curr;
                    curr = curr.left;
                } else {
                    prev.right = null;
                    inorder.push(curr.val);
                    curr = curr.right;
                }
            }
        }

        return inorder;
    }
}

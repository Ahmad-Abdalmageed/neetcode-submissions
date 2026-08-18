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
    rightSideView(root) {
        let ans = [];
        let q = new Queue();
        if (!root) return ans;
        q.push(root);
        while (!q.isEmpty()) {
            let len = q.size();
            for (let i = 0; i < len; i++) {
                let node = q.pop();
                if (i + 1 == len) ans.push(node.val);
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
        }
        return ans;
    }
}

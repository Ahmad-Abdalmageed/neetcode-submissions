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
     * @return {number[][]}
     */
    levelOrder(root) {
        let ans = [];
        if(!root) return ans;
        let q = new Queue();
        q.push(root);
        while(!q.isEmpty()) {
            let len = q.size();
            let level = [];
            for(let i = 0; i < len; i++) {
                let node = q.pop();
                level.push(node.val);
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
            ans.push(level);
        }

        return ans;
    }
}

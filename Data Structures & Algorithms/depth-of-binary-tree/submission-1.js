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
        // Recursive O(n), O(n)
        // let max = -Infinity;

        // function dfs(node, count) {
        //     if(!node) {
        //         max = Math.max(count, max);
        //         return;
        //     }
        //     dfs(node.left, count+1);
        //     dfs(node.right, count+1);
        //     return;
        // }
        // dfs(root, 0);
        // return max;

        let stack = [];
        stack.push([root, 1]);
        let max = 0;
        if(!root) return 0;
        
        while (stack.length > 0) {
            let [node, depth] = stack.pop();
            max = Math.max(max, depth);
            
            if (node.left) stack.push([node.left, depth + 1]);
            if (node.right) stack.push([node.right, depth + 1]);
        }
        return max;
    }
}

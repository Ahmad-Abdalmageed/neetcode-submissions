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
        // DFS Recursive O(n), O(n)
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

        // DFS Iterative
        // let stack = [];
        // stack.push([root, 1]);
        // let max = 0;
        // if(!root) return 0;

        // while (stack.length > 0) {
        //     let [node, depth] = stack.pop();
        //     max = Math.max(max, depth);

        //     if (node.left) stack.push([node.left, depth + 1]);
        //     if (node.right) stack.push([node.right, depth + 1]);
        // }
        // return max;

        let q = new Queue();
        let level = 0;
        if (!root) return 0;

        q.push(root);

        while (q.size()) {
            let size = q.size();
            for(let i = 0; i < size; i++) {
                let node = q.pop();
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
            level++
        }
        return level;
    }
}
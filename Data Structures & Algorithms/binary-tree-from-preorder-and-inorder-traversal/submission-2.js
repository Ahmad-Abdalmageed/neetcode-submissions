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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // Brute Force O(n^2)
        // if(!preorder.length || !inorder.length) return null;

        // let root = new TreeNode(preorder[0]);
        // let index = inorder.indexOf(preorder[0]);

        // root.left = this.buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
        // root.right = this.buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
        // return root;

        // Hashmap + DFS O(n)
        let hash = {};
        for (let i = 0; i < inorder.length; i++) {
            hash[inorder[i]] = i;
        }
        let preIndx = 0;
        function dfs(start, end) {
            if(start > end) return null;

            let nodeVal = preorder[preIndx];
            let rootIndex = hash[nodeVal];
            preIndx++;

            let node = new TreeNode(nodeVal);
            node.left = dfs(start, rootIndex - 1);
            node.right = dfs(rootIndex + 1, end);

            return node;

        }

        return dfs(0, inorder.length - 1);

        // 4 pointers
        // function dfs(preStart, preEnd, inStart, inEnd) {
        //     if(preStart > preEnd || inStart > inEnd ) return null;

        //     let nodeVal = preorder[preStart]
        //     let rootIndex = hash[nodeVal];
        //     let leftSubTreeLen = rootIndex - inStart;

        //     let node = new TreeNode(nodeVal);
        //     preStart is always the number of nodes visited 
        //     preEnd is never used unless for the above check
        //     node.left = dfs( preStart + 1,                  preStart + leftSubTreeLen, inStart,       rootIndex - 1);
        //     node.right = dfs(preStart + leftSubTreeLen + 1, preEnd,                    rootIndex + 1, inEnd);

        //     return node;

        // }

        // return dfs(0, preorder.length - 1, 0, inorder.length - 1);
    }
}

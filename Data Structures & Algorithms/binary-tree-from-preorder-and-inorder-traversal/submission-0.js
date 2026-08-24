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
        let hash = {}
        for(let i = 0; i < inorder.length; i++) {
            hash[inorder[i]] = i
        }
        
        function dfs(preStart, preEnd, inStart, inEnd) {
            if(preStart > preEnd || inStart > inEnd ) return null;

            let nodeVal = preorder[preStart]
            let rootIndex = hash[nodeVal];
            let leftSubTreeLen = rootIndex - inStart;

            let node = new TreeNode(nodeVal);
            node.left = dfs(preStart + 1, preStart + leftSubTreeLen, inStart, rootIndex - 1);
            node.right = dfs(preStart + leftSubTreeLen + 1, preEnd, rootIndex + 1, inEnd);
            return node;
            
        }

        return dfs(0, preorder.length - 1, 0, inorder.length - 1);
    }
    
}

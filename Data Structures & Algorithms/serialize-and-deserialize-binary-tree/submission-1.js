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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let s = '';
        function dfs(node) {
            if(!node) {s += "#,"; return;}
            s += node.val + ",";
            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);
        return s;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        // let nodes = data.split(',');
        // let index = 0;
        // function dfs() {
        //     if(nodes[index] == '#') {index++; return null;}
        //     let node = new TreeNode(parseInt(nodes[index]));
        //     index++;
        //     node.left = dfs();
        //     node.right = dfs();
        //     return node;
        // }
        let index = 0;

        function dfs() {
            let val = '';
            while(data[index] !== ','){
                val += data[index];
                index++;
            }
            if(val == '#') {
                index++;
                return null;
            } 
            let node = new TreeNode(val);
            index++;
            node.left = dfs();
            node.right = dfs();
            return node;
        }

        return dfs();
    }
}

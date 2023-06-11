/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    if(!root) return "X#";
    let s = root.val + "#";
    s += serialize(root.left);
    s += serialize(root.right);
    return s;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const nodes = data.split('#');
    let index = 0;

    function helper() {
        if(index >= nodes.length || nodes[index] === 'X') {
            index++;  // move index forward
            return null;
        }
        let node = new TreeNode(Number(nodes[index]));
        index++;  // move index forward
        node.left = helper();
        node.right = helper();
        return node;
    }
    
    return helper();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

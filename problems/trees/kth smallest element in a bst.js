/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    
    var helper = function(root){
        if (!root)
            return
        
        helper(root.left)
        
        k -= 1
        if (k == 0){
            res = root.val
            return
        }
        helper(root.right)
    }
    
    res = null
    helper(root)
    return res
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 var maxPathSum = function(root) {
    let ans = -Infinity;
    
    const solution = function(node){
        if(!node){
            return 0;
        }
        
        let left = solution(node.left); 
        let right = solution(node.right);
        let mxSide = Math.max( node.val, Math.max(right,left)+node.val );
        let mxTop = Math.max(mxSide, left+right+node.val);
        ans = Math.max(ans,mxTop);
        return mxSide 
    };
    
    solution(root);
    return ans;
};
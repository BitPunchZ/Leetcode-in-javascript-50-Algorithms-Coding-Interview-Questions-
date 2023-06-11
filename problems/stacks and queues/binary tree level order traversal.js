/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    var ans = [];
    if(!root)return ans;        
    var q = [root];
    
    while(q.length > 0) {
        var n = q.length;
        var level = [];
        for(var i = 0;i<n;++i){
            var f = q.shift();
            level.push(f.val);
            if(f.left){
                q.push(f.left);
            }
            if(f.right){
                q.push(f.right);
            }
        }

        if(level){
            ans.push(level);
        }
    }
    return ans;
};
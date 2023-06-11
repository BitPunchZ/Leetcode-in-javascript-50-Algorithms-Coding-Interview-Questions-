/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root)
        return []
    res = []
    q = [] 
    zigzag = false
    q.push(root)
    while(q.length>0){
        level = []
        let currentLength = q.length;
        for(let i = 0 ; i < currentLength ; ++i){
            if (zigzag){
                node = q.pop()
                level.push(node.val)
                
                if (node.right)
                    q.unshift(node.right)
                if (node.left)
                    q.unshift(node.left)
            }
            else{
                node = q.shift()
                level.push(node.val)
                
                if (node.left)
                    q.push(node.left)
                if (node.right)
                    q.push(node.right)
            }  
            
        }
        res.push(level)
        zigzag = !zigzag
    }      
    return res
};
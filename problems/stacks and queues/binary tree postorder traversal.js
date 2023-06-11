/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    let ans = []
    if(!root) return ans
  
    let s1 = []
    let s2 = [] 
    s1.push(root)
  
    while(s1.length){
      let x = s1.pop()
      s2.push(x)
      if(x.left){
        s1.push(x.left)
      }
      if(x.right){
        s1.push(x.right)
      }
    }
  
    while(s2.length){
      let y = s2.pop()
      ans.push(y.val)
    }
  
    return ans
  };
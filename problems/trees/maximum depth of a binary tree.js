var maxDepth = function(root) {
    if(root==null)
            return 0;
    if(root.left==null && root.right== null)
        return 1;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left,right)+1;
};
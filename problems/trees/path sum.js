var hasPathSum = function(root, sum) {
    function hasSum(node, sum, cur) {
      if (!node) return false;
      cur += node.val;
      if (!node.left && !node.right && cur === sum) {
        return true;
      }
      return hasSum(node.left, sum, cur) || hasSum(node.right, sum, cur);
    }
  
    return hasSum(root, sum, 0);
  };
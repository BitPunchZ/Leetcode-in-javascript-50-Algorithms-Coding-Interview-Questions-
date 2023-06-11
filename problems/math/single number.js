var singleNumber = function(nums) {
    var sumArr = nums.reduce(function(a, b){
       return a + b;
   }, 0);
   var set = new Set(nums);
   var tempArr = Array.from(set);
   var sumSet = tempArr.reduce(function(a, b){
       return a + b;
   }, 0);
   
   return 2*sumSet-sumArr;
};
var validMountainArray = function(A) {
    if(A.length < 3) {
       return false;
   }
   let i = 1;
   while (i< A.length && A[i] > A[i - 1]) {
       i+=1;
   }
   if(i == 1 || i == A.length )
           return false;
       
    while(i < A.length  && A[i] < A[i-1])
           i+=1;
       
   return i===A.length ;
};
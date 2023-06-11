/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


 var findLast = function(nums,target){
    let left = 0
    let right = nums.length
    
    while(right>=left){
        let mid = Math.floor((right+left)/2)
        if(nums[mid]==target){
            //if this is the first occurnce of target, return mid
            if(nums[mid+1]!=target){
                return mid
            }
            left = mid+1
        }
        //if target is on the left side of mid
        else if(nums[mid]>target){
            right = mid-1
        }
        else{
            left = mid+1
        }
    }
    return -1
}


var findFirst = function(nums,target){
    let left = 0
    let right = nums.length
    
    while(right>=left){
        let mid = Math.floor((right+left)/2)
        console.log(mid)
        if(nums[mid]==target){
            //if this is the first occurnce of target, return mid
            if(nums[mid-1]!=target){
                return mid
            }
            right = mid-1
        }
        //if target is on the left side of mid
        else if(nums[mid]>target){
            right = mid-1
        }
        else{
            left = mid+1
        }
    }
    return -1
}

var searchRange = function(nums, target) {
    const first = findFirst(nums,target)
    const last = findLast(nums,target)
    
    return [first,last]
};
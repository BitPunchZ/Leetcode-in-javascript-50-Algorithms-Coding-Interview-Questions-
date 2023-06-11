/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
    
    people = people.sort((a, b) => a - b);
    const n = people.length;
    
    let left = 0;
    let right = people.length-1;
    let boats_number = 0;
    
    while(left<=right){
        if(left==right){
            boats_number++;
            break;
        }
        if(people[left]+people[right]<=limit){
            right--;
            left++;
        }
        else{
            right--;
        }
        boats_number++;
    }
    return boats_number;
};
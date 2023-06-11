/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let ans = new ListNode(0);
    let pointer = ans;
    let carry = 0;
    let sum = 0;
    while(l1!=null || l2!=null){
        sum = carry;
        if(l1!=null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2!=null){
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum/10);
        
        pointer.next = new ListNode(sum%10);
        
        pointer = pointer.next;
    }   
    if(carry>0){
        pointer.next = new ListNode(carry);
    }
    return ans.next;
};
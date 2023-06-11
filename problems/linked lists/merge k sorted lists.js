/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 var merge2Lists = function merge2Lists(l1, l2){
    cur = new ListNode(0);
    ans = cur;
    while(l1 && l2){
        if(l1.val > l2.val){
            cur.next = l2;
            l2 = l2.next;
        }else{
            cur.next = l1;
            l1 = l1.next;    
        }
        cur = cur.next;   
    }
    while(l1){
        cur.next = l1;
        l1 = l1.next;
        cur = cur.next;
    }
    while(l2){
        cur.next = l2;
        l2 = l2.next;
        cur = cur.next;
    }
    return ans.next;
}

var mergeKLists = function(lists) {
let i = 0;
let last = lists.length-1;
let j = last;
if(last<0)return null;
//we want to call merge2Lists untill only one list remains, last will eventually be 0
while(last!=0){
    i = 0;j=last;

    while(j>i){
        lists[i] = merge2Lists(lists[i],lists[j]);
        i++;
        j--;
        last = j;    
    }


}
return lists[0];
};
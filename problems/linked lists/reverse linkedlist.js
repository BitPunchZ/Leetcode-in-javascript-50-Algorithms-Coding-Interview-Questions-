/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let node = null;
    while (head) {        
        const nxt = head.next;
        head.next = node;
        node = head;
        head = nxt;
    }
    
    return node;
    
};
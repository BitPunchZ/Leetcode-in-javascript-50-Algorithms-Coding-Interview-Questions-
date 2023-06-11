/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let ans = new ListNode(0);
    ans.next = head;
  
    let first = ans;
    let second = ans;
  
    for (let i = 1; i <= n + 1; ++i) {
      first = first.next;
    }
  
    while (first) {
      first = first.next;
      second = second.next;
    }
    second.next = second.next.next;
    return ans.next;
  };
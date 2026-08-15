/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let temp = new ListNode(0)
        temp.next = head

        let fast = temp
        let slow = temp

        while(n >= 0){
            fast = fast.next
            n--
        }

        while(fast !== null){
            fast = fast.next
            slow = slow.next
        }

        if(slow !== null){
            slow.next = slow.next.next
        }

        return temp.next
    }
}

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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        let curr = slow.next
        slow.next = null
        let prev = null
        while(curr !== null){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        
        let first = head
        let second = prev

        while(second != null){
            let firstNext = first.next
            let secondNext = second.next

            first.next = second
            second.next = firstNext

            first = firstNext
            second = secondNext
        }
    }
}

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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let newNode = new ListNode()
        let temp = newNode

        let carry = 0
        while(l1 || l2 || carry){
            let num1 = l1 ? l1.val : 0
            let num2 = l2 ? l2.val : 0

            let total = num1 + num2 + carry
            carry = Math.floor(total / 10)
            total = total % 10 

            temp.next = new ListNode(total)

            temp = temp.next
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        return newNode.next
    }
}

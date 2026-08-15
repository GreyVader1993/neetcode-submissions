// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        if(!head){
            return null
        }

        let mapped = new Map()

        let curr = head
        while(curr){
            mapped.set(curr, new Node(curr.val))
            curr = curr.next
        }

        curr = head
        while(curr) {
            if(mapped.has(curr)){
                mapped.get(curr).next = mapped.get(curr.next) ?? null
                mapped.get(curr).random = mapped.get(curr.random) ?? null
            }
            curr = curr.next
        }

        return mapped.get(head)
    }
}

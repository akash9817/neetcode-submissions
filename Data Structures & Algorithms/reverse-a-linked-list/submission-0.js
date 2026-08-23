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
     * @return {ListNode}
     */
    reverseList(head) {
        let temp = head
        let prevNode = null
        while(temp){
            let temp2 = temp.next
            temp.next = prevNode
            prevNode = temp
            temp = temp2
        }
        return prevNode
    }
}

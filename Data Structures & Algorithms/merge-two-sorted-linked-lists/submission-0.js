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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head = new ListNode(0, null);
        let curr = head;

        let left = list1;
        let right = list2;

        while(left && right) {
            if(left.val <= right.val) {
                let temp = left.next;
                left.next = null;
                curr.next = left;
                left = temp;
                curr = curr.next;
            } else {
                let temp = right.next;
                right.next = null;
                curr.next = right;
                right = temp;
                curr = curr.next;
            }
        }

        if(left) {
            curr.next = left;
        }
        if(right) {
            curr.next = right;
        } 
        return head.next;
    }
}

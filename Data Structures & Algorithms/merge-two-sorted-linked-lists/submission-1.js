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

        // Recursion O(n+m) - O(n+m)
        if(!list1){
            return list2
        }
        if(!list2) {
            return list1;
        }

        if(list1.val <= list2.val) {
            list1.next = this.mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = this.mergeTwoLists(list1, list2.next);
            return list2;
        }

        // Iteration O(n+m) O(1)
        // let head = new ListNode(0, null);
        // let curr = head;

        // let left = list1;
        // let right = list2;

        // while(left && right) {
        //     if(left.val <= right.val) {
        //         curr.next = left;
        //         left = left.next;
        //     } else {
        //         curr.next = right;
        //         right = right.next;
        //     }
        //     curr = curr.next;
        // }

        // if(left) {
        //     curr.next = left;
        // }
        // if(right) {
        //     curr.next = right;
        // } 
        // return head.next;
    }
}

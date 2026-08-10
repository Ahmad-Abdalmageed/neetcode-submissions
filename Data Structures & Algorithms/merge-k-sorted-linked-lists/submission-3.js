/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

function mergeTwoSortedLinkedLists(l1, l2) {
    let dummy = new ListNode(-1);
    let curr = dummy
    let left = l1;
    let right = l2;

    while(left && right) { 
        if(left.val <= right.val) {
            curr.next = left
            left = left.next;
        } else {
            curr.next = right;
            right = right.next;
        }
        curr = curr.next;
    }
    if(left) curr.next = left;
    if(right) curr.next = right;

    return dummy.next;
}

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        // Brute O(k^2.n)
        // if(!lists.length) return null
        // for(let i = 1; i < lists.length; i++) {
        //     lists[i] = mergeTwoSortedLinkedLists(lists[i], lists[i - 1]);
        // }
        // return lists[lists.length - 1]

        let heap = new MinPriorityQueue((node) => node.val);
        for(let i = 0; i < lists.length; i++) {
            heap.enqueue(lists[i])
        } 

        let dummy = new ListNode();
        let curr = dummy;

        while(!heap.isEmpty()) {
            let node = heap.dequeue();
            curr.next = node;
            if(node.next) heap.enqueue(node.next);
            curr = curr.next;
        }
        return dummy.next;
        
    }
}

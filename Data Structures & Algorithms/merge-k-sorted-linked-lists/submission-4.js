// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     constructor(val = 0, next = null) {
//  *         this.val = val;
//  *         this.next = next;
//  *     }
//  * }
//  */

// class Solution {
//     /**
//      * @param {ListNode[]} lists
//      * @return {ListNode}
//      */
//     mergeKLists(lists) {
//         // Brute O(k^2.n)
//         // if(!lists.length) return null
//         // for(let i = 1; i < lists.length; i++) {
//         //     lists[i] = mergeTwoSortedLinkedLists(lists[i], lists[i - 1]);
//         // }
//         // return lists[lists.length - 1]

//         let heap = new MinPriorityQueue((node) => node.val);
//         for (let i = 0; i < lists.length; i++) {
//             if (lists[i]) {
//                 heap.enqueue(lists[i]);
//             }
//         }

//         let dummy = new ListNode();
//         let curr = dummy;

//         while (!heap.isEmpty()) {
//             let node = heap.dequeue();
//             curr.next = node;
//             if (node.next) heap.enqueue(node.next);
//             curr = curr.next;
//         }
//         return dummy.next;
//     }
// }


class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;

        let n = lists.length;
        while (n > 1) {
            let j = 0;
            for (let i = 0; i < n; i += 2) {
                lists[j++] = this.mergeList(lists[i], i + 1 < n ? lists[i + 1] : null);
            }
            n = j;
        }
        return lists[0];
    }

    mergeList(l1, l2) {
        const dummy = new ListNode(0);
        let curr = dummy;
        while (l1 && l2) {
            if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }
            else { curr.next = l2; l2 = l2.next; }
            curr = curr.next;
        }
        curr.next = l1 ? l1 : l2;
        return dummy.next;
    }
}
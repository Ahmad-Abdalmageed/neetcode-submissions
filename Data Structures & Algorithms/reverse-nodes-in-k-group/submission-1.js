/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

function reverseLL(head) {
    let curr = head;
    let prev = null;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

function moveKSteps(head, k) {
    let curr = head;
    let steps = 0;
    while (curr && steps < k - 1) {
        curr = curr.next;
        steps++;
    }
    return curr;
}

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let prevNode = null;
        let nextNode = null;

        let temp = head;

        while (temp) {
            let kNode = moveKSteps(temp, k);
            if (!kNode) {
                if (prevNode) {
                    prevNode.next = temp;
                }
                break;
            }
            nextNode = kNode.next;
            kNode.next = null;
            reverseLL(temp);
            if (temp === head) {
                head = kNode;
            } else {
                if (prevNode) {
                    prevNode.next = kNode;
                }
            }
            prevNode = temp;
            temp = nextNode;
        }
        return head;
    }
}

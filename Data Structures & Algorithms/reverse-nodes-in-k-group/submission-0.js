/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
function reverseLinkedList(node) {
    let prev = null;
    let curr = node;

    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

function getKNode(head, k) {
    let curr = head;
    let steps = 0;
    while(curr && steps < k - 1) {
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
        let temp = head;
        let nextNode = null
        let prevNode = null

        while(temp) {
            let kNode = getKNode(temp, k);
            if(!kNode) {
                if(prevNode) prevNode.next = temp;
                break;
            }

            nextNode = kNode.next;
            kNode.next = null
            reverseLinkedList(temp);
            if(head === temp) {
                head = kNode;
            } else {
                prevNode.next = kNode;
            }
            prevNode = temp;
            temp = nextNode;
        }
        return head;
    }
}

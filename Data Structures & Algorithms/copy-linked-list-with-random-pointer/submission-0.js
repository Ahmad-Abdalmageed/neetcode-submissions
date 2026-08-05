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

        // Hash map O(N) - O(N)
        // let map = new Map();
        // map.set(null, null)
        // let curr = head;

        // while(curr) {
        //     map.set(curr, new Node(curr.val, null));
        //     curr = curr.next;
        // }
        // curr = head;

        // while(curr) {
        //     map.get(curr).next = map.get(curr.next);
        //     map.get(curr).random = map.get(curr.random);
        //     curr = curr.next;
        // }
        // return map.get(head);

        let curr = head;
        
        while(curr) {
            let newNode = new Node(curr.val, curr.next, null);
            curr.next = newNode;
            curr = curr.next.next;
        }
        
        curr = head;
        while(curr) { 
            if(curr.random) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }
        let dummy = new Node(0, null, null);
        let res = dummy;
        curr = head;

        while(curr) {
            res.next = curr.next;
            curr.next = curr.next.next;
            res = res.next;
            curr = curr.next;
        }

        return dummy.next;
        
    }
}

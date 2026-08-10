class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);

        this.head.right = this.tail;
        this.tail.left = this.head;

        this.map = new Map();
    }
    insert(node) {
        let prev = this.tail.left;
        prev.right = node;
        node.left = prev;
        node.right = this.tail;
        this.tail.left = node;
    }

    remove(node) {
        let prev = node.left;
        let next = node.right;

        prev.right = next;
        next.left = prev;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)) {
            let node = this.map.get(key);
            this.remove(node);
            this.insert(node);
            return node.value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)) {
            this.remove(this.map.get(key));
        }

        let newNode = new Node(key, value);
        this.map.set(key, newNode)
        this.insert(newNode);


        if(this.map.size > this.capacity) {
            let deleteNode = this.head.right;
            this.remove(deleteNode);
            this.map.delete(deleteNode.key);
        }
    }
}

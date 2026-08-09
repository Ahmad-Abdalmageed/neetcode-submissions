class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val
        this.prev = null
        this.next = null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.left = new Node(0, 0);
        this.right = new Node(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }
    insert(node) {
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }

    get(key) {
        if(this.cache.has(key)) {
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if(this.cache.size > this.capacity) {
            let lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}

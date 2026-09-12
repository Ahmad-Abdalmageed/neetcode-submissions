class MedianFinder {
    constructor() {
        this.right = new MinPriorityQueue();
        this.left = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    balance() {
        let diff = this.right.size() - this.left.size();
        if(diff < -1) {
            this.right.enqueue(this.left.dequeue());
        } else if(diff > 1) {
            this.left.enqueue(this.right.dequeue());
        } 
    }

    addNum(num) {
        if(!this.left.size() || num >= this.left.front()) {
            this.right.enqueue(num);
        } else {
            this.left.enqueue(num);
        }
        
        this.balance();
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.left.size() > this.right.size()) {
            return this.left.front();
        } else if(this.left.size() < this.right.size()) {
            return this.right.front();
        }
        return (this.right.front() + this.left.front()) / 2
    }
}

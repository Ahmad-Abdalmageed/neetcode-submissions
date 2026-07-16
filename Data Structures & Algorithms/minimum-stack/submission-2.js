class MinStack {
    constructor() {
        this.stack = [];
        // this.minStack = [];
        this.min;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // this.stack.push(val);
        // if (!this.minStack.length || this.minStack[this.minStack.length - 1] >= val) this.minStack.push(val);
        if (!this.stack.length) {
            this.stack.push(0);
            this.min = val;
        } else {
            this.stack.push(val - this.min);
            if (val < this.min) this.min = val;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        let top = this.stack.pop();
        // if (this.minStack[this.minStack.length - 1] === top) this.minStack.pop();
        if(top < 0) {
            this.min = this.min - top
        }

    }

    /**
     * @return {number}
     */
    top() {
        const top = this.stack[this.stack.length - 1];
        return top < 0 ? this.min: this.min + top;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}

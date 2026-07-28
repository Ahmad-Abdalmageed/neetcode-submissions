class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let currentValues = this.keyStore.get(key) || [];
        currentValues.push([value, timestamp])
        this.keyStore.set(key,currentValues );
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let currentValues = this.keyStore.get(key);
        let ans = ""
        if(!currentValues) return "";
        let left = 0;
        let right = currentValues.length - 1;
        while(left <= right) {
            let middle = Math.floor((left + right) / 2);
            if(currentValues[middle][1] <= timestamp) {
                left = middle + 1;
                ans = currentValues[middle][0];
            } else {
                right = middle - 1;
            }
        }
        return ans;
    }
}

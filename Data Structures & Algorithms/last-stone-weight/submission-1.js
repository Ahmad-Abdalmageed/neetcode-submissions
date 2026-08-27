class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length > 1) {
            stones.sort((a, b) => a - b);
            
            let x = stones.pop();
            let y = stones.pop();

            if(x == y) continue;
            stones.push(Math.abs(x - y));
        }

        return stones.length ? stones[0]: 0;
    }
}

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = -Infinity;
        for(let pile of piles) {
            max = Math.max(max, pile);
        }

        for(let k = 1; k <= max; k++) {
            let hours = 0;
            for(let pile of piles) {
                hours += Math.ceil(pile / k);
            }
            if(hours <= h) return k
        }
        return -Infinity
    }
}
  
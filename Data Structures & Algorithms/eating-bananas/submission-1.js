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
        let left = 1;
        let right = max;
        let ans = Infinity;

        while(left <= right) {
            let middle = Math.floor((left+right) / 2);
            let hours = 0;
            for(let pile of piles) {
                hours += Math.ceil(pile / middle);
            }
            console.log(middle, hours)
            if(hours <= h) {
                ans = middle
                right = middle - 1;
            }
            else if (hours > h) left = middle + 1;
            
        }

        return ans
    }
}
  
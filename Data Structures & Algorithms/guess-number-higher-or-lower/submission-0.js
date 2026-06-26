/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
            let i = 0;
    let j = n;

    while (i <= j) {
        let m = i + Math.floor((j - i) / 2);
        if(guess(m) < 0){
            j = m - 1;
        } else if (guess(m) > 0){
            i = m + 1;
        } else {
            return m;
        }
    }
    }
}

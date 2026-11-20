/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */

    // Two pointers
    minMeetingRooms(intervals) {
        let starts = intervals.map((interval)=> interval.start).sort((a, b) => a - b);
        let ends = intervals.map((interval) => interval.end).sort((a, b) => a - b);

        let count = 0;
        let res = 0;
        let i = 0;
        let j = 0;
        let t = 0;

        while(t < intervals.length) {
            if(starts[i] < ends[j]) {
                count++;
                i++;
            } else {
                count--;
                j++;
            }
            res = Math.max(res, count);
            t++;
        }

        return res;
    }
}

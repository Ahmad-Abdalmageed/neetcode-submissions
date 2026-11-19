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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b)=> a.end - b.end);
        for(let i = 1; i < intervals.length; i++) {
            let interval = intervals[i];
            let prev = intervals[i -1];

            if(interval.start < prev.end) {
                return false;
            }
        }
        return true;
    }
}

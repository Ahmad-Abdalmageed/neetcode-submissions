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
    minMeetingRooms(intervals) {
        let pq = new MinPriorityQueue((x) => x.end);
        intervals.sort((a, b) => a.start - b.start)
        for (let interval of intervals) {
            if (!pq.isEmpty() && pq.front().end <= interval.start) {
                pq.pop();
            }
            pq.push(interval);
        }

        return pq.size();
    }
}

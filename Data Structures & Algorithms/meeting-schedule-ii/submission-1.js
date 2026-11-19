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
        intervals.sort((a, b) => a.start - b.start);
        let pq = new MinPriorityQueue();

        for (let i = 0; i < intervals.length; i++) {
            let interval = intervals[i];
            if(interval.start >= pq.front()) {
                pq.dequeue();
            }
            pq.enqueue(interval.end);
        }

        return pq.size()
    }
}

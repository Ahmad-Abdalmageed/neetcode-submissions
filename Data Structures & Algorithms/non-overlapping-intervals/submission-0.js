class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let cnt = 0;
        intervals.sort((a, b) => a[0] - b[0]);
        let prevEnd = intervals[0];

        for(let i = 0; i < intervals.length; i++) {
            let [start, end] = intervals[i];

            if(start < prevEnd) {
                cnt++;
                prevEnd = Math.min(end, prevEnd);
            } else {
                prevEnd = end;
            }
        }

        return cnt;
    }
    
}

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        // Greedy: T: O(nlogn) n= number of intervals, S:1
        let kept = 1;
        intervals.sort((a, b) => a[1] - b[1]);
        let prevEnd = intervals[0][1];

        for(let i = 1; i < intervals.length; i++) {
            let [start, end] = intervals[i];

            if(start >= prevEnd) {
                kept++;
                prevEnd = end;
            }
        }

        return intervals.length - kept;
    }
    
}

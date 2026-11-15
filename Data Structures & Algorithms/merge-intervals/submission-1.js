class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let ans = [];
        intervals.sort((a, b) => a[0] - b[0]);

        let i = 0;
        while (i < intervals.length) {
            let [start, end] = intervals[i];
            let j = i + 1;
            while (j < intervals.length && intervals[j][0] <= end) {
                start = Math.min(start, intervals[j][0]);
                end = Math.max(end, intervals[j][1]);
                j++;
                i++;
            }
            i++;
            ans.push([start, end]);
        }
        return ans;
    }
}

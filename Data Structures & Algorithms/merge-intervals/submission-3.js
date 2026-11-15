class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {

        // sort and sweep nlogn
        // let ans = [];
        // intervals.sort((a, b) => a[0] - b[0]);

        // let i = 0;
        // while (i < intervals.length) {
        //     let [start, end] = intervals[i];
        //     let j = i + 1;
        //     while (j < intervals.length && intervals[j][0] <= end) {
        //         end = Math.max(end, intervals[j][1]);
        //         j++;
        //         i++;
        //     }
        //     i++;
        //     ans.push([start, end]);
        // }
        // return ans;
        intervals.sort((a, b) => a[0] - b[0]);
        let ans = [intervals[0]];

        for(let k = 1; k < intervals.length; k++) {
            let last = ans[ans.length - 1];
            let [start, end] = intervals[k];
            if(start <= last[1]) {
                last[1] = Math.max(end, last[1]);
            } else {
                ans.push([start, end])
            }
        }
        return ans;
    }
}

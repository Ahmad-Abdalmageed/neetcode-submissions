class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let distances = [];

        for(let i = 0; i < points.length; i++) {
            let distance = Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2));
            distances.push([distance, points[i]]);
        }

        distances.sort((a, b)=> a[0] - b[0]);
        let ans = [];
        for(let i =0; i < k; i++ ){
            ans.push(distances[i][1]);
        }
        return ans;
    }
}

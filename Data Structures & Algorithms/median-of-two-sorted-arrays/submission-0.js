class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let len = nums1.length + nums2.length;

        let left = 0;
        let right = 0;
        let n = [];
        let lo = Math.floor((len - 1) / 2);
        let hi = Math.floor(len / 2);

        while (n.length <= hi) {
            let a  = left < nums1.length ? nums1[left] : Infinity;
            let b = right < nums2.length ? nums2[right]: Infinity
            if (a <= b) {
                n.push(a);
                left++;
            } else {
                n.push(b);
                right++;
            }
        }
        return (n[lo] + n[hi]) / 2;
    }
}

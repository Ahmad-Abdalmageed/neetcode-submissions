class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // let len = nums1.length + nums2.length;

        // let left = 0;
        // let right = 0;
        // let n = [];
        // let lo = Math.floor((len - 1) / 2);
        // let hi = Math.floor(len / 2);

        // while (n.length <= hi) {
        //     let a  = left < nums1.length ? nums1[left] : Infinity;
        //     let b = right < nums2.length ? nums2[right]: Infinity;
        //     if (a <= b) {
        //         n.push(a);
        //         left++;
        //     } else {
        //         n.push(b);
        //         right++;
        //     }
        // }
        // return (n[lo] + n[hi]) / 2;
        let left = Math.floor((nums1.length + nums2.length + 1) / 2);
        if(nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }
        let low = 0;
        let high = nums1.length; 
        let len = nums1.length + nums2.length;
        
        while(low <= high) {
            let mid1 = Math.floor((low + high) / 2); // | r1
            let mid2 = left - mid1 // | r2

            let l1 = -Infinity
            let l2 = -Infinity;
            let r1 = Infinity
            let r2 = Infinity;

            if(mid1 < nums1.length) r1 = nums1[mid1];
            if(mid2 < nums2.length) r2 = nums2[mid2];

            if(mid1 - 1 >= 0) l1 = nums1[mid1 - 1];
            if(mid2 - 1 >= 0) l2 = nums2[mid2 - 1];

            if(l1 <= r2 && l2 <= r1) {
                if(len % 2 == 1) {
                    return Math.max(l1, l2);
                } else {
                    return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0
                }
            }
            else if(l1 > r2) high = mid1 - 1;
            else low = mid1 + 1;
        }
        return 0.0;
    }
}

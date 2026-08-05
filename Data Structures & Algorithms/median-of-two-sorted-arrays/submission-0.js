class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let i = 0
        let j = 0
        let p1 = nums1.length - 1
        let p2 = nums2.length - 1
        let nums3 = new Array()

        while(i <= p1 && j <= p2){
            if(nums1[i] < nums2[j]){
                nums3.push(nums1[i])
                i++
            } else {
                nums3.push(nums2[j])
                j++
            }
        }

        while(i <= p1){
            nums3.push(nums1[i])
            i++
        }

        while(j <= p2){
            nums3.push(nums2[j])
            j++
        }

        let mid = Math.floor(nums3.length/2)
        return (nums3.length%2 === 0) ? (nums3[mid] + nums3[mid - 1])/2 : nums3[mid]
    }
}

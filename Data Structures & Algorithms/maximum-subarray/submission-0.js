class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum = 0
        let maxSum = nums[0]
        let i = 0

        while(i < nums.length){
            currSum = Math.max(nums[i], currSum + nums[i])
            maxSum = Math.max(maxSum, currSum)
            i++
        }
        return maxSum
    }
}

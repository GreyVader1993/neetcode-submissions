class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const arr = new Array(nums.length).fill(-1)
        const best = (i) => {
            if(i >= nums.length){
                return 0
            }
            if(arr[i] !== -1){
                return arr[i]
            }
            return arr[i] = Math.max(best(i + 1), (nums[i] + best(i + 2)))
        }
        return best(0)
    }
}

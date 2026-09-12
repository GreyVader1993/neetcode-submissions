class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mapped = new Map()
        for(let i = 0; i < nums.length; i++){
            mapped.set(nums[i], (mapped.get(nums[i]) || 0 ) + 1)
            if(mapped.get(nums[i]) > 1){
                return true
            }
        }
        return false
    }
}

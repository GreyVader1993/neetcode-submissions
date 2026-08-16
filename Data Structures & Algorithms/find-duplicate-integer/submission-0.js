class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let mapped = new Map()
        for(let i = 0; i < nums.length; i++){
            if(mapped.has(nums[i])){
                return nums[i]
            }
            mapped.set(nums[i], (mapped.get(nums[i]) || 0) + 1)
        }
        return -1
    }
}

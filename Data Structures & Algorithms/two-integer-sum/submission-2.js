class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mapped = new Map()

        for(let i = 0; i < nums.length; i++){
            if(mapped.has(target - nums[i])){
                return [mapped.get(target - nums[i]), i]
            }
            mapped.set(nums[i], i)
        }
        return false
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mapped = new Set()
        for(let i = 0; i < nums.length; i++){
            if(mapped.has(nums[i])){
                return true;
            }
            mapped.add(nums[i])
        }
        return false
    }
}

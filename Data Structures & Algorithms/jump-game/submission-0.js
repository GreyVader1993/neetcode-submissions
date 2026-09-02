class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let result = 0
        for(let i = 0; i < nums.length; i++){
            if(result < i){
                return false
            }
            result = Math.max(result, i + nums[i])
        }
        return true
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let rob1 = 0
        let rob2 = 0
        let rob3 = 0
        let rob4 = 0
        if(nums.length === 1){
            return nums[0]
        }

        for(let n = 0; n < nums.length - 1; n++){
            let temp = Math.max(nums[n] + rob1, rob2)
            rob1 = rob2
            rob2 = temp
        }

        for(let n = 1; n < nums.length; n++){
            let temp = Math.max(nums[n] + rob3, rob4)
            rob3 = rob4
            rob4 = temp
        }
        return Math.max(rob2, rob4)
    }
}

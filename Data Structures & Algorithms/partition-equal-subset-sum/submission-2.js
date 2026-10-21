class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = nums.reduce((a, b) => a + b, 0);
        if (sum % 2 !== 0) {
            return false;
        }

        let dp = Array.from(Array(nums.length + 1), () => Array(sum/2 + 1).fill(null))
        const can = (i, t) => {
            if(t === 0){
                return true
            }

            if(t < 0 || i === nums.length){
                return false
            }

            if(dp[i][t] !== null){
                return dp[i][t]
            }

            dp[i][t] = can(i + 1, t) || can(i + 1, t - nums[i])
            return dp[i][t]
        }
        return can(0, sum/2)
    }
}

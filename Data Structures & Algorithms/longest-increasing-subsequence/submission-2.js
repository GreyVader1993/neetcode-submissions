class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const dp = new Array(nums.length).fill(-1)
        const lis = (i) => {
            if(dp[i] !== -1){
                return dp[i]
            }

            let best = 1

            for(let j = i + 1; j < nums.length; j++){
                if(nums[j] > nums[i]){
                    best = Math.max(best, 1 + lis(j))
                }
            }
            dp[i] = best
            return dp[i]
        }

        let answer = 0
        for(let i = 0; i < nums.length; i++){
            answer = Math.max(answer, lis(i))
        }
        return answer
    }
}

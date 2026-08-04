class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let results = []

        function backtrack(remaining, index, currentCombo){
            if(remaining === 0){
                results.push([...currentCombo])
                return
            }

            for(let i = index; i < nums.length; i++){
                if(remaining - nums[i] < 0){
                    continue
                }

                currentCombo.push(nums[i])
                backtrack(remaining - nums[i], i, currentCombo)
                currentCombo.pop()
            }
        }

        backtrack(target, 0, [])
        return results
    }
}

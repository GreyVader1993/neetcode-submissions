class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let results = []

        function backtrack(currentState, used){
            if(nums.length === currentState.length){
                results.push([...currentState])
                return
            }

            for(let i = 0; i < nums.length; i++){
                if(used.has(nums[i])){
                    continue
                }

                currentState.push(nums[i])
                used.add(nums[i])
                backtrack(currentState, used)
                currentState.pop()
                used.delete(nums[i])
            }
        }
        backtrack([], new Set())
        return results
    }
}

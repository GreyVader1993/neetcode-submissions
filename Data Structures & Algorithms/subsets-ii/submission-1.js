class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let results = []
        nums.sort()

        function backtrack(index, currentState){
            results.push([...currentState])

            for(let i = index; i < nums.length; i++){
                if(i > index && nums[i] === nums[i-1]){
                    continue
                }
                currentState.push(nums[i])
                backtrack(i + 1, currentState)
                currentState.pop()
            }
        }

        backtrack(0, [])
        return results
    }
}

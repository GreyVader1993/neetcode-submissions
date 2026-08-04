class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let results = []
        this.backtrack(nums, 0, [], results)
        return results
    }

    backtrack(nums, index, subset, result){
        if(index === nums.length){
            result.push([...subset])
            return
        }

        subset.push(nums[index])
        this.backtrack(nums, index + 1, subset, result)
        subset.pop()
        this.backtrack(nums, index + 1, subset, result)
    }
}

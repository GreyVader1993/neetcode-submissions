class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let bestSoFar = nums[0]
        let maxProd = 1
        let minProd = 1

        for(let num of nums){
            let curr = maxProd * num
            maxProd = Math.max(num, Math.max(num * maxProd, num * minProd))
            minProd = Math.min(num, Math.min(num * minProd, curr))
            bestSoFar = Math.max(bestSoFar, maxProd)
        }
        return bestSoFar
    }
}

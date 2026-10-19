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
            if(num < 0){
                [minProd, maxProd] = [maxProd, minProd]
            }

            maxProd = Math.max(num, maxProd * num);
            minProd = Math.min(num, minProd * num);

            bestSoFar = Math.max(bestSoFar, maxProd);
        }
        return bestSoFar
    }
}

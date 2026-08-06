class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = 0
        let numset = new Set(nums)

        for(let num of numset){
            if(!numset.has(num - 1)){
                let curr = num
                let currlength = 1

                while(numset.has(curr + 1)){
                    curr++
                    currlength++
                }

                count = Math.max(count, currlength)
            }
        }

        return count
    }
}

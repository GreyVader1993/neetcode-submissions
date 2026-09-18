class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0
        let right = 0
        let len = nums.length
        let maxArr = new Array()
        let que = new Deque()

        while(right < len){
            while(que.size() && nums[que.back()] < nums[right]){
                que.popBack()
            }
            que.pushBack(right)

            if(left > que.front()){
                que.popFront()
            }

            if(right + 1 >= k){
                maxArr[left] = nums[que.front()]
                left++
            }
            right++
        }
        return maxArr
    }
}

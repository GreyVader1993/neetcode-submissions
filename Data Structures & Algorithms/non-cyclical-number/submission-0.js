class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let slow = n
        let fast = this.sumOfSquares(n)

        while(slow !== fast){
            fast = this.sumOfSquares(fast)
            fast = this.sumOfSquares(fast)
            slow = this.sumOfSquares(slow)
        }

        return fast === 1
    }

    sumOfSquares(n){
        let sum = 0
        while(n > 0){
            let rem = n % 10
            rem *= rem
            sum += rem
            n = Math.floor(n/10)
        }
        return sum
    }
}

class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        function power(x, n){
            if(x === 0){
                return 0
            }

            if(n === 0){
                return 1
            }

            const res = power(x * x, Math.floor(n / 2))
            return n%2 === 0 ? res : x * res
        }

        const res = power(x, Math.abs(n))
        return n >= 0 ? res : 1 / res
    }
}

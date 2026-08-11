class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles)

        function hoursNeeded(k) {
            let sum = 0
            for(let i = 0; i < piles.length; i++){
                sum += Math.ceil(piles[i]/k)
            }
            return sum
        }

        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            if(hoursNeeded(mid) > h){
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return left
    }
}

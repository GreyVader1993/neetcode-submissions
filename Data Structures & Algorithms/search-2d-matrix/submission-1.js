class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0
        let right = (matrix.length * matrix[0].length) - 1
        let mid

        while(left <= right){
            mid = Math.floor((right + left)/2)
            let indices = this.getRowCol(mid, matrix[0].length)

            if(matrix[indices[0]][indices[1]] === target){
                return true
            } else if(matrix[indices[0]][indices[1]] > target){
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return false
    }

    getRowCol(val, colLength){
        return [Math.floor(val / colLength), val % colLength]
    }
}

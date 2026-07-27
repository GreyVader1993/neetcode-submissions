class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let queue = []
        const INF = 2147483647

        for(let row = 0; row < grid.length; row++) {
            for(let col = 0; col < grid[0].length; col++) {
                if(grid[row][col] === 0) {
                    queue.push([row, col])
                }
            }
        }

        while(queue.length > 0){
            let [row, col] = queue.shift()
            let directions = [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]

            for(let [newRow, newCol] of directions){
                if(newRow >= 0 && newRow < grid.length && newCol >=0 && newCol < grid[0].length && grid[newRow][newCol] === INF){
                    grid[newRow][newCol] = grid[row][col] + 1
                    queue.push([newRow, newCol])
                }
            }
        }
    }
}

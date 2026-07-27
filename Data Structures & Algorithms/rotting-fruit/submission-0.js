class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
            let queue = []
    let minutes = 0
    let freshCount = 0

    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === 2) {
                queue.push([row, col])
            }
            if(grid[row][col] === 1){
                freshCount++
            }
        }
    }

    while(queue.length > 0 && freshCount > 0){
        let levelSize = queue.length

        for(let i = 0; i < levelSize; i++){
            let [row, col] = queue.shift()
            let directions = [[row-1,col],[row+1,col],[row,col-1],[row,col+1]]

            for(let [newRow, newCol] of directions) { 
                if(newRow >= 0 && newRow < grid.length && newCol >=0 && newCol < grid[0].length && grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2
                    queue.push([newRow, newCol])
                    freshCount--
                }
            }
        }
        minutes++
    }
    return freshCount === 0 ? minutes : -1
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0

        for(let row = 0; row < grid.length; row++){
            for(let col = 0; col < grid[0].length; col++){
                if(grid[row][col] === 1){
                    let area = dfs(grid, row, col)
                    maxArea = Math.max(maxArea, area)
                }
            }
        }
        return maxArea
    }
}

    function dfs(grid, row, col) {
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0){
            return 0
        }
        grid[row][col] = 0
        return 1 + dfs(grid, row, col + 1) + dfs(grid, row + 1, col) + dfs(grid, row - 1, col) + dfs(grid, row, col - 1)
    }
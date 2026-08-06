class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowSet = []
        let colSet = []
        let boxSet = []
        

        for(let i = 0; i < 9; i++){
            rowSet.push(new Set())
            colSet.push(new Set())
            boxSet.push(new Set())
        }

        for(let row = 0; row < 9; row++){
            for(let col = 0; col < 9; col++){
                let val = board[row][col]

                if(val === "."){
                    continue
                }

                let index = this.grid(row, col)

                if(rowSet[row].has(val)
                    || colSet[col].has(val)
                    || boxSet[index].has(val)){
                        return false
                }

                rowSet[row].add(val)
                colSet[col].add(val)
                boxSet[index].add(val)
            }
        }

        return true
    }

    grid(row, col){
        return Math.floor(row/3) * 3 + Math.floor(col/3)
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        function backtrack(row, col, index){
            if(index === word.length){
                return true
            }

            if(row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] !== word[index]){
                return false
            }

            let temp = board[row][col]
            board[row][col] = "#"

            let found = backtrack(row + 1, col, index + 1) || backtrack(row - 1, col, index + 1) || backtrack(row, col + 1, index + 1) || backtrack(row, col - 1, index + 1)
            board[row][col] = temp
            return found
        }

        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                if(backtrack(i, j, 0)){
                    return true
                }
            }
        }
        return false
    }
}

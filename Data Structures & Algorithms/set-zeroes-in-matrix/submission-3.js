class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(s) {
        let firstRowZero = false
        let firstColZero = false

        for(let row = 0; row < s.length; row++){
            if(s[row][0] === 0)
                firstColZero = true
        }

        for(let col = 0; col < s[0].length; col++){
            if(s[0][col] === 0)
                firstRowZero = true
        }

        for(let row = 1; row < s.length; row++){
            for(let col = 1; col < s[0].length; col++){
                if(s[row][col] === 0){
                    s[0][col] = 0
                    s[row][0] = 0 
                }
            }
        }

        for(let row = 1; row < s.length; row++){
            for(let col = 1; col < s[0].length; col++){
                if(s[0][col] === 0 || s[row][0] === 0){
                    s[row][col] = 0
                }
            }
        }

        if(firstRowZero){
            for(let col = 0; col < s[0].length; col++){
                s[0][col] = 0
            }
        }

        if(firstColZero){
            for(let row = 0; row < s.length; row++){
                s[row][0] = 0
            }
        }
    }
}

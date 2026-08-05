class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits){
            return []
        }
        
        let map = {
            '2' : 'abc',
            '3' : 'def',
            '4' : 'ghi',
            '5' : 'jkl',
            '6' : 'mno',
            '7' : 'pqrs',
            '8' : 'tuv',
            '9' : 'wxyz'
        }

        let result = []

        function backtrack(index, currState){
            if(currState.length === digits.length){
                result.push(currState)
                return
            }

            let strings = map[digits[index]]
            for (let char of strings){
                backtrack(index + 1, currState + char)
            }
        }

        backtrack(0, '')
        return result
    }
}

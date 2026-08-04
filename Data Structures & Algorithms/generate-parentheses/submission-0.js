class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let results = []

        function backtrack(currStr, openCount, closeCount){
            if(openCount === n && closeCount === n){
                results.push(currStr)
            }

            if(openCount < n){
                backtrack(currStr + "(", openCount + 1, closeCount)
            }

            if(closeCount < openCount){
                backtrack(currStr + ")", openCount, closeCount + 1)
            }
        }

        backtrack("", 0, 0)
        return results
    }
}

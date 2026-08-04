class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let results = []

        function backtrack(index, currState){
            if(currState.length === k){
                results.push([...currState])
                return
            }

            for(let i = index; i <= n; i++){
                currState.push(i)
                backtrack(i + 1, currState)
                currState.pop()
            }
        }

        backtrack(1, [])
        return results
    }
}

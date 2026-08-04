class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let results = []
        candidates.sort()

        function backtrack(remaining, index, currentCombo){
            if(remaining === 0){
                results.push([...currentCombo])
                return
            }

            for(let i = index; i < candidates.length; i++){
                if(remaining - candidates[i] < 0){
                    continue
                }

                if(i > index && candidates[i] === candidates[i - 1]){
                    continue
                }

                currentCombo.push(candidates[i])
                backtrack(remaining - candidates[i], i + 1, currentCombo)
                currentCombo.pop()
            }
        }
        backtrack(target, 0, [])
        return results
    }
}

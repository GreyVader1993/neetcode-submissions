class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let totalGas = 0
        let totalCost = 0
        let currentGas = 0
        let startIndex = 0

        for(let i = 0; i < gas.length; i++){
            totalGas += gas[i]
            totalCost += cost[i]
            currentGas += gas[i] - cost[i]

            if(currentGas < 0){
                currentGas = 0
                startIndex = i + 1
            }
        }

        return totalGas >= totalCost ? startIndex : -1
    }
}

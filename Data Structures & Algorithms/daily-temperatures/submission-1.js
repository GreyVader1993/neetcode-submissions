class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let temps = new Array(temperatures.length).fill(0)
        let stack = []

        for(let i = 0; i < temperatures.length; i++){
            let today = temperatures[i]
            let olderday = temperatures[stack[stack.length - 1]]

            while(stack.length > 0 && today > olderday){
                let index = stack.pop()
                temps[index] = i - index
                olderday = temperatures[stack[stack.length - 1]]
            }
            stack.push(i)
        }
        return temps
    }
}

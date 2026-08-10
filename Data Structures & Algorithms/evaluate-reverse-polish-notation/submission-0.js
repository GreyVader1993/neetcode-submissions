class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []

        for(let token of tokens){
            if(!isNaN(token)){
                stack.push(token)
            } else {
                let pop1 = parseInt(stack.pop())
                let pop2 = parseInt(stack.pop())

                stack.push(token === "/" ? Math.trunc(pop2 / pop1) : token === "*" ? pop2 * pop1 : token === "+" ? pop2 + pop1 : pop2 - pop1)
            }
        }

        return parseInt(stack[0])
    }
}

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let times = new Array(position.length).fill(0)
        let newPositions = new Array(position.length)
        let stack = []
        let count = 0

        for(let i = 0; i < position.length; i++){
            newPositions[i] = [position[i], speed[i]]
        }

        newPositions.sort((a, b) => b[0] - a[0])

        for(let i = 0; i < newPositions.length; i++){
            times[i] = this.timeTaken(target, newPositions[i])
        }

        for(let i = 0; i < newPositions.length; i++){
            count++
            if(stack.length > 0 && times[i] <= times[stack[stack.length - 1]]){
                count--
                continue
            }
            stack.push(i)
        }

        return count
    }

    timeTaken(target, pos){
        return (target - pos[0])/pos[1]
    }
}

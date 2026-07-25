/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let map = new Map()

        function dfs(node){
            if(map.has(node)){
                return map.get(node)
            }

            let clone = new Node(node.val)
            map.set(node, clone)

            for(let neighbor of node.neighbors){
                clone.neighbors.push(dfs(neighbor))
            }

            return clone
        }

        return node ? dfs(node) : null
    }
}

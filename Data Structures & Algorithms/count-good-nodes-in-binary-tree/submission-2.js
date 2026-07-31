/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let count = 0
        let max = -Infinity

        function dfs(node, maxSoFar){
            if(!node){
                return
            }
            if(node.val >= maxSoFar){
                count++
            }

            let curMax = Math.max(maxSoFar, node.val)
            dfs(node.left, curMax)
            dfs(node.right, curMax)
        }
        dfs(root, max)
        return count
    }
}

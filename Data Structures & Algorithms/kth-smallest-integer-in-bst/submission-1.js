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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let soln = []
        let count = k
        function dfs(node){
            if(!node){
                return
            }

            if(count === 0){
                return
            }

            dfs(node.left)
            count--
            if(count === 0){
                soln.push(node.val)
            }
            dfs(node.right)
        }
        dfs(root)
        return soln[0]
    }
}

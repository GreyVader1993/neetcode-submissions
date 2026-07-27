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
     * @return {boolean}
     */
    isBalanced(root) {
        return this.dfs(root)[1]
    }

    dfs(root){
        if(!root){
            return [0, true]
        }

        let [leftHeight, lBalance] = this.dfs(root.left)
        let [rightHeight, rBalance] = this.dfs(root.right)

        let balance = lBalance && rBalance && Math.abs(leftHeight - rightHeight) <= 1
        let height = 1 + Math.max(leftHeight, rightHeight)
        return [height, balance]
    }
}

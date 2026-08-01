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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        function traversal(preorder, inorder){
            if(preorder.length === 0){
                return null
            }

            let rootVal = preorder[0]
            let root = new TreeNode(rootVal)
            let rootIndex = inorder.indexOf(rootVal)

            let lInOrder = inorder.slice(0, rootIndex)
            let rInOrder = inorder.slice(rootIndex + 1)

            let lPreOrder = preorder.slice(1, rootIndex + 1)
            let rPreOrder = preorder.slice(rootIndex + 1)

            root.left = traversal(lPreOrder, lInOrder)
            root.right = traversal(rPreOrder, rInOrder)

            return root
        }
        return traversal(preorder, inorder)
    }
}

/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const convertBST = (root) => {
  let prev = 0;

  const helper = (tempRoot) => {
    if (!tempRoot) return tempRoot;
    helper(tempRoot.right);
    tempRoot.val += prev;
    prev = tempRoot.val;
    helper(tempRoot.left);
  };
  helper(root);
  return root;
};

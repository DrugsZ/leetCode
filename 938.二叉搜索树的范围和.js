/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
function rangeSumBST(root, L, R) {
  const trees = [root];
  let result = 0;

  while (trees.length) {
    const cur = trees.shift();
    if (!cur) continue;
    const { left, right, val } = cur;

    if (val >= L && val <= R) {
      result += val;
    }
    if (val > L) {
      trees.push(left);
    }
    if (val < R) {
      trees.push(right);
    }
  }

  return result;
}

module.exports = {
  rangeSumBST,
};

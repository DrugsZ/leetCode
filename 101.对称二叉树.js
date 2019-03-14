/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (45.18%)
 * Total Accepted:    22.8K
 * Total Submissions: 50.6K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 *
 * 例如，二叉树[1,2,2,3,4,4,3] 是对称的。
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 *
 *
 * 但是下面这个[1,2,2,null,3,null,3] 则不是镜像对称的:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 *
 *
 * 说明:
 *
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


function isSymmetricHelp(left, right) {
  if (!left || !right) {
    return left === right;
  }
  if (left.val !== right.val) {
    return false;
  }

  return isSymmetricHelp(left.left, right.right) && isSymmetricHelp(left.right, right.left);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  return !root || isSymmetricHelp(root.left, root.right);
}


const isSymmetricByIteration = (root) => {
  if (!root) {
    return true;
  }

  const qLeft = [root.left];
  const qRight = [root.right];

  while (qLeft.length || qRight.length) {
    const left = qLeft.shift();
    const right = qRight.shift();

    if (!left && !right) {
      continue;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val !== right.val) {
      return false;
    }

    qLeft.push(left.left);
    qRight.push(right.right);
    qLeft.push(left.right);
    qRight.push(right.left);
  }

  return !qLeft.length && !qRight.length;
};

module.export = {
  isSymmetric,
  isSymmetricByIteration,
};

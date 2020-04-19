/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
  const getRoot = (head, endNode) => {
    if (head === endNode) return null;
    let slow = head;
    let fast = head;
    while (fast !== endNode && fast.next !== endNode) {
      slow = slow.next;
      fast = fast.next.next;
    }
    const root = new TreeNode(slow.val);
    root.left = getRoot(head, slow);
    root.right = getRoot(slow.next, endNode);
    return root;
  };
  return getRoot(head, null);
};
// @lc code=end

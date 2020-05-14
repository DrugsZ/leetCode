/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function (head, m, n) {
  if (!head) {
    return head;
  }
  const dummy = new ListNode(-1);
  dummy.next = head;
  let tempHead = dummy;
  let tempHeadIndex = m - 1;
  while (tempHeadIndex--) {
    tempHead = tempHead.next;
  }
  let reverNumber = n - m + 1;
  let preNode = null;
  let cur = tempHead.next;
  while (reverNumber--) {
    const { next } = cur;
    cur.next = preNode;
    preNode = cur;
    cur = next;
  }
  tempHead.next.next = cur;
  tempHead.next = preNode;
  return dummy.next;
};
// @lc code=end

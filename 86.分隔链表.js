/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
  if (!head) {
    return head;
  }
  let smallList = new ListNode(-1);
  let maxList = new ListNode(x);
  const smallListHead = smallList;
  const maxListHead = maxList;
  let cur = head;
  while (cur) {
    const {
      val, next,
    } = cur;
    cur.next = null;
    if (val < x) {
      smallList.next = cur;
      smallList = smallList.next;
    } else {
      maxList.next = cur;
      maxList = maxList.next;
    }
    cur = next;
  }
  smallList.next = maxListHead.next;
  return smallListHead.next;
};
// @lc code=end

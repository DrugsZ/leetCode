/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @return {ListNode}
 */
const oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) {
    return head;
  }
  let odd = head;
  let even = head.next;
  const evenHead = even;
  while (odd && even && even.next) {
    const { next } = even;
    odd.next = next;
    even.next = next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};
// @lc code=end

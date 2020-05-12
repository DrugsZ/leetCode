/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const putListToStack = (head) => {
  const result = [];
  let cur = head;
  while (cur) {
    result.push(cur);
    cur = cur.next;
  }
  return result;
};
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const reorderList = (head) => {
  if (!head || !head.next) {
    return head;
  }
  let slow = head;
  let fast = head.next;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  const nextHead = slow.next;
  slow.next = null;
  const stack1 = putListToStack(head);
  const stack2 = putListToStack(nextHead);
  const tempHead = new ListNode(-1);
  let cur = tempHead;
  while (stack1.length || stack2.length) {
    const l1 = stack1.shift();
    const l2 = stack2.pop();
    if (l1)l1.next = null;
    if (l2)l2.next = null;
    if (l1) {
      cur.next = l1;
      cur = cur.next;
    }
    if (l2) {
      cur.next = l2;
      cur = cur.next;
    }
  }
  return tempHead.next;
};
// @lc code=end

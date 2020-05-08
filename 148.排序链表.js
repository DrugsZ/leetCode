/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const mergeSort = (l1, l2) => {
  const head = new ListNode(-1);
  let cur = head;
  while (l1 && l2) {
    const {
      val: l1Val,
    } = l1;
    const {
      val: l2Val,
    } = l2;
    if (l1Val < l2Val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  if (!l1) {
    cur.next = l2;
  } else {
    cur.next = l1;
  }
  return head.next;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = (head) => {
  if (!head) {
    return head;
  }
  const dummy = new ListNode(0);
  dummy.next = head;
  let slow = dummy;
  let quick = dummy;
  while (quick.next) {
    quick = quick.next;
    slow = slow.next;
    quick.next && (quick = quick.next);
  }
  if (slow === quick) return slow;
  const rightList = slow.next;
  slow.next = null;
  const leftList = dummy.next;
  return mergeSort(sortList(leftList), sortList(rightList));
};
// @lc code=end

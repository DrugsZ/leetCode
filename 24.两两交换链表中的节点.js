/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
const swapPairs = (head) => {
  if (!head || !head.next) {
    return head;
  }
  let pre;
  let current = head;
  let currentNext = head.next;
  const cacheHead = currentNext;
  while (current && currentNext) {
    const temp = currentNext.next;
    currentNext.next = current;
    current.next = temp;
    if (pre) {
      pre.next = currentNext;
    }
    pre = current;
    current = temp;
    if (current) {
      currentNext = current.next;
    } else {
      currentNext = current;
    }
  }
  return cacheHead;
};

const swapPairsByRecursion = (head) => {
  if (!head || !head.next) {
    return head;
  }

  const { next } = head;
  const cache = next.next;
  next.next = head;
  head.next = swapPairsByRecursion(cache);
  return next;
};
// @lc code=end

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
const reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let pre = null;
  let cur = head;
  while (cur) {
    const { next } = cur;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

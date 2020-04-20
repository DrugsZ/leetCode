/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 原地处理，将克隆结点放在原结点后面，在原链表上处理克隆结点的random指针，最后分离两个链表
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = (head) => {
  if (!head) {
    return head;
  }
  let currentNode = head;
  while (currentNode) {
    const cloneNode = new Node(currentNode.val, currentNode.next);
    // cloneNode.val = currentNode.val;
    // cloneNode.next = currentNode.next;
    currentNode.next = cloneNode;
    currentNode = cloneNode.next;
  }
  currentNode = head;
  while (currentNode) {
    const { random, next: cloneNode } = currentNode;
    if (random) {
      cloneNode.random = random.next;
    }
    currentNode = cloneNode.next;
  }

  currentNode = head;
  const ret = currentNode.next;
  while (currentNode.next) {
    const { next: cloneNode } = currentNode;
    currentNode.next = currentNode.next.next;
    currentNode = cloneNode;
  }
  return ret;
};
// @lc code=end

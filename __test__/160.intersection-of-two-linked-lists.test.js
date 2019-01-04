const { arr2List } = require('../util');
const { getIntersectionNode } = require('../160.intersection-of-two-linked-lists');

/**
 * 获取链表的最后节点
 * @param {ListNode} list 要获取的开头结点
 * @returns {ListNode} ListNode
 */
const getLast = (list) => {
  if (!list) return null;

  while (list.next) {
    list = list.next;
  }

  return list;
}

test('应存在交叉点', () => {
  let inter = arr2List([8,3,5,6]);
  let headA = arr2List([1,2,7]);
  let headB = arr2List([1,4,6]);

  let lastA = getLast(headA);
  let lastB = getLast(headB);
  lastA.next = lastB.next = inter;

  expect(getIntersectionNode(headA,headB)).toEqual(inter);
})

test('should have not intersection', () => {
  let headA = arr2List([1,2,7,8,3,5,6]);
  let headB = arr2List([1,4,6,8,3,5,6]);

  expect(getIntersectionNode(headA,headB)).toBeNull();
})

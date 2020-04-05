/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = (head) => {
  let cur = head;
  const listArr = [];
  while (cur) {
    listArr.push(cur.val);
    cur = cur.next;
  }
  let result = 0;
  let len = listArr.length;
  while (len) {
    result += listArr[listArr.length - len--] * Math.pow(2, len);
  }
  return result;
};

const getDecimalValue2 = (head) => {
  let cur = head;
  let result = 0;
  while (cur) {
    result <<= 1;
    result += cur.val;
    cur = cur.next;
  }
  return result;
};

module.exports = {
  getDecimalValue,
};

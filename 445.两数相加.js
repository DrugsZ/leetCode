var addTwoNumbers = function (l1, l2) {
  const stack1 = creatStackByList(l1)
  const stack2 = creatStackByList(l2)
  let overNumber = 0
  let cur = null
  const noop = {
    val: 0
  }
  while (stack1.length || stack2.length) {
    const l1Node = stack1.pop() || noop
    const l2Node = stack2.pop() || noop
    const {
      val: val1
    } = l1Node
    const {
      val: val2
    } = l2Node
    const num = val1 + val2 + overNumber
    if (num > 9) {
      overNumber = Math.floor(num / 10)
    } else {
      overNumber = 0
    }
    const newNode = new ListNode(num % 10)
    newNode.next = cur
    cur = newNode
  }
  return cur
};
const creatStackByList = head => {
  const result = []
  if (!head) {
    return result
  }
  let cur = head
  while (cur) {
    result.push(cur)
    cur = cur.next
  }
  return result
}
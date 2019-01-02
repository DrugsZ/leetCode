const reverseList = require('../206.reverse-linked-list')

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createList(arr){
  let node;
  let head;
  arr.forEach(item => {
    let temp = new ListNode(item)
    if(node){
      node.next = temp
    }else{
      head = temp
    }
    node = temp
  })

  return head;
}

test('should ', () => {
  let arr = createList([1,2,3,4,5])
  expect(reverseList(arr)).toEqual(createList([5,4,3,2,1]))
})
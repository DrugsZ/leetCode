const deleteNode = require('../237.delete-node-in-a-linked-list');

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 
 * @param {Array<number>} arr 
 */
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

let unitTest = () => {
  let arr = [4,5,1,9];
  let testNode = createList(arr);
  let head = testNode;

  while(true){
    if(testNode.val === 5){
      break;
    }
    testNode = testNode.next
  }

  deleteNode(testNode)
  return head
}
test('deleteNode test to expect [4,1,9]', () => {
  expect(unitTest()).toEqual(createList([4,1,9]))
})
const deleteNode = require('../237.delete-node-in-a-linked-list');
const {arr2List} = require('../util')

let unitTest = () => {
  let arr = [4,5,1,9];
  let testNode = arr2List(arr);
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
  expect(unitTest()).toEqual(arr2List([4,1,9]))
})
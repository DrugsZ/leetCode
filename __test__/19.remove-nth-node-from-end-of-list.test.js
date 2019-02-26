const { removeNthFromEnd } = require('../19.remove-nth-node-from-end-of-list');
const { arr2List } = require('../util');

test('should expect [2]',() => {
  let testNode = arr2List([1,2]);
  expect(removeNthFromEnd(testNode,2)).toEqual(arr2List([2]))
})

test('should expect [1]',() => {
  let testNode = arr2List([1,2]);
  expect(removeNthFromEnd(testNode,1)).toEqual(arr2List([1]))
})

test('should have change',() => {
  let testNode = arr2List([1,2,3,4,5]);
  expect(removeNthFromEnd(testNode,1)).not.toEqual(arr2List([1,2,3,4,5]))
})
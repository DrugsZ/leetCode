const {arr2List} = require('../util')
const {middleNode} = require('../876.middle-of-the-linked-list')

test('should get mid node', () => {
  let head = arr2List([1,2,3,4,5])
  expect(middleNode(head)).toEqual(arr2List([3,4,5]))
})

test('should get mid node last', () => {
  let head = arr2List([1,2,3,4,5,6])
  expect(middleNode(head)).toEqual(arr2List([4,5,6]))
})
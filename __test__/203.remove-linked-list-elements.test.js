const { arr2List } = require('../util');
const {removeElements} = require('../203.remove-linked-list-elements');

test('should expect null', () => {
  expect(removeElements(null)).toBeNull()
})

test('should expect [1,1,3,4]', () => {
  expect(removeElements(arr2List([2,1,1,2,3,4]),2)).toEqual(arr2List([1,1,3,4]))
})

test('should expect null', () => {
  expect(removeElements(arr2List([2]),2)).toBeNull()
})

test('should expect [2]', () => {
  expect(removeElements(arr2List([2]),3)).toEqual(arr2List([2]))
})


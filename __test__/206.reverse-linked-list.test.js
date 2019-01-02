const reverseList = require('../206.reverse-linked-list')
const {arr2List} = require('../util')


test('should ', () => {
  let arr = arr2List([1,2,3,4,5])
  expect(reverseList(arr)).toEqual(arr2List([5,4,3,2,1]))
})
const minPathSum = require('../64.minimum-path-sum.js')

test('test to expect 5',()=>{
  let testArr = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
  expect(minPathSum(testArr)).toBe(7)
})

test('test to expect 47',()=>{
  let testArr = [[1,4,8,6,2,2,1,7],[4,7,3,1,4,5,5,1],[8,8,2,1,1,8,0,1],[8,9,2,9,8,0,8,9],[5,7,5,7,1,8,5,5],[7,0,9,4,5,6,5,6],[4,9,9,7,9,1,9,0]]
  expect(minPathSum(testArr)).toBe(47)
})
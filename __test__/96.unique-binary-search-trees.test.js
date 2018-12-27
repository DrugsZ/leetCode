const numTrees = require('../96.unique-binary-search-trees')

test('numTrees test to expect 5', () => {
  expect(numTrees(3)).toBe(5)
})

test('numTrees test to expect 1', () => {
  expect(numTrees(0)).toBe(1)
})

test('numTrees test to expect 1', () => {
  expect(numTrees(1)).toBe(1)
})

test('numTrees test to expect 16796', () => {
  expect(numTrees(10)).toBe(16796)
})
const rob = require('../198.house-robber.js')

test('test to expect 4', () => {
  expect(rob([2,1,1,2])).toBe(4);
})

test('test to expect 5', () => {
  expect(rob([1,2,4,2])).toBe(5);
})
test('test to expect 5 not 4', () => {
  expect(rob([1,2,4,2])).not.toBe(4);
})
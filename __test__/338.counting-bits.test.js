const countBits = require('../338.counting-bits.js')

test('测试`5`', () => {
  expect(countBits(5)).toEqual([ 0, 1, 1, 2, 1, 2])
})

test('测试`6`', () => {
  expect(countBits(6)).toEqual([ 0, 1, 1, 2, 1, 2, 2])
})

test('测试`0`', () => {
  expect(countBits(0)).toEqual([0])
})
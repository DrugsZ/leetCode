const { sortedSquares } = require('../sortedSquares');

test('有序数组的平方', () => {
  expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  expect(sortedSquares([])).toEqual([]);
});

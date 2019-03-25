const { flipAndInvertImage } = require('../832.翻转图像');

test('翻转图像', () => {
  expect(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])).toEqual([[1, 0, 0], [0, 1, 0], [1, 1, 1]]);
  expect(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])).toEqual([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]);
});

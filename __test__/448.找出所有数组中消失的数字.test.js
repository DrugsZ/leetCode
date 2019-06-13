const { findDisappearedNumbers } = require('../448.找到所有数组中消失的数字');

describe('找出所有数组中消失的数字', () => {
  test('测试正确数组', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
    expect(findDisappearedNumbers([4, 0, 0, 0])).toEqual([1, 2, 3]);
  });
});

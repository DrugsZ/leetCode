const { invertTree } = require('../226.翻转二叉树');
const { arrToTree } = require('../util');

describe('翻转二叉树测试用例', () => {
  test('to be success invert', () => {
    expect(invertTree(arrToTree([4, 2, 7, 1, 3, 6, 9]))).toEqual(arrToTree([4, 7, 2, 9, 6, 3, 1]));
  });
  test('to not be self', () => {
    expect(invertTree(arrToTree([4, 2, 7, 1, 3, 6, 9]))).not.toEqual(arrToTree([4, 2, 7, 1, 3, 6, 9]));
  });
});

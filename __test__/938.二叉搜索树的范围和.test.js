const { rangeSumBST } = require('../938.二叉搜索树的范围和');
const { arrToTree } = require('../util');


describe('二叉搜索树的范围和', () => {
  test('应输出32', () => {
    const t1 = arrToTree([10, 5, 15, 3, 7, null, 18]);

    expect(rangeSumBST(t1, 7, 15)).toBe(32);
  });

  test('应输出23', () => {
    const t1 = arrToTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6]);

    expect(rangeSumBST(t1, 6, 10)).toBe(23);
  });

  test('应输出44', () => {
    const t1 = arrToTree([15, 9, 21, 7, 13, 19, 23, 5, null, 11, null, 17]);

    expect(rangeSumBST(t1, 21, 23)).toBe(44);
  });
});

const { mergeTrees } = require('../617.合并二叉树');
const { arrToTree } = require('../util');

describe('合并二叉树', () => {
  test('应输出[3,4.5.5.4.null,7]', () => {
    const t1 = arrToTree([1, 3, 2, 5]);
    const t2 = arrToTree([2, 1, 3, null, 4, null, 7]);

    expect(mergeTrees(t1, t2)).toEqual(arrToTree([3, 4, 5, 5, 4.0, null, 7]));
  });
});

const { arrToTree } = require('../util');
const { maxDepth } = require('../104.二叉树的最大深度');

const testTree = arrToTree([3, 9, 20, null, null, 15, 7]);

test('测试树为三层', () => {
  expect(maxDepth(testTree)).toBe(3);
});

test('测试空树', () => {
  expect(maxDepth()).toBe(0);
});

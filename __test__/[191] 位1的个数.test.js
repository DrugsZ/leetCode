const { hammingWeight } = require('../191.位-1-的个数');

test('汉明重量', () => {
  expect(hammingWeight(521)).toBe(3);
  expect(hammingWeight(2097152)).toBe(1);
  expect(hammingWeight(-3)).toBe(31);
});

const { majorityElement } = require('../169.求众数');

describe('169.求众数测试用例', () => {
  test('should be true', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  test('should be false', () => {
    expect(majorityElement([3, 2, 3])).not.toBe(2);
  });
});

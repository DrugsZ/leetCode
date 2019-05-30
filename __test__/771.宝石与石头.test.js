const { numJewelsInStones } = require('../771.宝石与石头');

describe('宝石与石头', () => {
  test('should expect 3', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
  });

  test('should expect 0', () => {
    expect(numJewelsInStones('z', 'ZZZZ')).toBe(0);
  });
});

const { countPrimes } = require('../204.计数质数');

test('should expect `4`', () => {
  expect(countPrimes(10)).toBe(4);
});

test('should expect `0`', () => {
  expect(countPrimes()).toBe(0);
  expect(countPrimes(1)).toBe(0);
});

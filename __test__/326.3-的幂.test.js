const { isPowerOfThree } = require('../326.3-的幂');

test('should true', () => {
  expect(isPowerOfThree(1)).toBeTruthy();
  expect(isPowerOfThree(3)).toBeTruthy();
  expect(isPowerOfThree(9)).toBeTruthy();
});

test('should false', () => {
  expect(isPowerOfThree(0)).toBeFalsy();
  expect(isPowerOfThree(2)).toBeFalsy();
  expect(isPowerOfThree(4)).toBeFalsy();
});

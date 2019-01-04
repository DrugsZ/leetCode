const { arr2List } = require('../util') ;
const { isPalindrome } = require('../234.palindrome-linked-list');

test('should expect true', () => {
  expect(isPalindrome(arr2List([]))).toBeTruthy()
  expect(isPalindrome(arr2List([0]))).toBeTruthy()
  expect(isPalindrome(arr2List([1,0,1]))).toBeTruthy()
  expect(isPalindrome(arr2List([1,1]))).toBeTruthy()
  expect(isPalindrome(arr2List([1,0,0,1]))).toBeTruthy()
})

test('should expect false', () => {
  expect(isPalindrome(arr2List([0,1]))).toBeFalsy()
  expect(isPalindrome(arr2List([2,2,2,1]))).toBeFalsy()
})

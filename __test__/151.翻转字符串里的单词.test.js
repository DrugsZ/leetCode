const reverseWords = require('../151.翻转字符串里的单词');

test('反转字符串中的单词', () => {
  expect(reverseWords('the sky is blue')).toBe('blue is sky the');
  expect(reverseWords('  hello world!  ')).toBe('world! hello');
  expect(reverseWords('a good   example')).toBe('example good a');
});

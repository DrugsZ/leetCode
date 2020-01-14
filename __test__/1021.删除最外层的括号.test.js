const { removeOuterParentheses } = require('../1021.删除最外层的括号');

describe('删除最外层的括号', () => {
  test('should output ture', () => {
    expect(removeOuterParentheses('(()())(())')).toBe('()()()');
  });

  test('should output ture', () => {
    expect(removeOuterParentheses('(()())(())(()(()))')).toBe('()()()()(())');
  });

  test('should output empty string', () => {
    expect(removeOuterParentheses('()()')).toBe('');
  });
});

/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */
/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function removeOuterParentheses(S) {
  let count = 0;
  let target = '';
  for (let index = 0; index < S.length; index++) {
    const c = S[index];
    if (c === '(') {
      count++;
      if (count > 1) {
        target += c;
      }
    } else {
      count--;

      if (count >= 1) {
        target += c;
      }
    }
  }

  return target;
};

module.exports = {
  removeOuterParentheses,
};

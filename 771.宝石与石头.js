/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
  const currs = new Set(J.split(''));
  const willTest = S.split('');
  let result = 0;
  for (const s of willTest) {
    if (currs.has(s)) {
      result++;
    }
  }
  return result;
};

module.exports = {
  numJewelsInStones,
};

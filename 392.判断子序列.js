/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let flag = true;
  let str = t;
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    const index = str.indexOf(cur);
    if (index > -1) {
      str = str.substr(index + 1);
    } else {
      flag = false;
      break;
    }
  }
  return flag;
};
// @lc code=end

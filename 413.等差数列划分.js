/*
 * @lc app=leetcode.cn id=413 lang=javascript
 *
 * [413] 等差数列划分
 */
/**
 *
 * 动态规划,
 * 生成dp来记录存在数字与存在等差数组的关系,没增加一个数字,当前存在数组数量就比前一个
 * 值增加1即
 * dp[3] = 1
 * dp[4] = 2
 * dp[5] = 3
 * 则当存在5个数,同时为等差数列是未1+2+3
 *
 *
 */
// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
const numberOfArithmeticSlices = function (A) {
  if (A.length < 3) {
    return [];
  }
  let dp = 0;
  let sum = 0;
  for (let i = 2; i < A.length; i++) {
    if (A[i - 1] - A[i - 2] === A[i] - A[i - 1]) {
      dp += 1;
      sum += dp;
    } else {
      dp = 0;
    }
  }
  return sum;
};
// @lc code=end

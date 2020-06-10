/*
 * @lc app=leetcode.cn id=983 lang=javascript
 *
 * [983] 最低票价
 */

// @lc code=start
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function (days, costs) {
  const dp = new Array(396).fill(0);
  const max = days[days.length - 1];
  const min = days[0];
  for (let i = max; i >= min; i--) {
    if (days.includes(i)) {
      dp[i] = Math.min(
        dp[i + 1] + costs[0],
        dp[i + 7] + costs[1],
        dp[i + 30] + costs[2],
      );
    } else {
      dp[i] = dp[i + 1];
    }
  }
  return dp[min];
};
// @lc code=end

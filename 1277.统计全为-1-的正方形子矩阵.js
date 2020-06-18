/*
 * @lc app=leetcode.cn id=1277 lang=javascript
 *
 * [1277] 统计全为 1 的正方形子矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function (matrix) {
  let ans = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const fn = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0) {
        fn[i][j] = matrix[i][j];
      } else if (matrix[i][j] === 0) {
        fn[i][j] = 0;
      } else {
        fn[i][j] = Math.min(fn[i][j - 1], fn[i - 1][j - 1], fn[i - 1][j]) + 1;
      }
      ans += fn[i][j];
    }
  }
  return ans;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (26.75%)
 * Total Accepted:    13.9K
 * Total Submissions: 51.9K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 *
 * 示例:
 *
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  if (!n || n === 1) return 0;
  const result = new Array(n);
  result.fill(true);
  for (let i = 2; i < result.length; i++) {
    if (result[i]) {
      for (let j = i * 2; j < result.length; j += i) {
        result[j] = false;
      }
    }
  }

  let count = 0;

  for (let k = 2; k < result.length; k++) {
    if (result[k])count++;
  }

  return count;
};
module.exports = {
  countPrimes,
};


/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 *
 * https://leetcode-cn.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (42.86%)
 * Total Accepted:    14.1K
 * Total Submissions: 32.9K
 * Testcase Example:  '27'
 *
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 *
 * 示例 1:
 *
 * 输入: 27
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: 0
 * 输出: false
 *
 * 示例 3:
 *
 * 输入: 9
 * 输出: true
 *
 * 示例 4:
 *
 * 输入: 45
 * 输出: false
 *
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 *
 */
/**
 * @param {number} n
 * @return {boolean}
 */
// 下述方法叹为观止，学习了
// 先把数字转换成3进制的字符串，如果是3的幂，那么这个字符串一定是一个1，和若干个0.所以，只需判断字符串的第一个字符是否为1，后面的字符串使用弱相等（==）是否等于false.


const isPowerOfThree = (n) => {
  const str = n.toString(3);
  if (str[0] === '1' && str.slice(1) == false) return true;
  return false;
};

module.exports = {
  isPowerOfThree,
};
// var isPowerOfThree = function(n) {
//     let result = getBaseLog(3,n);
//     return result % 1 === 0;
// };
// let getBaseLog = (x,y) => {
//   return Math.log(y) / Math.log(x)
// }
// console.log(getBaseLog(3,9))

/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 *
 * https://leetcode-cn.com/problems/counting-bits/description/
 *
 * algorithms
 * Medium (68.21%)
 * Total Accepted:    4K
 * Total Submissions: 5.8K
 * Testcase Example:  '2'
 *
 * 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
 * 
 * 示例 1:
 * 
 * 输入: 2
 * 输出: [0,1,1]
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: [0,1,1,2,1,2]
 * 
 * 进阶:
 * 
 * 
 * 给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
 * 要求算法的空间复杂度为O(n)。
 * 你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。
 * 
 * 
 */
/**
 * @param {number} num
 * @return {number[]}
 */
// var countBits = function(num) {
//     let results = [];
//     for (let index = 0; index <= num; index++) {
//       const str = index.toString(2);
//       result = str.split("1").length-1
//       results.push(result)
//     }
//     return results
// };

// 1.如果它是偶数，那么n的二进制中1的个数与n/2中1的个数是相同的，比如4和2的二进制中都有一个1，6和3的二进制中都有两个1。为啥？因为n是由n/2左移一位而来，而移位并不会增加1的个数。

// 2.如果n是奇数，那么n的二进制中1的个数是n/2中1的个数+1，比如7的二进制中有三个1，7/2 = 3的二进制中有两个1。为啥？因为当n是奇数时，n相当于n/2左移一位再加1

var countBits = function(num) {
  let results = [0];
  for (let index = 1; index <= num; index++) {
    if(index % 2 == 0){
      results.push(results[index/2])
    }else{
      results.push(results[Math.floor(index/2)] + 1)
    }
  }
  return results
};

module.exports = countBits
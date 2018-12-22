/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (56.46%)
 * Total Accepted:    7.2K
 * Total Submissions: 12.8K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
   
    let xLen = grid[0].length
    let yLen = grid.length
    let minSums = grid;
    for(let i = 1; i < xLen; i++){
      minSums[0][i] = minSums[0][i-1] + grid[0][i]
    }
    for(let j = 1; j < yLen; j++){
      minSums[j][0] = minSums[j-1][0] + grid[j][0]
    }
    for(let i = 1; i < grid[0].length; i++){
      for(let j = 1; j < yLen; j++){
        const item  = grid[j][i]
        minSums[j][i] = Math.min( minSums[j][i-1] + item,minSums[j-1][i] + item)
      }
    }

    return minSums[yLen-1][xLen-1];
};

module.exports = minPathSum

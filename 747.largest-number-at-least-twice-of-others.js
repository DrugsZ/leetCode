/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 使用最小花费爬楼梯
 *
 * https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/description/
 *
 * algorithms
 * Easy (37.66%)
 * Total Accepted:    4.4K
 * Total Submissions: 11.7K
 * Testcase Example:  '[0,0,0,1]'
 *
 * 在一个给定的数组nums中，总是存在一个最大元素 。
 * 
 * 查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
 * 
 * 如果是，则返回最大元素的索引，否则返回-1。
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [3, 6, 1, 0]
 * 输出: 1
 * 解释: 6是最大的整数, 对于数组中的其他整数,
 * 6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.
 * 
 * 
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [1, 2, 3, 4]
 * 输出: -1
 * 解释: 4没有超过3的两倍大, 所以我们返回 -1.
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * nums 的长度范围在[1, 50].
 * 每个 nums[i] 的整数范围在 [0, 99].
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    // let a = nums[0]
    // let b = nums[1]
    let min = 0;
    let costs = [nums[0],nums[1]]
    let len = nums.length

    for (let i = 2; i < len; i++) {
      const item = nums[i];
      costs[i] = Math.min(costs[i-1],costs[i-2]) + item;
    }
    return Math.min(costs[len-1],costs[len-2])
};

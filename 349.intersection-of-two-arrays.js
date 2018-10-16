/*
 * [349] Intersection of Two Arrays
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (53.64%)
 * Total Accepted:    6.2K
 * Total Submissions: 11.6K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 示例 1:
 * 
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [9,4]
 * 
 * 说明:
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let len_1 = nums1.length,len_2 = nums2.length;
  
  let loopArr = len_1 < len_2 ? nums1 : nums2
  let testArr = len_1 < len_2 ? nums2 : nums1

  let results = new Set(loopArr.filter(e=>testArr.includes(e)))
  
  return [...results]
};

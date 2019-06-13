/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  nums.forEach((item, index, arr) => {
    const val = Math.abs(item) - 1;
    if (arr[val] > 0) {
      arr[val] = -arr[val];
    }
  });

  const result = [];
  nums.forEach((item, index) => {
    if (item > 0) {
      result.push(index + 1);
    }
  });

  return result;
};

module.exports = {
  findDisappearedNumbers,
};

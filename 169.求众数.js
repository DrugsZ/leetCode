/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  let number = 1;
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (number === 0) {
      result = nums[i];
      number = 1;
      continue;
    }
    if (result === nums[i]) {
      number++;
    } else {
      number--;
    }
  }

  return result;
};

module.exports = {
  majorityElement,
};

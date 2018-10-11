/*
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (38.59%)
 * Total Accepted:    999.8K
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let copy = [];
  let i =0, j = nums.length-1,flag = false;
  let result = [];
  nums.map((item,index)=>{
    let obj = {};
    obj.sourceIndex = index;
    obj.value = item;
    copy.push(obj);
  });
  copy = copy.sort((a,b)=> a.value-b.value)
  while(!flag){
      if( copy[i].value + copy[j].value < target){
        i++;
      }else if ( copy[i].value + copy[j].value > target) {
        j--;
      }else if ( copy[i].value + copy[j].value == target) {
        result.push(copy[i].sourceIndex)
        result.push(copy[j].sourceIndex)
        flag = true;
      }
  };
  return result
};

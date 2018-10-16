/*
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (22.15%)
 * Total Accepted:    395.8K
 * Total Submissions: 1.8M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    const result = []

    for (let i = 0; i < nums.length-2; i++) {
        let j = i+1, k = nums.length-1
        const resver = -nums[i]
        console.log(i)

        // while (j < k) {
        //     if (nums[j] + nums[k] > resver) {
        //         k--
        //     }else if (nums[j] + nums[k] < resver) {
        //         j++
        //     }else{
        //         result.push(nums[j])
        //         result.push(nums[i])
        //         result.push(nums[k])
        //     }
        // }
    }

    return nums
};

console.log(threeSum([-1,-2,3,4]));

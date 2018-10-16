/*
 * [15] 3Sum
 *
<<<<<<< HEAD
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
=======
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (16.18%)
 * Total Accepted:    16.4K
 * Total Submissions: 101.6K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
>>>>>>> f14d20312f9325c6e0b56df379c9bed3b195af5f
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
<<<<<<< HEAD
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
=======
  nums.sort((a,b)=>a-b);
  const results = []

  for (let i = 0; i < nums.length-2; i++) {
    let leftFlag = i + 1, rightFlag = nums.length -1;

    if (i > 0 && nums[i - 1] === nums[i]) continue

    let target = nums[i]
    if(target>0){
      break;
    }

    while ( leftFlag < rightFlag){

      if( nums[leftFlag] + nums[rightFlag] == -target){

        while(nums[leftFlag] === nums[leftFlag + 1] && leftFlag < rightFlag -1){
          leftFlag++;
        } 
        while(nums[rightFlag] === nums[rightFlag - 1] && leftFlag < rightFlag -1){
          rightFlag--;
        } 
        results.push([target,nums[leftFlag],nums[rightFlag]])    
        leftFlag++;
        rightFlag--;
      }else if(nums[leftFlag] + nums[rightFlag] > -target){
        rightFlag--
      }else{
        leftFlag++
      }
    }
  }

  return results
};
>>>>>>> f14d20312f9325c6e0b56df379c9bed3b195af5f

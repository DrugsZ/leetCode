/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * @example 
 * let nums = [1,2,3,4,5,6,7];
 * rotate(nums,3) => [5,6,7,1,2,3,4]
 */
var rotate = function(nums, k) {
    if(!nums instanceof Array || k < 0){
        return nums
    };
    let i;
    for( i = 0 ; i < k; i++){
        let tempNode = nums.pop();
        nums.unshift(tempNode)
    }
};
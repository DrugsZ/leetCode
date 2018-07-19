/**
 * @param {number[]} nums
 * @return {number}
 * @example 
 *  let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
 *  console.log(removeDuplicates(nums))  => 5
 */
let removeDuplicates = function(nums) {
    if(!nums instanceof Array){
        return 0
    }
    if(nums instanceof Array && nums.length === 0){
        return 0
    }

    let flags = nums[0];
    let i;
    for(i = 1; i < nums.length; i++){
        if(flags === nums[i]){
            nums.splice(i,1)
            i--
        }else{
            flags = nums[i]
        }
    };
    return nums.length
};
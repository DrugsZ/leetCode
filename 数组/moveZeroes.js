var moveZeroes = function(nums) {
    let len = nums.length;
    let moveIndex = 0;
    
    for(let i = 0; i < len; i++){
        if(!nums[i] && (len - moveIndex > i)){
            let node = nums.splice(i,1);
            nums.push(node[0]);
            moveIndex ++;
            i--;
        }
    }
};

let nums = [0,10,2,0,3,0,9,8]
moveZeroes(nums)
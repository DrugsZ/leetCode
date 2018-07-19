var twoSum = function(nums, target) {
    let copy = []
    let i =0, j = nums.length-1,flag = false;
    let result = [];
    nums.map((item,index)=>{
        let obj = {};
        obj.sourceIndex = index;
        obj.value = item;
        copy.push(obj);
    })
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
    }
    return result
};

let nums = [3,3]
console.log(twoSum(nums,6))
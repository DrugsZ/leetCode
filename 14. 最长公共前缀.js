const getCommonPrefixInTwoStr = (strOne,strTwo) => {
  let str = ''
  for (let i = 0; i < strOne.length; i++) {
    if(strOne[i] === strTwo[i]){
      str += strOne[i]
    }else{
      break;
    }
  }
  return str
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let str = getCommonPrefixInTwoStr(strs[0],strs[1])
  for(let j = 2; j < strs.length; j++){
    str = getCommonPrefixInTwoStr(str,strs[j])
  }
  return str
};

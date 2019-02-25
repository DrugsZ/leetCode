/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (35.58%)
 * Total Accepted:    20.4K
 * Total Submissions: 57.5K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let results = new Map();

  let len = s.length;
  let i = 0;
  
  while (i < len) {
    if(!results.has(s[i])){
      results.set(s[i],0)
    }else{
      results.set(s[i],results.get(s[i])+1)
    }
    i++
  };
  
  let j = 0;
  for (const value of results.values()) {
    if(value === 0){
      return j
    }
    j++
  }
  return results
};

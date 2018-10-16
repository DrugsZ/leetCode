/*
 * [242] Valid Anagram
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (47.15%)
 * Total Accepted:    11.6K
 * Total Submissions: 24.6K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。
 * 
 * 示例 1:
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 说明:
 * 你可以假设字符串只包含小写字母。
 * 
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    
  if(s===t)return true

  if(!s || !t) return false

  let sArr = s.match(/[a-z]/g)
  sArr.sort()
  let tArr = t.match(/[a-z]/g)
  tArr.sort()
  if(sArr.length !== tArr.length) return false

  for(let i= 0; i < sArr.length; i++){
      if(sArr[i] !== tArr[i]){
          return false
      }
  }

  return true
};

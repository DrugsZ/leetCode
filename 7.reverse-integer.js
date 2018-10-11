/*
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (24.37%)
 * Total Accepted:    443.7K
 * Total Submissions: 1.8M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ceil = x > 0 ? 1 : -1;
    // x = Math.abs(x);
    let INT_MAX = 2**31;
    let INT_MIN = -(2**31 -1);

    let rev = 0;
    let pop = 0;
    while ( x != 0 ){
      pop = x % 10;
      x = ceil > 0 ? Math.floor(x/10) : Math.ceil(x/10);

      if (rev > INT_MAX/10 || (rev == INT_MAX / 10 && pop > 7)) return 0;
      if (rev < INT_MIN/10 || (rev == INT_MIN / 10 && pop < -8)) return 0;

      rev = rev * 10 + pop;
    };

    return rev;
};

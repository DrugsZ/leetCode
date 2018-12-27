/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (53.22%)
 * Total Accepted:    3.6K
 * Total Submissions: 6.8K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: 5
 * 解释:
 * 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 */

 /**
  * 
  * 卡塔兰数
  * 假设n个节点存在二叉排序树的个数是G(n)，1为根节点，2为根节点，...，n为根节点，当1为根节点时，其左子树节点个数为0，右子树节点个数为n-1，同理当2为根节点时，其左子树节点个数为1，右子树节点为n-2，所以可得G(n) = G(0)*G(n-1)+G(1)*(n-2)+...+G(n-1)*G(0)
  */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let results = Array(n+1)
    results.fill(0)
    results[0] = 1
    results[1] = 1
    for(let root = 2; root <= n; root++){
      for( let left = 0; left < root; left ++ ) {
        results[root] += results[left] * results[root - left -1]
      }
    }
    return results[n]
};

module.exports = numTrees
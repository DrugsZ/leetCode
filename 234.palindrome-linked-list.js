/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (33.94%)
 * Total Accepted:    12.7K
 * Total Submissions: 37.4K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if(!head){
    return true
  }
  if(!head.next){
    return true;
  }
  if(!head.next.next){
    return head.val === head.next.val
  }

  let slow = fast = head;
  let count = 1

  while(fast.next){
    if(fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
      count += 2;
    }else{
      count += 1;
      break;
    }
  }

  let resver = count % 2 ? slow : slow.next;
  let next = resver.next;
  slow.next = null;
  resver.next = null;
  while (next) {
    let temp = next.next
    next.next = resver;
    resver = next;
    next = temp;
  };

  while (head && resver && head.val == resver.val){
    head = head.next;
    resver = resver.next;
  }

  return !head && !resver;
};


module.exports = {
  isPalindrome
}
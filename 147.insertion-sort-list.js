/*
 * [147] Insertion Sort List
 *
 * https://leetcode-cn.com/problems/insertion-sort-list/description/
 *
 * algorithms
 * Medium (50.51%)
 * Total Accepted:    2K
 * Total Submissions: 4K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 对链表进行插入排序。
 * 
 * 
 * 插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
 * 每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。
 * 
 * 
 * 
 * 插入排序算法：
 * 
 * 
 * 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
 * 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
 * 重复直到所有输入数据插入完为止。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 
 * 示例 2：
 * 
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
 * 
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
  * 
  * 解题思路,其他的都没啥想说的,但是这个一定要说说
  * 
  * 链表插入,创立三个标志位,头结点,正在处理的结点,遍历中的结点,首先创立一个空的头结点,
  * 然后从head开始,缓存下一节点,从头结点开始遍历,找位置为止直接断开连接,存入到新创立的helper节点中,
  * 将缓存的next结点设置为cur,周而复始直到遍历结束 
  */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  let helper = new ListNode(0), cur = head;

  while (cur) {
    let next = cur.next;
    let pre = helper;

    while(pre.next != null && pre.next.val <= cur.val) {
      pre = pre.next
    }
    cur.next = pre.next;
    pre.next = cur;
    cur = next;
  }

  return helper.next
};

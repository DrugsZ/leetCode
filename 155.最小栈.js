/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 *
 * https://leetcode-cn.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (47.83%)
 * Total Accepted:    18.5K
 * Total Submissions: 38.6K
*Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 *
 *
 * push(x)-- 将元素 x 推入栈中。
 * pop()-- 删除栈顶的元素。
 * top()-- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 *
 *
 * 示例:
 *
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 *
 *
 */
/**
 * initialize your data structure here.
 */
function MinStack() {
  this.$stack = [];
}

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function push(x) {
  this.stack.push(x);
  if (this.min === null || this.min === undefined || this.min > x) {
    this.min = x;
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function pop() {
  if (!this.stack.length) return null;
  const x = this.stack.pop();

  if (this.min >= x) {
    let min = this.stack[0];
    this.stack.forEach((item) => {
      if (item < min) {
        min = item;
      }
    });
    this.min = min;
  }

  return x;
};

/**
* @return {number}
*/
MinStack.prototype.top = function top() {
  const len = this.stack.length;
  if (!len) return null;
  return this.stack[len - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function getMin() {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

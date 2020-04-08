/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
const LFUCache = function (capacity) {
  this.max = capacity;
  this.cache = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  const curIdx = this.cache.findIndex(item => item.key === key);
  if (curIdx > -1) {
    const cur = this.cache[curIdx];
    this.cache.splice(cur, 1);
    this.cache.unshift(cur);
    return cur.value;
  }
  return curIdx;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.cache.length === this.max) {
    this.cache.pop();
  }
  this.cache.unshift({
    key, value,
  });
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

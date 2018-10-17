/*
 * [56] Merge Intervals
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (30.96%)
 * Total Accepted:    4.4K
 * Total Submissions: 14.3K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals.sort((a,b)=>a.start-b.start)
  const results = [];
  let start,end;

  for (let i = 0; i < intervals.length; i++) {
    let s = intervals[i].start,e = intervals[i].end

    if (start === undefined) {
      start = s;
      end = e;
      continue;
    }

    if(end < s){
      results.push(new Interval(start,end));
      start = s
      end = e;
    }else{
      end = Math.max(end,e)
    }
  }

  if(start !== undefined)
    results.push(new Interval(start,end));
  return results
};

// console.log(merge([[1,4],[4,5]]))
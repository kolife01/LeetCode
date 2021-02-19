/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var result = 0;
  if(n === 0) return 0;
  if(n === 1) return 1;
  if(n === 2) return 2;
  var prepre = 1;
  var pre = 2;
  for(var i = 2; i < n; i++){
      result = prepre + pre;
      prepre = pre;
      pre = result;
  }
  return result;
};
// @lc code=end
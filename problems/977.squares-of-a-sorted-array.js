/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = []
    nums.forEach(num => {
      result.push(num * num)
    })
    result.sort((a, b) => a - b)
    return result
};
// @lc code=end
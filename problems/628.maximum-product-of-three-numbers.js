/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
   let length = nums.length
   nums.sort((a, b) => a - b)
   let res1 = nums[length - 1] * nums[length -2] * nums[length -3]
   let res2 = nums[0] * nums[1] * nums[length - 1]
   return Math.max(res1, res2)
};
// @lc code=end

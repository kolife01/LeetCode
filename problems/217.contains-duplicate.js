/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     let array = []
//     let result = false
//     nums.forEach((value) => {
//       if(array.includes(value)){
//         result = true
//       } else {
//         array.push(value)
//       }
//     })
//     return result
// };

var containsDuplicate = function(nums) {
  return nums.length !== new Set(nums).size
};
// @lc code=end


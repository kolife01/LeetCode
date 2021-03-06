/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let averages = []
    let end = k
    for(let i = 0; i <= nums.length - k; i++){
      let subarray = nums.slice(i, end)
      let total = subarray.reduce((sum, element) => sum + element)
      averages.push(total/k)
      end++
    }
    return Math.max(...averages);
};
// @lc code=end


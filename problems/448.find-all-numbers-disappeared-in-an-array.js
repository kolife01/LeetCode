/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let result =[]
  const map = {}
  for(let i = 0; i < nums.length; i++){
    map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;
  }
  for(let i = 1; i <= nums.length; i++){
    if(!map[i]) result.push(i);
  }
  return result
};
// @lc code=end


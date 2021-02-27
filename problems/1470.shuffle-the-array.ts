/*
 * @lc app=leetcode id=1470 lang=typescript
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
function shuffle(nums: number[], n: number): number[] {
  const firstArray: number[]  = nums.splice(0, n)
  let result: number[] = []
  for(let i = 0; i < n; i++){
    result.push(firstArray[i])
    result.push(nums[i])
  }
  return result
};
// @lc code=end
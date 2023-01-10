/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const hashSet: number[] = []
  for(let i = 0; i < nums.length; i++ ) {
    if(hashSet.includes(nums[i])){
      return true
    } else {
      hashSet.push(nums[i])
    }
  }
  return false
};
// @lc code=end


/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const hashSet = []
  return nums.some((num) => {
    if(hashSet.includes(num as never)){
      return true
    } else {
      hashSet.push(num as never)
    }
    return false
  })
};
// @lc code=end


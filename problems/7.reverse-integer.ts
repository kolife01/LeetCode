/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  const maxInteger: number = Math.pow(2, 31) -1
  const output: number = parseInt(x.toString().split("").reverse().join("")
  )
  return output > maxInteger ? 0 : output * Math.sign(x)

};
// @lc code=end


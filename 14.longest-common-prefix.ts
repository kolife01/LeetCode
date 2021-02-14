/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if(strs.length === 0) return ""
  let result = ""
  for(let i = 0; i < strs[0].length; i++){
    for(let j = 0; j < strs.length; j++){
      if(strs[j][i] !== strs[0][i]) return result
    }
    result += strs[0][i]
  }
  return result
};
// @lc code=end



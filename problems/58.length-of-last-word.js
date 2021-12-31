/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const array = s.split(' ')
  for(let i = 1; i <= array.length; i++){
    const n = array[array.length - i].length
    if(n !== 0) return n
  }
};
// @lc code=end


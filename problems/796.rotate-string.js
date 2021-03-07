/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if(A.length !== B.length) return false
    if((A.length || B.length) === 0 ) return true
    for(let i = 0; i < B.length; i++){
      const replaced = B.slice(i).concat(B.slice(0, i))
      if(replaced === A) return true
    }
    return false
};
// @lc code=end


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
    if(A.length === 0 && B.length === 0) return true
    let stringB = B
    for(let i = 0; i < B.length; i++){
      let arrayB = stringB.split('')
      arrayB.splice(B.length, 1, arrayB[0])
      arrayB.splice(0, 1)
      stringB = arrayB.join('')
      if(A === stringB) return true
    }
    return false
};
// @lc code=end


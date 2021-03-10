/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let result = []
  for(let i = 0; i < A.length; i++){
    if(A[i] % 2 === 0){
      result.unshift(A[i])
    }else{
      result.push(A[i])
    }
  }
  return result
};
// @lc code=end


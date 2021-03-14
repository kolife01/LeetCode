/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
   const result = []
   const firstWord = [...A[0]]

   for(letter of firstWord){
     if(A.every(word => word.includes(letter))){
       result.push(letter)
       A = A.map(word => word.replace(letter, ''))
     }
   }
   return result
};
// @lc code=end

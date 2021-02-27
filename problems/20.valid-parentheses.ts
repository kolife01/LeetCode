/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
const brackets = {
  "(" : ")",
  "[" : "]",
  "{" : "}",
}

let array = []
function isValid(s: string): boolean {
  for(let i = 0; i < s.length; i++){
    if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
      array.push(s[i])
    }else if (brackets[array.pop()] !== s[i]){
      return false;
    }
  }
  return !array.length

};
// @lc code=end
/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const roman: Object = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let sum: number = roman[s.charAt(0)]
  for(let i = 1; i < s.length; i++){
    let prev = roman[s.charAt(i - 1)]
    let curr = roman[s.charAt(i)]
    if(curr <= prev){
      sum += curr;
    }else{
      sum = (sum - prev) + (curr - prev)
    }
  }
  return sum
};
// @lc code=end


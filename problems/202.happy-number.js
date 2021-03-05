/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let number = n
  let history = []
  while(number !== 1) {
    const numbers = number.toString().split('')
    number = 0
    numbers.forEach(element => {
      number += Number(element) ** 2
    });
    if (history.includes(number)) return false;
    history.push(number)
  }
  return true
};
// @lc code=end
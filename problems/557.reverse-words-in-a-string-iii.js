/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let temp = []
    let array = s.split(' ')
    array.forEach(element => {
      let reversed = element.split('').reverse()
      temp.push(reversed.join(''))
    });
    return temp.join(' ')
};
// @lc code=end

reverseWords("Let's take LeetCode contest")


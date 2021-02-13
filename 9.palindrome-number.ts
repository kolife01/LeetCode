/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
 const PalindromeNumber = parseInt(x.toString().split("").reverse().join(""))
 return x === PalindromeNumber
};
// @lc code=end


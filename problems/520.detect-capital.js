/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.toUpperCase() === word) return true
    if(word.toLowerCase() === word) return true
    const first = word.slice(0, 1)
    const last = word.slice(1)
    if(first.toUpperCase() === first && last.toLowerCase() === last ) return true
    return false
};
// @lc code=end


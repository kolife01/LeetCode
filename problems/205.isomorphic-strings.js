/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) {
      return false
    }
    for(let i = 0; i < s.length; i++ ){
      const a = s.indexOf(s[i])
      const b = t.indexOf(t[i])

      if(t[a] !== t[b] || s[a] !== s[b] ){
        return false
      }
    }
    return true
};
// @lc code=end


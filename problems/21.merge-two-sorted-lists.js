/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var mergeTwoLists = function(l1, l2) {
    let list = new ListNode()
    let head = list
    console.log(list)
    while (l1 !== null && l2 !== null) {
          if (l1.val < l2.val) {
              list.next = new ListNode(l1.val)
              l1 = l1.next
          } else {
              list.next = new ListNode(l2.val)
              l2 = l2.next
          }
          list = list.next
      }

      if (l1 !== null)
          list.next = l1;
      if (l2 !== null)
          list.next = l2;
      console.log(head.next)
      return head.next
};
// @lc code=end
const l1 = new ListNode([1,2,4])
const l2 = new  ListNode([1,3,4])
mergeTwoLists(l1,l2)
--
-- @lc app=leetcode id=197 lang=mysql
--
-- [197] Rising Temperature
--

-- @lc code=start
# Write your MySQL query statement below

select a.id from Weather as a , Weather as b
where a.Temperature > b.Temperature
and DATEDIFF(a.recordDate,  b.recordDate) = 1;
-- @lc code=end


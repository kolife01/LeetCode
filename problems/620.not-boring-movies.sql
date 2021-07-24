--
-- @lc app=leetcode id=620 lang=mysql
--
-- [620] Not Boring Movies
--

-- @lc code=start
# Write your MySQL query statement below

select * from Cinema
WHERE id % 2 != 0 AND description != 'boring'
order by rating DESC;
-- @lc code=end

